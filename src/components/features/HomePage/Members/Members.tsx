import { teamMembers } from "@/constants/team";
import { MembersWrapper } from "./MembersWrapper";
import { Member } from "./Member";

export const Members = ({ ...restProps }) => {
  return (
    <MembersWrapper {...restProps}>
      {teamMembers.map(
        ({
          id,
          name,
          title,
          description,
          imgSrc,
          linkedinLink,
          githubLink,
        }) => (
          <Member
            key={id}
            name={name}
            title={title}
            description={description}
            imgSrc={imgSrc}
            linkedinLink={linkedinLink}
            githubLink={githubLink}
          />
        )
      )}
    </MembersWrapper>
  );
};
