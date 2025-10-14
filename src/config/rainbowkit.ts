"use client";

import { darkTheme, lightTheme, Theme } from '@rainbow-me/rainbowkit';

export const customTheme: Theme = {
  ...lightTheme(),
  // colors: {
  //   ...darkTheme().colors,
  //   accentColor: '#ef4444', // red-500
  //   accentColorForeground: 'white',
  //   modalBackground: '#0f172a', // slate-900
  //   modalBorder: '#334155', // slate-700
  //   modalText: 'white',
  //   modalTextSecondary: '#94a3b8', // slate-400
  // },
  fonts: {
    body: 'var(--font-geist-sans)',
  },
  radii: {
    actionButton: '9999px',
    connectButton: '9999px',
    menuButton: '9999px',
    modal: '1rem',
    modalMobile: '1rem',
  },
};