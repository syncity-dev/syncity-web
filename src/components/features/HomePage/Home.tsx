import { Hero } from "@/components/features/HomePage/Hero";
import { Members } from "@/components/features/HomePage/Members/Members";
import { ContactUs } from "@/components/features/HomePage/ContactUs/ContactUs";
import { TechStack } from "@/components/features/HomePage/TechStack/TechStack";
import { PageContainer } from "@/components/shared/PageContainer/PageContainer";

export const Home = () => (
  <PageContainer>
    <Hero />
    <Members />
    <TechStack />
    <ContactUs />
  </PageContainer>
);
