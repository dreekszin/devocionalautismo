import { useEffect } from "react";

export default function Oferta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-12 px-6">
      {/* Título */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 uppercase">
          TEM CERTEZA QUE DESEJA LEVAR O PLANO BÁSICO?
        </h1>
        <p className="text-xl md:text-2xl mt-4">
          <span className=" font-bold">
            PAGUE APENAS <span className="text-green-400">R$19,90</span> E LEVE
            TUDO ISSO
          </span>
        </p>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Inclui tudo do plano básico */}
        <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            Inclui tudo do Plano Básico:
          </h2>
          <ul className="space-y-2">
            <li>✔️ Devocional Força de Mãe – 15 Dias de Paz no Caos</li>
            <li>✔️ Checklist de Autocuidado Realista</li>
            <li>✔️ Planner Emocional</li>
          </ul>
        </section>

        {/* Bônus */}
        <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            + Todos os Bônus Exclusivos:
          </h2>
          <ul className="space-y-2">
            <li>🎁 Guia de Orações de Uma Mãe Atípica</li>
            <li>🎁 Cartões de Fé para Dias Tempestuosos</li>
            <li>🎁 Diário da Gratidão Atípica</li>
          </ul>
        </section>

        {/* E mais */}
        <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            E Mais:
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ebook “10 Orações Rápidas para Mães Atípicas”</li>
            <li>Ebook “Produtividade com Fé”</li>
            <li>Ebook “30 Versículos de Força Para Mães Atípicas”</li>
            <li>Ebook “Rotina Espiritual em 5 Minutos”</li>
            <li>Ebook “Como Orar em Meio ao Caos”</li>
            <li>Meditações Guiadas de 5 Minutos</li>
            <li>Cartões de Oração Imprimíveis</li>
            <li>Checklist de Sinais de Exaustão Emocional</li>
            <li>Mini Guia: Como Explicar o Autismo Para Familiares e Amigos</li>
          </ul>
        </section>

        {/* Diferenciais */}
        <section className="bg-[#2a2a2a] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
            Diferenciais do Plano Completo:
          </h2>
          <ul className="list-none space-y-2">
            <li>✔️ Acesso Vitalício (não expira)</li>
            <li>
              ✔️ Atualizações Futuras Inclusas – todo novo material ou bônus
              lançado será adicionado sem custo extra.
            </li>
            <li>
              ✔️ Certificado Simbólico de Conclusão – reconhecimento pela
              dedicação nos 15 dias de devocional.
            </li>
            <li>✔️ Acesso Multi-dispositivo</li>
            <li>✔️ Modo Áudio – versão narrada dos devocionais</li>
            <li>✔️ Pacote Imprimível Premium</li>
            <li>✔️ Calendário Espiritual de 30 Dias</li>
          </ul>
        </section>

        {/* Botão de compra */}
        <div className="text-center mt-10">
          <a
            href="https://pay.cakto.com.br/zcpvnmc_591039"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transition"
          >
            SIM! QUERO ESSA SUPER OFERTA!
          </a>
          <h2 className="text-sm font-semibold text-center mt-4">
            <a
              href="https://pay.cakto.com.br/g5vhrxr_591043"
              className="text-gray-700 hover:text-gray-200"
            >
              Não, obrigado! Quero o Plano Básico de R$ 9,90
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
