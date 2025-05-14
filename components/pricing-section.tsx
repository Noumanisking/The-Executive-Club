import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "5,000",
    description: "Essential fitness access for beginners",
    features: [
      { name: "Gym Access (6AM - 10PM)", included: true },
      { name: "Basic Equipment Usage", included: true },
      { name: "Locker Access", included: true },
      { name: "Group Classes", included: false },
      { name: "Personal Training Session", included: false },
      { name: "Sauna & Pool Access", included: false },
      { name: "Nutrition Consultation", included: false },
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Premium",
    price: "8,500",
    description: "Advanced training for fitness enthusiasts",
    features: [
      { name: "Gym Access (6AM - 10PM)", included: true },
      { name: "Full Equipment Usage", included: true },
      { name: "Locker Access", included: true },
      { name: "Group Classes (4/month)", included: true },
      { name: "Personal Training Session (1/month)", included: true },
      { name: "Sauna & Pool Access", included: false },
      { name: "Nutrition Consultation", included: false },
    ],
    popular: true,
    buttonText: "Get Premium",
  },
  {
    name: "Executive",
    price: "12,000",
    description: "Ultimate fitness experience with all amenities",
    features: [
      { name: "Gym Access (24/7)", included: true },
      { name: "Full Equipment Usage", included: true },
      { name: "Premium Locker Access", included: true },
      { name: "Unlimited Group Classes", included: true },
      { name: "Personal Training Sessions (2/month)", included: true },
      { name: "Sauna & Pool Access", included: true },
      { name: "Nutrition Consultation", included: true },
    ],
    popular: false,
    buttonText: "Get Executive",
  },
]

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">MEMBERSHIP PLANS</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Choose the perfect membership plan that fits your fitness goals and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-dark-lighter border-gold/20 relative ${
                plan.popular ? "transform -translate-y-4 md:-translate-y-8 border-gold/50 animate-pulse-glow" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gold text-dark px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-white">Rs. {plan.price}</span>
                  <span className="text-gray-400 ml-1">/month</span>
                </div>
                <CardDescription className="text-gray-400">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gold hover:bg-gold-dark text-dark"
                      : "bg-dark hover:bg-dark-light border border-gold/50 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-steelblue/20 border border-steelblue rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-2 text-white">Try Us Free for 7 Days</h3>
            <p className="text-gray-300 mb-4">
              Experience The Executive Club with no commitment. Full access to facilities and classes for 7 days.
            </p>
            <Button className="bg-steelblue hover:bg-steelblue-dark text-white">Start Your Free Trial</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
