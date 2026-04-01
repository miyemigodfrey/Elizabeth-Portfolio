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
				className="meta-text mb-6">
				About
			</motion.p>
			<motion.p
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={transition}
				viewport={{ once: true }}
				className="font-display text-sm md:text-xl lg:text-2xl font-light text-foreground leading-relaxed">
				Elizabeth is a Frontend Developer who enjoys building clean, responsive,
				and user-focused web applications using React, Next.js, and TypeScript.
				I focus on turning ideas and designs into smooth, functional interfaces
				with strong attention to performance, scalability, and user experience.
				I’m comfortable working across different stages of development, from
				building reusable components to integrating APIs and refining UI
				details. Alongside my professional and freelance experience, I actively
				leverage modern AI tools to improve productivity, speed up development,
				and explore better solutions to complex problems. I enjoy learning new
				technologies and continuously improving my workflow, with a strong
				interest in building digital products that are both practical and
				visually engaging.
			</motion.p>
		</div>
	</section>
);

export default AboutSection;
