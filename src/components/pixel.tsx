import { useEffect } from "react"; // <-- Isso transforma o arquivo num módulo

// Extensão segura do tipo global
declare global {
  interface Window {
    pixelId: string;
  }
}

export default function PixelLoader() {
  useEffect(() => {
    window.pixelId = "6895678bd37bf38cd0999e70";

    const script = document.createElement("script");
    script.src = "https://cdn.utmify.com.br/scripts/pixel/pixel.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  return null; // Nenhum JSX necessário
}
