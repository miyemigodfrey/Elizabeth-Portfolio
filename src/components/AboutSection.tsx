import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}
        viewport={{ once: true }}
        className="meta-text mb-6"
      >
        About
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className="font-display text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed"
      >
        Elizabeth Godfrey is a frontend developer with 3 years of experience building modern web
        applications using React and Next.js. She focuses on crafting responsive interfaces,
        interactive dashboards, and experimental web experiences using WebGL and animation libraries.
      </motion.p>
    </div>
  </section>
);

export default AboutSection;
