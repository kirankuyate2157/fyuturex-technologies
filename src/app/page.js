
import AboutPreview from "@/sections/AboutPreview";
import CallToAction from "@/sections/CallToAction";
import ContactEMail from "@/sections/ContactEMail";
import HeroSection from "@/sections/HeroSection";
import ServicesOverview from "@/sections/ServicesOverview";
import Testimonials from "@/sections/Testimonials";

import dynamic from 'next/dynamic';

const HeroSlider = dynamic(() => import('@/sections/HeroSlider'), {
  // ssr: false,
});

export const metadata = {
  title: 'Home',
  description: 'Welcome to Fyuturex Technologies. Explore our innovative HR and tech services.',
};

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroSlider/>
      <AboutPreview />
      <ServicesOverview />
      <Testimonials />
      {/* <CallToAction /> */}
      <ContactEMail />
    </main>
    
  );
}
