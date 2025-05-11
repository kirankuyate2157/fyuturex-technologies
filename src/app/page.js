import AboutPreview from "@/sections/AboutPreview";
import CallToAction from "@/sections/CallToAction";
import HeroSection from "@/sections/HeroSection";
import ServicesOverview from "@/sections/ServicesOverview";
import Testimonials from "@/sections/Testimonials";

export const metadata = {
  title: 'Home',
  description: 'Welcome to Fyuturex Technologies. Explore our innovative HR and tech services.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ServicesOverview />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
