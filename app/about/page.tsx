import Section from '@/components/Section';
import { Heart, Target, Shield, Users, Building2, CheckCircle, Sparkles, Award, Calendar } from 'lucide-react';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/30">
        <div className="absolute inset-0 bg-grid opacity-30" />
        {/* Decorative gradient blobs */}
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-brand-300/30 to-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-brand-400/20 to-brand-200/30 blur-3xl" />
        
        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-brand-200/50 backdrop-blur-sm">
              <Sparkles size={16} className="text-brand-600" />
              <span className="text-sm font-semibold text-brand-700">Since 2020</span>
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight">
              About <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Inara</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700 max-w-2xl mx-auto">
              A youth-led movement turning compassion into meaningful change, one initiative at a time.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
              {[
                { label: 'Volunteers', value: '50+', icon: Users },
                { label: 'Projects', value: '25+', icon: Target },
                { label: 'Beneficiaries', value: '5k+', icon: Heart },
                { label: 'Years Active', value: '4+', icon: Calendar },
              ].map((stat) => (
                <div key={stat.label} className="group relative">
                  <div className="surface-card p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <stat.icon className="mx-auto mb-2 text-brand-600" size={24} />
                    <div className="text-3xl font-bold text-brand-600">{stat.value}</div>
                    <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core & Origin Story - Modern Cards */}
      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Who We Are */}
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
            <div className="relative surface-card p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400/10 to-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                <Heart size={16} className="text-brand-600" />
                Who We Are
              </div>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Youth-Led. Compassion-Driven.
              </h2>
              <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  <strong className="text-brand-600">Inara</strong> is a youth-led non-profit organization based in Bhubaneswar,
                  India, where compassion transforms into meaningful change through
                  community upliftment and volunteering initiatives.
                </p>
                <p>
                  We founded Inara to bridge the systematic gap between underserved
                  communities and vulnerable animals, creating a space where empathy meets
                  action. Our work is structured, transparent, and holistic — driven by
                  passionate youth who believe in making compassion visible.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                <span className="text-sm font-medium text-brand-700">Established 2020</span>
              </div>
            </div>
          </div>

          {/* Origin Story */}
          <div className="group relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
            <div className="relative surface-card bg-gradient-to-br from-brand-50/50 to-white p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200">
                <Sparkles size={16} className="text-brand-600" />
                Origin Story
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl text-brand-700">
                From Passion to Purpose
              </h3>
              <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  What began as <strong className="text-brand-600">Sweta's passion project</strong> with a few friends has grown
                  into Inara — a ray of joy, support, and hope for the underprivileged.
                </p>
                <p>
                  Her simple wish to help children sparked Inara's first steps four years
                  ago. From collecting donations for orphanages to expanding into diverse
                  community projects, Inara has always listened closely to people's needs,
                  prioritizing safety, care, and compassion above all.
                </p>
                <p className="text-lg italic text-brand-600 border-l-4 border-brand-400 pl-4">
                  "What started as me soon became we."
          </p>
          <p>
                  Under Sweta's heartfelt leadership, ideas continue to turn into action,
                  empowering every project with her vision, dedication, and grace.
                  Together, this growing community laid the foundation for Inara as a
                  credible <strong className="text-brand-600">Section 8 company</strong>, driven by purpose and compassion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Vision & Mission - Modern Card with Gradient */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-grid opacity-10" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-brand-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-300 ring-1 ring-white/20 backdrop-blur-sm">
              <Target size={16} className="text-brand-400" />
              Vision & Mission
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl text-white">
              Our Vision & Mission
            </h2>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-50 blur transition-all duration-300 group-hover:opacity-75" />
              <div className="relative h-full rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h3 className="font-display text-2xl text-white">Our Vision</h3>
                <p className="mt-4 text-neutral-300 leading-relaxed">
                  We envision a world built on <strong className="text-brand-300">dignity, resilience, and compassion</strong> — where every cause is
                  meaningful and accessible across communities.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 opacity-50 blur transition-all duration-300 group-hover:opacity-75" />
              <div className="relative h-full rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 shadow-lg">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-display text-2xl text-white">Our Mission</h3>
                <p className="mt-4 text-neutral-300 leading-relaxed">
                  To grow as a <strong className="text-brand-300">trusted platform</strong>, inspiring change-makers through volunteering and
                  active engagement, ensuring sustainable impact.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Mission Info */}
          <div className="mt-8 rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
            <p className="text-center text-lg text-neutral-300 leading-relaxed">
              Our programs are <strong className="text-brand-300">transparent, scalable, and high-impact</strong> — focusing on
              grassroots community upliftment and comprehensive animal welfare.
              Through collaboration, innovation, and dedicated youth action, we
              provide a credible platform for collective action.
            </p>
          </div>
        </div>
      </Section>

      {/* Guiding Principles - Enhanced Design */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-white">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-50 to-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm">
              <Shield size={16} className="text-brand-600" />
              Our Principles
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              Guiding Principles
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Our reflections and decisions are shaped by principles that ensure every
              action creates meaningful impact
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Turn empathy into action',
                desc: "Provide tangible support where it's needed most.",
                icon: Heart,
              },
              {
                title: 'Uphold dignity',
                desc: 'Respect every individual in all our initiatives.',
                icon: Award,
              },
              {
                title: 'Focus on overlooked communities',
                desc: 'Prioritize regions and groups that are often ignored.',
                icon: Users,
              },
              {
                title: 'Collaborate for greater impact',
                desc: 'Partner with organizations to amplify change.',
                icon: Target,
              },
              {
                title: 'Maintain transparency',
                desc: 'Keep our volunteers and donors informed and engaged.',
                icon: Shield,
              },
              {
                title: 'Engage deeply with community needs',
                desc: 'Listen, learn, and act with care.',
                icon: Sparkles,
              },
            ].map((principle, index) => (
              <div key={principle.title} className="group relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-25" />
                
                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200/50 transition-all duration-300 group-hover:shadow-xl group-hover:ring-brand-200 group-hover:-translate-y-1">
                  {/* Top corner accent */}
                  <div className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-gradient-to-br from-brand-400/10 to-brand-500/5 transition-all duration-300 group-hover:scale-150" />
                  
                  {/* Number badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 text-xs font-bold text-brand-600 ring-1 ring-brand-200/50 transition-all duration-300 group-hover:scale-110 group-hover:from-brand-400 group-hover:to-brand-500 group-hover:text-white group-hover:shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-brand-500/50">
                      <principle.icon size={20} className="text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className="absolute inset-0 h-12 w-12 rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-50" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display text-lg font-semibold text-neutral-900 leading-tight transition-colors duration-300 group-hover:text-brand-700">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-neutral-100 to-neutral-200 transition-all duration-300 group-hover:from-brand-400 group-hover:to-brand-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
              <div className="flex h-2 w-2 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-500 shadow-sm">
                <div className="h-1 w-1 rounded-full bg-white" />
              </div>
              <div className="h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Organizational Overview - Modern Split Layout */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="sticky top-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-50 to-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm">
                <Building2 size={16} className="text-brand-600" />
                Legal Status
              </div>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Organisational Overview
              </h2>
              
              {/* Highlight Box */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 ring-1 ring-brand-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-600">Incorporated</p>
                    <p className="font-display text-2xl font-bold text-brand-700">Jan 4, 2023</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                  Officially registered as a <strong className="text-brand-700">Section 8 Non-Profit Organisation</strong> under Indian law.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-neutral-700 leading-relaxed">
                  Inara was officially incorporated as a <strong className="text-brand-600">Section 8 Non-Profit
                  Organisation</strong> in India, reinforcing our
                  commitment to institutional credibility, financial integrity, and
                  transparency for every donor, volunteer, and collaborator.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  As a Section 8 platform, we are dedicated to executing high-impact
                  programs in community upliftment and animal welfare, ensuring every
                  initiative delivers meaningful social change.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - What is Section 8 */}
          <div className="lg:col-span-3">
            <div className="group relative overflow-hidden rounded-2xl">
              {/* Dark background with pattern like Vision & Mission */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
              <div className="absolute inset-0 bg-grid opacity-10" />
              {/* Decorative gradient blobs */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-bl from-brand-400/20 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />
              
              <div className="relative p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Shield size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-white">
                      What is a Section 8 Organisation?
                    </h3>
                    <p className="mt-2 text-sm text-brand-400 font-medium">
                      Indian Companies Act, 2013
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        A <strong className="text-white">Section 8 Company</strong> is registered under the <em className="text-brand-400">Indian Companies Act,
                        2013</em> and operates to promote charitable objectives such as education,
                        art, culture, and social welfare.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        All profits generated are <strong className="text-white">legally reinvested</strong> into the organisation's
                        charitable goals — ensuring that every action is driven by social
                        impact, not private gain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        Section 8 companies enjoy <strong className="text-white">legal recognition and credibility</strong>, which helps
                        in building trust with donors, volunteers, and partners.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        This status allows organisations like Inara to <strong className="text-white">collaborate effectively</strong> with
                        government bodies and other NGOs, while enhancing the ability to raise funds and attract
                        support for long-term social initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


