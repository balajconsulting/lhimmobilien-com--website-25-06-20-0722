import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/FooterSection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Generated from: https://lhimmobilien.com/ */}
      {/* Business Type: ALLGEMEIN */}
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}