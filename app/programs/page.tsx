import Section from '@/components/Section';

export const metadata = { title: 'Programs' };

export default function ProgramsPage() {
  return (
    <main>
      <Section className="muted-section">
        <h1 className="font-display text-4xl">Programs</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">Interactive, Fundraiser, Collaboration, and Virtual projects that turn compassion into action.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            { title: 'Interactive', desc: 'Acoinitier, Christmas at AIIMS, Day of Service, Choti Diwali.' },
            { title: 'Fundraisers', desc: 'Project Amrit, foundling home donations, Balram Bastia, RK Panda.' },
            { title: 'Collaborations', desc: 'Revive Similipal, Clean Beach India, Environment Day, Daan Utsav, NSS XIM.' },
            { title: 'Virtual', desc: 'Small Business Project, Pride Month, The Happiness Project.' },
          ].map((c) => (
            <div key={c.title} className="surface-card p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}


