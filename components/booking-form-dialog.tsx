"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

interface BookingFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  tourTitle?: string
}

export function BookingFormDialog({ open, onOpenChange, tourTitle }: BookingFormDialogProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    children0to7: "0",
    children8to10: "0",
    adults: "1",
    email: "",
    whatsapp: "",
    hotelName: "",
    address: "",
    bookingDate: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const emailBody = `
New Booking Request for ${tourTitle || "Tour"}

Name: ${formData.name}
Surname: ${formData.surname}

Group Details:
- Children aged 0-7 years: ${formData.children0to7}
- Children aged 8-10 years: ${formData.children8to10}
- Adults: ${formData.adults}

Contact Information:
- Email: ${formData.email}
- WhatsApp: ${formData.whatsapp}

Hotel Information:
- Hotel Name: ${formData.hotelName}
- Address: ${formData.address}

Tour Booking Date: ${formData.bookingDate}
      `.trim()

      const mailtoLink = `mailto:beeadventuretours@gmail.com?subject=${encodeURIComponent(
        `Booking Request - ${tourTitle || "Tour"}`,
      )}&body=${encodeURIComponent(emailBody)}`

      window.location.href = mailtoLink

      toast({
        title: "Success!",
        description: "Your booking request has been sent successfully!",
      })

      // Reset form
      setFormData({
        name: "",
        surname: "",
        children0to7: "0",
        children8to10: "0",
        adults: "1",
        email: "",
        whatsapp: "",
        hotelName: "",
        address: "",
        bookingDate: "",
      })

      // Close dialog after a short delay
      setTimeout(() => {
        onOpenChange(false)
      }, 1500)
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gray-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Adventure</DialogTitle>
          {tourTitle && <p className="text-sm text-muted-foreground mt-1">{tourTitle}</p>}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="surname">Surname</Label>
              <Input
                id="surname"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                placeholder="Enter your surname"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Group Size</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="children0to7">Children aged 0–7 years</Label>
                <Input
                  id="children0to7"
                  type="number"
                  min="0"
                  value={formData.children0to7}
                  onChange={(e) => setFormData({ ...formData, children0to7: e.target.value })}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="children8to10">Children aged 8–10 years</Label>
                <Input
                  id="children8to10"
                  type="number"
                  min="0"
                  value={formData.children8to10}
                  onChange={(e) => setFormData({ ...formData, children8to10: e.target.value })}
                  placeholder="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="adults">Adults</Label>
                <Input
                  id="adults"
                  type="number"
                  min="1"
                  value={formData.adults}
                  onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                  placeholder="1"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp +</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+66 XXX XXX XXX"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Hotel Information</h3>
            <div className="space-y-2">
              <Label htmlFor="hotelName">Hotel name</Label>
              <Input
                id="hotelName"
                value={formData.hotelName}
                onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                placeholder="Enter your hotel name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter hotel address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bookingDate">Specify the tour booking date</Label>
            <Input
              id="bookingDate"
              type="date"
              value={formData.bookingDate}
              onChange={(e) => setFormData({ ...formData, bookingDate: e.target.value })}
            />
            <p className="text-xs text-muted-foreground">Please select your preferred tour date</p>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-white"
              style={{ backgroundColor: "oklch(0.45 0.15 160)" }}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
