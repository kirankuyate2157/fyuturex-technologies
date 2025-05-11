import CaseStudies from "@/components/CaseStudies";
import ServiceCardList from "@/components/ServiceCardList";
import TechnologyStack from "@/components/TechnologyStack";



export const metadata = {
  title: 'Our Services',
  description: 'Discover our core services including HRMS solutions, onboarding automation, and SaaS products.',
};

export default function Services() {
  return (
    <main>
      <ServiceCardList />
      <TechnologyStack />
      <CaseStudies />
    </main>
  );
}