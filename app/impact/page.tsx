import Section from '@/components/Section';

export const metadata = { title: 'Impact' };

export default function ImpactPage() {
  return (
    <main>
      <Section className="muted-section">
        <h1 className="font-display text-4xl">Our Impact</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">A growing community of volunteers delivering tangible outcomes for people, animals, and the planet.</p>
        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { k: 'Volunteers', v: '50+' },
            { k: 'Projects', v: '25+' },
            { k: 'Beneficiaries', v: '5k+' },
            { k: 'Cities', v: '5+' },
          ].map((s) => (
            <div key={s.k} className="surface-card p-6 text-center">
              <div className="text-3xl font-bold text-brand-400">{s.v}</div>
              <div className="mt-1 text-sm text-neutral-600">{s.k}</div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}


