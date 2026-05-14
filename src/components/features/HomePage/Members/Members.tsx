import { teamMembers } from '@/constants/team';

import { Member } from './Member';
import { MembersWrapper } from './MembersWrapper';

export const Members = ({ ...restProps }) => {
  return (
    <MembersWrapper {...restProps}>
      {teamMembers.map(({ id, name, title, description, imgSrc, linkedinLink, githubLink }) => (
        <Member
          key={id}
          name={name}
          title={title}
          description={description}
          imgSrc={imgSrc}
          linkedinLink={linkedinLink}
          githubLink={githubLink}
        />
      ))}
    </MembersWrapper>
  );
};
