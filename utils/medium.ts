import localFont from "next/font/local";

const regular = localFont({
  src: "../public/basiercircle-regular-webfont.woff2",
});

const medium = localFont({
  src: "../public/basiercircle-medium-webfont.woff2",
  variable: "--medium",
});

const serif = localFont({
  src: "../public/PPEditorialNew-Regular.woff2",
});

const serifItalic = localFont({
  src: "../public/PPEditorialNew-Italic.woff2",
});

export { regular, medium, serif, serifItalic };
