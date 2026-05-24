import { Image } from '@unpic/react';

import { teamMembers } from '@/constants/team';
import { styled } from '@/styled-system/jsx';
import { HStack } from '@/styled-system/jsx';

const StyledImg = styled(Image);

export const TeamMembers = () => {
  return (
    <HStack gap="0">
      {teamMembers.map((member, i) => (
        <StyledImg
          key={member.id}
          src={member.imgSrc}
          alt={`${member.name}, ${member.title}`}
          w="8"
          h="8"
          rounded="full"
          objectFit="cover"
          borderWidth="thin"
          borderStyle="solid"
          borderColor="bg.default"
          ml={i === 0 ? '0' : '-2.5'}
          position="relative"
        />
      ))}
    </HStack>
  );
};
