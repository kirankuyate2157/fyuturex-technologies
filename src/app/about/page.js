import Section from "@/components/Section";
import CompanyJourney from "@/sections/CompanyJourney";
import CultureGallery from "@/sections/CultureGallery";
import TeamSection from "@/sections/TeamSection";


export default function About() {
  return (
    <main>
      <Section title="Our Vision & Mission" />
      <TeamSection />
      <CompanyJourney />
      <CultureGallery />
    </main>
  );
}