import Section from '@/components/Section';
import Button from '@/components/Button';

export const metadata = { title: 'Donate' };

export default function DonatePage() {
  return (
    <main>
      <Section className="muted-section">
        <h1 className="font-display text-4xl">Donate</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">Your contribution fuels our projects and helps us reach more lives. We will integrate a secure gateway later.</p>
        <div className="mt-6 surface-card p-6">
          <p className="text-sm text-neutral-700">For now, reach us at <a className="link-brand" href="mailto:inarabysweta@gmail.com">inarabysweta@gmail.com</a> for donation options.</p>
          <div className="mt-4"><Button disabled>Donate securely (coming soon)</Button></div>
        </div>
      </Section>
    </main>
  );
}


