import { cn } from '@/lib/utils';
import { SectionWrapper } from '../ui/SectionWrapper';
import {
	CalendarCheck,
	Truck,
	Sparkles,
	ArrowUpFromLine,
	Flame,
	ClipboardCheck,
	SprayCan,
} from 'lucide-react';

interface ProcessStep {
	id: string;
	number: number;
	title: string;
	description: string;
	icon: React.ReactNode;
}

interface Feature {
	id: string;
	title: string;
	description: string;
}

interface OurProcessSectionProps {
	businessName?: string;
	headline?: string;
	subheadline?: string;
	videoId?: string;
	className?: string;
}

const processSteps: ProcessStep[] = [
	{
		id: '1',
		number: 1,
		title: 'Book Your Bin Cleaning',
		description:
			"Schedule through our online platform, by calling us, or by email. We'll confirm within 24 hours and send a reminder 3 days before your appointment.",
		icon: <CalendarCheck className="w-6 h-6" />,
	},
	{
		id: '2',
		number: 2,
		title: 'We Come To You',
		description:
			"Our specialized curbside equipment arrives within 24-48 hours after your regular garbage collection. You'll receive text notifications when we're on our way and when we're done.",
		icon: <Truck className="w-6 h-6" />,
	},
	{
		id: '3',
		number: 3,
		title: 'Magic Wand',
		description:
			'Our technician uses a hand-held wand to meticulously clean the exterior of your bins.',
		icon: <Sparkles className="w-6 h-6" />,
	},
	{
		id: '4',
		number: 4,
		title: 'Mission Liftoff',
		description:
			"Bins are positioned on a lift and elevated into our van where they're cleaned using spinning heads at over 3500 psi. We avoid hydraulic systems to reduce our environmental footprint.",
		icon: <ArrowUpFromLine className="w-6 h-6" />,
	},
	{
		id: '5',
		number: 5,
		title: 'Mission Activate',
		description:
			'Hot water at 200°F is activated at high pressure. Clean, hot water is crucial for effective cleaning and eliminating germs and bacteria.',
		icon: <Flame className="w-6 h-6" />,
	},
	{
		id: '6',
		number: 6,
		title: 'Inspection',
		description:
			'The lift is lowered for a thorough inspection. If your bins meet our high standards, we proceed to the final stage.',
		icon: <ClipboardCheck className="w-6 h-6" />,
	},
	{
		id: '7',
		number: 7,
		title: 'Fresh & Clean',
		description:
			'Lids and handles are wiped clean, and an eco-friendly deodorizer is applied. Your bins are left at the curb ready for storage until the next cleaning.',
		icon: <SprayCan className="w-6 h-6" />,
	},
];

const features: Feature[] = [
	{
		id: '1',
		title: '99.9% Bacteria Elimination',
		description:
			'Ultra high-pressure fresh water heated to 200°F achieves 99.9% reduction in known harmful bacteria including E. Coli, Salmonella, and Listeria.',
	},
	{
		id: '2',
		title: '100% Environmentally Friendly',
		description:
			'We use no harmful chemicals. Our process captures all wastewater to prevent contamination of storm drains. Grey water is disposed of at an approved facility.',
	},
	{
		id: '3',
		title: 'Convenient Curbside Service',
		description:
			'We come directly to you with flexible options including annual service plans and one-time cleanings to accommodate your preferences.',
	},
];

const StepCard = ({ step }: { step: ProcessStep }) => {
	return (
		<div className="relative flex gap-4 group">
			{/* Step Number & Icon */}
			<div className="flex flex-col items-center">
				<div
					className={cn(
						'relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0',
						'bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)]',
						'text-white shadow-lg',
						'group-hover:scale-110 transition-transform duration-300'
					)}
				>
					{step.icon}
					{/* Step Number Badge */}
					<div
						className={cn(
							'absolute -top-1 -right-1 z-20',
							'w-6 h-6 rounded-full bg-white border-2 border-[var(--template-primary)]',
							'flex items-center justify-center text-xs font-bold text-[var(--template-primary)]',
							'shadow-md'
						)}
					>
						{step.number}
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 pb-6">
				<h3 className="text-lg font-semibold text-slate-900 mb-2">
					{step.title}
				</h3>
				<p className="text-slate-600 text-sm leading-relaxed">
					{step.description}
				</p>
			</div>
		</div>
	);
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
	return (
		<div
			className={cn(
				'p-6 rounded-xl',
				'bg-white border border-slate-100 shadow-sm',
				'hover:shadow-md hover:border-[var(--template-primary)]/20',
				'transition-all duration-300'
			)}
		>
			<h4 className="text-base font-semibold text-slate-900 mb-2">
				{feature.title}
			</h4>
			<p className="text-slate-600 text-sm leading-relaxed">
				{feature.description}
			</p>
		</div>
	);
};

export const OurProcessSection = ({
	businessName = 'Bin Medic+',
	headline,
	subheadline,
	videoId = 'btw39_f6P6I',
	className,
}: OurProcessSectionProps) => {
	const displayHeadline = headline || 'Our Process';
	const displaySubheadline =
		subheadline ||
		`At ${businessName}, we prioritize your peace of mind. You can trust that your bins will receive exceptional care with our comprehensive 7-step process.`;

	return (
		<SectionWrapper
			background="white"
			className={className}
			id="our-process"
		>
			{/* Section Header */}
			<div className="text-center mb-12">
				<p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
					How It Works
				</p>
				<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
					{displayHeadline}
				</h2>
				<p className="text-slate-600 max-w-3xl mx-auto">
					{displaySubheadline}
				</p>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
				{/* Steps Column */}
				<div className="space-y-2">
					{processSteps.map((step) => (
						<StepCard key={step.id} step={step} />
					))}
				</div>

				{/* Video Column */}
				<div className="lg:sticky lg:top-24 h-fit space-y-8">
					<div
						className={cn(
							'relative w-full rounded-xl overflow-hidden shadow-lg',
							'ring-1 ring-slate-200'
						)}
					>
						<div className="aspect-video">
							<iframe
								src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
								title={`${businessName} Cleaning Process`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								loading="lazy"
								className="w-full h-full border-0"
							/>
						</div>
					</div>

					{/* Video Caption */}
					<p className="text-center text-sm text-slate-500">
						Watch our cleaning process in action
					</p>

					{/* Features Section */}
					<div className="pt-4">
						<h3 className="text-xl font-bold text-slate-900 mb-6">
							Why Our Process Works
						</h3>
						<div className="space-y-4">
							{features.map((feature) => (
								<FeatureCard
									key={feature.id}
									feature={feature}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
