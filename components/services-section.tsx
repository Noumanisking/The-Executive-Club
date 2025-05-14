import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Users, UserPlus, ShowerHeadIcon as Shower } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      title: "Memberships",
      description: "Flexible membership options to fit your lifestyle and goals.",
      icon: <Dumbbell className="h-12 w-12 text-gold" />,
      items: ["Monthly Membership", "Yearly Membership", "Student Discounts", "Corporate Packages"],
    },
    {
      title: "Group Classes",
      description: "Energizing group sessions led by expert trainers.",
      icon: <Users className="h-12 w-12 text-gold" />,
      items: ["Yoga", "CrossFit", "HIIT", "Zumba", "Pilates"],
    },
    {
      title: "Personal Training",
      description: "Customized one-on-one training to achieve your specific goals.",
      icon: <UserPlus className="h-12 w-12 text-gold" />,
      items: ["1-on-1 Sessions", "Custom Plans", "Expert Support", "Progress Tracking"],
    },
    {
      title: "Facilities",
      description: "Premium amenities for the ultimate fitness experience.",
      icon: <Shower className="h-12 w-12 text-gold" />,
      items: ["Sauna", "Pool", "Smart Lockers", "Clean Changing Rooms", "AI Fitness Equipment"],
    },
  ]

  return (
    <section id="services" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Experience premium fitness services designed to transform your body and elevate your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-dark-lighter border-gold/20 card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
