import { useEffect, useState } from "react";

function App() {
  interface TimeLeft {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(23, 59, 0, 0); // horário final hoje às 23:59

    const interval = setInterval(() => {
      const now = new Date();
      const diff = deadline.getTime() - now.getTime(); // diferença em milissegundos

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / 1000 / 60) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      setTimeLeft({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Função auxiliar para formatar com dois dígitos
  const format = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="min-h-screen">
      {/* Hero Section with VSL */}
      <section className="pt-0 bg-[#ebd2ae]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="rounded-md flex flex-col md:flex-row items-center bg-[#ebd2ae] p-1">
              {/* Texto */}
              <div className="order-2 md:order-1 md:w-1/2 text-left p-4">
                <h1 className="text-2xl text-center md:text-3xl font-extrabold leading-tight text-foreground mb-6">
                  Devocional para Mães de Crianças com Autismo (TEA)
                </h1>
                <p className="text-center text-base md:text-xl text-muted-foreground leading-relaxed mb-4">
                  Encontre força em Deus, alívio emocional e acolhimento diário
                  — mesmo nos dias mais difíceis da maternidade atípica.
                </p>
                <p className="text-center text-base md:text-xl text-muted-foreground leading-relaxed">
                  Você não está sozinha. Este devocional foi criado para te
                  lembrar que, mesmo nas noites sem dormir, nas lágrimas
                  escondidas e nos momentos em que sua fé vacila... Deus ainda
                  está com você.
                </p>

                <div className="flex justify-center pt-4 max-w-xl">
                  <a
                    href="https://pay.cakto.com.br/37z4v27_589100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-xl px-6 py-4 rounded-full text-white bg-emerald-500 font-extrabold text-base md:text-lg shadow-lg text-center"
                    aria-label="Comprar o devocional Esvazie a Culpa"
                    title="Esvazie a Culpa: Um Devocional para Você"
                  >
                    ESVAZIE A CULPA: UM DEVOCIONAL PARA VOCÊ!
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs text-gray-600">
                  {/* Acesso imediato */}
                  <div className="flex items-center gap-1">
                    <span role="img" aria-label="Raio" className="text-lg">
                      ⚡
                    </span>
                    Acesso imediato
                  </div>

                  {/* Garantia */}
                  <div className="flex items-center gap-1">
                    <span role="img" aria-label="Escudo" className="text-lg">
                      🛡️
                    </span>
                    7 dias de garantia
                  </div>

                  {/* Pagamento seguro */}
                  <div className="flex items-center gap-1">
                    <span role="img" aria-label="Cadeado" className="text-lg">
                      🔒
                    </span>
                    Pagamento seguro
                  </div>
                </div>

                <p className="inline-flex text-center items-center px-4 py-2 mt-2 text-green-600 text-sm font-medium">
                  <span>
                    Mais de <strong>1.340 mães</strong> já recuperaram sua paz
                    em 30 dias
                  </span>
                </p>
              </div>

              {/* Imagem */}
              <figure className="order-1 md:order-2 md:w-1/2 flex justify-center">
                <img
                  src="/images/Capa-devocional-tea-30-400x500-1.webp"
                  alt="Capa Devocional"
                  className="max-w-full h-auto rounded-lg shadow"
                />
              </figure>
            </div>

            <div className="mt-5 text-center space-y-8 max-w-6xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Você se reconhece aqui?
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Você acorda cansada e dorme{" "}
                    <span className="text-red-600">exausta</span>.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    A rotina com seu filho quase não dá pausa — sua energia
                    nunca chega a 100%.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Já investiu em terapias e métodos que prometeram{" "}
                    <span className="text-red-600">milagres</span>.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Alguns ajudam, mas você ainda se sente perdida e
                    sobrecarregada no dia a dia.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Sente <span className="text-red-600">culpa</span> por pensar
                    em cuidar de você.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Parece errado parar por 10 minutos quando seu filho precisa
                    tanto de você.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Tem <span className="text-red-600">medo</span> do futuro do
                    seu filho.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Nem nos momentos de oração você encontra a paz que procura.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Esconde sua <span className="text-red-600">exaustão</span>{" "}
                    de todos.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Pouca gente entende o que você vive; você segue no
                    automático para não desabar.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Já tentou devocionais e guias, mas nada virou{" "}
                    <span className="text-red-600">hábito</span>.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Muita teoria, pouca prática guiada — e a vida continua
                    corrida.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Sente que está{" "}
                    <span className="text-red-600">falhando</span> como mãe e
                    como mulher de fé.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Você ora, mas ainda se sente sem forças e sem direção.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Tenta <span className="text-red-600">controlar</span> tudo
                    sozinha.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cada crise do seu filho te desestabiliza e você sente que
                    não tem um passo a passo.
                  </p>
                </article>
              </div>

              <div className="p-6 bg-[#ebd2ae] text-center max-w-2xl mx-auto rounded-xl">
                <p className="text-lg italic font-medium text-black">
                  “Venham a mim, todos os que estão cansados e sobrecarregados,
                  e eu lhes darei descanso.”
                </p>
                <p className="text-sm mt-2 text-black/90">Mateus 11:28</p>
              </div>
            </div>
            <section className="p-6 mt-5 w-full bg-[#ebd2ae] pt-10">
              <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center px-4">
                {/* Texto e Lista */}
                <div className="space-y-6 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Como funciona o
                    <span className="text-emerald-500"> Devocional SOS</span> na
                    prática?
                  </h2>
                  <p className="text-lg text-gray-700">
                    Em poucos minutos por dia, este devocional vai renovar sua
                    fé, te ajudar a lidar com a culpa, o medo e a sobrecarga, e
                    te lembrar: você é uma mãe incrível, escolhida por Deus para
                    essa missão.
                  </p>

                  <ul className="space-y-4">
                    {[
                      {
                        title: "Recupere sua conexão com Deus",
                        description:
                          "Mesmo nos dias em que sua fé parece frágil, você terá um espaço sagrado de reencontro.",
                      },
                      {
                        title: "Encontre alívio emocional real",
                        description:
                          "Chega de sentir que está à beira do colapso — respire, ore e reencontre seu centro.",
                      },
                      {
                        title: "Reduza a culpa por cuidar de si",
                        description:
                          "Você vai aprender que seu autocuidado é parte do cuidado com seu filho.",
                      },
                      {
                        title: "Sinta-se guiada e acolhida",
                        description:
                          "Tenha clareza sobre como agir mesmo quando o caos parece dominar.",
                      },
                      {
                        title: "Reconstrua sua força interior",
                        description:
                          "Em cada reflexão, uma dose de paz, fé e coragem para continuar.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-emerald-500 text-xl mt-1">
                          💚
                        </span>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-700 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Botão de ação */}
                  <div className="pt-2 pb-5">
                    <a
                      href="https://pay.cakto.com.br/37z4v27_589100"
                      className="w-full sm:w-auto px-6 py-4 text-xl font-bold text-white bg-emerald-500 rounded-full shadow-lg flex justify-center text-center"
                    >
                      10 MINUTOS DE PAZ: RENOVE-SE HOJE!
                    </a>
                    <p className="text-xs text-gray-700 mt-4">
                      Acesso imediato • 7 dias de garantia
                    </p>
                  </div>
                </div>

                {/* Imagem */}
                <figure className="flex justify-center md:order-1">
                  <img
                    loading="lazy"
                    src="https://webessencial.com/wp-content/uploads/2025/09/exemplo-na-pratica-568x710-1.webp"
                    alt="Exemplo na prática: Versículo, Contexto, Ação, Oração e Espaço para escrever no Devocional SOS"
                    className="rounded-xl shadow-lg w-full max-w-[560px] aspect-[4/5] object-cover"
                  />
                </figure>
              </div>

              {/* Destaque final */}
              <div className="p-6 text-center max-w-2xl mx-auto rounded-xl mt-8">
                <p className="text-lg italic font-medium text-black">
                  “Sabemos que seu tempo é escasso, por isso cada devocional foi
                  feito para caber entre uma crise e outra, entre a terapia e o
                  jantar. Em 5 minutos, você encontra alívio, paz e direção.”
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section id="porque-exausta" className="w-full bg-white py-10">
        <div className="text-center space-y-8 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Por que você ainda se sente{" "}
            <span className="text-red-600">exausta</span> — mesmo fazendo “tudo
            certo”?
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                emoji: "⚠️",
                title: "Ferramentas ",
                highlight: "fragmentadas",
                description:
                  "Cada coisa ajuda um pouco, mas não conversa entre si.",
                missing:
                  "O que falta: integrar fé + prática guiada + contexto TEA.",
              },
              {
                emoji: "📱",
                title: "Grupos e redes viram só ",
                highlight: "desabafo",
                description:
                  "Acolhem, mas raramente entregam um passo a passo aplicável.",
                missing:
                  "O que falta: um roteiro simples para usar no meio do caos.",
              },
              {
                emoji: "📖",
                title: "Devocionais ",
                highlight: "genéricos",
                description:
                  "Bonitos, mas não falam de crises, birras e rotina imprevisível.",
                missing:
                  "O que falta: conteúdo feito para mães de crianças com TEA.",
              },
              {
                emoji: "⏱️",
                title: "Falta de ",
                highlight: "constância",
                description:
                  "Sem um formato rápido, é difícil manter o hábito.",
                missing:
                  "O que falta: rotina de 10 minutos com começo–meio–fim.",
              },
              {
                emoji: "🧭",
                title: "Aconselhamento ",
                highlight: "amplo",
                description:
                  "Bem-intencionado, mas nem sempre cabe na sua realidade.",
                missing:
                  "O que falta: práticas específicas para momentos reais.",
              },
              {
                emoji: "🧠",
                title: "Cuidado emocional sem a sua ",
                highlight: "fé",
                description:
                  "Terapia pode ajudar muito, mas nem sempre integra espiritualidade.",
                missing: "O que falta: unir fé às ferramentas de regulação.",
              },
              {
                emoji: "🧩",
                title: "Rotina ",
                highlight: "imprevisível",
                description: "Quando tudo muda, o plano do dia cai por terra.",
                missing:
                  "O que falta: um Plano B de 3 minutos para dias caóticos.",
              },
            ].map((item, index) => (
              <article
                key={index}
                className="p-5 bg-white rounded-xl text-left border border-gray-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-red-600 text-xl mt-1">
                    {item.emoji}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.title}
                      <u>{item.highlight}</u>
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-emerald-500">
                      {item.missing}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            {/* Último card mais simples */}
            <article className="p-5 bg-white rounded-xl text-left border border-gray-300">
              <p className="font-semibold text-gray-900">
                Tenta <span className="text-red-600">controlar</span> tudo
                sozinha.
              </p>
              <p className="text-sm text-gray-700 mt-1">
                Cada crise do seu filho te desestabiliza e você sente que não
                tem um passo a passo.
              </p>
            </article>
          </div>

          {/* Destaque final */}
          <div className="p-6 bg-[#ebd2ae] text-center max-w-2xl mx-auto rounded-xl mt-8">
            <p className="text-lg italic font-medium text-black">
              O <strong>Devocional SOS</strong> integra{" "}
              <strong>fé + prática guiada + acolhimento</strong> em apenas{" "}
              <strong>10 minutos</strong> por dia.
            </p>
          </div>
        </div>
      </section>

      <section id="honestidade" className="w-full bg-[#ebd2ae] pt-10 pb-5">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Antes de continuar,{" "}
            <span className="text-emerald-500">precisamos ser honestos</span>{" "}
            com você:
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card ISTO NÃO É */}
            <article className="p-6 bg-red-100 rounded-xl border border-red-300">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Isto <u>não</u> é:
              </h3>
              <ul className="space-y-3 text-sm text-gray-900">
                {[
                  "Mais um devocional genérico só com versículos bonitos.",
                  "Uma promessa de mudança no seu filho ou “milagre” instantâneo.",
                  "Um curso longo e cansativo que exige horas por dia.",
                  "Aconselhamento amplo/desconectado da maternidade atípica.",
                  "Técnicas “mágicas” ou promessas irreais de zerar ansiedade.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-600 text-lg mt-0.5">❌</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-700">
                Apoio emocional e espiritual complementar. Não substitui
                acompanhamento médico, psicológico ou terapêutico.
              </p>
            </article>

            {/* Card ISTO É */}
            <article className="p-6 bg-emerald-100 rounded-xl border border-emerald-300">
              <h3 className="text-xl font-bold text-emerald-500 mb-4">
                Isto <u>é</u>:
              </h3>
              <ul className="space-y-3 text-sm text-gray-900">
                {[
                  "Um método prático que cabe na rotina: 10 minutos por dia.",
                  "Integra fé + prática guiada + realidade TEA (sem culpas).",
                  "Conteúdo específico para crises, culpa, sobrecarga e birras.",
                  "Plano B de 3 minutos para dias caóticos.",
                  "Acolhimento real: devocional + áudios + comunidade de apoio.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 text-lg mt-0.5">✅</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-700">
                Já ajudou <strong>1.340+ mães</strong> a sentirem paz e clareza
                em 30 dias.
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="resumo-oferta" className="section-container bg-white mt-10">
        <div className="max-w-6xl mx-auto space-y-10 px-4">
          {/* Header */}
          <header className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Tudo o que você recebe ao entrar no{" "}
              <span className="text-emerald-500">Devocional SOS</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um kit completo para restaurar sua fé, sua paz e sua força — mesmo
              com a rotina imprevisível da maternidade atípica.
            </p>
          </header>

          {/* Grid de cards principais */}
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Devocional SOS",
                img: "https://webessencial.com/wp-content/uploads/2025/09/Kit-devocional-sos-escuro-200x250-1.webp",
              },
              {
                title: "Checklist de Autocuidado",
                img: "https://webessencial.com/wp-content/uploads/2025/09/Capa-Checklist-de-Autocuidado-Realista-para-Maes-Atipicas-200x250-1.webp",
              },
              {
                title: "Planner Emocional",
                img: "https://webessencial.com/wp-content/uploads/2025/09/planner-200x250-1.webp",
              },
              {
                title: "Guia de Crises",
                img: "https://webessencial.com/wp-content/uploads/2025/09/Capa-Guia-de-Crises-Mae-em-Alerta-200x250-1.webp",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-xl border border-gray-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[200px] h-[250px] object-cover rounded-md mb-2"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Kit principal e bônus */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Kit principal */}
            <article className="p-6 rounded-2xl border border-gray-300 bg-gray-100 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Kit principal</h3>
              <ul className="space-y-3 text-sm leading-6">
                {[
                  {
                    icon: "📘",
                    title: "Devocional SOS “30 Dias de Paz no Caos” (PDF)",
                    desc: "Versículo, contexto, ação guiada, oração e espaço para escrever — cabe nos seus 10 minutos.",
                  },
                  {
                    icon: "📝",
                    title: "Planner Emocional (imprimível)",
                    desc: "Registre gatilhos, vitórias e o que funcionou — mais clareza, menos culpa.",
                  },
                  {
                    icon: "✅",
                    title: "Checklist de Autocuidado Realista",
                    desc: "Micro-hábitos possíveis para dias bons e dias difíceis.",
                  },
                  {
                    icon: "🚨",
                    title: "Guia de Crises “Mãe em Alerta”",
                    desc: "Passo a passo rápido para momentos de sobrecarga e crises do seu filho.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-500 text-xl mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Bônus inclusos */}
            <article className="p-6 rounded-2xl border border-gray-300 bg-gray-100 space-y-5">
              <h3 className="text-xl font-bold text-gray-900">
                Bônus inclusos (por tempo limitado)
              </h3>
              <ul className="space-y-3 text-sm leading-6">
                {[
                  {
                    icon: "🎯",
                    title: "Guia de Orações de Uma Mãe Atípica",
                    desc: "Quando faltarem forças e palavras, você terá um roteiro de oração.",
                  },
                  {
                    icon: "🃏",
                    title: "Cartões de Fé para Dias Tempestuosos",
                    desc: "Versos e frases bíblicas para imprimir ou salvar no celular.",
                  },
                  {
                    icon: "💖",
                    title: "Diário da Gratidão Atípica",
                    desc: "Uma folha simples pra anotar 3 coisas boas por dia — mesmo nos dias difíceis.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-emerald-500 text-xl mt-0.5">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Sub-cards de formatos e suporte */}
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    Formatos & Acesso
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• PDF otimizado p/ celular e imprimível</li>
                    <li>• Download para usar offline</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    Suporte & Garantia
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-gray-600">
                    <li>• Plano B de 3 minutos</li>
                    <li>• Garantia incondicional de 7 dias</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          {/* Valores e CTA */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border bg-[#ebd2ae] text-center">
              <p className="text-sm uppercase tracking-wide opacity-90">
                Valor somado
              </p>
              <p className="text-3xl md:text-4xl font-extrabold line-through decoration-2">
                R$ 275
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-emerald-300 bg-emerald-500 text-center">
              <p className="text-sm uppercase tracking-wide text-emerald-100">
                Hoje
              </p>
              <p className="text-3xl md:text-4xl font-extrabold text-emerald-100">
                R$ 27,90
              </p>
              <p className="text-xs text-gray-100 mt-1">ou 3x de R$ 10,59</p>
            </div>
            <div className="p-6 rounded-2xl border border-red-300 bg-red-100 text-center">
              <p className="text-sm uppercase tracking-wide text-red-600">
                Após o prazo
              </p>
              <p className="text-xl font-extrabold text-red-600">
                R$ 97 (previsto)
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Bônus sujeitos a encerramento
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">⚡ Acesso imediato</div>
              <div className="flex items-center gap-2">🔒 Pagamento seguro</div>
              <div className="flex items-center gap-2">
                🛡️ 7 dias de garantia
              </div>
              <div className="flex items-center gap-2">💳 Cartão • Pix</div>
            </div>
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="inline-flex items-center justify-center w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-emerald-500 rounded-full shadow-lgbg-emerald-600 transition-colors flex-wrap text-center"
            >
              QUERO TUDO ISSO POR R$27,90 →
            </a>
            <p className="text-xs text-gray-600 mt-2 pb-5">
              Leva menos de 2 minutos para começar
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#ebd2ae] pt-10">
        <div className="text-center space-y-8 max-w-6xl mx-auto section-container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bônus Exclusivos{" "}
            <span className="text-emerald-500">(por tempo limitado)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Presentes que aceleram sua paz diária e te acompanham nos dias mais
            corridos.
          </p>

          {/* Grid de Bônus */}
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Bônus 1 – Guia de Orações de Uma Mãe Atípica",
                desc: "Orações sinceras e curtas para os dias em que você não tem forças nem palavras. Quando tudo estiver pesado demais, este guia será sua voz diante de Deus.",
              },
              {
                title: "Bônus 2 – Cartões de Fé para Dias Tempestuosos",
                desc: "Palavras bíblicas de encorajamento para imprimir ou guardar no celular. Um refúgio rápido para lembrar que Deus está com você — mesmo no meio da tempestade.",
              },
              {
                title: "Bônus 3 – Diário da Gratidão Atípica",
                desc: "Mesmo em dias caóticos, sempre há algo bom para lembrar. Este diário traz um espaço simples para você registrar 3 motivos de gratidão por dia — fortalecendo sua fé e mudando seu foco para o que realmente importa.",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="p-6 bg-gray-100 rounded-xl border border-gray-300 text-left space-y-2"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>

          {/* Oferta de lançamento */}
          <div className="p-5 max-w-3xl mx-auto rounded-xl border-2 border-red-500 bg-red-100 mt-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xl">⏳</span>
              <p className="font-bold text-red-500">Oferta de lançamento</p>
            </div>
            <p className="text-sm text-gray-900">
              Bônus válidos para as <strong>primeiras 100 compras</strong> ou{" "}
              <strong>até hoje às 23:59</strong> — o que acontecer primeiro.
              Depois, o investimento previsto será de{" "}
              <strong className="text-red-500 text-2xl font-extrabold">
                R$97
              </strong>{" "}
              e os bônus poderão sair da oferta.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-emerald-500 rounded-full shadow-lg transition-colors flex justify-center flex-wrap text-center"
            >
              NÃO PERCA! SEU DEVOCIONAL COMEÇA AGORA!
            </a>
            <p className="text-xs text-gray-600 mt-2 pt-2 pb-4">
              Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <section id="garantia" className="section-container bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">🛡️</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Garantia Incondicional de 7 Dias
            </h2>
          </div>

          <div className="p-6 bg-gray-100 rounded-xl border border-gray-300 text-left space-y-4">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Você tem 7 dias para experimentar o devocional e sentir como ele
              transforma suas manhãs, sua fé e suas emoções. Se, por qualquer
              motivo, você sentir que ele não foi feito para você, devolveremos
              100% do seu dinheiro. Sem perguntas, sem julgamentos. <br />
              <br />É um passo de fé... com total segurança.
            </p>
            <p className="text-xs text-gray-500">
              Este material é de apoio emocional e espiritual e{" "}
              <strong>não substitui</strong> acompanhamento médico, psicológico
              ou terapêutico.
            </p>
          </div>

          <a
            href="https://pay.cakto.com.br/37z4v27_589100"
            className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-emerald-500 rounded-full shadow-lg transition-colors flex justify-center flex-wrap text-center"
          >
            MENOS EXAUSTÃO, MAIS FÉ: COMECE HOJE!
          </a>
          <p className="text-xs text-gray-500 mt-2">7 dias de garantia</p>
        </div>
      </section>

      <section className="w-full bg-[#ebd2ae] pt-10">
        <div className="space-y-8 max-w-6xl mx-auto text-center section-container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Mães que já encontraram paz
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Depoimentos reais de quem aplicou o passo a passo em dias comuns (e
            caóticos).
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-200 text-gray-900">
            <div
              className="flex items-center text-yellow-400"
              aria-label="Avaliação média 4.9 de 5"
            >
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="text-sm">
              4,9/5 • <strong>+572</strong> avaliações verificadas
            </span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="hidden sm:inline text-sm text-green-600">
              1.340+ mães em 30 dias
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 text-left">
            {/* Depoimento 1 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Patricia-80x80-1.webp"
                  alt="Foto de Tatiane M."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Tatiane M., mãe do Rafa (6 anos, TEA nível 2)
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “Eu chorava quase todos os dias sem saber como continuar.
                    Esse devocional me trouxe paz, direção e o lembrete de que
                    Deus está comigo — mesmo quando tudo parece desmoronar.
                    Agora, minhas manhãs têm outro sentido.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      ⏱️ 12 dias de uso
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🙏 Recomeço espiritual
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🌅 Manhãs com propósito
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Depoimento 2 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Juliana-Costa-80x80-1.webp"
                  alt="Foto de Renata S."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Renata S., mãe solo da Lívia (TEA nível 1)
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “É a primeira vez que me sinto compreendida como mãe
                    atípica. As palavras desse devocional tocam exatamente onde
                    dói, mas com leveza e fé. Me sinto mais forte a cada dia.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🧠 Identificação profunda
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      📖 Reflexões que tocam
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      💪 Força emocional
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Depoimento 3 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Ana-Clara-80x80-1.webp"
                  alt="Foto de Elisângela R."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Elisângela R., mãe do Pedro (4 anos, não-verbal)
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “Fazia meses que eu não orava. Me sentia distante de Deus,
                    esgotada e culpada. Esse devocional me devolveu o hábito de
                    conversar com Ele e entender que não estou sozinha nessa
                    jornada.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🤲 Reconexão com Deus
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      💧 Cura espiritual
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🫂 Mãe restaurada
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Depoimento 4 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Carmen-Rodriguez-80x80-1.webp"
                  alt="Foto de Carla T."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Carla T., cuidadora em tempo integral
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “A rotina aqui é pesada e não consigo parar para nada. O
                    devocional me mostrou que até 5 minutos podem mudar o meu
                    dia. É rápido, mas me preenche como um culto inteiro.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      ⏳ 5 minutos transformadores
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🕯️ Paz no caos
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🌿 Rotina com propósito
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Depoimento 5 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Maria-Jose-Vega-80x80-1.webp"
                  alt="Foto de Vanessa D."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Vanessa D., mãe de dois (um com TEA e outro típico)
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “Vivo dividida entre dois mundos: o autismo e o ‘normal’.
                    Esse devocional é o único lugar onde consigo respirar e
                    lembrar que eu também importo. Gratidão define.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      ⚖️ Mãe de múltiplos
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      💓 Espaço de autocuidado
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🙏 Recomeço diário
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Depoimento 6 */}
            <article className="p-4 md:p-6 bg-white rounded-xl border border-gray-300">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <img
                  src="https://webessencial.com/wp-content/uploads/2025/09/Sofia-Hernandez-80x80-1.webp"
                  alt="Foto de Luciana B."
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 leading-snug">
                    Luciana B., mãe do Henrique (TEA nível 3)
                  </h3>
                  <div className="mt-1">
                    <span className="inline-block px-2 py-1 text-xs rounded bg-green-100 text-green-600 font-semibold">
                      Verificado
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 italic">
                    “Passei por um burnout e achei que não teria mais forças.
                    Esse material me reconectou com Deus e comigo mesma. Leio
                    todos os dias, mesmo que seja uma página só. É meu respiro.”
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🛑 Pós-burnout
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      💗 Reconexão interior
                    </li>
                    <li className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                      🌬️ Respiro diário
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div className="pt-2">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-emerald-500 rounded-full shadow-lg transition-colors flex justify-center flex-wrap text-center"
            >
              NÃO PERCA! SEU DEVOCIONAL COMEÇA AGORA!
            </a>
            <p className="text-xs text-gray-500 mt-4 pb-5">
              Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section-container bg-white py-10">
        <div className="space-y-8 max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Dúvidas frequentes
          </h2>

          <div className="space-y-3">
            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Como recebo após a compra?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Assim que o pagamento é confirmado, você recebe por e-mail o
                link do <strong>PDF interativo</strong> (usar no celular/Tablet
                ou imprimir), os <strong>áudios do devocional</strong>, acesso à{" "}
                <strong>comunidade SOS</strong> e seus <strong>bônus</strong>. É
                imediato.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Preciso de muito tempo livre?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Não. O método cabe na rotina imprevisível:{" "}
                <strong>10 minutos por dia</strong> e, nos dias caóticos, você
                usa o <strong>Plano B (3 min)</strong>.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  E se eu não conseguir fazer todos os dias?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Tudo bem! O SOS não exige perfeição. Você pode{" "}
                <strong>pular, voltar ou repetir</strong> sem culpa. É
                acolhimento, não cobrança.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Funciona para mães de crianças de todas as idades e níveis de
                  suporte?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Sim. Há relatos de mães com filhos de{" "}
                <strong>3 a 15 anos</strong>, verbais e não-verbais. As práticas
                são simples e se <strong>adaptam</strong> à sua realidade.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Sou católica/evangélica/espiritualizada. Serve para mim?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Sim. O conteúdo é baseado em <strong>princípios de fé</strong> e
                acolhimento. Ele respeita sua caminhada e aproxima você de Deus
                sem julgamentos.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Posso usar no celular? Precisa de internet?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Sim. O PDF abre em qualquer smartphone. Você também pode{" "}
                <strong>baixar para acessar offline</strong>. E, se preferir,
                pode <strong>imprimir</strong>.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Posso usar com meu marido/companheiro ou compartilhar com a
                  família?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Pode sim vivenciar as práticas em família. O acesso é
                individual, mas algumas páginas trazem{" "}
                <strong>ações de apoio familiar</strong> para fazerem juntos.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  E se eu não gostar?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Você tem <strong>7 dias de garantia incondicional</strong>. Se
                não sentir acolhimento e paz, <strong>reembolsamos 100%</strong>{" "}
                sem burocracia.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Já tentei outros devocionais e desisti. O que esse tem de
                  diferente?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                Ele foi criado <strong>exclusivamente</strong> para mães
                atípicas. Linguagem simples, <strong>prática guiada</strong> e
                um <strong>Plano B de 3 minutos</strong> para os dias mais
                difíceis.
              </p>
            </details>

            <details className="group rounded-xl border border-gray-300 bg-gray-50 px-5 py-4">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-gray-900">
                  Quais formas de pagamento existem?
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.112l3.71-3.88a.75.75 0 111.08 1.04l-4.24 4.43a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </summary>
              <p className="mt-3 text-sm md:text-base leading-6 text-gray-500">
                <strong>Cartão</strong> (com parcelamento), <strong>Pix</strong>{" "}
                e <strong>Boleto</strong>. O acesso é liberado logo após a
                confirmação do pagamento.
              </p>
            </details>
          </div>

          <div className="text-center pt-6">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-primary rounded-full shadow-lg bg-emerald-600 transition-colors flex justify-center flex-wrap text-center"
            >
              PRONTO(A) PARA COMEÇAR HOJE →
            </a>
            <p className="text-xs text-gray-500 mt-2 pt-2">
              Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#ebd2ae] pt-10 px-4 sm:px-6 md:px-8">
        <div className="text-center space-y-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl">⏰</span>
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-destructive">
              ÚLTIMA CHAMADA
            </h2>
          </div>

          <div
            id="countdown-timer-final"
            className="my-6 countdown-container bg-destructive/10"
            aria-live="polite"
          >
            <div className="flex justify-center space-x-2 md:space-x-4 text-center font-bold text-foreground max-w-xl mx-auto">
              {["dias", "horas", "minutos", "segundos"].map((unit, idx) => (
                <div
                  key={idx}
                  className="flex-1 p-3 md:p-4 rounded-lg countdown-box border border-border/60"
                >
                  <span className="block text-1xl md:text-2xl text-destructive">
                    {format(timeLeft[unit as keyof TimeLeft])}
                  </span>
                  <span className="block text-xs md:text-sm text-muted-foreground mt-1">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-destructive/10 border-2 border-destructive rounded-xl text-left space-y-3">
            <p className="text-foreground font-medium">Após este prazo:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-destructive">❌</span>
                Preço previsto retorna para <strong>R$97</strong>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">❌</span>
                Bônus exclusivos podem sair da oferta
              </li>
              <li className="flex items-center gap-2">
                <span className="text-destructive">❌</span>
                Acesso à comunidade pode fechar temporariamente
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Oferta de lançamento válida para as{" "}
              <strong>primeiras 100 compras</strong> ou até{" "}
              <strong>hoje às 23:59</strong> — o que ocorrer primeiro.
            </p>
          </div>

          <a
            href="https://pay.cakto.com.br/37z4v27_589100"
            className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-emerald-600 rounded-full shadow-lg hover:bg-emerald-700 transition-colors flex justify-center flex-wrap text-center"
          >
            QUERO MEUS 10 MINUTOS DE PAZ AGORA →
          </a>
          <p className="text-xs text-muted-foreground pb-5">
            Acesso instantâneo. Comece hoje. Risco zero.
          </p>
        </div>
      </section>

      <section id="ps" className="section-container bg-peaceful py-10 px-5">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <header className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              P.S.
            </h3>
            <p className="text-foreground leading-relaxed">
              Você merece paz. Você merece um momento só seu. Você merece se
              reconectar com Deus <strong>sem culpa</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              O <strong>Devocional SOS</strong> foi feito para você que ama além
              dos limites, mas às vezes esquece de amar a si mesma. Não é sobre
              perfeição: é sobre dar <strong>um passo de paz por vez</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              Sua exaustão não é fracasso — é um pedido de cuidado. Se tudo que
              você tiver hoje forem <strong>3 minutos</strong>, eles já podem
              ser o recomeço.
            </p>
            <p className="font-semibold text-foreground">
              Não espere o esgotamento total para agir.
            </p>
          </header>

          <div className="space-y-2">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-primary rounded-full shadow-lg bg-emerald-600 transition-colors flex justify-center text-center"
            >
              ESVAZIE A CULPA: UM DEVOCIONAL PARA VOCÊ!
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-6 h-6 text-pink-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="text-xl font-semibold">Devocional SOS</span>
          </div>

          <p className="text-gray-400">
            Um devocional feito para você encontrar paz e reconexão com Deus.
          </p>

          <p className="text-sm text-gray-500">
            © 2025 Devocional SOS. Todos os direitos reservados.
            <br />
            Este material é de apoio emocional e espiritual e não substitui
            acompanhamento médico, psicológico ou terapêutico.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
