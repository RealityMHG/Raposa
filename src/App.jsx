import { useEffect, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

const copy = {
  en: {
    nav: ['About', 'Archive', 'YOUTH', 'Film'],
    eyebrow: 'Independent fashion designer · Lisbon',
    heroLine: 'Portfolio',
    scroll: 'Enter YOUTH',
    introductionLabel: 'Introduction',
    introductionTitle: 'Fashion is my voice.',
    introductionText:
      'For me, fashion is an outlet to express myself and communicate with the world without having to say anything. Fashion Design—and upcycling in particular—is something I am deeply passionate about. I want to show people that this approach allows for great creativity and sustainability.\n\nBeyond graduating in Fashion Design, I want to specialise in styling. Translating ideas and concepts into wearable art is something I believe could be my greatest superpower. Above all, I want to express myself through clothing and help others do the same.',
    styleLabel: 'Personal style / Point of view',
    styleText: [
      'I have a very distinctive personal style. I am drawn to Y2K, maximalist, grunge and punk influences. At the same time, I want to raise awareness of the importance of investing in timeless, high-quality pieces that last.',
      'Within more alternative styles, basic pieces are often undervalued, when in fact they help to build more interesting looks and provide a starting point for creating more complex pieces.',
      'Ultimately, I believe in the importance of a good canvas.',
    ],
    moodLabel: 'Collection 001 / Visual research',
    moodTitle: 'The night before the piece.',
    moodText: [
      'The YOUTH collection is born from a deeply musical heritage passed down by my parents, who have always encouraged me to live without fear of taking risks, connecting with others and taking up space.',
      'Inspired by the irreverent energy of youth in the 2000s—as well as the icons of the era: Britney, Paramore, Pamela Anderson and Daft Punk—it seeks to bring back rebellion, courage and resistance against conservatism, something so intrinsic to youth.',
      'It combines a maximalist, Y2K, alternative and feminine aesthetic to create duality and show the possibility of coexistence.',
      'It also seeks to question social isolation and the resulting fear of connection, so characteristic of today’s youth.',
      'It is an invitation to return to our roots, to the night, to dance, to freedom of expression and to the connection between people.',
    ],
    filmOneLabel: 'YOUTH / Film 01',
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
    filmTwoLabel: 'YOUTH / Film 02',
    filmTwoTitle: 'Between takes, the piece becomes alive.',
    archiveLabel: 'Early studies / Before YOUTH',
    archiveTitle: 'Before the first collection took shape.',
    archiveText:
      'Earlier pieces trace the beginning of Mathilde’s language—upcycled denim, improvised volume and garments shaped directly on the body.',
    archiveWorks: [
      {
        number: '01',
        title: 'Atelier techniques',
        text: 'An oversized newspaper-print shirt developed through graphic repetition, contrast and atelier construction techniques.',
      },
      {
        number: '02',
        title: 'Exploratory project',
        text: 'An exploratory draped-skirt project, studying how fabric gathers around the body before letting the volume fall away.',
      },
      {
        number: '03',
        title: 'Upcycling',
        text: 'An upcycling exercise in reconstructed denim, using asymmetric panels and exposed pockets to create a new top.',
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
    nav: ['Sobre', 'Arquivo', 'YOUTH', 'Filme'],
    eyebrow: 'Designer de moda independente · Lisboa',
    heroLine: 'Portefólio',
    scroll: 'Entrar em YOUTH',
    introductionLabel: 'Introdução',
    introductionTitle: 'A moda é a minha voz.',
    introductionText:
      'Para mim, a moda é um outlet para me expressar e comunicar ao mundo sem precisar de dizer nada. O Design de Moda e, em específico, o upcycling são algo de que gosto muito e quero mostrar às pessoas que esta vertente nos permite grande criatividade e sustentabilidade.\n\nPara além de me formar em Design de Moda, quero especializar-me em styling. Traduzir ideias e conceitos em arte portável e usável é algo que acredito possa ser o meu maior superpoder. Quero, sobretudo, poder expressar-me através da roupa e poder ajudar os outros com o mesmo.',
    styleLabel: 'Estilo pessoal / Ponto de vista',
    styleText: [
      'Tenho um estilo muito próprio. Gosto das vertentes do Y2K, maximalismo, grunge e punk. No entanto, quero consciencializar as pessoas para a importância de investir em peças intemporais, de qualidade e que durem.',
      'Nos estilos mais alternativos, peças básicas são muitas vezes subvalorizadas, quando na verdade ajudam muito quer a construir looks mais interessantes, quer como ponto de partida para a elaboração de peças mais complexas.',
      'No fundo, acredito na importância de um bom canvas.',
    ],
    moodLabel: 'Coleção 001 / Pesquisa visual',
    moodTitle: 'A noite antes da peça.',
    moodText: [
      'Esta coleção YOUTH nasce de uma herança profundamente musical, dada pelos meus pais, que sempre me incentivaram a viver sem medo de arriscar, conectar e ocupar espaço.',
      'Inspirada na energia irreverente da juventude dos anos 2000—assim como nos ícones da altura: Britney, Paramore, Pamela Anderson e Daft Punk—tenta trazer de volta a rebeldia, a coragem e a revolta contra o conservadorismo, algo tão próprio da juventude.',
      'Combina uma estética maximalista, Y2K, alternativa e feminina para criar dualidade e mostrar a possibilidade de coexistência.',
      'Procura também questionar o isolamento social e o consequente receio de conexão, tão característico da juventude atual.',
      'É um convite a voltar às raízes, à noite, à dança, à liberdade de expressão e à ligação entre pessoas.',
    ],
    filmOneLabel: 'YOUTH / Filme 01',
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
    filmTwoLabel: 'YOUTH / Filme 02',
    filmTwoTitle: 'Entre takes, a peça ganha vida.',
    archiveLabel: 'Primeiros estudos / Antes de YOUTH',
    archiveTitle: 'Antes de a primeira coleção ganhar forma.',
    archiveText:
      'As primeiras peças revelam o início da linguagem de Mathilde—ganga reconstruída, volume improvisado e roupa moldada diretamente no corpo.',
    archiveWorks: [
      {
        number: '01',
        title: 'Técnicas de atelier',
        text: 'Uma camisa oversized com estampado de jornal, desenvolvida através de repetição gráfica, contraste e técnicas de construção de atelier.',
      },
      {
        number: '02',
        title: 'Projeto exploratório',
        text: 'Um projeto exploratório de saia drapeada, que estuda a forma como o tecido se reúne no corpo antes de deixar o volume cair.',
      },
      {
        number: '03',
        title: 'Upcycling',
        text: 'Um exercício de upcycling em ganga reconstruída, que usa painéis assimétricos e bolsos expostos para criar um novo top.',
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

const collectionSketches = [
  asset('/images/collection-sketch-01.webp'),
  asset('/images/collection-sketch-02.webp'),
  asset('/images/collection-sketch-03.webp'),
  asset('/images/collection-sketch-04.webp'),
  asset('/images/collection-sketch-05.webp'),
];

const coloredCollectionSketches = [
  asset('/images/collection-color-01.webp'),
  asset('/images/collection-color-02.webp'),
  asset('/images/collection-color-03.webp'),
  asset('/images/collection-color-04.webp'),
  asset('/images/collection-color-05.webp'),
  asset('/images/collection-color-06.webp'),
];

function Header({ language, setLanguage, t }) {
  return (
    <header className="header">
      <a className="wordmark" href="#top" aria-label="Mathilde Folcher home">
        MF<span>✦</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#introduction">{t.nav[0]}</a>
        <a href="#archive">{t.nav[1]}</a>
        <a href="#youth">{t.nav[2]}</a>
        <a href="#film">{t.nav[3]}</a>
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
      <a className="hero__scroll" href="#youth">
        <span>↓</span>
        {t.scroll}
      </a>
    </section>
  );
}

function Mood({ t }) {
  return (
    <section className="mood" id="youth">
      <div className="mood__copy reveal">
        <p className="micro">{t.moodLabel}</p>
        <h2>{t.moodTitle}</h2>
        <div className="mood__text">
          {t.moodText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionSketches() {
  return (
    <section
      className="collection-sketches"
      id="collection-sketches"
      aria-label="Final collection sketches"
    >
      {collectionSketches.map((image, index) => (
        <figure className={`collection-sketch collection-sketch--${index + 1}`} key={image}>
          <img src={image} alt={`Final collection look ${index + 1}`} />
        </figure>
      ))}
    </section>
  );
}

function ColoredCollectionSketches() {
  return (
    <section className="colored-sketches" aria-label="Colored collection sketches">
      {coloredCollectionSketches.map((image, index) => (
        <figure className="colored-sketch" key={image}>
          <img src={image} alt={`Colored collection look ${index + 1}`} />
        </figure>
      ))}
    </section>
  );
}

function Introduction({ t }) {
  return (
    <section className="introduction" id="introduction">
      <figure className="introduction__portrait">
        <img src={asset('/images/introduction-street.jpeg')} alt="Mathilde Folcher in Lisbon" />
      </figure>
      <div className="introduction__copy reveal">
        <p className="micro">{t.introductionLabel}</p>
        <h2>{t.introductionTitle}</h2>
        <div className="introduction__body">
          <div className="introduction__text">
            {t.introductionText.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalStyle({ t }) {
  return (
    <section className="personal-style">
      <div className="personal-style__copy reveal">
        <p className="micro">{t.styleLabel}</p>
        <div className="personal-style__text">
          {t.styleText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
  const [shirt, skirt, top] = t.archiveWorks;

  return (
    <section className="archive" id="archive">
      <div className="archive__intro reveal">
        <p className="micro">{t.archiveLabel}</p>
        <h2>{t.archiveTitle}</h2>
        <p>{t.archiveText}</p>
      </div>
      <div className="archive__works">
        <article className="archive-work archive-work--print reveal">
          <div className="archive-work__heading">
            <span>{shirt.number}</span>
            <h3>{shirt.title}</h3>
            <p>{shirt.text}</p>
          </div>
          <div className="archive-work__images archive-work__images--three">
            <figure>
              <img src={asset('/images/archive-print-01.jpg')} alt={shirt.title} />
              <figcaption>Frame 01 / shirt study</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-print-02.jpg')} alt={`${shirt.title} back`} />
              <figcaption>Frame 02 / back view</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-print-03.jpg')} alt={`${shirt.title} detail`} />
              <figcaption>Frame 03 / front detail</figcaption>
            </figure>
          </div>
        </article>
        <article className="archive-work archive-work--drape reveal">
          <div className="archive-work__heading">
            <span>{skirt.number}</span>
            <h3>{skirt.title}</h3>
            <p>{skirt.text}</p>
          </div>
          <div className="archive-work__images">
            <figure>
              <img src={asset('/images/archive-drape-01.jpg')} alt={skirt.title} />
              <figcaption>Full form / process image</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-drape-02.jpg')} alt={`${skirt.title} detail`} />
              <figcaption>Detail / gathered construction</figcaption>
            </figure>
          </div>
        </article>
        <article className="archive-work archive-work--denim reveal">
          <div className="archive-work__heading">
            <span>{top.number}</span>
            <h3>{top.title}</h3>
            <p>{top.text}</p>
          </div>
          <div className="archive-work__images">
            <figure>
              <img src={asset('/images/archive-denim.jpg')} alt={top.title} />
              <figcaption>Front / process image</figcaption>
            </figure>
            <figure>
              <img src={asset('/images/archive-denim-detail.jpg')} alt={`${top.title} detail`} />
              <figcaption>Detail / reconstructed pocket</figcaption>
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
        <a href="https://www.instagram.com/mathilde_dfr" target="_blank" rel="noreferrer">
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
  const [language, setLanguage] = useState('pt');
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
        <Introduction t={t} />
        <PersonalStyle t={t} />
        <Archive t={t} />
        <Mood t={t} />
        <CollectionSketches />
        <ColoredCollectionSketches />
        <Film
          id="film"
          src={asset('/videos/tangle-film-01.mp4')}
          label={t.filmOneLabel}
          title={t.filmOneTitle}
        />
        <HorizontalStory t={t} />
        <Film
          src={asset('/videos/tangle-film-02.mp4')}
          label={t.filmTwoLabel}
          title={t.filmTwoTitle}
        />
        <About t={t} />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Mathilde Folcher</p>
        <p>{t.footer}</p>
        <a href="https://www.instagram.com/mathilde_dfr" target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
      </footer>
    </>
  );
}
