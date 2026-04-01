import { motion } from "framer-motion";
import { Download } from "lucide-react";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const ResumeSection = () => (
	<section id="resume" className="section-padding">
		<div className="max-w-2xl mx-auto text-center">
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={transition}
				viewport={{ once: true }}
				className="meta-text mb-4">
				Resume
			</motion.p>
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={transition}
				viewport={{ once: true }}
				className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
				Download My Resume
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ ...transition, delay: 0.1 }}
				viewport={{ once: true }}
				className="text-muted-foreground text-sm md:text-base mb-10 max-w-md mx-auto">
				A summary of my experience, skills, and projects.
			</motion.p>
			<motion.a
				href="/resume.pdf"
				download
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				whileHover={{ scale: 1.06 }}
				whileTap={{ scale: 0.97 }}
				transition={{ ...transition, delay: 0.2 }}
				viewport={{ once: true }}
				className="inline-flex items-center gap-2 font-display text-sm px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
				<Download className="w-4 h-4" />
				Download Resume (PDF)
			</motion.a>
		</div>
	</section>
);

export default ResumeSection;
