import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GoogleReviewsBadgeProps {
	rating?: number;
	href?: string;
	className?: string;
}

export const GoogleReviewsBadge = ({
	rating = 5.0,
	href,
	className,
}: GoogleReviewsBadgeProps) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				'flex items-center gap-2 bg-slate-900 rounded-lg px-3 py-2',
				'transition-all duration-200 hover:bg-slate-800 hover:scale-[1.02]',
				className
			)}
		>
			{/* Google Logo */}
			<img src="/google-logo.png" alt="Google" className="w-8 h-8" />

			{/* Rating & Stars */}
			<div className="flex flex-col">
				<div className="flex items-center gap-1.5">
					<span className="text-white font-bold text-lg leading-none">
						{rating.toFixed(1)}
					</span>
					<div className="flex gap-0.5">
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
							/>
						))}
					</div>
				</div>
				<span className="text-white/90 text-[10px] font-semibold tracking-wider uppercase">
					Google Reviews
				</span>
			</div>
		</a>
	);
};
