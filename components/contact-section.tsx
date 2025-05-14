"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">CONTACT US</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Have questions or ready to start your fitness journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-dark-lighter border-gold/20">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-dark border-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-dark border-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-dark border-gold/30 focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-dark border-gold/30 focus:border-gold"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gold hover:bg-gold-dark text-dark font-bold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 gold-border text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">051 8434033</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">executiveclubf10@hotmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Sagheer Market, Street 40, F-10/4, Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 gold-border text-white">Opening Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Monday to Friday</h4>
                    <p className="text-gray-300">6:00 AM – 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="text-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold">Saturday & Sunday</h4>
                    <p className="text-gray-300">8:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.3523523523523!2d73.0123456789!3d33.6987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzU1LjYiTiA3M8KwMDAnNDQuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
