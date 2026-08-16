"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("Sending...")
    // In a real app, you'd handle form submission here,
    // e.g., by sending the data to an API endpoint.
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("Your message has been sent. Thank you!")
    // e.target.reset() // Uncomment to clear form on submission
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" type="text" required placeholder="Your Name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required placeholder="How can we help you?" className="min-h-[120px]" />
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit" disabled={status.startsWith("Your message")}>Send Message</Button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </div>
    </form>
  )
}