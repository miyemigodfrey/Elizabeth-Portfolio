import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = ["About", "Projects", "Experience", "Playground", "Contact"];

const Navigation = () => {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (id: string) => {
		document
			.getElementById(id.toLowerCase())
			?.scrollIntoView({ behavior: "smooth" });
		setMobileOpen(false);
	};

	return (
		<>
			<motion.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
				className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center py-4 px-4 md:py-6 md:px-8 transition-all duration-500 ${
					scrolled ? "backdrop-blur-xl bg-background/60" : ""
				}`}>
				<button
					onClick={() => scrollTo("about")}
					className="font-display text-sm md:text-base font-light text-foreground bg-transparent border-none cursor-pointer">
					EG
				</button>

				{/* Desktop links */}
				<div className="hidden md:flex items-center gap-6 lg:gap-10">
					{links.map((link) => (
						<button
							key={link}
							onClick={() => scrollTo(link)}
							className="meta-text relative group text-foreground cursor-pointer bg-transparent border-none">
							{link}
							<span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
						</button>
					))}
				</div>

				<div className="flex items-center gap-3">
					<ThemeToggle />
					{/* Mobile hamburger */}
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer"
						aria-label="Toggle menu">
						<span
							className={`block w-5 h-[1px] bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
						/>
						<span
							className={`block w-5 h-[1px] bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
						/>
					</button>
				</div>
			</motion.nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
						{links.map((link) => (
							<button
								key={link}
								onClick={() => scrollTo(link)}
								className="font-display text-2xl font-light text-foreground bg-transparent border-none cursor-pointer hover:text-coral transition-colors">
								{link}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navigation;
