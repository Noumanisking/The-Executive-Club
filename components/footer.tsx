import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 gold-gradient">THE EXECUTIVE CLUB</h3>
            <p className="text-gray-300 mb-4">
              Where fitness meets excellence. Located in the heart of Islamabad, we offer a premium training experience.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/executiveclubofficial"
                className="text-white hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-white hover:text-gold transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="mailto:executiveclubf10@hotmail.com" className="text-white hover:text-gold transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#trainers" className="text-gray-300 hover:text-gold transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-300 hover:text-gold transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">051 8434033</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">executiveclubf10@hotmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Sagheer Market, Street 40, F-10/4, Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Opening Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock size={20} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Monday - Friday</p>
                  <p className="text-gray-300">6:00 AM – 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-gold mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Saturday & Sunday</p>
                  <p className="text-gray-300">8:00 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 The Executive Club. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
