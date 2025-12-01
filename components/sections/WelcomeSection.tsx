import { cn } from '@/lib/utils';
import { SectionWrapper } from '../ui/SectionWrapper';

interface WelcomeSectionProps {
	businessName?: string;
	videoId?: string;
	className?: string;
}

export const WelcomeSection = ({
	businessName = 'Bin Medic+',
	videoId = 'btw39_f6P6I',
	className,
}: WelcomeSectionProps) => {
	return (
		<SectionWrapper background="white" className={className} id="welcome">
			<div className="max-w-4xl mx-auto">
				{/* Heading */}
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
					Welcome to {businessName}
				</h2>

				{/* First paragraph with emphasis */}
				<div className="mb-6">
					<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
						<span className="font-semibold">
							&ldquo;THE DIRTY TRUTH ABOUT BINS!&rdquo;
						</span>{' '}
						Your garbage bins are not just unsightly; but they are a
						breeding ground for germs and pests. They attract
						insects, rodents, and harmful bacteria, all while
						producing unpleasant foul odors. Never fear –{' '}
						{businessName} is here and{' '}
						<span className="font-bold underline decoration-2 underline-offset-2 decoration-[var(--template-primary)]">
							HAS THE CURE FOR YOUR BINS
						</span>
						!
					</p>
				</div>

				{/* Second paragraph */}
				<div className="mb-12">
					<p className="text-base sm:text-lg text-slate-600 leading-relaxed">
						At {businessName}, we are committed to delivering an
						affordable, eco-friendly curbside bin cleaning service.
						We specialize in cleaning, sanitizing, and deodorizing
						garbage, organic, and recycling bins, including
						dumpsters. Our self-contained cleaning trucks utilize
						high-pressure water heated to 200 degrees F to blast
						away dirt, neutralize odors, and destroy millions of
						harmful bacteria. Additionally, our specialized
						equipment collects the grey water, which is responsibly
						disposed of at an approved authorized facility. By
						choosing our chemical-free cleaning process, you
						contribute to a healthier, cleaner community while
						protecting our environment.
					</p>
				</div>

				{/* Video Player - Using iframe for YouTube embed */}
				<div
					className={cn(
						'relative w-full rounded-xl overflow-hidden shadow-lg',
						'ring-1 ring-slate-200'
					)}
				>
					<div className="aspect-video">
						<iframe
							src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
							title="Bin Medic+ Video"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							loading="lazy"
							className="w-full h-full border-0"
						/>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
