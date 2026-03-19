import { motion } from "framer-motion";

const Footer = () => (
	<footer className="px-6 md:px-12 lg:px-20 py-12 border-t border-foreground/5">
		<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
			<motion.span
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				className="font-display text-lg font-light text-foreground">
				Elizabeth Oritsemiyemi Godfrey
			</motion.span>

			<div className="flex items-center gap-8">
				{["About", "Projects", "Experience", "Contact"].map((link) => (
					<button
						key={link}
						onClick={() =>
							document
								.getElementById(link.toLowerCase())
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="meta-text hover:text-foreground transition-colors duration-200 bg-transparent border-none cursor-pointer">
						{link}
					</button>
				))}
			</div>

			<span className="meta-text">© 2026</span>
		</div>
	</footer>
);

export default Footer;
