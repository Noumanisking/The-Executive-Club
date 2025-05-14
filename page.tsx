import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import TrainersSection from "@/components/trainers-section"
import PricingSection from "@/components/pricing-section"
import ScheduleSection from "@/components/schedule-section"
import ContactSection from "@/components/contact-section"
import TestimonialsSection from "@/components/testimonials-section"
import JoinForm from "@/components/join-form"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainersSection />
      <PricingSection />
      <ScheduleSection />
      <TestimonialsSection />
      <ContactSection />
      <JoinForm />
    </>
  )
}
