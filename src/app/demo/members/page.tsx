import { MembersWrapper } from "@/components/features/HomePage/Members/MembersWrapper";
import { DisclosurePopoverDemo } from "@/components/features/DisclosurePopoverDemo/DisclosurePopoverDemo";
import { Grid } from "../../../../styled-system/jsx";
import { teamMembers } from "@/constants/team";

export default function DemoPage() {
  return (
    <MembersWrapper>
      {teamMembers.map((member, index) => (
        <DisclosurePopoverDemo key={index} {...member} />
      ))}
    </MembersWrapper>
  );
}
