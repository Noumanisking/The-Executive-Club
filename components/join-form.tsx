"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

const JoinForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    membershipType: "basic",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, membershipType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Show success message
    alert("Thank you for joining The Executive Club! We will contact you shortly with next steps.")
  }

  return (
    <section id="join" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">JOIN NOW</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Take the first step towards a stronger, healthier you. Fill out the form below to join The Executive Club.
          </p>
        </div>

        <Card className="bg-dark-lighter border-gold/20 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Membership Registration</CardTitle>
            <CardDescription className="text-gray-400">
              Complete the form below to start your fitness journey with us.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-dark border-gold/30 focus:border-gold"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-dark border-gold/30 focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <Label>Select Membership Type</Label>
                <RadioGroup
                  value={formData.membershipType}
                  onValueChange={handleRadioChange}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic" className="border-gold text-gold" />
                    <Label htmlFor="basic" className="font-normal">
                      Basic (Rs. 5,000/month)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" className="border-gold text-gold" />
                    <Label htmlFor="premium" className="font-normal">
                      Premium (Rs. 8,500/month)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="executive" id="executive" className="border-gold text-gold" />
                    <Label htmlFor="executive" className="font-normal">
                      Executive (Rs. 12,000/month)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={handleCheckboxChange}
                  className="border-gold data-[state=checked]:bg-gold data-[state=checked]:text-dark mt-1"
                />
                <Label htmlFor="terms" className="font-normal text-sm">
                  I agree to the Terms and Conditions and Privacy Policy of The Executive Club.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-dark font-bold"
                disabled={!formData.agreeToTerms}
              >
                Complete Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default JoinForm
