import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logoFull from "@/assets/logo-full.png";
import heroMockup from "@/assets/app-mockup-hero.png";
import heroBrand from "@/assets/hero-logo-brand.png";
import mockGenres from "@/assets/app-mockup-genres.png";
import mockDetail from "@/assets/app-mockup-detail.png";
import mockWatchlist from "@/assets/app-mockup-watchlist.png";
import videoPoster from "@/assets/video-poster.jpg";
import {
  Sparkles,
  Search,
  Bookmark,
  History,
  Tv,
  MessageSquareQuote,
  Clock,
  Target,
  Popcorn,
  Smartphone,
  Play,
  ArrowRight,
  Star,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BORA VER — Seu próximo filme em segundos" },
      {
        name: "description",
        content:
          "O BORA VER encontra filmes perfeitos para você em segundos com recomendações inteligentes baseadas nos seus gostos.",
      },
      { property: "og:title", content: "BORA VER — Seu próximo filme em segundos" },
      {
        property: "og:description",
        content:
          "Pare de perder tempo escolhendo. Receba 3 recomendações perfeitas e comece a assistir.",
      },
    ],
  }),
  component: LandingPage,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <>
      <style>{`
        @keyframes fade-in-logo {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      <div className={`flex items-center justify-start overflow-visible ${className}`}>
        <img
          src={logoFull}
          alt="BORA VER"
          className="object-contain drop-shadow-sm"
          style={{
            height: "240%",
            width: "auto",
            marginLeft: "-15%", // Puxa a logo para a esquerda anulando o espaço vazio da imagem
            filter: "grayscale(100%) brightness(70%) contrast(1000%)",
            mixBlendMode: "screen",
            animation: "fade-in-logo 1.2s ease-out forwards"
          }}
        />
      </div>
    </>
  );
}

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle at 30% 30%, #7c3aed 0%, transparent 60%)" }}
      />
      <div
        className="absolute top-10 right-[-10rem] h-[40rem] w-[40rem] rounded-full blur-3xl opacity-70"
        style={{ background: "radial-gradient(circle at 60% 40%, #2563eb 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-[-12rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle at 50% 50%, #a3e635 0%, transparent 65%)" }}
      />
      <div className="absolute inset-0 opacity-[0.35] grain" />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#problema", label: "Por quê" },
    { href: "#como", label: "Como funciona" },
    { href: "#features", label: "Funcionalidades" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full glass px-4 py-2.5 md:px-6">
        {/* Logo - Extremo Esquerdo */}
        <div className="flex flex-1 items-center justify-start">
          <a href="#top" className="flex items-center h-12 w-48 md:h-14 md:w-56">
            <Logo className="w-full h-full" />
          </a>
        </div>

        {/* Menu - Centro */}
        <nav className="hidden items-center justify-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA - Extremo Direito */}
        <div className="flex flex-1 items-center justify-end">
          <a
            href="https://boraver-app.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
          >
            Baixar app
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <GradientBackdrop />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-white/80">
              <Sparkles className="h-3.5 w-3.5 text-[var(--lime-glow)]" />
              Seu próximo filme em segundos
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gradient md:text-7xl lg:text-[5.5rem]">
              Pare de perder<br />tempo escolhendo.<br />
              <span className="text-white/90">Comece a assistir.</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/65 md:text-lg">
              O BORA VER encontra filmes perfeitos para você com base nos seus gostos, gêneros
              favoritos e preferências pessoais. Receba recomendações inteligentes em segundos
              e descubra o que realmente vale a pena assistir.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10">
              <a
                href="https://boraver-app.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.95rem] font-medium text-black shadow-[0_12px_48px_-8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_60px_-8px_rgba(255,255,255,0.35)]"
              >
                Garantir minha prévia
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto flex items-center justify-center w-full max-w-[560px] aspect-square">
            <div
              className="absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 65%)" }}
            />
            <img
              src={heroBrand}
              alt="BORA VER — Recomendações inteligentes de filmes"
              className="h-full w-full object-cover rounded-3xl shadow-2xl animate-float"
              width={1024}
              height={768}
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={400}>
        <div className="relative mx-auto mt-20 max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass md:grid-cols-4">
            {[
              ["Tempo médio", "< 60s"],
              ["Sugestões por busca", "3"],
              ["Plataformas", "12+"],
              ["Usuários", "20k+"],
            ].map(([k, v]) => (
              <div key={k} className="bg-black/20 px-6 py-5">
                <div className="text-xs uppercase tracking-widest text-white/50">{k}</div>
                <div className="mt-1 text-xl font-medium text-white">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Problem() {
  const cards = [
    { emoji: "😩", title: "Catálogos infinitos", desc: "Você abre várias plataformas e não sabe por onde começar." },
    { emoji: "😵", title: "Muitas opções", desc: "Quanto mais filmes aparecem, mais difícil fica decidir." },
    { emoji: "⏱️", title: "Tempo desperdiçado", desc: "Você passa 20 minutos procurando e acaba assistindo qualquer coisa." },
    { emoji: "🎬", title: "Recomendações genéricas", desc: "As plataformas sugerem filmes que nem combinam com você." },
  ];
  return (
    <section id="problema" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">O problema</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Você passa mais tempo escolhendo do que assistindo?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className="group h-full rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                <div className="text-3xl">{c.emoji}</div>
                <h3 className="mt-4 text-lg font-medium text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Escolha seus gêneros favoritos", desc: "Ficção científica, terror, suspense, romance, ação, drama — você define." },
    { n: "02", title: "Conte seus gostos", desc: "Quanto mais você utiliza, mais inteligentes ficam as recomendações." },
    { n: "03", title: "Receba 3 sugestões perfeitas", desc: "Em vez de centenas, apenas 3 recomendações altamente relevantes." },
    { n: "04", title: "Assista sem perder tempo", desc: "Veja onde o filme está disponível e comece imediatamente." },
  ];
  return (
    <section id="como" className="relative py-28">
      <GradientBackdrop />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Como funciona</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            O jeito mais rápido de encontrar algo para assistir
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative h-full rounded-2xl glass p-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#2563eb)" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Demonstração</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Veja o BORA VER em ação
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-12 aspect-video w-full overflow-hidden rounded-3xl glass-strong">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              poster="https://labs.google/fx/api/og-video/thumbnail/shared/8c28f081-d198-42c4-93b6-fd3da7f73a7c"
            >
              <source
                src="https://labs.google/fx/api/og-video/shared/8c28f081-d198-42c4-93b6-fd3da7f73a7c"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Sparkles, title: "Recomendações Inteligentes", desc: "Sugestões baseadas nos seus gostos reais." },
    { icon: Target, title: "Apenas 3 Opções", desc: "Menos indecisão, mais tempo assistindo." },
    { icon: Search, title: "Busca por Palavra-Chave", desc: "Pesquise \u201Cfilmes de invasão\u201D, \u201Cviagem no tempo\u201D, \u201Ctribunal\u201D." },
    { icon: Bookmark, title: "Watchlist", desc: "Salve filmes que deseja assistir depois." },
    { icon: History, title: "Histórico", desc: "Marque filmes que já assistiu." },
    { icon: Tv, title: "Onde Assistir", desc: "Veja rapidamente em quais plataformas o filme está disponível." },
    { icon: MessageSquareQuote, title: "Descrição Curada", desc: "Cada sugestão explica por que combina com você." },
    { icon: Smartphone, title: "Em poucos toques", desc: "Tudo na palma da mão, sem fricção." },
  ];
  return (
    <section id="features" className="relative py-28">
      <GradientBackdrop />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Funcionalidades</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
            Tudo que você precisa para escolher melhor
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={(i % 4) * 80}>
                <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(37,99,235,0.35))" }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mt-5 text-base font-medium text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const screens = [
    { src: mockGenres, label: "Onboarding & Gêneros" },
    { src: heroMockup, label: "Sugestões" },
    { src: mockDetail, label: "Detalhes do Filme" },
    { src: mockWatchlist, label: "Watchlist" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">A interface</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Uma experiência feita para decidir rápido
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {screens.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="group relative">
                <div
                  className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-60 transition-opacity group-hover:opacity-90"
                  style={{ background: "radial-gradient(circle at 50% 60%, #7c3aed 0%, transparent 65%)" }}
                />
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  width={700}
                  height={1100}
                  className="mx-auto h-auto w-full max-w-[260px] object-contain transition-transform duration-500 group-hover:-translate-y-2"
                />
                <p className="mt-4 text-center text-xs uppercase tracking-widest text-white/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const stats = [
    { icon: Clock, k: "Economize tempo", v: "Pare de gastar 20 minutos escolhendo." },
    { icon: Target, k: "Recomendações relevantes", v: "Baseadas no que você realmente gosta." },
    { icon: Popcorn, k: "Descubra novos filmes", v: "Saia da bolha de sugestões repetidas." },
    { icon: Smartphone, k: "Experiência simples", v: "Tudo em poucos toques." },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Menos tempo procurando.<br />
            <span className="text-gradient">Mais tempo assistindo.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.k} delay={i * 90}>
                <div className="h-full rounded-2xl glass p-6">
                  <Icon className="h-6 w-6 text-[var(--lime-glow)]" />
                  <div className="mt-5 text-base font-medium text-white">{s.k}</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{s.v}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "Eu passava mais tempo procurando do que assistindo. Hoje escolho um filme em menos de um minuto.", name: "Marina S.", role: "Designer" },
    { quote: "As 3 sugestões realmente acertam. Parece que ele me conhece melhor que o algoritmo da Netflix.", name: "Rafael T.", role: "Engenheiro" },
    { quote: "A função ‘onde assistir’ sozinha já vale o app. Simples, rápido, lindo.", name: "Camila L.", role: "Jornalista" },
  ];
  return (
    <section id="depoimentos" className="relative py-28">
      <GradientBackdrop />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Depoimentos</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Quem usa não volta a procurar manualmente
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="h-full rounded-2xl glass p-7">
                <div className="flex gap-0.5 text-[var(--lime-glow)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-medium text-white">{t.name}</span>
                  <span className="text-white/50"> · {t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="download" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] px-8 py-20 md:px-16 md:py-28">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 80% at 30% 30%, #7c3aed 0%, transparent 60%), radial-gradient(60% 80% at 80% 70%, #2563eb 0%, transparent 60%), #0a0814",
            }}
          />
          <div aria-hidden className="absolute inset-0 -z-10 grain opacity-50" />
          <Reveal>
            <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-[1.15] text-gradient md:text-6xl lg:text-7xl">
              Seu próximo filme está a poucos segundos de distância.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base font-medium text-white/70 md:text-lg">
              Descubra filmes incríveis sem perder tempo escolhendo.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex justify-center">
              <a
                href="https://boraver-app.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[0.95rem] font-medium text-black shadow-[0_12px_48px_-8px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_20px_60px_-8px_rgba(255,255,255,0.35)]"
              >
                Garantir prévia
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="h-12 w-48">
            <Logo className="w-full h-full" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/55">
            Recomendações inteligentes de filmes em segundos. Menos scroll, mais cinema.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/45">Produto</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href="#features" className="hover:text-white">Funcionalidades</a></li>
            <li><a href="#como" className="hover:text-white">Como funciona</a></li>
            <li><a href="#depoimentos" className="hover:text-white">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/45">Empresa</div>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><a href="#" className="hover:text-white">Contato</a></li>
            <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-white">Termos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-white/45">Social</div>
          <div className="mt-4 flex gap-3 text-white/75">
            <a href="#" aria-label="Instagram" className="rounded-full glass p-2.5 hover:text-white"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full glass p-2.5 hover:text-white"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full glass p-2.5 hover:text-white"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-white/40">
        © {new Date().getFullYear()} BORA VER. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-white">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <VideoSection />
      <Features />
      <AppShowcase />
      <Benefits />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
