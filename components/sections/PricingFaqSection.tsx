'use client';

import { cn } from '@/lib/utils';
import { SectionWrapper } from '../ui/SectionWrapper';
import { TemplateButton } from '../ui/TemplateButton';
import { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';

// ============ PRICING TYPES ============
export interface PricingPlan {
	id: string;
	category: 'one-time' | 'recurring';
	name: string;
	subtitle?: string;
	price: string;
	features: string[];
	popular?: boolean;
	ctaText?: string;
	ctaHref?: string;
}

// ============ FAQ TYPES ============
export interface FaqItem {
	id: string;
	question: string;
	answer: string;
}

// ============ COMPONENT PROPS ============
interface PricingFaqSectionProps {
	businessName: string;
	pricingHeadline?: string;
	pricingSubheadline?: string;
	annualNote?: string;
	plans?: PricingPlan[];
	faqHeadline?: string;
	faqSubheadline?: string;
	faqs?: FaqItem[];
	ctaHref?: string;
	className?: string;
}

// ============ DEFAULT DATA ============
const defaultPlans: PricingPlan[] = [
	{
		id: '1',
		category: 'one-time',
		name: '2 Bins',
		subtitle: 'One-time Clean',
		price: '$55',
		features: [
			'Great way to try us out',
			'Select which bins you would like cleaned',
			'Clean on an as-needed basis',
			'Makes a perfect gift',
		],
		ctaText: 'Prebook Now',
	},
	{
		id: '2',
		category: 'one-time',
		name: '3 Bins',
		subtitle: 'One-time Clean',
		price: '$65',
		features: [
			'Great way to try us out',
			'Clean on an as-needed basis',
			'Makes a perfect gift',
		],
		ctaText: 'Prebook Now',
	},
	{
		id: '3',
		category: 'recurring',
		name: 'Every 4 Weeks',
		subtitle: 'Monthly Package',
		price: '$50',
		features: [
			'Includes all 3 bins (Green, Blue, & Black)',
			'Helps keep insects away',
			'Helps control odors',
		],
		popular: true,
		ctaText: 'Prebook Now',
	},
	{
		id: '4',
		category: 'recurring',
		name: 'Every 8 Weeks',
		subtitle: 'Bi-monthly Package',
		price: '$56',
		features: [
			'Includes 3 bins (Green, Blue, & Black)',
			'Great for seasonal cleanings',
		],
		ctaText: 'Prebook Now',
	},
];

const defaultFaqs: FaqItem[] = [
	{
		id: '1',
		question: 'What areas do you currently service?',
		answer: 'We serve all of Calgary, Okotoks, and some Foothills Communities such as Heritage Pointe and Artesia.',
	},
	{
		id: '2',
		question: 'How do I contact you to request service?',
		answer: 'Click on the Prebook Now link, call us directly at (825) 882-2226, or email us at info@binmedic.ca.',
	},
	{
		id: '3',
		question: 'How often do my bins need to be serviced?',
		answer: 'We found that a monthly service plan works well to keep up with the grime and odors.',
	},
	{
		id: '4',
		question: 'Can I request a one-time cleaning service?',
		answer: 'Absolutely! We provide a one-time cleaning service upon request. Please see our pricing options above for all the details.',
	},
	{
		id: '5',
		question: 'Can I change my service package?',
		answer: 'We allow our valued customers to adjust their packages at any time. Rates will be adjusted to match your new needs.',
	},
	{
		id: '6',
		question: 'Can I request a custom schedule or extra cleans?',
		answer: 'Here at Bin Medic+, we understand spring and fall clean-ups are busy times. We value our customers and will work with you to come up with a plan to accommodate your needs.',
	},
	{
		id: '7',
		question: 'Do I have to be at home to get my bins cleaned?',
		answer: 'No, you are not required to be at home during your bin cleaning. Simply place your empty bins curbside or leave them accessible in your back alley on the day of your appointment and we take care of the cleaning. After your cleaning has been completed, stow away your carts for your next bin cleaning.',
	},
	{
		id: '8',
		question: 'What if I forget to put out my bins?',
		answer: 'Bin Medic+ sends you an email reminder three days prior to your scheduled bin cleaning appointment. If your bins are easily visible and accessible, we are happy to assist by retrieving them for you. On the day of your appointment, you will also receive a text notification from Bin Medic+ when we are On Our Way and when the cleaning has been Finished. Please note that if your bins are not accessible, your appointment will be rescheduled, and a service charge of $25.00 will be applied.',
	},
	{
		id: '9',
		question: 'What if my bins are not empty on cleaning day?',
		answer: 'If your bins are not empty, your appointment will be rescheduled, and a $25.00 Service Charge will be incurred.',
	},
	{
		id: '10',
		question: 'Why is there a garbage bag in my clean bin?',
		answer: 'We will bag any debris scraped up from your bins and place it in your black bin for the next garbage pickup. The bags we use are biodegradable to keep the impact on the environment to a minimum.',
	},
	{
		id: '11',
		question: 'Do you use any chemicals for sanitizing?',
		answer: 'We do not use any chemicals or soaps to clean the bins as per City of Calgary guidelines. Our specialized process is purely based on high-pressure 200 degrees F clean hot water at 3500 psi and top-of-the-line spinning spray heads.',
	},
	{
		id: '12',
		question: 'What happens if I change residence?',
		answer: 'As long as your new residence is in our service area, your plan will follow you. If your new residence is outside our service area, please contact us to close your account and pay any price adjustment that may be required.',
	},
	{
		id: '13',
		question: 'How do you clean in the freezing temperatures?',
		answer: 'Bin Medic+ can provide services up to 0 degrees C. We typically close for the winter season in November (weather permitting).',
	},
];

// ============ PRICING CARD COMPONENT ============
const PricingCard = ({
	plan,
	ctaHref,
}: {
	plan: PricingPlan;
	ctaHref: string;
}) => {
	return (
		<article
			className={cn(
				'relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg',
				'flex flex-col h-full',
				'transition-all duration-300',
				plan.popular
					? 'bg-gradient-to-br from-[var(--template-primary)] to-[var(--template-secondary)] text-white'
					: 'bg-white border border-slate-200 text-slate-900 '
			)}
		>
			<div className={cn('p-6 sm:p-8 flex flex-col flex-1')}>
				{/* Subtitle / Category */}
				<p
					className={cn(
						'text-xs font-semibold uppercase tracking-wider mb-2',
						plan.popular
							? 'text-white/70'
							: 'text-[var(--template-primary)]'
					)}
				>
					{plan.subtitle}
				</p>

				{/* Plan Name */}
				<h3
					className={cn(
						'text-xl sm:text-2xl font-bold mb-4',
						plan.popular ? 'text-white' : 'text-slate-900'
					)}
				>
					{plan.name}
				</h3>

				{/* Price */}
				<div className="mb-6">
					<span
						className={cn(
							'text-4xl sm:text-5xl font-bold',
							plan.popular ? 'text-white' : 'text-slate-900'
						)}
					>
						{plan.price}
					</span>
					<span
						className={cn(
							'text-sm ml-2',
							plan.popular ? 'text-white/60' : 'text-slate-500'
						)}
					>
						(plus taxes)
					</span>
				</div>

				{/* Features */}
				<ul className="space-y-3 mb-8 flex-1">
					{plan.features.map((feature, index) => (
						<li key={index} className="flex items-start gap-3">
							<div
								className={cn(
									'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5',
									plan.popular
										? 'bg-white/20 text-white'
										: 'bg-[var(--template-primary)]/10 text-[var(--template-primary)]'
								)}
							>
								<Check className="w-3 h-3" strokeWidth={3} />
							</div>
							<span
								className={cn(
									'text-sm leading-relaxed',
									plan.popular
										? 'text-white/90'
										: 'text-slate-600'
								)}
							>
								{feature}
							</span>
						</li>
					))}
				</ul>

				{/* CTA */}
				<TemplateButton
					variant={plan.popular ? 'secondary' : 'primary'}
					size="lg"
					href={ctaHref}
					className={cn(
						'w-full justify-center',
						plan.popular &&
							'bg-white text-[var(--template-primary)] hover:bg-white/90'
					)}
				>
					{plan.ctaText || 'Prebook Now'}
				</TemplateButton>
			</div>
		</article>
	);
};

// ============ FAQ ACCORDION ITEM ============
const AccordionItem = ({
	faq,
	isOpen,
	onToggle,
}: {
	faq: FaqItem;
	isOpen: boolean;
	onToggle: () => void;
}) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number>(0);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(isOpen ? contentRef.current.scrollHeight : 0);
		}
	}, [isOpen]);

	return (
		<div
			className={cn(
				'border-b border-slate-200 last:border-b-0',
				'transition-colors duration-200',
				isOpen && 'bg-slate-50/50'
			)}
		>
			<button
				onClick={onToggle}
				className={cn(
					'w-full flex items-center justify-between gap-3 sm:gap-4 py-4 sm:py-5 px-4 sm:px-6 text-left',
					'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--template-primary)] focus-visible:ring-offset-2 rounded-sm',
					'min-h-[56px] active:bg-slate-50/80'
				)}
				aria-expanded={isOpen}
				tabIndex={0}
			>
				<span
					className={cn(
						'text-sm sm:text-base font-medium transition-colors duration-200 pr-2',
						isOpen
							? 'text-[var(--template-primary)]'
							: 'text-slate-900'
					)}
				>
					{faq.question}
				</span>

				{/* Toggle Icon */}
				<span
					className={cn(
						'flex-shrink-0 w-7 h-7 sm:w-6 sm:h-6 rounded-full flex items-center justify-center',
						'transition-all duration-300 ease-out',
						isOpen
							? 'bg-[var(--template-primary)] text-white rotate-180'
							: 'bg-slate-100 text-slate-500'
					)}
				>
					<ChevronDown className="w-4 h-4" />
				</span>
			</button>

			{/* Answer Content */}
			<div
				className="overflow-hidden transition-all duration-300 ease-out"
				style={{ height }}
			>
				<div ref={contentRef} className="pb-5 sm:pb-6 px-4 sm:px-6">
					<p className="text-slate-600 leading-relaxed text-sm sm:text-base">
						{faq.answer}
					</p>
				</div>
			</div>
		</div>
	);
};

