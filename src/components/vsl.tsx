import { useEffect, useRef } from "react";

export default function VSLPlayer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Carrega o SDK da ConverteAi
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // Injeta a URL no iframe após o load inicial
    const iframe = iframeRef.current;
    if (iframe) {
      const baseUrl =
        "https://scripts.converteai.net/c53bc81b-094c-4403-b81f-9d9f5385097f/players/6894f51751bd174921b09940/v4/embed.html";
      const query = window.location.search || "?";
      const fullUrl = `${baseUrl}${query}&vl=${encodeURIComponent(
        window.location.href
      )}`;
      iframe.src = fullUrl;
    }

    return () => {
      document.head.removeChild(script); // limpeza (opcional)
    };
  }, []);

  return (
    <div
      id="ifr_6894f51751bd174921b09940_wrapper"
      style={{ margin: "0 auto", width: "100%" }}
    >
      <div
        id="ifr_6894f51751bd174921b09940_aspect"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <iframe
          ref={iframeRef}
          id="ifr_6894f51751bd174921b09940"
          src="about:blank"
          allowFullScreen
          frameBorder={0}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          referrerPolicy="origin"
        ></iframe>
      </div>
    </div>
  );
}
