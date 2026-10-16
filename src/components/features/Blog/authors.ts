import { TEAM_AUTHOR, teamMembers } from '@/constants/team';
import type { PostAuthor } from '@/utils/posts';

type Author = {
  name: PostAuthor;
  role: string;
  /** Photo of a team member. Posts by the team have none and show the Syncity mark instead. */
  imgSrc?: string;
};

export const getAuthor = (name: PostAuthor): Author => {
  const member = teamMembers.find((teamMember) => teamMember.name === name);

  if (!member) {
    return { name: TEAM_AUTHOR, role: 'Three senior engineers' };
  }

  return { name, role: member.title, imgSrc: member.imgSrc };
};
