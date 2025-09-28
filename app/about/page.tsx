import Section from '@/components/Section';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main>
      <Section className="muted-section">
        <h1 className="font-display text-4xl">About Us</h1>
        <div className="prose mt-6 max-w-none prose-neutral">
          <p>
            Inara envisions a world where every living being is valued and cared for, where people can
            access the resources and support they need to live fulfilling lives, and where communities are connected and resilient.
          </p>
          <p>
            Inara Foundation is registered as a Section 8 company. We work across social and animal welfare, environment protection, small business promotion, and mental health awareness, with volunteers driving change through hands-on action and collaboration.
          </p>
        </div>
      </Section>
    </main>
  );
}


