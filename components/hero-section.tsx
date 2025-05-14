import { Button } from "@/components/ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/placeholder.svg?height=1080&width=1920" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-dark/70 to-dark/90"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow animate-fade-up">
          <span className="gold-gradient">Transform Your Body.</span>
          <br />
          <span className="text-white">Join The Executive Club Today.</span>
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome to The Executive Club, where fitness meets excellence. Located in the heart of Islamabad, we offer a
          premium training experience powered by expert guidance and cutting-edge facilities.
        </p>
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Button className="bg-gold hover:bg-gold-dark text-dark font-bold text-lg py-6 px-8 rounded-md transition-all duration-300">
            Join Now
          </Button>
          <Button
            variant="outline"
            className="border-white hover:border-gold text-white hover:text-gold font-bold text-lg py-6 px-8 rounded-md transition-all duration-300"
          >
            Get a Free Trial
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
