export const state = {
  text: null,
  dt: 0,
  colors: [
    // sampled from cover art of https://www.gorillasun.de/blog/gorilla-newsletter-76/
    '#f87186',
    '#f7d53c',
    '#5fbaac',
    '#a74771',
    '#f6ad2e',
    '#afb443',
    '#64afc1',
    '#f76a46',
    '#717858',
    '#773323',
    '#fedcda',
  ],
  isMobile: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  mouseHasBeenClicked: false,
};
