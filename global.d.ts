export {}; // <-- transforma em módulo

declare global {
  interface Window {
    pixelId: string;
  }
}
