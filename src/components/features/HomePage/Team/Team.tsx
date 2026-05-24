import { DisplayItalic } from '@/components/core/DisplayItalic/DisplayItalic';
import { Eyebrow } from '@/components/core/Eyebrow/Eyebrow';
import { Heading } from '@/components/core/Heading/Heading';
import { Section } from '@/components/core/Section/Section';
import { Text } from '@/components/core/Text/Text';
import { TeamCard } from '@/components/features/HomePage/Team/TeamCard';
import { teamMembers } from '@/constants/team';
import { Grid, styled } from '@/styled-system/jsx';

const SectionHeader = styled('div', {
  base: {
    display: 'grid',
    gap: '10',
    mb: '10',
    gridTemplateColumns: '1fr',
    md: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const Team = () => (
  <Section id="team" py={{ base: '16', md: '20' }}>
    <SectionHeader>
      <div>
        <Eyebrow mb="3">THE TEAM</Eyebrow>
        <Heading as="h2">
          Three of us. <DisplayItalic>That&rsquo;s it.</DisplayItalic>
        </Heading>
      </div>
      <Text size="lg" color="fg.muted" alignSelf="center">
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
