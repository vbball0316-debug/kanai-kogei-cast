import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f2eb] text-[#292722]">
      {/* Header */}
      <header className="border-b border-[#292722]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a
           href="#"
           className="text-2xl font-serif font-semibold tracking-[0.06em] sm:text-3xl"
          >
           株式会社金井工芸鋳造所
          </a>

          <nav className="hidden gap-8 text-sm tracking-wider md:flex">
            <a href="#about" className="hover:opacity-60">
              私たちについて
            </a>
            <a href="#business" className="hover:opacity-60">
              事業内容
            </a>
            <a href="#process" className="hover:opacity-60">
              鋳造について
            </a>
            <a href="#company" className="hover:opacity-60">
              会社概要
            </a>
          </nav>

          <a
            href="#contact"
            className="border border-[#292722] px-4 py-2 text-xs tracking-wider hover:bg-[#292722] hover:text-white"
          >
            お問い合わせ
          </a>
        </div>
      </header>

      {/* Hero */}
      <section>
        <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="mb-8 text-sm tracking-[0.3em] text-[#766f63]">
              KANAI KOGEI CHUZOSHO
            </p>

            <h1 className="text-4xl font-light leading-[1.4] tracking-[0.12em] sm:text-5xl lg:text-6xl">
              継承した技術を、
              <br />
              未来へ。
            </h1>

            <div className="mt-10 h-px w-16 bg-[#8b7c62]" />

            <p className="mt-8 max-w-xl text-base leading-8 tracking-wider text-[#625e56]">
              金井工芸鋳造所は、鋳造の技術を活かし
              <br />
              仏具をはじめ、装飾品や建築関連の鋳物などの、
              <br />
              様々な物を鋳造、補修、管理しています。
              <br />
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="金井工芸鋳造所"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#292722] text-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#b5aa98]">
                ABOUT US
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
                私たちについて
              </h2>

              <p className="mt-10 text-xl font-light leading-9 tracking-wider">
                鋳造という技術を通して、
                <br />
                様々な想いが込められたものを
                <br />
                かたちにしています。
              </p>

              <p className="mt-8 leading-8 tracking-wider text-[#c7c0b4]">
                仏具は、長く使われ、受け継がれていくものです。
                だからこそ、素材と向き合い、一つひとつの工程を丁寧に。
                金井工芸鋳造所は、これまで培ってきた鋳造の技術を大切にしながら、
                これからも確かなものづくりを続けていきます。
              </p>
            </div>

            {/* Craft Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/craft.jpg"
                alt="金井工芸鋳造所のものづくり"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs tracking-[0.3em] text-[#8b7c62]">
            BUSINESS
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
            事業内容
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="border border-[#292722]/15 p-8">
              <p className="text-sm text-[#8b7c62]">01</p>
              <h3 className="mt-6 text-xl tracking-wider">仏具の鋳造</h3>
              <p className="mt-6 text-sm leading-7 text-[#625e56]">
                仏具を中心とした鋳造品の製造を行っています。
                長く使われ、受け継がれていくものだからこそ、
                一つひとつ丁寧に仕上げています。
              </p>
            </div>

            <div className="border border-[#292722]/15 p-8">
              <p className="text-sm text-[#8b7c62]">02</p>
              <h3 className="mt-6 text-xl tracking-wider">美術工芸品の鋳造</h3>
              <p className="mt-6 text-sm leading-7 text-[#625e56]">
                鋳造の技術を活かしたものづくりを行っています。
              </p>
            </div>

            <div className="border border-[#292722]/15 p-8">
              <p className="text-sm text-[#8b7c62]">03</p>
              <h3 className="mt-6 text-xl tracking-wider">特注・ご相談</h3>
              <p className="mt-6 text-sm leading-7 text-[#625e56]">
                これまで培ってきた鋳造技術を活かし、
                用途や形状に応じたさまざまな鋳造品に対応しています。
                また、鋳造に関する修理、補修のご相談もお気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#e7e1d6]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs tracking-[0.3em] text-[#8b7c62]">
            PROCESS
          </p>

          <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
            鋳造について
          </h2>

          <div className="mt-16 grid md:grid-cols-5">
            {[
              ["01", "原型"],
              ["02", "鋳型"],
              ["03", "溶解"],
              ["04", "鋳込み"],
              ["05", "仕上げ"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="border-t border-[#292722]/20 p-6 md:border-l md:border-t-0"
              >
                <p className="text-xs text-[#8b7c62]">{number}</p>
                <h3 className="mt-5 text-lg tracking-wider">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

           {/* History */}
      <section id="history">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#8b7c62]">
                HISTORY
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
                沿革
              </h2>
            </div>

            <div className="border-t border-[#292722]/20">
              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">1942</span>
                <span className="text-sm leading-7">
                  京都市下京区中堂寺庄ノ内町1にて開業
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">1964</span>
                <span className="text-sm leading-7">
                  京都府城陽市寺田樋尻12番地の9へ移転
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">1968</span>
                <span className="text-sm leading-7">
                  法人設立
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">2001</span>
                <span className="text-sm leading-7">
                  三代目社長就任
                  <br />
                  現在に至る
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#8b7c62]">
                COMPANY
              </p>

              <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
                会社概要
              </h2>
            </div>

            <div className="border-t border-[#292722]/20">
              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">会社名</span>
                <span className="text-sm leading-7">
                  株式会社 金井工芸鋳造所
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">事業内容</span>
                <span className="text-sm leading-7">
                  仏具・建築関連の鋳物などの鋳造・製造
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">所在地</span>
                <span className="text-sm leading-7">
                  〒610-0121 京都府城陽市寺田宮ノ谷
                </span>
              </div>

              <div className="grid grid-cols-[90px_1fr] gap-6 border-b border-[#292722]/15 py-6">
                <span className="text-sm text-[#766f63]">代表者</span>
                <span className="text-sm leading-7">
                  金井　勝
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#292722] text-[#f5f2eb]">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="text-xs tracking-[0.3em] text-[#b5aa98]">
            CONTACT
          </p>

          <h2 className="mt-6 text-3xl font-light tracking-[0.12em]">
            お問い合わせ
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#c7c0b4]">
            製品に関するお問い合わせや、
            <br />
            鋳造についてのご相談など、お気軽にお問い合わせください。
          </p>

          <a
            href="mailto:kanaikogei@gmail.com"
            className="mt-10 inline-flex border border-[#f5f2eb]/50 px-10 py-4 text-sm tracking-[0.15em] hover:bg-[#f5f2eb] hover:text-[#292722]"
          >
            メールでお問い合わせ
          </a>

          <p className="mt-5 text-xs text-[#aaa398]">
            kanaikogei@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1f1e1b] px-6 py-8 text-[#aaa398]">
        <div className="mx-auto flex max-w-7xl justify-between text-xs tracking-wider">
          <p>© 株式会社 金井工芸鋳造所</p>
          <p>All Rights Reserved.</p>
        </div>
      </footer> 
    </main> 
  );
}