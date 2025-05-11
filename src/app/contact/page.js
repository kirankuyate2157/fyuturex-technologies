import CompanyContactInfo from "@/sections/CompanyContactInfo";
import ContactForm from "@/sections/ContactForm";
import MapEmbed from "@/sections/MapEmbed";

export const metadata = {
  title: 'Contact Us',
  description: 'Reach out to Fyuturex Technologies for business inquiries, support, or partnerships.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <CompanyContactInfo />
      <MapEmbed />
    </main>
  );
}