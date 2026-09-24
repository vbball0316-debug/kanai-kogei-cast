"use client";

import Image from "next/image";
import { useEffect } from "react";

const processSteps = [
  {
    number: "01",
    title: "原型",
    text: "完成形をもとに、鋳造のための原型をつくります。",
  },
  {
    number: "02",
    title: "鋳型",
    text: "原型から鋳型をつくり、金属を流し込むための空間を整えます。",
  },
  {
    number: "03",
    title: "溶解",
    text: "素材を適切な温度まで溶かし、鋳込みに備えます。",
  },
  {
    number: "04",
    title: "鋳込み",
    text: "溶かした金属を鋳型へ流し込み、形をつくります。",
  },
  {
    number: "05",
    title: "仕上げ",
    text: "鋳肌を整え、細部まで丁寧に仕上げて完成させます。",
  },
];

const businessItems = [
  {
    number: "01",
    title: "仏具の鋳造",
    text: "長く受け継がれてきた仏具を、確かな鋳造技術で一つひとつ形にします。",
  },
  {
    number: "02",
    title: "美術工芸品の鋳造",
    text: "素材の表情や造形の美しさを大切にし、美術工芸品の鋳造に対応します。",
  },
  {
    number: "03",
    title: "特注・ご相談",
    text: "建築関連の鋳物など、用途や形状に合わせた特注品についてもご相談ください。",
  },
];

