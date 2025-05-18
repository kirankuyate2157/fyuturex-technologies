
import HeroHeader  from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import Offerings from "@/components/offerings/Offerings";
import WhatHirevia from "@/components/whatHirevia/WhatHirevia";
import AboutPreview from "@/sections/AboutPreview";
import CallToAction from "@/sections/CallToAction";
import ContactEMail from "@/sections/ContactEMail";
import HeroSection from "@/sections/HeroSection";
import ServicesOverview from "@/sections/ServicesOverview";
import Testimonials from "@/sections/Testimonials";

export const metadata = {
  title: 'Home',
  description: 'Welcome to Hirevia Technologies. Explore our innovative HR and tech services.',
};

export default function Home() {
  return (
    <main>
      <HeroHeader/>
      {/* <HeroSection /> */}
      {/* <HeroSlider/> */}
      <section
  style={{
    textAlign: "center",
    padding: "3rem 1rem",
     color: "#fff",
    filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.3))",
  }}
>
  <h2 style={{ fontSize: "2rem", lineHeight: 1.5, fontWeight: 700, fontFamily: "Segoe UI, sans-serif" }}>
    <span
      style={{
        background: "linear-gradient(90deg, #ae67fa, #f49867)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
      Innovating Tomorrow,
    </span>
    <br />
    <span
      style={{
        background: "linear-gradient(90deg, #f13282, #fd8f8f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
      Empowering Talent Today
    </span>
  </h2>
</section>

      {/* <AboutPreview /> */}
      <WhatHirevia />
      {/* <ServicesOverview /> */}
      <Offerings/>
      <Intro />
      <Testimonials />
      {/* <CallToAction /> */}
      <ContactEMail />
    </main>
    
  );
}
