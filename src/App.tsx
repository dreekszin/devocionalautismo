import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Toast = {
  id: number;
  name: string;
  city: string;
  product: string;
  time: string;
  image: string;
};

function App() {
  const precoRef = useRef<HTMLElement | null>(null);

  const scrollToPreco = () => {
    precoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toasts: Toast[] = [
    {
      id: 1,
      name: "Yasmin",
      city: "Vitória-ES",
      product: "Devocional Força de Mãe",
      time: "há 1 hora",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 2,
      name: "Patrícia",
      city: "Rio de Janeiro-RJ",
      product: "Checklist de Autocuidado",
      time: "há 2 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 3,
      name: "Ana",
      city: "São Paulo-SP",
      product: "Planner Emocional",
      time: "há 3 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 4,
      name: "Juliana",
      city: "Belo Horizonte-MG",
      product: "Guia de Crises",
      time: "há 4 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 5,
      name: "Mariana",
      city: "Curitiba-PR",
      product: "Devocional Força de Mãe",
      time: "há 5 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 6,
      name: "Carla",
      city: "Fortaleza-CE",
      product: "Checklist de Autocuidado",
      time: "há 6 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 7,
      name: "Vanessa",
      city: "Recife-PE",
      product: "Planner Emocional",
      time: "há 7 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 8,
      name: "Fernanda",
      city: "Porto Alegre-RS",
      product: "Guia de Crises",
      time: "há 8 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 9,
      name: "Luciana",
      city: "Salvador-BA",
      product: "Devocional Força de Mãe",
      time: "há 9 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 10,
      name: "Patrícia",
      city: "Manaus-AM",
      product: "Checklist de Autocuidado",
      time: "há 10 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 11,
      name: "Renata",
      city: "Goiânia-GO",
      product: "Planner Emocional",
      time: "há 11 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 12,
      name: "Sofia",
      city: "Florianópolis-SC",
      product: "Guia de Crises",
      time: "há 12 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 13,
      name: "Camila",
      city: "Natal-RN",
      product: "Devocional Força de Mãe",
      time: "há 13 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 14,
      name: "Aline",
      city: "Maceió-AL",
      product: "Checklist de Autocuidado",
      time: "há 14 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
    {
      id: 15,
      name: "Isabela",
      city: "Belém-PA",
      product: "Planner Emocional",
      time: "há 15 horas",
      image: "/images/Capa-devocional-tea-30.webp",
    },
  ];

  const [currentToast, setCurrentToast] = useState<number | null>(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentToast(toasts[index].id);

      // Faz o toast sumir após 2s
      setTimeout(() => {
        setCurrentToast(null);
      }, 3000);

      index = (index + 1) % toasts.length;
    }, 10000); // a cada 5s aparece um novo toast

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <section className="pt-0 bg-[#f5f1ea]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="rounded-md flex flex-col md:flex-row items-center bg-[#f5f1ea] p-1">
              {/* Texto */}
              <div className="order-2 md:order-1 md:w-1/2 text-left p-4">
                <h1 className="text-2xl text-center md:text-3xl font-extrabold leading-tight text-foreground mb-6">
                  Um devocional feito para fortalecer o coração das mães de
                  crianças com autismo (TEA).
                </h1>
                <p className="text-center text-base md:text-xl text-muted-foreground leading-relaxed mb-4">
                  Mesmo nos dias mais pesados da maternidade atípica, há
                  descanso em Deus.
                </p>
                <p className="text-center text-base md:text-xl text-muted-foreground leading-relaxed">
                  Este devocional foi feito para lembrar que você não caminha
                  sozinha: nas noites de insônia, nas lágrimas silenciosas e nas
                  horas de incerteza, Ele permanece ao seu lado.
                </p>

                <div className="flex justify-center pt-4 max-w-xl">
                  <button
                    onClick={scrollToPreco}
                    rel="noopener noreferrer"
                    className="w-full max-w-xl px-6 py-4 rounded-full text-white bg-[#0B6856] font-extrabold text-base md:text-lg shadow-lg text-center"
                    aria-label="Comprar o devocional Esvazie a Culpa"
                    title="Esvazie a Culpa: Um Devocional para Você"
                  >
                    ESVAZIE A CULPA: UM DEVOCIONAL PARA VOCÊ!
                  </button>
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
                    Mais de <strong>1.540 mães</strong> já recuperaram sua paz
                    em 15 dias
                  </span>
                </p>
              </div>

              {/* Imagem */}
              <figure className="order-1 md:order-2 md:w-1/2 flex justify-center">
                <img
                  src="/images/first.jpg"
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
                    A rotina intensa não dá pausa — sua energia nunca parece ser
                    suficiente.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Sente culpa só de pensar em cuidar de você mesma.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Parece errado parar por alguns minutos quando seu filho
                    precisa tanto de você.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Carrega sua exaustão em silêncio.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Poucos entendem o que você vive — e você segue no automático
                    para não desmoronar.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Acredita que está falhando como mãe e como mulher de fé.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Ora, busca forças… mas ainda se sente perdida e sem direção.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Já investiu em terapias e métodos que prometiam milagres.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Alguns ajudaram, mas no fundo você continua sobrecarregada
                    no dia a dia.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Tem medo do futuro do seu filho.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Nem mesmo nas orações encontra toda a paz que deseja.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Já tentou guias e devocionais, mas nenhum virou prática
                    constante.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Muita teoria, pouca aplicação no seu cotidiano corrido.
                  </p>
                </article>

                <article className="p-5 bg-white rounded-lg text-left border border-gray-300">
                  <p className="font-semibold text-gray-900">
                    Tenta controlar tudo sozinha.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cada crise desestabiliza seu coração, e você sente que não
                    tem forças para dar o próximo passo.
                  </p>
                </article>
              </div>

              <div className="p-6 bg-[#f5f1ea] text-center max-w-2xl mx-auto rounded-xl">
                <p className="text-lg italic font-medium text-black">
                  “Ele fortalece o cansado e dá grande vigor ao que está sem
                  forças... mas os que esperam no Senhor renovam as suas forças.
                  Voam alto como águias; correm e não ficam exaustos, andam e
                  não se cansam.”
                </p>
                <p className="text-sm mt-2 text-black/90">Isaías 40:29-31</p>
              </div>
            </div>
            <section className="p-6 mt-5 w-full bg-[#f5f1ea] pt-10">
              <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8 items-center px-4">
                {/* Texto e Lista */}
                <div className="space-y-6 md:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Como funciona o{" "}
                    <span className="text-[#0B6856]">
                      {" "}
                      Devocional Força de Mãe
                    </span>{" "}
                    na prática?
                  </h2>
                  <p className="text-lg text-gray-700">
                    Em apenas alguns minutos por dia, este devocional vai
                    renovar sua fé, aliviar seu coração sobrecarregado e lembrar
                    que você não está sozinha: você é uma mãe extraordinária,
                    escolhida por Deus para esta jornada especial.
                  </p>

                  <ul className="space-y-4">
                    {[
                      {
                        title: "Restaure sua conexão com Deus",
                        description:
                          "Mesmo nos dias em que sua fé parece pequena, encontre aqui um espaço seguro de reencontro e esperança.",
                      },
                      {
                        title: "Receba alívio emocional verdadeiro",
                        description:
                          "Respire fundo. Neste devocional você encontrará paz e clareza quando o peso parecer insuportável.",
                      },
                      {
                        title: "Libere a culpa ao cuidar de si mesma",
                        description:
                          "Descubra que o autocuidado também é amor — e parte essencial do cuidado com seu filho.",
                      },
                      {
                        title: "Sinta-se acolhida e guiada",
                        description:
                          "Permita-se ser conduzida pela Palavra, mesmo quando as dúvidas e medos tentarem dominar.",
                      },
                      {
                        title: "Recarregue sua força interior",
                        description:
                          "Cada reflexão será uma dose de fé, coragem e paz para continuar sua caminhada com confiança.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div>
                          <p className="font-semibold text-gray-900">
                            <span className="text-[#0B6856] text-xl mt-1">
                              💚
                            </span>{" "}
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
                    <button
                      onClick={scrollToPreco}
                      className="w-full sm:w-auto px-6 py-4 text-xl font-bold text-white bg-[#0B6856] rounded-full shadow-lg flex justify-center text-center"
                    >
                      10 MINUTOS DE PAZ: RENOVE-SE HOJE!
                    </button>
                  </div>
                </div>

                {/* Imagem */}
                <figure className="flex justify-center md:order-1">
                  <img
                    loading="lazy"
                    src="/images/exemplo-na-pratica-568x710-1.webp"
                    alt="Exemplo na prática: Versículo, Contexto, Ação, Oração e Espaço para escrever no Devocional Força de Mãe"
                    className="rounded-xl shadow-lg w-full max-w-[560px] aspect-[4/5] object-cover"
                  />
                </figure>
              </div>

              {/* Destaque final */}
              <div className="p-6 text-center max-w-2xl mx-auto rounded-xl mt-8">
                <p className="text-lg italic font-medium text-black">
                  “Sabemos que sua rotina é intensa. Por isso, cada devocional
                  foi criado para caber nos intervalos da vida real — entre uma
                  crise e outra, entre a terapia e o jantar. Em apenas 5
                  minutos, você encontra alívio, paz e direção.”
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
                highlight: "soltas",
                description:
                  "Você até encontra ajuda aqui e ali, mas nada conversa entre si.",
                missing:
                  "O que falta: integrar fé + prática guiada + contexto TEA.",
              },
              {
                emoji: "📱",
                title: "Grupos que viram só ",
                highlight: "desabafo",
                description:
                  "São acolhedores, mas raramente trazem um passo a passo aplicável.",
                missing:
                  "O que falta: um roteiro simples para usar em meio ao caos.",
              },
              {
                emoji: "📖",
                title: "Devocionais ",
                highlight: "genéricos",
                description:
                  "Bonitos, mas que não falam de crises, birras ou rotina imprevisível.",
                missing:
                  "O que falta: conteúdo feito para mães de crianças com TEA.",
              },
              {
                emoji: "⏱️",
                title: "Falta de ",
                highlight: "constância",
                description: "Sem um formato rápido, o hábito não se sustenta.",
                missing:
                  "O que falta: uma rotina curta de 10 minutos que comece e termine.",
              },
              {
                emoji: "💬",
                title: "Conselhos ",
                highlight: "bem-intencionados",
                description:
                  "São válidos, mas muitas vezes não cabem na sua realidade.",
                missing:
                  "O que falta: práticas específicas para momentos reais.",
              },
              {
                emoji: "💔",
                title: "Cuidado sem ",
                highlight: "espiritualidade",
                description: "A terapia ajuda, mas nem sempre inclui sua fé.",
                missing:
                  "O que falta: unir fé às ferramentas de regulação emocional.",
              },
              {
                emoji: "🔄",
                title: "Rotina ",
                highlight: "imprevisível",
                description:
                  "Quando tudo muda, seu plano de dia cai por terra.",
                missing:
                  "O que falta: um Plano B de 3 minutos para crises repentinas.",
              },
              {
                emoji: "❌",
                title: "Tentar dar ",
                highlight: "conta sozinha ",
                description:
                  "Cada crise do seu filho te desestabiliza — e você sente que não tem direção.",
                missing:
                  "O que falta: um passo a passo claro para não carregar tudo sozinha.",
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
                    <p className="mt-2 text-xs font-semibold text-[#0B6856]">
                      {item.missing}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Destaque final */}
          <div className="p-6 bg-[#f5f1ea] text-center max-w-2xl mx-auto rounded-xl mt-8">
            <p className="text-lg italic font-medium text-black">
              <strong>
                Devocional Força de Mãe: fé renovada, passos práticos e
                acolhimento em só 10 minutos por dia.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="honestidade" className="w-full bg-[#f5f1ea] pt-10 pb-5">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Antes de continuar,{" "}
            <span className="text-[#0B6856]">precisamos ser honestos</span> com
            você:
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
              <h3 className="text-xl font-bold text-[#0B6856] mb-4">
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
                    <span className="text-[#0B6856] text-lg mt-0.5">✅</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-700">
                Já ajudou <strong>1.540+ mães</strong> a sentirem paz e clareza
                em 15 dias.
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
              Tudo o que você recebe ao entrar no
              <span className="text-[#0B6856]"> Devocional Força de Mãe:</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Seu kit completo de apoio e fé na maternidade atípica
            </p>
          </header>

          {/* Grid de cards principais */}
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Devocional Força de Mãe",
                img: "/images/3-products.jpg",
              },
              {
                title: "Checklist de Autocuidado",
                img: "/images/auto.jpg",
              },
              {
                title: "Planner Emocional",
                img: "/images/planner-200x250-1.webp",
              },
              {
                title: "Guia de Crises",
                img: "/images/crises.jpg",
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
        </div>
      </section>
      <section id="preco" ref={precoRef} className="bg-[#f5f1ea] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-4 border-[#0B6856]">
            <div>
              <h2 className="text-2xl font-bold text-[#0B6856] mb-2 text-center">
                PLANO BÁSICO
              </h2>
              <p className="text-gray-700 text-center">
                De <s>R$147,00</s> por apenas
              </p>
              <p className="text-5xl font-extrabold text-[#0B6856] my-4 text-center ">
                R$9,90
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>
                  ✔️ Curso <span className="italic">Força de Mãe</span>
                </li>
                <li>✔️ 6 meses de acesso</li>
              </ul>
            </div>

            <Link
              to={"/oferta"}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-bold transition"
            >
              QUERO ESSA OPÇÃO!
            </Link>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border-4 border-[#0B6856]">
            <div>
              <h2 className="text-2xl font-bold text-[#0B6856] text-center">
                PLANO COMPLETO
                <br /> <span className="font-normal">Super Oferta</span>
              </h2>
              <p className="text-[#0B6856] font-semibold text-center">
                (Melhor Negócio)
              </p>

              <h3 className="font-bold text-lg text-[#0B6856] mt-4">
                Inclui tudo do Plano Básico:
              </h3>
              <ul className="space-y-2 text-gray-700 list-none">
                <li>✔️ Devocional Força de Mãe – 15 Dias de Paz no Caos</li>
                <li>✔️ Checklist de Autocuidado Realista</li>
                <li>✔️ Planner Emocional</li>
              </ul>

              <h3 className="font-bold text-lg text-[#0B6856] mt-4">
                + Todos os Bônus Exclusivos:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>🎁 Guia de Orações de Uma Mãe Atípica</li>
                <li>🎁 Cartões de Fé para Dias Tempestuosos</li>
                <li>🎁 Diário da Gratidão Atípica</li>
              </ul>

              <h3 className="font-bold text-lg text-[#0B6856] mt-4">E mais:</h3>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>Ebook “10 Orações Rápidas para Mães Atípicas”</li>
                <li>Ebook “Produtividade com Fé”</li>
                <li>Ebook “30 Versículos de Força Para Mães Atípicas”</li>
                <li>Ebook “Rotina Espiritual em 5 Minutos”</li>
                <li>Ebook “Como Orar em Meio ao Caos”</li>
                <li>Meditações Guiadas de 5 Minutos</li>
                <li>Cartões de Oração Imprimíveis</li>
                <li>Checklist de Sinais de Exaustão Emocional</li>
                <li>Mini Guia: Como Explicar o Autismo</li>
              </ul>

              <h3 className="font-bold text-lg text-[#0B6856] mt-4">
                Diferenciais do Plano Completo:
              </h3>
              <ul className="space-y-1 text-gray-700 list-none">
                <li>✔️ Acesso vitalício (não expira)</li>
                <li>✔️ Atualizações futuras inclusas</li>
                <li>✔️ Certificado simbólico de conclusão</li>
                <li>✔️ Acesso multi-dispositivo</li>
                <li>✔️ Modo áudio (narrado)</li>
                <li>✔️ Pacote imprimível premium</li>
                <li>✔️ Calendário espiritual de 30 dias</li>
              </ul>
            </div>
            <p className="text-xl  mt-10 text-center">
              De <s>R$390,00</s> por apenas
            </p>
            <p className="text-5xl font-extrabold text-[#0B6856] my-4 text-center">
              R$27,90
            </p>
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="mt-6 bg-[#0B6856] hover:bg-[#095445] text-white text-center py-3 rounded-lg font-bold transition"
            >
              SIM! QUERO ESSA SUPER OFERTA!
            </a>
            <h2 className="mt-3 text-md font-bold text-[#0B6856] text-center">
              APROVEITE AGORA:{" "}
              <span className="font-normal">
                Você <u>NÃO vai encontrar</u> esse preço depois.
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f1ea] pt-10">
        <div className="text-center space-y-8 max-w-6xl mx-auto section-container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Bônus Exclusivos{" "}
            <span className="text-[#0B6856]">(por tempo limitado)</span>
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
          <div className="pt-4 pb-5">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-[#0B6856] rounded-full shadow-lg transition-colors flex justify-center flex-wrap text-center"
            >
              NÃO PERCA! SEU DEVOCIONAL COMEÇA AGORA!
            </a>
          </div>
        </div>
      </section>

      <section id="garantia" className="section-container bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              <span className="text-3xl">🛡️</span> Garantia Incondicional de 7
              Dias
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
        </div>
      </section>

      <section className="w-full bg-[#f5f1ea] pt-10">
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
                  src="/images/Patricia-80x80-1.webp"
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
                  src="/images/Juliana-Costa-80x80-1.webp"
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
                  src="/images/Ana-Clara-80x80-1.webp"
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
                  src="/images/Carmen-Rodriguez-80x80-1.webp"
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
                  src="/images/Maria-Jose-Vega-80x80-1.webp"
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
                  src="/images/Sofia-Hernandez-80x80-1.webp"
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

          <div className="pt-2 pb-5">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-[#0B6856] rounded-full shadow-lg transition-colors flex justify-center flex-wrap text-center"
            >
              NÃO PERCA! SEU DEVOCIONAL COMEÇA AGORA!
            </a>
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
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-primary rounded-full shadow-lg bg-[#0B6856] transition-colors flex justify-center flex-wrap text-center"
            >
              PRONTO(A) PARA COMEÇAR HOJE →
            </a>
            <p className="text-xs text-gray-500 mt-2 pt-2">
              Acesso imediato • 7 dias de garantia
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f1ea] pt-10 px-4 sm:px-6 md:px-8">
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
            className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-[#0B6856] rounded-full shadow-lg hover:bg-[#0B6856] transition-colors flex justify-center flex-wrap text-center"
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
            <p className="text-xl text-foreground leading-relaxed">
              ✨ Você merece paz.
            </p>
            <p className="text-foreground leading-relaxed">
              Você merece um momento só seu. Você merece se reconectar com Deus
              — sem pressa, sem culpa.
            </p>
            <p className="text-foreground leading-relaxed">
              O Devocional Força de Mãe foi criado para você, que dá tudo de si
              todos os dias, mas muitas vezes esquece de cuidar do próprio
              coração. Não se trata de perfeição, mas de passos simples rumo à
              paz.
            </p>
            <p className="text-xl text-foreground leading-relaxed">
              💛 Sua exaustão não é sinal de fraqueza
            </p>

            <p className=" text-foreground">
              — é um lembrete de que você também precisa de cuidado. Mesmo que
              hoje você só tenha 3 minutos, eles já podem ser o início de um
              recomeço.
            </p>
            <p className=" text-foreground">
              Não espere chegar ao limite. Escolha agora respirar, descansar e
              se reencontrar em Deus.
            </p>
          </header>

          <div className="space-y-2">
            <a
              href="https://pay.cakto.com.br/37z4v27_589100"
              className="w-full max-w-full px-4 py-4 text-xl font-bold text-white bg-primary rounded-full shadow-lg bg-[#0B6856] transition-colors flex justify-center text-center"
            >
              ESVAZIE A CULPA: UM DEVOCIONAL PARA VOCÊ!
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-sm text-gray-500">
            © 2025 Devocional Força de Mãe. Todos os direitos reservados.
            <br />
            Este material é de apoio emocional e espiritual e não substitui
            acompanhamento médico, psicológico ou terapêutico.
          </p>
        </div>
      </footer>
      <div>
        {/* Conteúdo principal */}

        {/* Toasts */}
        {toasts.map(
          (toast) =>
            currentToast === toast.id && (
              <div
                key={toast.id}
                aria-live="polite"
                aria-atomic="true"
                className="fixed bottom-6 right-6 z-50 flex flex-col gap-2"
              >
                <div
                  className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow-lg animate-slide-in"
                  role="status"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {toast.name} de {toast.city}{" "}
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded"
                        aria-label="Compra verificada"
                      >
                        ✔ Verificado
                      </span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Comprou <span className="mx-1">•</span> {toast.product}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{toast.time}</p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