const historyItems = [
  {
    year: "1942",
    text: "京都市下京区中堂寺庄ノ内町1にて開業",
  },
  {
    year: "1964",
    text: "京都府城陽市寺田樋尻12番地の9へ移転",
  },
  {
    year: "1968",
    text: "法人設立",
  },
  {
    year: "2001",
    text: "三代目社長就任 / 現在に至る",
  },
];

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const heroImage = document.querySelector<HTMLElement>("[data-hero-image]");
    const heroContent = document.querySelector<HTMLElement>(".hero-content");
    const aboutImage = document.querySelector<HTMLElement>(".about-image");


  

    let ticking = false;

    const updateParallax = () => {
      // Hero
      if (hero && heroImage && heroContent) {
        const rect = hero.getBoundingClientRect();

        const progress = Math.min(
          Math.max(-rect.top / window.innerHeight, 0),
          1,
        );

         heroImage.style.setProperty(
           "--hero-shift",
           `${progress * 7}%`,
        );

         heroContent.style.setProperty(
           "--hero-content-shift",
          `${progress * -35}px`,
        );
   }

   // About image
   if (aboutImage) {
     const rect = aboutImage.getBoundingClientRect();
     const viewportCenter = window.innerHeight / 2;
     const distance =
       rect.top + rect.height / 2 - viewportCenter;

     const shift = Math.max(
       -18,
       Math.min(18, distance * -0.04),
     );

     aboutImage.style.setProperty(
       "--about-image-shift",
       `${shift}px`,
     );
   }


  ticking = false;
};

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="site-shell">
      {/* Header */}
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="site-logo">
            <span className="site-logo-jp">株式会社 金井工芸鋳造所</span>
            <span className="site-logo-en">KANAI KOGEI CHUZOSHO</span>
          </a>

          <nav className="desktop-nav" aria-label="メインナビゲーション">
            <a href="#about">私たちについて</a>
            <a href="#business">事業内容</a>
            <a href="#process">鋳造について</a>
            <a href="/works">施工事例</a>
            <a href="#company">会社概要</a>
          </nav>

          <a href="#contact" className="header-contact">
            <span>お問い合わせ</span>
            <span className="header-contact-arrow">↗</span>
          </a>

          <button className="mobile-menu-button" type="button" aria-label="メニュー">
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" data-hero>
        <div className="hero-image-wrap">
          <div className="hero-image" data-hero-image>
            <Image
              src="/hero.jpg"
              alt="金井工芸鋳造所の鋳造風景"
              fill
              priority
              sizes="100vw"
              className="hero-image-element"
            />
          </div>
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <p className="eyebrow hero-eyebrow" data-reveal>
            KANAI KOGEI CHUZOSHO
          </p>

          <h1 data-reveal>
            継承した技術を、
            <br />
            未来へ。
          </h1>

          <p className="hero-description" data-reveal>
            京都府城陽市で鋳造を続ける
            <br className="desktop-only" />
            金井工芸鋳造所。
            <br />
            仏具、装飾品、建築関連の鋳物など、
            <br className="desktop-only" />
            受け継いだ技術をかたちにします。
          </p>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section section-dark">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow light" data-reveal>
              ABOUT US
            </p>

            <h2 data-reveal>
              私たちについて
            </h2>

            <div className="about-text">
              <p data-reveal>
                鋳造という技術を通して、
                <br />
                ものづくりの歴史と文化を
                <br />
                次の世代へつないでいく。
              </p>

              <p data-reveal>
                1942年創業。
                <br />
                仏具、建築関連鋳物、美術工芸品など、
                <br />
                一つひとつのご依頼と向き合いながら
                <br />
                技術を磨いてきました。
              </p>

              <p data-reveal>
                京都・城陽、宇治を拠点に、
                <br />
                北海道から沖縄まで全国のご依頼に
                <br />
                対応しています。
              </p>
            </div>
          </div>

          <div className="about-image-wrap" data-reveal>
            <div className="about-image">
              <Image
                src="/craft.jpg"
                alt="鋳造職人の作業風景"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="image-caption">CRAFTSMANSHIP / 01</p>
          </div>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="business-section section-light">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow" data-reveal>
                BUSINESS
              </p>
              <h2 data-reveal>事業内容</h2>
            </div>

            <p className="section-intro" data-reveal>
              伝統的な鋳造技術を軸に、
              <br />
              さまざまなご依頼にお応えします。
            </p>
          </div>

          <div className="business-grid">
            {businessItems.map((item, index) => (
              <article
                className="business-card"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                key={item.number}
              >
                <span className="business-number">{item.number}</span>

                <div className="business-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

                <span className="business-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process-section">
        <div className="section-container">
          <div className="process-heading">
            <div>
              <p className="eyebrow" data-reveal>
                PROCESS
              </p>
              <h2 data-reveal>鋳造について</h2>
            </div>

            <p className="section-intro" data-reveal>
              形をつくるだけではない。
              <br />
              素材と向き合い、手をかけ、仕上げていく。
            </p>
          </div>

          <div className="process-list">
            {processSteps.map((step, index) => (
             <article
               className="process-item"
               data-reveal
               style={{ transitionDelay: `${index * 80}ms` }}
               key={step.number}
             >
                <div className="process-number">{step.number}</div>

                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

                <div className="process-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="history-section section-dark">
        <div className="section-container">
          <div className="history-heading">
            <p className="eyebrow light" data-reveal>
              HISTORY
            </p>
            <h2 data-reveal>沿革</h2>
          </div>

          <div className="history-list">
            {historyItems.map((item, index) => (
              <div
                className="history-item"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
                key={item.year}
              >
                <span className="history-year">{item.year}</span>
                <span className="history-dot" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company */}
      <section id="company" className="company-section section-light">
        <div className="section-container company-grid">
          <div>
            <p className="eyebrow" data-reveal>
              COMPANY
            </p>

            <h2 data-reveal>会社概要</h2>
          </div>

          <div className="company-table" data-reveal>
            <div className="company-row">
              <span>会社名</span>
              <strong>株式会社 金井工芸鋳造所</strong>
            </div>

            <div className="company-row">
              <span>事業内容</span>
              <strong>仏具・建築関連の鋳物などの鋳造・製造</strong>
            </div>

            <div className="company-row">
              <span>所在地</span>
              <strong>〒610-0121 京都府城陽市寺田宮ノ谷</strong>
            </div>

            <div className="company-row">
              <span>代表者</span>
              <strong>金井　勝</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <p className="eyebrow light" data-reveal>
            CONTACT
          </p>

          <h2 data-reveal>
            お問い合わせ
          </h2>

          <p className="contact-description" data-reveal>
            製品に関するお問い合わせや、
            <br />
            鋳造についてのご相談など、
            <br className="mobile-only" />
            お気軽にお問い合わせください。
          </p>

          <a
            href="mailto:kanaikogei@gmail.com"
            className="contact-button"
            data-reveal
          >
            <span>メールでお問い合わせ</span>
            <span>↗</span>
          </a>

          <p className="contact-mail" data-reveal>
            kanaikogei@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-company">株式会社 金井工芸鋳造所</p>
            <p className="footer-en">KANAI KOGEI CHUZOSHO</p>
          </div>

          <p className="footer-copy">
            © 株式会社 金井工芸鋳造所
            <br />
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