// ============ MAIN COMPONENT ============
export const PricingFaqSection = ({
	businessName,
	pricingHeadline,
	pricingSubheadline,
	annualNote,
	plans,
	faqHeadline,
	faqSubheadline,
	faqs,
	ctaHref = 'https://book.housecallpro.com/book/BIN-MEDIC-/38639536204340e28b846908bf2cb80d',
	className,
}: PricingFaqSectionProps) => {
	const [openFaqId, setOpenFaqId] = useState<string | null>(null);

	const displayPlans = plans && plans.length > 0 ? plans : defaultPlans;
	const displayFaqs = faqs && faqs.length > 0 ? faqs : defaultFaqs;

	const oneTimePlans = displayPlans.filter((p) => p.category === 'one-time');
	const recurringPlans = displayPlans.filter(
		(p) => p.category === 'recurring'
	);

	const displayPricingHeadline =
		pricingHeadline || 'Simple, Transparent Pricing';
	const displayPricingSubheadline =
		pricingSubheadline ||
		'Choose the plan that works best for you. No hidden fees, no surprises.';
	const displayAnnualNote =
		annualNote ||
		'Receive the following pricing when you sign up for annual service';
	const displayFaqHeadline = faqHeadline || 'Frequently Asked Questions';
	const displayFaqSubheadline =
		faqSubheadline ||
		`Got questions? We've got answers. Here are some of the most common questions we receive about ${businessName}.`;

	return (
		<>
			{/* PRICING SECTION */}
			<SectionWrapper
				background="light"
				className={className}
				id="pricing"
			>
				{/* Section Header */}
				<div className="text-center mb-12">
					<p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
						Pricing Plans
					</p>
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
						{displayPricingHeadline}
					</h2>
					<p className="text-slate-600 max-w-2xl mx-auto">
						{displayPricingSubheadline}
					</p>
				</div>

				{/* One-Time Plans */}
				<div className="mb-16">
					<h3 className="text-center text-lg font-semibold text-slate-700 mb-6">
						One-Time Cleaning
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
						{oneTimePlans.map((plan) => (
							<PricingCard
								key={plan.id}
								plan={plan}
								ctaHref={ctaHref}
							/>
						))}
					</div>
				</div>

				{/* Annual Note Divider */}
				<div className="relative my-12">
					<div
						className="absolute inset-0 flex items-center"
						aria-hidden="true"
					>
						<div className="w-full border-t border-slate-300" />
					</div>
					<div className="relative flex justify-center">
						<span className="bg-slate-50 px-6 py-2 text-sm font-medium text-[var(--template-primary)] rounded-full border border-slate-300">
							{displayAnnualNote}
						</span>
					</div>
				</div>

				{/* Recurring Plans */}
				<div>
					<h3 className="text-center text-lg font-semibold text-slate-700 mb-6">
						Recurring Service Plans
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
						{recurringPlans.map((plan) => (
							<PricingCard
								key={plan.id}
								plan={plan}
								ctaHref={ctaHref}
							/>
						))}
					</div>
				</div>

				{/* Terms & Conditions Link */}
				<div className="mt-10 text-center">
					<a
						href="/terms"
						className="inline-flex items-center gap-2 text-slate-600 hover:text-[var(--template-primary)] transition-colors"
					>
						<svg
							className="w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							/>
						</svg>
						View Terms &amp; Conditions
					</a>
				</div>
			</SectionWrapper>

			{/* FAQ SECTION */}
			<SectionWrapper background="white" id="faq">
				<div className="max-w-3xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12">
						<p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
							FAQ
						</p>
						<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
							{displayFaqHeadline}
						</h2>
						<p className="text-slate-600">
							{displayFaqSubheadline}
						</p>
					</div>

					{/* Accordion */}
					<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
						{displayFaqs.map((faq) => (
							<AccordionItem
								key={faq.id}
								faq={faq}
								isOpen={openFaqId === faq.id}
								onToggle={() =>
									setOpenFaqId(
										openFaqId === faq.id ? null : faq.id
									)
								}
							/>
						))}
					</div>

					{/* Contact CTA */}
					<div className="text-center mt-10">
						<p className="text-slate-600 mb-2">
							Still have questions?
						</p>
						<a
							href="#contact"
							className="inline-flex items-center gap-2 text-[var(--template-primary)] font-medium hover:underline"
							tabIndex={0}
						>
							Contact us directly
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
					</div>
				</div>
			</SectionWrapper>
		</>
	);
};
