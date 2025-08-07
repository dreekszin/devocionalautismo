import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ChefHat,
  Clock,
  Download,
  Gift,
  Heart,
  Play,
  ShieldCheck,
  Star,
  Timer,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  const [showVideo, setShowVideo] = useState(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Ana Paula",
      location: "São Paulo, SP",
      text: "Minha filha de 8 meses ADOROU as receitas! Finalmente consegui introduzir vegetais sem drama. As dicas de congelamento salvaram minha rotina!",
      rating: 5,
    },
    {
      name: "Carla Mendes",
      location: "Rio de Janeiro, RJ",
      text: "O cardápio semanal é uma mão na roda! Não preciso mais ficar pensando o que fazer para o meu bebê comer. Receitas práticas e nutritivas.",
      rating: 5,
    },
    {
      name: "Luciana Silva",
      location: "Belo Horizonte, MG",
      text: "As 100 receitas são incríveis! Meu filho de 2 anos que era super seletivo agora experimenta de tudo. Recomendo demais!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "As receitas são adequadas para bebês com alergias?",
      a: "Sim! Incluímos opções para diferentes necessidades, incluindo receitas sem glúten, sem lactose e dicas para identificar possíveis alergias.",
    },
    {
      q: "Preciso ter experiência na cozinha?",
      a: "Não! As receitas foram pensadas para mães práticas e ocupadas. Todas têm passo a passo simples e ingredientes fáceis de encontrar.",
    },
    {
      q: "O material funciona para crianças maiores também?",
      a: "Sim! O e-book completo tem receitas para crianças de 6 meses até 6 anos, crescendo junto com seu filho.",
    },
    {
      q: "E se eu não ficar satisfeita?",
      a: "Oferecemos garantia de 7 dias. Se não estiver satisfeita, devolvemos 100% do seu dinheiro, sem perguntas.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <Heart className="text-pink-500 w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">
              Alimentação com Amor
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section with VSL */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ ESPECIAL PARA MÃES AMOROSAS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Transforme a <span className="text-pink-500">Alimentação</span> do
              Seu Bebê
              <br />
              em Momentos de{" "}
              <span className="text-green-500">Alegria e Nutrição</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra como mais de 15.000 mães conseguiram introduzir
              alimentação saudável sem dramas, choros ou desperdício de comida
            </p>
          </div>

          {/* VSL Video Player */}
          <div className="relative bg-black rounded-2xl shadow-2xl mb-8 overflow-hidden">
            {!showVideo ? (
              <div
                className="relative h-80 md:h-96 bg-gradient-to-br from-pink-400 to-green-400 flex items-center justify-center cursor-pointer"
                onClick={() => setShowVideo(true)}
              >
                <div className="text-center">
                  <div className="bg-white rounded-full p-6 shadow-lg mb-4 inline-block hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-pink-500 ml-1" />
                  </div>
                  <p className="text-white font-semibold text-lg">
                    Assista ao vídeo e descubra o segredo
                  </p>
                  <p className="text-pink-100 text-sm mt-2">
                    👆 Clique para assistir (3 min)
                  </p>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔴 AO VIVO
                </div>
              </div>
            ) : (
              <div className="h-80 md:h-96 bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold mb-2">
                    Vídeo Carregando...
                  </p>
                  <p className="text-sm opacity-75">Aguarde um momento</p>
                </div>
              </div>
            )}
          </div>

          {/* Main CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
            <div className="text-center">
              <Gift className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Comece HOJE com nosso E-book Especial
              </h3>
              <p className="text-lg text-gray-600">
                +100 receitas práticas e nutritivas para bebês de 6 a 12 meses
              </p>
            </div>
            <div className="p-8 text-center borde">
              <div className="mb-2">
                <span className="text-3xl font-bold text-gray-400 line-through">
                  R$ 197,90
                </span>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-green-500">
                  R$ 19,90
                </span>
                <p className="text-lg text-gray-600 mt-2">
                  Desconto especial de 90% por tempo limitado!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="text-lg font-semibold text-red-600">
                  Restam apenas 23 vagas com esse desconto!
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-pink-50 rounded-full px-6 py-3">
                <Timer className="w-5 h-5 text-pink-500 mr-2" />
                <span className="font-semibold text-pink-700">
                  Oferta válida por: {String(timeLeft.hours).padStart(2, "0")}:
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Download className="w-6 h-6 inline-block mr-3" />
              QUERO GARANTIR MEU E-BOOK POR R$19,90
            </button>

            <p className="text-sm text-gray-500 mt-4">
              ✅ Sem spam • 📩 Direto no seu e-mail • 💯 Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que mais de 15.000 mães confiam em nós?
            </h2>
            <p className="text-xl text-gray-600">
              Resultados comprovados que transformam a rotina alimentar da
              família
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-pink-50 border border-pink-100">
              <ChefHat className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Receitas Práticas
              </h3>
              <p className="text-gray-600">
                Ingredientes simples que você já tem em casa. Preparo rápido
                para mães ocupadas.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-green-50 border border-green-100">
              <Heart className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Nutrição Completa
              </h3>
              <p className="text-gray-600">
                Desenvolvido com nutricionista especializada em alimentação
                infantil.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-blue-50 border border-blue-100">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Economia de Tempo
              </h3>
              <p className="text-gray-600">
                Cardápios prontos e listas organizadas. Mais tempo para curtir
                seu bebê.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎁 OFERTA ESPECIAL APÓS O DOWNLOAD
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você vai receber no pacote completo
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para uma alimentação infantil sem estresse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Main Product */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-pink-200 relative">
              <div className="absolute -top-4 -right-4 bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg">
                #1
              </div>
              <BookOpen className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                E-book Completo: 100+ Receitas
              </h3>
              <p className="text-gray-600 mb-4">
                Receitas testadas e aprovadas para crianças de 6 meses a 6 anos.
                Inclui papinhas, finger foods, lanches saudáveis e refeições
                completas.
              </p>
            </div>

            {/* Bonus 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <div className="flex items-start mb-4">
                <Gift className="w-8 h-8 text-green-500 mr-3 mt-1" />
                <div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    BÔNUS #1
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cardápio Semanal Pronto
              </h3>
              <p className="text-gray-600 mb-4">
                4 semanas de cardápios balanceados para imprimir e usar. Nunca
                mais fique sem saber o que preparar!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bonus 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <div className="flex items-start mb-4">
                <Gift className="w-8 h-8 text-blue-500 mr-3 mt-1" />
                <div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    BÔNUS #2
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Lista de Compras Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Listas organizadas por categoria para facilitar suas compras.
                Economia de tempo e dinheiro garantida!
              </p>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
              <div className="flex items-start mb-4">
                <Gift className="w-8 h-8 text-purple-500 mr-3 mt-1" />
                <div>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    BÔNUS #3
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mini-curso em Vídeo
              </h3>
              <p className="text-gray-600 mb-4">
                Aprenda sobre introdução alimentar, congelamento e
                armazenamento. 4 vídeos práticos com especialista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que as mães estão falando
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 2.500 avaliações com 5 estrelas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl p-6 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-green-200">
            <ShieldCheck className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Se você não ficar completamente satisfeita com o material,
              devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
              <span className="font-semibold text-green-700">
                Satisfação garantida ou seu dinheiro de volta!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não deixe para amanhã o que pode transformar hoje
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se às milhares de mães que já transformaram a alimentação dos
            seus filhos
          </p>

          <div className="bg-white bg-opacity-10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <Timer className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">
                ⏰ Oferta expira em: {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <p className="text-pink-100">
              Depois deste prazo, o valor volta para R$ 238,00
            </p>
          </div>

          <button className="w-full max-w-lg bg-white text-pink-600 font-bold py-6 px-8 rounded-full text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl transform hover:scale-105 mb-6">
            <ArrowRight className="w-6 h-6 inline-block mr-3" />
            GARANTIR MINHA VAGA POR R$ 47,00
          </button>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center">
              <Users className="w-5 h-5 mr-2" />
              <span>15.000+ mães satisfeitas</span>
            </div>
            <div className="flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 mr-2" />
              <span>7 dias de garantia</span>
            </div>
            <div className="flex items-center justify-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Material aprovado por especialista</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-pink-400 w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">Alimentação com Amor</span>
          </div>
          <p className="text-gray-400 mb-4">
            Transformando a alimentação infantil com carinho e ciência
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Alimentação com Amor. Todos os direitos reservados.
            <br />
            Este produto é comercializado com base na segurança do Hotmart. A
            plataforma não faz controle editorial prévio dos produtos
            comercializados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
