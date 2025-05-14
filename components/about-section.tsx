import Image from "next/image"
import { CheckCircle } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">ABOUT US</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gold-border">Our Mission</h3>
            <p className="text-gray-300 mb-8 text-lg">
              To provide world-class training facilities and expert guidance in a luxurious, results-driven environment.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 gold-border">Our Story</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Founded in 2021 in Islamabad, The Executive Club was created by elite athletes and certified trainers who
              envisioned a smarter, stronger, and more connected gym experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">State-of-the-art equipment</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Expert certified trainers</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Luxury amenities</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Personalized programs</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 gold-border">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-dark px-4 py-2 rounded-md text-gold border border-gold">ACE Certified</span>
              <span className="bg-dark px-4 py-2 rounded-md text-gold border border-gold">NASM Certified</span>
              <span className="bg-dark px-4 py-2 rounded-md text-gold border border-gold">ISSA Certified</span>
              <span className="bg-dark px-4 py-2 rounded-md text-gold border border-gold">CrossFit L3</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Gym Interior"
                fill
                className="object-cover hover-scale"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mt-8">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Training Session"
                fill
                className="object-cover hover-scale"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Gym Equipment"
                fill
                className="object-cover hover-scale"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mt-8">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Team Photo"
                fill
                className="object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
