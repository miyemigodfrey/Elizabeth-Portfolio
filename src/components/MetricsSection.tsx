import { motion } from "framer-motion";

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const MetricsSection = () => (
  <section id="experience" className="section-padding relative overflow-hidden">
    <div className="text-center mb-16 md:mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-5xl font-light text-foreground"
      >
        We Promote
        <br />
        Business In Digital
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ...transition, delay: 0.2 }}
        viewport={{ once: true }}
        className="meta-text mt-4"
      >
        Emphasis on the Result
      </motion.p>
    </div>

    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:-space-x-12">
      {[
        { number: "02", label: "Years Experience", color: "coral" },
        { number: "Few", label: "Projects Built", color: "blue" },
      ].map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: i * 0.15 }}
          viewport={{ once: true }}
          className="relative"
        >
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
            className="md:w-[340px] md:h-[340px]"
          >
            <motion.circle
              cx="140"
              cy="140"
              r="130"
              fill="none"
              stroke={metric.color === "coral" ? "hsl(12, 85%, 65%)" : "hsl(200, 70%, 60%)"}
              strokeWidth="1"
              strokeOpacity={0.3}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1], delay: i * 0.2 }}
              viewport={{ once: true }}
            />
            <circle
              cx="140"
              cy="140"
              r="130"
              fill={metric.color === "coral" ? "hsl(12, 85%, 65%)" : "hsl(200, 70%, 60%)"}
              fillOpacity={0.06}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-6xl md:text-7xl font-light text-foreground">
              {metric.number}
            </span>
            <span className="meta-text mt-2">{metric.label}</span>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ...transition, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center text-muted-foreground text-sm max-w-lg mx-auto mt-16 leading-relaxed"
    >
      Experienced in building dashboards, web applications, and interactive interfaces.
      Focused on performance, accessibility, and delightful user experiences.
    </motion.p>
  </section>
);

export default MetricsSection;
