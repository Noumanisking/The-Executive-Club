import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adeel M.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I've never felt stronger or more confident – The Executive Club changed my life.",
    rating: 5,
  },
  {
    name: "Sana R.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "I joined for the sauna and stayed for the training. World-class experience.",
    rating: 5,
  },
  {
    name: "Imran K.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The trainers are exceptional. They pushed me to achieve goals I never thought possible.",
    rating: 5,
  },
  {
    name: "Fatima Z.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "From day one, I felt welcome. The community here is supportive and motivating.",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">SUCCESS STORIES</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Hear what our members have to say about their transformative experiences at The Executive Club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-dark border-gold/20 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-gold">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-gold/20" />
                  <p className="text-gray-300 italic pl-6">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-dark border border-gold/30 rounded-lg p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Transformation?</h3>
            <p className="text-gray-300 mb-6">
              Join The Executive Club today and experience the difference that premium facilities and expert guidance
              can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gold hover:bg-gold-dark text-dark font-bold py-3 px-6 rounded-md transition-all duration-300">
                Join Now
              </button>
              <button className="border border-gold text-gold hover:bg-gold/10 font-bold py-3 px-6 rounded-md transition-all duration-300">
                Get a Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
