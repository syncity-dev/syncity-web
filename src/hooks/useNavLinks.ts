import { getRouteApi, useLocation } from '@tanstack/react-router';

import { NAV_LINKS } from '@/constants/navigation';

const rootRoute = getRouteApi('__root__');

/**
 * The main navigation links, without Blog while no post is published. `isCurrent` is true
 * on the link's own page and the pages under it, so Blog stays marked on a post.
 */
export const useNavLinks = () => {
  const { hasPosts } = rootRoute.useLoaderData();
  const pathname = useLocation({ select: (location) => location.pathname });

  return NAV_LINKS.filter((link) => hasPosts || link.id !== 'blog').map((link) => ({
    ...link,
    isCurrent: pathname === link.href || pathname.startsWith(`${link.href}/`),
  }));
};
