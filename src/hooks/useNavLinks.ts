import { getRouteApi } from '@tanstack/react-router';

import { NAV_LINKS } from '@/constants/navigation';

const rootRoute = getRouteApi('__root__');

/** The main navigation links, without Blog while no post is published. */
export const useNavLinks = () => {
  const { hasPosts } = rootRoute.useLoaderData();

  return hasPosts ? NAV_LINKS : NAV_LINKS.filter((link) => link.id !== 'blog');
};
