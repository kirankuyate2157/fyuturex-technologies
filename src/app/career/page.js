import ApplyNowForm from "@/sections/ApplyNowForm";
import JobOpenings from "@/sections/JobOpenings";
import LifeAtFyuturex from "@/sections/LifeAtFyuturex";

export const metadata = {
  title: 'Careers',
  description: `Find your opportunity with Fyuturex Technologies. We're hiring innovative and passionate minds.`,
};

export default function Career() {
  return (
    <main>
      <JobOpenings />
      <LifeAtFyuturex />
      <ApplyNowForm />
    </main>
  );
}
