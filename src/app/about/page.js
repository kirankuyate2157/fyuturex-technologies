import Section from "@/components/Section";
import CompanyJourney from "@/sections/CompanyJourney";
import CultureGallery from "@/sections/CultureGallery";
import TeamSection from "@/sections/TeamSection";

export const metadata = {
  title: 'About Us',
  description: 'Learn about Fyuturex Technologies, our values, our journey, and the people behind the scenes.',
};

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