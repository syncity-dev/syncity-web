import { ContactUs } from '@/components/features/HomePage/ContactUs/ContactUs';
import { Hero } from '@/components/features/HomePage/Hero/Hero';
import { Members } from '@/components/features/HomePage/Members/Members';
import { Principles } from '@/components/features/HomePage/Principles/Principles';
import { Process } from '@/components/features/HomePage/Process/Process';
import { TechStack } from '@/components/features/HomePage/TechStack/TechStack';
import { PageContainer } from '@/components/shared/PageContainer/PageContainer';

export const Home = () => (
  <PageContainer>
    <Hero />
    <Principles />
    <Process />
    <Members />
    <TechStack />
    <ContactUs />
  </PageContainer>
);
