import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const experiences = [
  {
    role: "Frontend Developer",
    company: "Consultation Agency",
    period: "Nov 2024 – Present",
    responsibilities: [
      "Built responsive dashboards and web applications using React and Next.js",
      "Developed reusable UI components with Tailwind CSS",
      "Integrated APIs and optimized frontend performance",
      "Collaborated with designers using Figma",
    ],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2022 – 2024",
    responsibilities: [
      "Converted Figma designs into production websites",
      "Built landing pages and dashboards",
      "Implemented responsive UI components and animations",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-3xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}
        viewport={{ once: true }}
        className="meta-text mb-4 text-center"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center mb-16 md:mb-20"
      >
        Work History
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-border" />

        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-[11px] md:left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

              <p className="meta-text text-primary mb-1">{exp.period}</p>
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-1">
                {exp.role}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WorkExperience;
