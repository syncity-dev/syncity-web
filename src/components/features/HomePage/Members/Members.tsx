import { teamMembers } from "@/constants/team";
import { MembersWrapper } from "./MembersWrapper";
import { Member } from "./Member";

export const Members = () => {
  return (
    <MembersWrapper>
      {teamMembers.map(({ id, name, title, description }, index) => (
        <Member key={id} name={name} title={title} description={description} />
      ))}
    </MembersWrapper>
  );
};
