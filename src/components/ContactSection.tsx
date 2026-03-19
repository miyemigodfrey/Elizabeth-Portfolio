import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const ContactSection = () => (
	<section id="contact" className="section-padding">
		<div className="max-w-2xl mx-auto text-center">
			<motion.h2
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={transition}
				viewport={{ once: true }}
				className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-12">
				Let's build something
				<br />
				interesting.
			</motion.h2>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ ...transition, delay: 0.2 }}
				viewport={{ once: true }}
				className="flex flex-wrap items-center justify-center gap-4">
				{[
					{ label: "Email", href: "mailto:lizzymiyemi@gmail.com" },
					{ label: "GitHub", href: "https://github.com/miyemigodfrey" },
					{
						label: "LinkedIn",
						href: "https://www.linkedin.com/in/elizabeth-godfrey-oritsemiyemi",
					},
				].map((link) => (
					<a
						key={link.label}
						href={link.href}
						className="font-display text-sm px-8 py-3 rounded-full border border-foreground/10 hover:bg-coral hover:text-primary-foreground hover:border-coral transition-all duration-300 hover:scale-105">
						{link.label}
					</a>
				))}
			</motion.div>
		</div>
	</section>
);

export default ContactSection;
