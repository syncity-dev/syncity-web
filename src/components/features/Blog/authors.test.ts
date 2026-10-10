import { describe, expect, it } from 'vitest';

import { TEAM_AUTHOR, teamMembers } from '@/constants/team';

import { getAuthor } from './authors';

describe('getAuthor', () => {
  it('gives the team byline no photo, so it shows the Syncity mark', () => {
    expect(getAuthor(TEAM_AUTHOR)).toEqual({ name: TEAM_AUTHOR, role: 'Three senior engineers' });
  });

  it('gives a team member their title and photo', () => {
    const [member] = teamMembers;

    expect(getAuthor(member.name)).toEqual({
      name: member.name,
      role: member.title,
      imgSrc: member.imgSrc,
    });
  });
});
