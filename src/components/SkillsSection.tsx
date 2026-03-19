import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const skills = [
	{
		number: "01",
		title: "UI Development",
		description:
			"Crafting pixel-perfect interfaces with modern CSS, responsive layouts, and design system implementation.",
	},
	{
		number: "02",
		title: "React & Next.js",
		description:
			"Building performant applications with server-side rendering, static generation, and optimized client-side experiences.",
	},
	{
		number: "03",
		title: "Animation & Interaction",
		description:
			"Creating fluid motion design using Framer Motion, AOS, Three.js, and CSS animations for immersive experiences.",
	},
	{
		number: "04",
		title: "API Integration",
		description:
			"Connecting frontend applications to RESTful APIs, Redux, Tanstack Query and other real-time data streams.",
	},
];

const SkillsSection = () => (
	<section className="section-padding">
		<div className="text-center mb-16 md:mb-24">
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={transition}
				viewport={{ once: true }}
				className="meta-text mb-4">
				Capabilities
			</motion.p>
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={transition}
				viewport={{ once: true }}
				className="font-display text-3xl md:text-5xl font-light text-foreground">
				Frontend Development
				<br />& UI Engineering
			</motion.h2>
		</div>

		<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
			{skills.map((skill, i) => (
				<motion.div
					key={skill.title}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					whileHover={{ y: -6 }}
					transition={{ ...transition, delay: i * 0.08 }}
					viewport={{ once: true }}
					className="glass-surface rounded-[32px] p-6 md:p-8 cursor-pointer group relative overflow-hidden">
					<span className="meta-text text-coral mb-4 block">
						{skill.number}
					</span>
					<h3 className="font-display text-lg md:text-xl font-light text-foreground mb-3 group-hover:text-coral transition-colors duration-300">
						{skill.title}
					</h3>
					<p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
						{skill.description}
					</p>
					<div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-coral group-hover:border-coral transition-all duration-300">
						<span className="text-[10px] text-foreground/40 group-hover:text-primary-foreground transition-colors duration-300">
							→
						</span>
					</div>
				</motion.div>
			))}
		</div>
	</section>
);

export default SkillsSection;
