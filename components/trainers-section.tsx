import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Award } from "lucide-react"

const trainers = [
  {
    name: "Sarah Ahmed",
    role: "Yoga & Pilates Expert",
    image: "/placeholder.svg?height=500&width=400",
    certifications: "ACE-certified, 200hr Yoga Alliance",
    experience: "8 years",
    quote: "Yoga is not about touching your toes, it's about what you learn on the way down.",
    instagram: "#",
  },
  {
    name: "Kamran Ali",
    role: "Strength & Conditioning Coach",
    image: "/placeholder.svg?height=500&width=400",
    certifications: "NASM-certified, CrossFit L3",
    experience: "10 years",
    quote: "The only bad workout is the one that didn't happen.",
    instagram: "#",
  },
  {
    name: "Ayesha Khan",
    role: "HIIT & Cardio Specialist",
    image: "/placeholder.svg?height=500&width=400",
    certifications: "ISSA-certified, Zumba Instructor",
    experience: "6 years",
    quote: "Your body can stand almost anything. It's your mind that you have to convince.",
    instagram: "#",
  },
  {
    name: "Faisal Mahmood",
    role: "Nutrition & Wellness Coach",
    image: "/placeholder.svg?height=500&width=400",
    certifications: "Precision Nutrition, ACE-certified",
    experience: "7 years",
    quote: "Take care of your body. It's the only place you have to live.",
    instagram: "#",
  },
]

const TrainersSection = () => {
  return (
    <section id="trainers" className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">OUR EXPERT TRAINERS</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Meet our team of certified fitness professionals dedicated to helping you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-dark border-gold/20 overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-shadow text-sm italic">"{trainer.quote}"</p>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">{trainer.name}</CardTitle>
                <CardDescription className="text-gold">{trainer.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-gray-300 text-sm">
                  <Award className="h-4 w-4 text-gold mr-2" />
                  {trainer.certifications}
                </div>
                <p className="text-gray-300 text-sm">{trainer.experience} of experience</p>
              </CardContent>
              <CardFooter>
                <a
                  href={trainer.instagram}
                  className="text-white hover:text-gold transition-colors"
                  aria-label={`${trainer.name}'s Instagram`}
                >
                  <Instagram size={20} />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrainersSection
