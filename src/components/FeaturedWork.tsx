import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const projects = [
  {
    title: "Financial Analytics Dashboard",
    tags: ["React", "Tailwind", "Charts"],
    type: "DASHBOARD",
    slug: "financial-analytics-dashboard",
  },
  {
    title: "Social Media Analytics Platform",
    tags: ["Next.js", "Dashboard"],
    type: "PLATFORM",
    slug: "social-media-analytics-platform",
  },
  {
    title: "AI Content Generation Studio",
    tags: ["React", "OpenAI", "TypeScript"],
    type: "AI APP",
    slug: "ai-content-generation-studio",
  },
];

const featured = {
  title: "E-commerce Platform",
  description:
    "A modern ecommerce frontend built with Next.js and TypeScript focusing on performance, UX and scalability.",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  type: "FEATURED",
  slug: "e-commerce-platform",
};

const FeaturedWork = () => (
  <section id="projects" className="section-padding">
    <div className="text-center mb-20 md:mb-28">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}
        viewport={{ once: true }}
        className="meta-text mb-4"
      >
        Selected Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={transition}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
      >
        Digital Ecosystem
        <br />
        Activation
      </motion.h2>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
      {/* Left column: stacked cards */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        {projects.map((project, i) => (
          <Link key={project.title} to={`/project/${project.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ ...transition, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-surface rounded-[32px] p-8 aspect-[4/3] flex flex-col justify-end cursor-pointer group"
            >
              <p className="meta-text mb-2">{project.type}</p>
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex gap-2 mt-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="meta-text text-[0.6rem] px-2 py-1 rounded-full bg-foreground/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Right column: featured card */}
      <div className="lg:col-span-7 lg:mt-16">
        <Link to={`/project/${featured.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ ...transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-surface rounded-[32px] p-8 md:p-10 flex flex-col justify-between h-full min-h-[500px] cursor-pointer group"
          >
            <div className="flex-1 flex items-center justify-center mb-8">
              <div className="w-full h-64 rounded-[24px] bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
            </div>
            <div>
              <p className="meta-text mb-2">{featured.type}</p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
                {featured.description}
              </p>
              <div className="flex gap-2 mb-6 flex-wrap">
                {featured.tags.map((tag) => (
                  <span key={tag} className="meta-text text-[0.6rem] px-2 py-1 rounded-full bg-foreground/5">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-display text-sm px-6 py-3 rounded-full border border-foreground/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 inline-block">
                View Project →
              </span>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedWork;
