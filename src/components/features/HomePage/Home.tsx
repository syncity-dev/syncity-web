import { ContactUs } from '@/components/features/HomePage/ContactUs/ContactUs';
import { FinalCTA } from '@/components/features/HomePage/FinalCTA/FinalCTA';
import { Hero } from '@/components/features/HomePage/Hero/Hero';
import { Principles } from '@/components/features/HomePage/Principles/Principles';
import { Process } from '@/components/features/HomePage/Process/Process';
import { Team } from '@/components/features/HomePage/Team/Team';
import { TechStack } from '@/components/features/HomePage/TechStack/TechStack';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';

export const Home = () => (
  <PageContainer>
    <Hero />
    <Principles />
    <Team />
    <Process />
    <TechStack />
    <ContactUs />
    <FinalCTA />
  </PageContainer>
);
