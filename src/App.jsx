import { useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const WORDS = ['أسرع', 'أذكى', 'أجرأ', 'مختلف']

/* ---------- Rotating word ---------- */
function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className="rotator__word">{WORDS[i]}</span>
    </span>
  )
}

/* ---------- Magnetic button with particle burst ---------- */
function MagneticCounter() {
  const [count, setCount] = useState(0)
  const [bursts, setBursts] = useState([])
  const ref = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }
  const onLeave = () => (ref.current.style.transform = 'translate(0,0)')

  const onClick = (e) => {
    setCount((c) => c + 1)
    const r = ref.current.getBoundingClientRect()
    const id = Date.now()
    const particles = Array.from({ length: 14 }, (_, k) => ({
      k,
      angle: (360 / 14) * k + Math.random() * 20,
      dist: 60 + Math.random() * 60,
    }))
    setBursts((b) => [...b, { id, x: e.clientX - r.left, y: e.clientY - r.top, particles }])
    setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 900)
  }

  return (
    <button
      ref={ref}
      type="button"
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <span className="magnetic__label">اضغط للطاقة</span>
      <span className="magnetic__count">{String(count).padStart(3, '0')}</span>
      {bursts.map((b) => (
        <span key={b.id} className="burst" style={{ left: b.x, top: b.y }}>
          {b.particles.map((p) => (
            <i key={p.k} style={{ '--a': `${p.angle}deg`, '--d': `${p.dist}px` }} />
          ))}
        </span>
      ))}
    </button>
  )
}

/* ---------- 3D tilt card ---------- */
function TiltCard({ children, accent }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ref.current.style.setProperty('--rx', `${(0.5 - py) * 14}deg`)
    ref.current.style.setProperty('--ry', `${(px - 0.5) * 14}deg`)
    ref.current.style.setProperty('--gx', `${px * 100}%`)
    ref.current.style.setProperty('--gy', `${py * 100}%`)
  }
  const onLeave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }
  return (
    <article
      ref={ref}
      className="tilt"
      style={{ '--accent': accent }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="tilt__inner">{children}</div>
    </article>
  )
}

/* ---------- Typing terminal ---------- */
const LINES = [
  '$ npm create vite@latest my-app',
  '✔ Select a framework › React',
  '$ npm run dev',
  '  ➜  Local:  http://localhost:5173/',
  '  ⚡ ready in 212 ms',
]
function Terminal() {
  const [text, setText] = useState('')
  useEffect(() => {
    const full = LINES.join('\n')
    let i = 0
    const t = setInterval(() => {
      // type, then pause ~2.5s at the end, then restart
      i = i >= full.length + 65 ? 0 : i + 1
      setText(full.slice(0, i))
    }, 38)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="terminal" dir="ltr">
      <div className="terminal__bar">
        <span /><span /><span />
        <em>zsh — my-app</em>
      </div>
      <pre>{text}<b className="caret">▍</b></pre>
    </div>
  )
}

/* ---------- App ---------- */
function App() {
  const rootRef = useRef(null)

  // spotlight follows the cursor
  useEffect(() => {
    const el = rootRef.current
    const move = (e) => {
      el.style.setProperty('--mx', `${e.clientX}px`)
      el.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  // reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])

  return (
    <div className="page" ref={rootRef} dir="rtl">
      <div className="aurora" aria-hidden="true">
        <span /><span /><span />
      </div>
      <div className="spotlight" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="nav">
        <div className="brand">
          <span className="brand__dot" /> NOVA
        </div>
        <nav>
          <a href="#features">المميزات</a>
          <a href="#start">ابدأ</a>
          <a href="#community">المجتمع</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__text">
          <p className="eyebrow">⚡ React + Vite — الجيل الجديد</p>
          <h1>
            ابنِ ويب
            <br />
            <RotatingWord />
          </h1>
          <p className="lead">
            تجربة تطوير لحظية، وأداء يطير، وتصميم ما شافوش قبل كده.
            عدّل <code>src/App.jsx</code> واحفظ — وشوف السحر.
          </p>
          <div className="hero__cta">
            <MagneticCounter />
            <a className="ghost" href="#start">اكتشف أكتر ←</a>
          </div>
        </div>

        <div className="orbit">
          <div className="orbit__ring orbit__ring--1">
            <img src={reactLogo} className="orbit__item" alt="React" />
          </div>
          <div className="orbit__ring orbit__ring--2">
            <img src={viteLogo} className="orbit__item" alt="Vite" />
          </div>
          <img src={heroImg} className="orbit__core" alt="" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k}>
              HMR لحظي ✦ TypeScript ✦ ESM أصلي ✦ Build مُحسَّن ✦ Plugins ✦ SSR ✦ Code Splitting ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="bento">
        <div className="bento__cell bento__cell--wide reveal">
          <h3>سرعة تحسها</h3>
          <p>السيرفر بيقوم في أقل من ثانية، والتعديلات بتظهر قبل ما ترفع عينك من الكيبورد.</p>
          <div className="meter"><span /></div>
        </div>
        <div className="bento__cell reveal">
          <span className="big">0.2s</span>
          <p>متوسط زمن التشغيل</p>
        </div>
        <div className="bento__cell reveal">
          <span className="big">∞</span>
          <p>مكتبات وإضافات</p>
        </div>
        <div id="start" className="bento__cell bento__cell--wide bento__cell--term reveal">
          <Terminal />
        </div>
      </section>

      {/* LINKS */}
      <section id="community" className="cards">
        <TiltCard accent="#7c5cff">
          <h2>التوثيق</h2>
          <p>كل أسئلتك ليها إجابة</p>
          <ul>
            <li><a href="https://vite.dev/" target="_blank" rel="noreferrer"><img src={viteLogo} alt="" /> استكشف Vite</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer"><img src={reactLogo} alt="" /> اتعلم React</a></li>
          </ul>
        </TiltCard>
        <TiltCard accent="#00e0b8">
          <h2>انضم للمجتمع</h2>
          <p>آلاف المطورين في انتظارك</p>
          <ul>
            <li><a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">Discord</a></li>
            <li><a href="https://x.com/vite_js" target="_blank" rel="noreferrer">X.com</a></li>
            <li><a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">Bluesky</a></li>
          </ul>
        </TiltCard>
      </section>

      <footer className="footer">
        <span>صُنع بشغف ✦ {new Date().getFullYear()}</span>
      </footer>
    </div>
  )
}

export default App