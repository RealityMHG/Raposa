import { useEffect, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const copy = {
  en: {
    nav: ['Intermission', 'Film', 'Archive', 'About'],
    eyebrow: 'Independent fashion designer · Lisbon',
    heroLine: 'Clothes caught between softness and unrest.',
    scroll: 'Enter Intermission',
    moodLabel: 'Collection 001 / Visual research',
    moodTitle: 'The night before the piece.',
    moodText: [
      'Intermission begins with tension rather than nostalgia. It borrows the charge of a club floor, a flash-lit corridor and the moment just before someone leaves.',
      'Feminine codes are kept close—lace, pink, exposed skin—but never left untouched. They are pulled apart by denim, hardware, uneven lines and the need to move.',
      'The collection lives between delicacy and disruption: intimate, unfinished and slightly unruly.',
    ],
    filmOneLabel: 'Intermission / Film 01',
    filmOneTitle: 'A dress that refuses to stay still.',
    pieceLabel: 'Main piece / 001',
    pieceTitle: 'The Tangle Dress',
    pieceText:
      'A halter dress built through tension: dark denim, translucent pink lace, white trims and a metal ring. Its loose lengths knot, trail and redraw the silhouette with every movement.',
    galleryLabel: 'Scroll to follow the movement',
    frames: [
      'First light',
      'Tension',
      'Unravelling',
      'Full silhouette',
      'On set',
      'Distance',
      'After movement',
    ],
    filmTwoLabel: 'Intermission / Film 02',
    filmTwoTitle: 'Between takes, the piece becomes alive.',
    archiveLabel: 'Early studies / Before Intermission',
    archiveTitle: 'The road into the work.',
    archiveText:
      'Earlier pieces trace the beginning of Mathilde’s language—upcycled denim, improvised volume and garments shaped directly on the body.',
    archiveWorks: [
      {
        number: '01',
        title: 'Reconstructed denim',
        text: 'Upcycled denim panels, asymmetric construction and an exposed pocket language.',
      },
      {
        number: '02',
        title: 'Gathered volume',
        text: 'A draped skirt study that gathers around the body, then lets the volume fall away.',
      },
    ],
    aboutLabel: 'Mathilde Folcher',
    aboutTitle: 'Born in Toulouse. Creating in Lisbon.',
    aboutText:
      'An emerging designer exploring the space where feminine delicacy meets streetwear, utility and the energy of the night.',
    follow: 'Follow the process',
    footer: 'Independent fashion designer',
  },
  pt: {
    nav: ['Intermission', 'Filme', 'Arquivo', 'Sobre'],
    eyebrow: 'Designer de moda independente · Lisboa',
    heroLine: 'Roupa suspensa entre suavidade e inquietação.',
    scroll: 'Entrar em Intermission',
    moodLabel: 'Coleção 001 / Pesquisa visual',
    moodTitle: 'A noite antes da peça.',
    moodText: [
      'Intermission começa na tensão e não na nostalgia. Parte da energia de uma pista de dança, de um corredor iluminado por flash e do instante antes de alguém sair.',
      'Os códigos femininos ficam próximos—renda, rosa, pele exposta—mas nunca intactos. São desfeitos pela ganga, pelas ferragens, pelas linhas irregulares e pela necessidade de movimento.',
      'A coleção vive entre a delicadeza e a perturbação: íntima, inacabada e ligeiramente indomável.',
    ],
    filmOneLabel: 'Intermission / Filme 01',
    filmOneTitle: 'Um vestido que se recusa a ficar quieto.',
    pieceLabel: 'Peça principal / 001',
    pieceTitle: 'The Tangle Dress',
    pieceText:
      'Um vestido halter construído através da tensão: ganga escura, renda rosa translúcida, acabamentos brancos e uma argola metálica. As tiras soltas entrelaçam-se, arrastam-se e redesenham a silhueta a cada movimento.',
    galleryLabel: 'Desliza para seguir o movimento',
    frames: [
      'Primeira luz',
      'Tensão',
      'Desfazer',
      'Silhueta completa',
      'No set',
      'Distância',
      'Depois do movimento',
    ],
    filmTwoLabel: 'Intermission / Filme 02',
    filmTwoTitle: 'Entre takes, a peça ganha vida.',
    archiveLabel: 'Primeiros estudos / Antes de Intermission',
    archiveTitle: 'O caminho até ao trabalho.',
    archiveText:
      'As primeiras peças revelam o início da linguagem de Mathilde—ganga reconstruída, volume improvisado e roupa moldada diretamente no corpo.',
    archiveWorks: [
      {
        number: '01',
        title: 'Ganga reconstruída',
        text: 'Painéis de ganga reaproveitada, construção assimétrica e uma linguagem de bolsos expostos.',
      },
      {
        number: '02',
        title: 'Volume franzido',
        text: 'Um estudo de saia drapeada que se reúne no corpo e depois deixa o volume cair.',
      },
    ],
    aboutLabel: 'Mathilde Folcher',
    aboutTitle: 'Nascida em Toulouse. A criar em Lisboa.',
    aboutText:
      'Uma designer emergente que explora o espaço onde a delicadeza feminina encontra o streetwear, a utilidade e a energia da noite.',
    follow: 'Acompanhar o processo',
    footer: 'Designer de moda independente',
  },
};

const gallery = [
  asset('/images/tangle-01.jpg'),
  asset('/images/tangle-02.jpg'),
  asset('/images/tangle-03.jpg'),
  asset('/images/tangle-04.jpg'),
  asset('/images/tangle-bts.jpg'),
  asset('/images/tangle-05.jpg'),
  asset('/images/tangle-06.jpg'),
];

function Header({ language, setLanguage, t }) {
  return (
    <header className="header">
      <a className="wordmark" href="#top" aria-label="Mathilde Folcher home">
        MF<span>✦</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#intermission">{t.nav[0]}</a>
        <a href="#film">{t.nav[1]}</a>
        <a href="#archive">{t.nav[2]}</a>
        <a href="#about">{t.nav[3]}</a>
      </nav>
      <button
        className="language"
        onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
        aria-label="Change language"
      >
        {language === 'en' ? 'PT' : 'EN'}
      </button>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <img
        className="hero__photo"
        src={asset('/images/tangle-05.jpg')}
        alt="Model wearing the Tangle Dress in Lisbon"
      />
      <div className="media-grain" />
      <p className="hero__eyebrow">{t.eyebrow}</p>
      <h1>
        <span>Mathilde</span>
        <span>Folcher</span>
      </h1>
      <p className="hero__line">{t.heroLine}</p>
      <div className="hero__stamp" aria-hidden="true">
        INTER
        <br />
        MISSION
      </div>
      <a className="hero__scroll" href="#intermission">
        <span>↓</span>
        {t.scroll}
      </a>
    </section>
  );
}

function Mood({ t }) {
  return (
    <section className="mood" id="intermission">
      <div className="mood__copy reveal">
        <p className="micro">{t.moodLabel}</p>
        <h2>{t.moodTitle}</h2>
        <div className="mood__text">
          {t.moodText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}

function Film({ src, label, title, id }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <section className="film" id={id}>
      <video ref={videoRef} src={src} autoPlay muted loop playsInline preload="metadata" />
      <div className="media-grain" />
      <div className="film__shade" />
      <div className="film__caption">
        <p>{label}</p>
        <h2>{title}</h2>
      </div>
      <span className="film__time">00 : {src.includes('01') ? '05' : '17'}</span>
    </section>
  );
}

function HorizontalStory({ t }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;
      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      setOffset(progress * Math.max(0, track.scrollWidth - window.innerWidth));
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section className="story" ref={sectionRef} aria-label="Tangle Dress editorial sequence">
      <div className="story__sticky">
        <div className="story__heading">
          <p className="micro">{t.pieceLabel}</p>
          <h2>{t.pieceTitle}</h2>
          <p>{t.pieceText}</p>
        </div>
        <div
          className="story__rail"
          ref={trackRef}
          style={{ transform: `translate3d(-${offset}px, 0, 0)` }}
        >
          {gallery.map((image, index) => (
            <figure className={`story-card story-card--${index + 1}`} key={image}>
              <img src={image} alt={`${t.pieceTitle} editorial frame ${index + 1}`} />
              <figcaption>
                <span>0{index + 1}</span>
                {t.frames[index]}
              </figcaption>
            </figure>
          ))}
          <div className="story__end">
            <span>↘</span>
            <p>{t.galleryLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Archive({ t }) {
  const [denim, drape] = t.archiveWorks;

  return (
    <section className="archive" id="archive">
      <div className="archive__intro reveal">
        <p className="micro">{t.archiveLabel}</p>
        <h2>{t.archiveTitle}</h2>
        <p>{t.archiveText}</p>
      </div>
      <div className="archive__works">
        <article className="archive-work archive-work--denim reveal">
          <div className="archive-work__heading">
            <span>{denim.number}</span>
            <h3>{denim.title}</h3>
            <p>{denim.text}</p>
          </div>
          <div className="archive-work__images">
            <figure>
              <img src={asset('/images/archive-denim.jpg')} alt={denim.title} />
              <figcaption>Front / process image</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-denim-detail.jpg')} alt={`${denim.title} detail`} />
              <figcaption>Detail / reconstructed pocket</figcaption>
            </figure>
          </div>
        </article>
        <article className="archive-work archive-work--drape reveal">
          <div className="archive-work__heading">
            <span>{drape.number}</span>
            <h3>{drape.title}</h3>
            <p>{drape.text}</p>
          </div>
          <div className="archive-work__images">
            <figure>
              <img src={asset('/images/archive-drape-01.jpg')} alt={drape.title} />
              <figcaption>Full form / process image</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-drape-02.jpg')} alt={`${drape.title} detail`} />
              <figcaption>Detail / gathered construction</figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="about" id="about">
      <div className="about__number">7°</div>
      <div className="about__copy reveal">
        <p className="micro">{t.aboutLabel}</p>
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText}</p>
        <a href="https://www.instagram.com/mathildefolcher" target="_blank" rel="noreferrer">
          {t.follow} <span>↗</span>
        </a>
      </div>
      <p className="about__coordinates">
        43.6047° N — 1.4442° E<br />
        38.7223° N — 9.1393° W
      </p>
    </section>
  );
}

export default function App() {
  const [language, setLanguage] = useState('en');
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add('is-visible'),
        ),
      { threshold: 0.12 },
    );
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <Hero t={t} />
        <Mood t={t} />
        <Film
          id="film"
          src={asset('/videos/tangle-film-01.mp4')}
          label={t.filmOneLabel}
          title={t.filmOneTitle}
        />
        <HorizontalStory t={t} />
        <Film src={asset('/videos/tangle-film-02.mp4')} label={t.filmTwoLabel} title={t.filmTwoTitle} />
        <Archive t={t} />
        <About t={t} />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Mathilde Folcher</p>
        <p>{t.footer}</p>
        <a href="https://www.instagram.com/mathildefolcher" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
      </footer>
    </>
  );
}
