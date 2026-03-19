import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML5", icon: "◇" },
  { name: "CSS3", icon: "◈" },
  { name: "Tailwind CSS", icon: "✦" },
  { name: "Git", icon: "⑂" },
  { name: "GitHub", icon: "◉" },
  { name: "Framer Motion", icon: "◎" },
  { name: "Three.js", icon: "△" },
  { name: "REST APIs", icon: "⇄" },
  { name: "Redux", icon: "◆" },
  { name: "Responsive Design", icon: "▣" },
  { name: "Figma", icon: "◐" },
  { name: "Vite", icon: "⚡" },
];

const PlaygroundSection = () => (
  <section id="playground" className="section-padding">
    <div className="text-center mb-12 md:mb-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}
        viewport={{ once: true }}
        className="meta-text mb-4"
      >
        Tech Stack
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-light text-foreground"
      >
        Skills & Tools
      </motion.h2>
    </div>

    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4, scale: 1.05 }}
          transition={{ ...transition, delay: i * 0.03 }}
          viewport={{ once: true }}
          className="glass-surface rounded-full px-5 py-2.5 md:px-6 md:py-3 cursor-pointer group flex items-center gap-2 hover:border-coral/30 border border-transparent transition-all duration-300"
        >
          <span className="text-sm md:text-base opacity-60 group-hover:opacity-100 transition-opacity">
            {skill.icon}
          </span>
          <span className="font-body text-xs md:text-sm text-foreground group-hover:text-coral transition-colors duration-300">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PlaygroundSection;
