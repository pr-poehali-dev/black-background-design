import { useEffect, useRef, useState } from "react";

const SCREAMER_LINKS = [
  "https://www.scary-maze.com/",
  "https://www.scary-maze.com/",
];

const socialLinks = [
  {
    name: "VK",
    icon: "🅰",
    label: "vk.com/scale",
    url: SCREAMER_LINKS[0],
  },
  {
    name: "TG",
    icon: "✈",
    label: "@scale_tg",
    url: SCREAMER_LINKS[1],
  },
];

const GlitchOrb = ({ style }: { style: React.CSSProperties }) => (
  <div className="glitch-orb" style={style} />
);

const Index = () => {
  const [glitch, setGlitch] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const trigger = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    };
    intervalRef.current = setInterval(trigger, 3000 + Math.random() * 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="bio-root">
      {/* Floating glowing orbs */}
      <GlitchOrb style={{ top: "8%", left: "12%", width: 180, height: 180, animationDelay: "0s" }} />
      <GlitchOrb style={{ top: "15%", right: "10%", width: 120, height: 120, animationDelay: "1.2s" }} />
      <GlitchOrb style={{ top: "40%", left: "5%", width: 80, height: 80, animationDelay: "2.4s" }} />
      <GlitchOrb style={{ bottom: "20%", right: "8%", width: 140, height: 140, animationDelay: "0.6s" }} />
      <GlitchOrb style={{ bottom: "10%", left: "20%", width: 90, height: 90, animationDelay: "1.8s" }} />

      {/* Red full-screen background image */}
      <div className="hero-bg">
        <img
          src="https://cdn.poehali.dev/projects/546d4c32-5560-40dd-93da-be7a4cbea3dc/files/35b8a564-8361-4ef9-91ab-314eeebe7a39.jpg"
          alt="bg"
          className="hero-bg-img"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Main content */}
      <main className="bio-content">
        {/* MY BIO title */}
        <h1 className={`bio-title ${glitch ? "glitch-active" : ""}`} data-text="MY BIO">
          MY BIO
        </h1>

        {/* Code block */}
        <div className="code-block">
          <div className="code-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="code-filename">scale.profile.json</span>
          </div>
          <pre className="code-body">
            <span className="code-brace">{"{"}</span>{"\n"}
            {"  "}<span className="code-key">"name"</span>
            <span className="code-colon">:</span>{" "}
            <span className="code-string">"scale"</span>
            <span className="code-comma">,</span>{"\n"}
            {"  "}<span className="code-key">"status"</span>
            <span className="code-colon">:</span>{" "}
            <span className="code-string">"пострадавший игрок"</span>
            <span className="code-comma">,</span>{"\n"}
            {"  "}<span className="code-key">"age"</span>
            <span className="code-colon">:</span>{" "}
            <span className="code-number">23</span>
            <span className="code-comment">  // лет</span>
            <span className="code-comma">,</span>{"\n"}
            {"  "}<span className="code-key">"geo"</span>
            <span className="code-colon">:</span>{" "}
            <span className="code-string">"Америка"</span>
            <span className="code-comma">,</span>{"\n"}
            {"  "}<span className="code-key">"hobby"</span>
            <span className="code-colon">:</span>{" "}
            <span className="code-string">"убийство"</span>{"\n"}
            <span className="code-brace">{"}"}</span>
          </pre>
        </div>

        {/* Мирный badge */}
        <div className="peaceful-badge">
          <span className="peaceful-dot" />
          мирный
          <span className="peaceful-dot" />
        </div>

        {/* Social links */}
        <div className="social-row">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">{s.icon}</span>
              <span className="social-label">{s.label}</span>
              <span className="social-arrow">→</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
