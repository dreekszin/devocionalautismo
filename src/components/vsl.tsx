import { useEffect } from "react";

export default function VSLPlayer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://scripts.converteai.net/c53bc81b-094c-4403-b81f-9d9f5385097f/players/6894f51751bd174921b09940/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // limpa ao desmontar
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <vturb-smartplayer
        id="vid-6894f51751bd174921b09940"
        style={{ display: "block", margin: "0 auto", width: "100%" }}
      />
    </div>
  );
}
