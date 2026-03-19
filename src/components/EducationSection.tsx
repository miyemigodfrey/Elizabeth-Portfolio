import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const EducationSection = () => (
	<section id="education" className="section-padding">
		<div className="max-w-3xl mx-auto">
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={transition}
				viewport={{ once: true }}
				className="meta-text mb-4 text-center">
				Education
			</motion.p>
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={transition}
				viewport={{ once: true }}
				className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground text-center mb-16 md:mb-20">
				Academic Background
			</motion.h2>

			<div className="relative">
				<div className="absolute left-4 md:left-6 top-0 bottom-0 w-[1px] bg-border" />

				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={transition}
					viewport={{ once: true }}
					className="relative pl-12 md:pl-16">
					<div className="absolute left-[11px] md:left-[19px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

					<p className="meta-text text-primary mb-1">Completed</p>
					<h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-1">
						Bachelor's Degree — Mechanical Engineering
					</h3>
					<p className="text-muted-foreground text-sm mb-4">
						Federal University Of Petroleum Resources
					</p>
					<p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
						Studied engineering fundamentals while developing strong
						problem-solving and analytical skills that now support software
						development.
					</p>
				</motion.div>
			</div>
		</div>
	</section>
);

export default EducationSection;
