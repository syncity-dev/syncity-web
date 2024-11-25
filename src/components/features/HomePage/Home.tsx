import { Hero } from "./Hero";
import { Members } from "./Members/Members";
import { ContactUs } from "./ContactUs/ContactUs";
import { TechStack } from "./TechStack/TechStack";
import { PageContainer } from "@/components/shared/PageContainer";

export const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Members />
      <TechStack />
      <ContactUs />
    </PageContainer>
  );
};
