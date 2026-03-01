/// <reference types="vite/client" />

// Figma Make asset imports
declare module 'figma:asset/*' {
  const src: string;
  export default src;
}
