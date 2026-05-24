import { ContactUs } from '@/components/features/HomePage/ContactUs/ContactUs';
import { Hero } from '@/components/features/HomePage/Hero/Hero';
import { Principles } from '@/components/features/HomePage/Principles/Principles';
import { Team } from '@/components/features/HomePage/Team/Team';
import { TechStack } from '@/components/features/HomePage/TechStack/TechStack';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';

export const Home = () => (
  <PageContainer>
    <Hero />
    <Principles />
    <Team />
    <TechStack />
    <ContactUs />
  </PageContainer>
);
