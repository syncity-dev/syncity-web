import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { SectionHeader } from '@/components/core/SectionHeader/SectionHeader';
import { Text } from '@/components/core/Text/Text';
import { TeamCard } from '@/components/features/HomePage/Team/TeamCard';
import { teamMembers } from '@/constants/team';
import { Grid } from '@/styled-system/jsx';

export const Team = () => (
  <Section id="team">
    <SectionHeader eyebrow="THE TEAM">
      <Heading as="h2" textStyle="sectionTitle">
        Three of us. <DisplayItalic>That&rsquo;s it.</DisplayItalic>
      </Heading>
      <Text size="lg" color="fg.muted">
        Syncity is intentionally small. The people you meet on the first call are the people writing
        your code on day 400.
      </Text>
    </SectionHeader>

    <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="4">
      {teamMembers.map((member) => (
        <TeamCard
          key={member.id}
          name={member.name}
          title={member.title}
          description={member.description}
          badge={member.badge}
          imgSrc={member.imgSrc}
          githubLink={member.githubLink}
          linkedinLink={member.linkedinLink}
        />
      ))}
    </Grid>
  </Section>
);
