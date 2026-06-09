import { SectionReveal } from '@/components/core/SectionReveal/SectionReveal';
import { Contact } from '@/components/features/HomePage/Contact/Contact';
import { FinalCTA } from '@/components/features/HomePage/FinalCTA/FinalCTA';
import { Hero } from '@/components/features/HomePage/Hero/Hero';
import { Principles } from '@/components/features/HomePage/Principles/Principles';
import { Process } from '@/components/features/HomePage/Process/Process';
import { Stack } from '@/components/features/HomePage/Stack/Stack';
import { Team } from '@/components/features/HomePage/Team/Team';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';

export const Home = () => (
  <PageContainer>
    <Hero />
    <SectionReveal>
      <Principles />
    </SectionReveal>
    <SectionReveal>
      <Team />
    </SectionReveal>
    <SectionReveal>
      <Process />
    </SectionReveal>
    <SectionReveal>
      <Stack />
    </SectionReveal>
    <SectionReveal>
      <Contact />
    </SectionReveal>
    <SectionReveal>
      <FinalCTA />
    </SectionReveal>
  </PageContainer>
);
