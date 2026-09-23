import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "施工事例 | 株式会社金井工芸鋳造所",
  description:
    "株式会社金井工芸鋳造所がこれまでに手がけた施工事例をご紹介します。仏具や美術工芸品など、鋳造によるものづくりをご覧いただけます。",
};

const works = [
  {
    image: "/works/work01.jpg",
    number: "01",
    title: "馬の銅像",
    description:
      "馬の姿胸から上をかたちにした銅像。全体像よりサイズダウンして細部まで丁寧に仕上げ、力強さと躍動感を表現しています。",
    position: "center 20%",
  },
  {
    image: "/works/work02.jpg",
    number: "02",
    title: "施工事例",
    description:
      "鋳造の技術を活かし、完全オーダーの金具の制作事例です。",
  },
  {
    image: "/works/work03.jpg",
    number: "03",
    title: "伏見稲荷大社の眷属像",
    description:
      "伏見稲荷大社の入り口に存在感を放つ眷属像。鋳造によって細かな造形を表現し、歴史ある空間にふさわしい姿に仕上げています。",
  },
  {
    image: "/works/work04-new.jpg",
    number: "04",
    title: "競走馬銅像",
    description:
      "競走馬の姿をかたどった銅像。筋肉の躍動や馬体の細かな表情まで丁寧に表現した一点ものの銅像です。",
    fit: "contain",
  },
  {
    image: "/works/work05.jpg",
    number: "05",
    title: "施工事例",
    description:
      "伝統的な鋳造技法を用い、素材の持つ風合いを活かして仕上げた制作事例です。",
  },
  {
    image: "/works/work06.jpg",
    number: "06",
    title: "オブジェ・銅像",
    description:
      "空間を彩るオブジェ・銅像。造形の細部にまでこだわり、存在感のある作品に仕上げています。",
    position: "center 20%",
  },
  {
    image: "/works/work07.jpg",
    number: "07",
    title: "龍口の吐水口",
    description:
      "龍をかたどった吐水口。細かな造形と鋳造ならではの質感を活かし、実用性と意匠性を兼ね備えています。",
  },
  {
    image: "/works/work08.jpg",
    number: "08",
    title: "仏像",
    description:
      "仏像の造形を丁寧に鋳造した制作事例。穏やかな表情や細部の意匠を大切に仕上げています。",
  },
  {
    image: "/works/work09.jpg",
    number: "09",
    title: "眷属像",
    description:
      "寺社に安置される眷属像。伝統的な造形を受け継ぎながら、鋳造によって細部まで丁寧に仕上げています。",
    fit: "contain",
  },
  {
    image: "/works/work10.jpg",
    number: "10",
    title: "風鐸",
    description:
      "寺院などの軒先に吊るされる風鐸。伝統的な意匠を大切にし、鋳造ならではの重厚感を持たせています。",
  },
  {
    image: "/works/work11.jpg",
    number: "11",
    title: "仏像",
    description:
      "祈りの場に置かれる仏像。造形の美しさと鋳造品ならではの質感を大切に仕上げています。",
    position: "center 20%",
  },
  {
    image: "/works/work12.jpg",
    number: "12",
    title: "水煙",
    description:
      "塔の上部を飾る水煙。細やかな装飾を鋳造によってかたちにし、建築を彩る意匠として仕上げています。",
    position: "center 20%",
  },
];

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#292722]">
      {/* Header */}
      <header className="border-b border-[#292722]/10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
          <a
            href="/"
            className="text-2xl font-serif font-semibold tracking-[0.06em] sm:text-3xl"
          >
            株式会社金井工芸鋳造所
          </a>
        </div>
      </header>

      {/* Works */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] text-[#8b7c62]">
              WORKS
            </p>

            <h1 className="mt-5 text-3xl font-light tracking-[0.12em] sm:text-4xl">
              施工事例
            </h1>

            <div className="mt-8 h-px w-16 bg-[#8b7c62]" />

            <p className="mt-8 max-w-2xl text-sm leading-8 tracking-wider text-[#625e56] sm:text-base">
              金井工芸鋳造所がこれまでに手がけてきた
              <br className="hidden sm:block" />
              鋳造品、美術工芸品の施工事例をご紹介します。
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((work) => (
              <article key={work.image}>
                <div className="group relative aspect-[3/4] overflow-hidden bg-[#e7e1d6]">
                  <img
                    src={work.image}
                    alt={`金井工芸鋳造所 施工事例 ${work.number}`}
                    className={`h-full w-full ${
                      work.fit === "contain" ? "object-contain" : "object-cover"
                    } transition duration-700 group-hover:scale-[1.03]`}
                 />
                </div>

                <div className="mt-5">
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-[0.2em] text-[#8b7c62]">
                      {work.number}
                    </span>

                    <div className="h-px w-8 bg-[#292722]/20" />

                    <h2 className="text-sm font-medium tracking-wider">
                      {work.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-sm leading-7 tracking-wide text-[#625e56]">
                      {work.description}
                 </p>
              </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="border-t border-[#292722]/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <a
            href="/"
            className="text-sm tracking-wider text-[#625e56] transition hover:text-[#292722]"
          >
            ← トップページへ戻る
          </a>
        </div>
      </section>
    </main>
  );
}