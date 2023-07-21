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

export const backgrounds = {
  [Pages.home]: {
    src: '/static/home/background-home-desktop.jpg',
    srcset: [
      { src: '/static/home/background-home-mobile.jpg', width: 375 },
      { src: '/static/home/background-home-tablet.jpg', width: 768 },
      { src: '/static/home/background-home-desktop.jpg ', width: 1440 },
    ],
  },
  [Pages.destination]: {
    src: '/static/destination/background-destination-desktop.jpg',
    srcset: [
      {
        src: '/static/destination/background-destination-mobile.jpg',
        width: 375,
      },
      {
        src: '/static/destination/background-destination-tablet.jpg',
        width: 768,
      },
      {
        src: '/static/destination/background-destination-desktop.jpg ',
        width: 1440,
      },
    ],
  },
  [Pages.crew]: {
    src: '/static/crew/background-crew-desktop.jpg',
    srcset: [
      { src: '/static/crew/background-crew-mobile.jpg', width: 375 },
      { src: '/static/crew/background-crew-tablet.jpg', width: 768 },
      { src: '/static/crew/background-crew-desktop.jpg ', width: 1440 },
    ],
  },
  [Pages.technology]: {
    src: '/static/technology/background-technology-desktop.jpg',
    srcset: [
      {
        src: '/static/technology/background-technology-mobile.jpg',
        width: 375,
      },
      {
        src: '/static/technology/background-technology-tablet.jpg',
        width: 768,
      },
      {
        src: '/static/technology/background-technology-desktop.jpg ',
        width: 1440,
      },
    ],
  },
};
