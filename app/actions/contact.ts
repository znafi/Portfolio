"use server"

import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
let resend: Resend | null = null

if (resendApiKey) {
  resend = new Resend(resendApiKey)
} else {
  console.warn("RESEND_API_KEY is not set. Email functionality will be disabled.")
}

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Validate the input
    if (!name || !email || !message) {
      return {
        error: "Please fill in all fields",
      }
    }

    if (!resend) {
      // If Resend is not initialized, log the message and return a different response
      console.log("Contact form submission (email not sent due to missing API key):", {
        name,
        email,
        message,
      })
      return {
        success: true,
        message:
          "Thank you for your message! However, due to a technical issue, it could not be sent via email. Please try contacting me directly at znafi@ualberta.ca.",
      }
    }

    // Send email using Resend
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "znafi@ualberta.ca",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return {
      success: true,
      message: "Thank you for your message! I will get back to you soon.",
    }
  } catch (error) {
    console.error("Error in sendContactEmail:", error)
    return {
      error: "Failed to send message. Please try again later or contact me directly at znafi@ualberta.ca.",
    }
  }
}

