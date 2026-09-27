import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "手がけた鋳造品｜株式会社 金井工芸鋳造所",
  description:
    "株式会社金井工芸鋳造所がこれまでに手がけた鋳造品をご紹介します。仏具、美術工芸品、銅像、寺社関連の鋳造品など、さまざまな制作事例をご覧いただけます。",
};

const works = [
  {
    image: "/works/work01.jpg?v=2",
    number: "01",
    title: "鰐口",
    category: "仏具",
    description:
      "神社や仏堂の正面軒下に吊り下げられ、参拝者が綱を振って打ち鳴らす仏具を鋳造で制作しました。",
    fit: "contain",
  },
  {
    image: "/works/work02.jpg",
    number: "02",
    title: "手がけた鋳造品",
    category: "金具",
    description:
      "鋳造の技術を活かし、完全オーダーの金具を制作した事例です。",
  },
  {
    image: "/works/work03.jpg?v=2",
    number: "03",
    title: "仏像",
    category: "仏具・美術工芸",
    description:
      "仏像の造形を丁寧に鋳造した制作事例。穏やかな表情や細部の意匠を大切に仕上げています。",
  },
  {
    image: "/works/work04-new.jpg",
    number: "04",
    title: "競走馬銅像",
    category: "銅像・モニュメント",
    description:
      "競走馬の姿をかたどった銅像。筋肉の躍動や馬体の細かな表情まで丁寧に表現した一点ものの銅像です。",
    fit: "contain",
  },
  {
    image: "/works/work05.jpg",
    number: "05",
    title: "手がけた鋳造品",
    category: "鋳造品",
    description:
      "伝統的な鋳造技法を用い、素材の持つ風合いを活かして仕上げた制作事例です。",
  },
  {
    image: "/works/work06.jpg",
    number: "06",
    title: "オブジェ・銅像",
    category: "銅像・モニュメント",
    description:
      "空間を彩るオブジェ・銅像。造形の細部にまでこだわり、存在感のある作品に仕上げています。",
    position: "center 20%",
  },
  {
    image: "/works/work07.jpg",
    number: "07",
    title: "龍口の吐水口",
    category: "建築関連鋳物",
    description:
      "龍をかたどった吐水口。細かな造形と鋳造ならではの質感を活かし、実用性と意匠性を兼ね備えています。",
  },
  {
    image: "/works/work08.jpg?v=2",
    number: "08",
    title: "伏見稲荷大社の眷属像",
    category: "寺社関連",
    description:
      "伏見稲荷大社の入り口に存在感を放つ眷属像。鋳造によって細かな造形を表現し、歴史ある空間にふさわしい姿に仕上げています。",
  },
  {
    image: "/works/work09.jpg",
    number: "09",
    title: "眷属像",
    category: "寺社関連",
    description:
      "寺社に安置される眷属像。伝統的な造形を受け継ぎながら、鋳造によって細部まで丁寧に仕上げています。",
    fit: "contain",
  },
  {
    image: "/works/work10.jpg",
    number: "10",
    title: "風鐸",
    category: "寺社関連",
    description:
      "寺院などの軒先に吊るされる風鐸。伝統的な意匠を大切にし、鋳造ならではの重厚感を持たせています。",
  },
  {
    image: "/works/work11.jpg",
    number: "11",
    title: "仏像",
    category: "仏具・美術工芸",
    description:
      "祈りの場に置かれる仏像。造形の美しさと鋳造品ならではの質感を大切に仕上げています。",
    position: "center 20%",
  },
  {
    image: "/works/work12.jpg",
    number: "12",
    title: "水煙",
    category: "寺社関連",
    description:
      "塔の上部を飾る水煙。細やかな装飾を鋳造によってかたちにし、建築を彩る意匠として仕上げています。",
    position: "center 20%",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#292722]">
      {/* Header */}
      <header className="border-b border-[#292722]/10 bg-[#f5f2eb]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
            href="/"
            className="group"
          >
            <span className="block text-lg font-medium tracking-[0.08em] transition-opacity group-hover:opacity-60 sm:text-xl">
              株式会社 金井工芸鋳造所
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#8b7c62]">
              KANAI KOGEI CHUZOSHO
            </span>
          </a>

          <a
            href="/"
            className="text-xs tracking-[0.2em] text-[#625e56] transition-colors hover:text-[#292722]"
          >
            HOME ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#292722] text-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#b6a98f]">
                WORKS
              </p>

              <h1 className="mt-6 text-4xl font-light tracking-[0.12em] sm:text-5xl lg:text-6xl">
                手がけた
                <br />
                鋳造品
              </h1>

              <div className="mt-8 h-px w-16 bg-[#b6a98f]" />
            </div>

            <div className="lg:pb-2">
              <p className="text-sm leading-8 tracking-wider text-[#d8d2c7] sm:text-base">
                仏具、美術工芸品、銅像、寺社関連の鋳造品。
                <br />
                これまでに手がけてきた
                <br className="hidden sm:block" />
                さまざまな制作事例をご紹介します。
              </p>

              <div className="mt-8 flex items-center gap-4 text-[10px] tracking-[0.25em] text-[#8f877a]">
                <span>01</span>
                <span className="h-px w-12 bg-[#8f877a]/50" />
                <span>12 WORKS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="bg-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16 flex items-end justify-between border-b border-[#292722]/10 pb-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] text-[#8b7c62]">
                COLLECTION
              </p>
              <h2 className="mt-3 text-2xl font-light tracking-[0.1em]">
                制作事例
              </h2>
            </div>

            <span className="hidden text-[10px] tracking-[0.25em] text-[#8b7c62] sm:block">
              CRAFTSMANSHIP
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
            {works.map((work) => (
              <article
                key={work.image}
                className="group"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e7e1d6]">
                  <img
                    src={work.image}
                    alt={`金井工芸鋳造所 ${work.title}`}
                    className={`h-full w-full ${
                      work.fit === "contain"
                        ? "object-contain p-4"
                        : "object-cover"
                    } transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                    style={{
                      objectPosition: work.position ?? "center",
                    }}
                  />

                  {/* Number */}
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center bg-[#292722] text-[10px] tracking-[0.2em] text-[#f5f2eb]">
                    {work.number}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#292722]/0 transition-colors duration-500 group-hover:bg-[#292722]/10" />
                </div>

                {/* Text */}
                <div className="mt-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] tracking-[0.25em] text-[#8b7c62]">
                      {work.category}
                    </span>

                    <span className="h-px w-8 bg-[#292722]/20" />
                  </div>

                  <h3 className="mt-3 text-lg font-normal tracking-[0.08em]">
                    {work.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 tracking-wide text-[#625e56]">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#292722] text-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-[#b6a98f]">
                CONTACT
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-[0.12em] sm:text-4xl">
                鋳造について
                <br />
                お気軽にご相談ください。
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 tracking-wider text-[#d8d2c7]">
                仏具・美術工芸品・建築関連鋳物など、
                <br />
                特注品についてもご相談いただけます。
              </p>

              <a
                href="mailto:kanaikogei@gmail.com"
                className="mt-8 flex items-center justify-between border-b border-[#f5f2eb]/30 pb-4 text-sm tracking-[0.12em] transition-colors hover:border-[#f5f2eb]"
              >
                <span>メールでお問い合わせ</span>
                <span className="text-lg">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="border-t border-[#292722]/10 bg-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <a
            href="/"
            className="inline-flex items-center gap-3 text-xs tracking-[0.18em] text-[#625e56] transition-colors hover:text-[#292722]"
          >
            <span>←</span>
            <span>トップページへ戻る</span>
          </a>
        </div>
      </section>
    </main>
  );
}
