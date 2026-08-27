import * as React from "react";

// Source: the inline header logo on https://www.betterfit.ca/
// Betterfit publishes no standalone wordmark asset -- the mark is path data
// (also served at /icon.svg) and the wordmark is SVG <text> set in Clash Display.
// That font is not loaded here, so the same "'Clash Display', sans-serif" stack
// the site itself declares is kept, with the page font added as a middle fallback.
const BetterfitLogo = () => (
  <svg
    className="h-9 w-auto text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 181 44"
    fill="none"
    role="img"
    aria-label="Betterfit"
  >
    <g transform="translate(7.68, 7.69)">
      <path
        fill="currentColor"
        d="M5.14 13.93C5.18 16.45 6.2 18.82 8.02 20.59L8.64 21.19L10.87 18.89L10.25 18.29C9.05 17.12 8.37 15.55 8.34 13.88C8.29 10.48 11.03 7.62 14.48 7.52L14.61 7.52C16.26 7.52 17.81 8.15 18.99 9.31C20.18 10.48 20.85 12.04 20.88 13.7C20.9 15.37 20.27 16.95 19.1 18.16L18.51 18.78L20.8 21.01L21.4 20.39C23.17 18.58 24.12 16.18 24.08 13.65C24.05 11.14 23.03 8.78 21.23 7.01C19.44 5.27 17.09 4.31 14.61 4.31L14.33 4.32C9.19 4.47 5.07 8.78 5.14 13.93Z"
      />
      <path
        fill="currentColor"
        d="M25.2 18.15C23.99 20.95 21.89 23.12 19.27 24.27C17.81 24.91 16.27 25.24 14.69 25.24C11.07 25.24 7.65 23.48 5.52 20.54C4.99 19.81 4.55 19 4.2 18.14C1.89 12.43 4.63 5.84 10.3 3.45L11.08 3.12L10.09 0.79L9.77 0L8.99 0.33C1.62 3.44-1.93 12 1.06 19.42C1.51 20.52 2.09 21.57 2.78 22.52C5.54 26.34 9.99 28.63 14.69 28.63C16.59 28.63 18.45 28.26 20.21 27.55C23.85 26.08 26.69 23.28 28.23 19.67L28.56 18.9L25.45 17.58L25.2 18.15Z"
      />
      <path
        fill="currentColor"
        d="M14.61 17.55C16.73 17.55 18.45 15.83 18.45 13.71C18.45 11.59 16.73 9.87 14.61 9.87C12.49 9.87 10.77 11.59 10.77 13.71C10.77 15.83 12.49 17.55 14.61 17.55Z"
      />
    </g>
    <text
      x="46"
      y="29"
      fill="currentColor"
      fontFamily="'Clash Display', Montserrat, sans-serif"
      fontSize="22"
      letterSpacing="-0.02em"
    >
      <tspan fontWeight="400">better</tspan>
      <tspan fontWeight="600">fit</tspan>
    </text>
  </svg>
);

export default BetterfitLogo;
