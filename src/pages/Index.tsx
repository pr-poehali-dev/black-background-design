import { useEffect, useRef, useState } from "react";

const DEMON_IMG = "https://cdn.poehali.dev/files/0a086aba-5952-4111-8541-825681c70024.jpg";
const RED_BG = "https://cdn.poehali.dev/projects/546d4c32-5560-40dd-93da-be7a4cbea3dc/files/35b8a564-8361-4ef9-91ab-314eeebe7a39.jpg";

const socialLinks = [
  { name: "VK",  label: "vk.com/scale",  emoji: "🔵", url: "https://www.scary-maze.com/" },
  { name: "TG",  label: "@scale_tg",     emoji: "✈️",  url: "https://www.scary-maze.com/" },
];

const Index = () => {
  const [glitch, setGlitch] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const loop = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
      timerRef.current = setTimeout(loop, 2800 + Math.random() * 3000);
    };
    timerRef.current = setTimeout(loop, 1500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <div className="bio-root">

      {/* ── RED full-screen background ── */}
      <div className="hero-bg">
        <img src={RED_BG} alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      {/* ── Demon images — glowing + flickering ── */}
      <img src={DEMON_IMG} alt="demon" className="demon demon-left"  />
      <img src={DEMON_IMG} alt="demon" className="demon demon-right" />
      <img src={DEMON_IMG} alt="demon" className="demon demon-top"   />

      {/* ── Main content ── */}
      <main className="bio-content">

        {/* Title */}
        <h1 className={`bio-title${glitch ? " glitch" : ""}`} data-text="MY BIO">
          MY BIO
        </h1>

        {/* Code block */}
        <div className="code-block">
          <div className="code-header">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="code-fname">scale.profile.json</span>
          </div>
          <pre className="code-body">
<span className="cb">{"{"}</span>{"\n"}
{"  "}<span className="ck">"name"</span><span className="cc">:</span> <span className="cs">"scale"</span><span className="cm">,</span>{"\n"}
{"  "}<span className="ck">"status"</span><span className="cc">:</span> <span className="cs">"пострадавший игрок"</span><span className="cm">,</span>{"\n"}
{"  "}<span className="ck">"age"</span><span className="cc">:</span> <span className="cn">23</span><span className="cmt">  {"// лет"}</span><span className="cm">,</span>{"\n"}
{"  "}<span className="ck">"geo"</span><span className="cc">:</span> <span className="cs">"Америка"</span><span className="cm">,</span>{"\n"}
{"  "}<span className="ck">"hobby"</span><span className="cc">:</span> <span className="cs">"убийство"</span>{"\n"}
<span className="cb">{"}"}</span>
          </pre>
        </div>

        {/* Мирный */}
        <div className="peaceful">
          <span className="p-dot" /><span className="p-text">мирный</span><span className="p-dot" />
        </div>

        {/* Social */}
        <div className="social-row">
          {socialLinks.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="s-emoji">{s.emoji}</span>
              <span className="s-name">{s.name}</span>
              <span className="s-label">{s.label}</span>
              <span className="s-arrow">↗</span>
            </a>
          ))}
        </div>

      </main>
    </div>
  );
};

export default Index;