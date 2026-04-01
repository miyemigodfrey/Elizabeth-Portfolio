import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const transition = { duration: 0.6, ease: [0.23, 1, 0.32, 1] as const };

const projectsData: Record<
	string,
	{
		title: string;
		type: string;
		summary: string;
		description: string;
		tags: string[];
		features: string[];
		liveUrl?: string;
		githubUrl?: string;
	}
> = {
	"financial-analytics-dashboard": {
		title: "Financial Analytics Dashboard",
		type: "DASHBOARD",
		summary:
			"A real-time financial analytics dashboard with interactive charts, data filtering, and responsive design.",
		description:
			"The application uses a modular React component architecture with reusable UI components, state management, and API data fetching.",
		tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST APIs"],
		features: [
			"Dashboard analytics with real-time data",
			"Data filtering and search",
			"Interactive charts and visualisations",
			"Responsive UI across devices",
		],
		liveUrl: "https://dashboard-test-nine-chi.vercel.app/dashboard/overview",
		githubUrl: "https://github.com/miyemigodfrey/dashboard-test",
	},
	"social-media-analytics-platform": {
		title: "Social Media Analytics Platform",
		type: "PLATFORM",
		summary:
			"An analytics platform providing insights into social media performance with interactive dashboards.",
		description:
			"Built with Next.js for server-side rendering and optimised API routes, featuring a component-driven architecture.",
		tags: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"REST APIs",
			"Chart Libraries",
		],
		features: [
			"Social media metrics dashboard",
			"User authentication",
			"Data visualisation and reporting",
			"API integration with multiple platforms",
		],
		liveUrl: "#",
		githubUrl: "#",
	},
	"e-commerce-platform": {
		title: "YesEl — Luxury Jewelry E-Commerce Website",
		type: "FEATURED",
		summary:
			"A modern luxury e-commerce frontend built with React and Vite, focused on performance, elegant UX, and scalable component architecture.",
		description:
			"The application uses a modular React component architecture with reusable UI components, state management, and API data fetching. lazy loading for performance optimization, and advanced product filtering and search. It includes a complete shopping experience from product discovery to checkout.",
		tags: [
			"React js",
			"Vite",
			"Tailwind CSS",
			"React Router v6",
			"AOS(Animate On Scroll)",
			"Stripe(Incoming)",
		],
		features: [
			"Product catalog with search and filters",
			"User authentication and profiles",
			"Shopping cart and checkout flow",
			"API integration and payment processing",
			"Lazy-loaded images and code splitting for performance optimization",
			"Responsive UI",
		],
		liveUrl: "https://e-commerce-website-psi-three.vercel.app/",
		githubUrl: "https://github.com/miyemigodfrey/E-commerce-Website",
	},
	"ai-content-generation-studio": {
		title: "AI Content Generation Studio",
		type: "AI APP",
		summary:
			"An intelligent content creation platform powered by AI that generates, refines, and optimises written content for various formats and audiences.",
		description:
			"Built with React and integrated with OpenAI's GPT API, the app features prompt engineering workflows, real-time content streaming, and a polished editor UI for reviewing and exporting AI-generated copy.",
		tags: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"OpenAI API",
			"Streaming",
			"Prompt Engineering",
		],
		features: [
			"AI-powered content generation with custom prompts",
			"Real-time response streaming",
			"Tone and format customisation",
			"Content history and version management",
			"Export to multiple formats",
		],
		liveUrl: "#",
		githubUrl: "#",
	},
};

const CaseStudy = () => {
	const { slug } = useParams<{ slug: string }>();
	const project = slug ? projectsData[slug] : undefined;

	if (!project) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-background">
				<div className="text-center">
					<h1 className="font-display text-3xl text-foreground mb-4">
						Project not found
					</h1>
					<Link to="/" className="text-primary hover:underline text-sm">
						← Back home
					</Link>
				</div>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.4 }}
			className="min-h-screen bg-background">
			{/* Back nav */}
			<div className="section-padding !py-6">
				<Link
					to="/"
					className="inline-flex items-center gap-2 meta-text hover:text-foreground transition-colors">
					<ArrowLeft className="w-3.5 h-3.5" />
					Back
				</Link>
			</div>

			{/* Hero */}
			<header className="section-padding !pt-4 !pb-16 md:!pb-24">
				<div className="max-w-3xl">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ ...transition, delay: 0.1 }}
						className="meta-text text-primary mb-4">
						{project.type}
					</motion.p>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...transition, delay: 0.15 }}
						className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
						{project.title}
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...transition, delay: 0.25 }}
						className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
						{project.summary}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ...transition, delay: 0.35 }}
						className="flex flex-wrap gap-3">
						{project.liveUrl && (
							<a
								href={project.liveUrl}
								className="inline-flex items-center gap-2 font-display text-sm px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
								<ExternalLink className="w-3.5 h-3.5" />
								Live Demo
							</a>
						)}
						{project.githubUrl && (
							<a
								href={project.githubUrl}
								className="inline-flex items-center gap-2 font-display text-sm px-6 py-3 rounded-full border border-foreground/10 hover:bg-foreground/5 transition-colors">
								<Github className="w-3.5 h-3.5" />
								GitHub Repository
							</a>
						)}
					</motion.div>
				</div>
			</header>

			{/* Description */}
			<section className="section-padding !py-16 md:!py-24 border-t border-border">
				<div className="max-w-3xl">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={transition}
						viewport={{ once: true }}
						className="meta-text mb-4">
						Overview
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={transition}
						viewport={{ once: true }}
						className="font-display text-lg md:text-xl font-light text-foreground leading-relaxed">
						{project.description}
					</motion.p>
				</div>
			</section>

			{/* Features */}
			<section className="section-padding !py-16 md:!py-24 border-t border-border">
				<div className="max-w-3xl">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={transition}
						viewport={{ once: true }}
						className="meta-text mb-8">
						Features
					</motion.p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						{project.features.map((feature, i) => (
							<motion.div
								key={feature}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ ...transition, delay: i * 0.08 }}
								viewport={{ once: true }}
								className="glass-surface rounded-2xl p-5">
								<p className="text-foreground text-sm">{feature}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Tech Stack */}
			<section className="section-padding !py-16 md:!py-24 border-t border-border">
				<div className="max-w-3xl">
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={transition}
						viewport={{ once: true }}
						className="meta-text mb-8">
						Tech Stack
					</motion.p>
					<div className="flex flex-wrap gap-2">
						{project.tags.map((tag, i) => (
							<motion.span
								key={tag}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ ...transition, delay: i * 0.05 }}
								viewport={{ once: true }}
								className="meta-text text-[0.65rem] px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5">
								{tag}
							</motion.span>
						))}
					</div>
				</div>
			</section>

			{/* Footer CTA */}
			<div className="section-padding !py-16 text-center border-t border-border">
				<Link
					to="/"
					className="font-display text-sm px-8 py-3 rounded-full border border-foreground/10 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
					← Back to Portfolio
				</Link>
			</div>
		</motion.div>
	);
};

export default CaseStudy;
