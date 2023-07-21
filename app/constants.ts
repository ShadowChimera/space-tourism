export enum Pages {
  home = 'home',
  destination = 'destination',
  crew = 'crew',
  technology = 'technology',
}

export const mainNav = [
  {
    name: Pages.home,
    text: 'home',
    href: '/',
  },
  {
    name: Pages.destination,
    text: 'destination',
    href: '/destination',
  },
  {
    name: Pages.crew,
    text: 'crew',
    href: '/crew',
  },
  {
    name: Pages.technology,
    text: 'technology',
    href: '/technology',
  },
];

