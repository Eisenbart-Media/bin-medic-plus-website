import { Navbar } from '@/components/ui/Navbar';
import { FooterSection } from '@/components/sections/FooterSection';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { FileText } from 'lucide-react';

export default function TermsPage() {
	const businessName = 'Bin Medic+';
	const phone = '(825) 882-2226';
	const email = 'info@binmedic.ca';
	const prebookLink =
		'https://book.housecallpro.com/book/BIN-MEDIC-/38639536204340e28b846908bf2cb80d';

	const termsAndConditions = [
		{
			title: 'Customer Responsibilities',
			items: [
				'To facilitate effective cleaning, it is essential that bins are COMPLETELY EMPTY and positioned curbside for front garages, or easily accessible and clearly labeled with your house number for back alleys. If your bins are not emptied or lack proper identification for back-alley residences, your cleaning appointment will be automatically rescheduled, and a $25.00 Service Charge will be incurred. Should you choose to cancel the rescheduled appointment, the Service Charge will still apply at the time of cancellation.',
				'Our cleaning methods are among the most effective and efficient in the industry, delivering excellent results; however, bins that are heavily soiled may yield inconsistent outcomes. Bins contaminated with chemicals and oils will not be cleaned. Stains from glue, paint, and other substances may not be fully removed, and in some cases, multiple cleanings may be necessary to achieve optimal cleanliness. Bin Medic+ disclaims any responsibility for the condition of these bins post-cleaning.',
				'Bin Medic+ will not be liable for any damage to trash cans. Any concerns regarding damaged bins should be directed to the city that provides them. Our service is solely focused on cleaning the bins.',
			],
		},
		{
			title: 'Cleaning Schedule and Payment',
			items: [
				'Bin Medic+ will arrange your bin cleaning service appointment within 24 to 48 hours after the last collection of your trash bin. All bins—green, blue, and black—will be cleaned on the same day. If Bin Medic+ cannot perform the service on the scheduled day due to unforeseen circumstances, we will reschedule it for the next available neighborhood visit. Bin Medic+ reserves the right to modify the service schedule if necessary.',
				'Payments to Bin Medic+ can be processed online via credit card or e-transfer to info@binmedic.ca after your bin cleaning has been completed.',
				'Our Recurring Service Plans are structured as one-year agreements and will automatically renew for the following season unless you provide written notice prior to the start of the next season. Should you choose to cancel your service plan at any point during the year, you will be responsible for paying the difference between our One-Time Cleans and the pricing of the Recurring Service Package.',
				'Please note that your scheduled appointment time is an ESTIMATED time, influenced by factors beyond our control such as weather, traffic, and the condition of the bins. As a result, your appointment may occur EARLIER or LATER than anticipated. However, we assure you that your appointment will be fulfilled on the scheduled date unless you are informed otherwise.',
			],
		},
		{
			title: 'Cancellation Policy',
			items: [
				'To avoid cancellation fees, it is essential to inform Bin Medic+ at least 48 hours in advance of your scheduled bin cleaning.',
				'For Recurring Service Plans, a written notice of 30 days is required for any cancellations. Should you decide to cancel your service plan at any point during the season, you will be responsible for paying the difference between the cost of One-Time Cleans and the pricing of the Recurring Service Package.',
			],
		},
	];

	return (
		<>
			<Navbar
				logo={{
					text: businessName,
					href: '/',
				}}
				links={[
					{ label: 'Home', href: '/' },
					{ label: 'About Us', href: '/#about' },
					{ label: 'Our Process', href: '/#our-process' },
					{ label: 'Pricing', href: '/#pricing' },
					{ label: 'Contact Us', href: '/#contact' },
				]}
				cta={{
					label: 'Prebook Now',
					href: prebookLink,
				}}
			/>

			<main>
				<SectionWrapper background="light" className="pt-32">
					<div className="max-w-4xl mx-auto">
						{/* Header */}
						<div className="text-center mb-12">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--template-primary)]/10 text-[var(--template-primary)] mb-6">
								<FileText className="w-8 h-8" />
							</div>
							<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
								Terms &amp; Conditions
							</h1>
							<p className="text-slate-600 max-w-2xl mx-auto">
								Please review our terms and conditions carefully
								before booking a bin cleaning service with{' '}
								{businessName}.
							</p>
						</div>

						{/* Terms Content */}
						<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
							{termsAndConditions.map((section, idx) => (
								<div
									key={idx}
									className={`p-6 sm:p-8 ${
										idx !== termsAndConditions.length - 1
											? 'border-b border-slate-200'
											: ''
									}`}
								>
									<h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
										<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--template-primary)] text-white text-sm font-bold">
											{idx + 1}
										</span>
										{section.title}
									</h2>
									<ul className="space-y-4">
										{section.items.map((item, itemIdx) => (
											<li
												key={itemIdx}
												className="text-slate-600 leading-relaxed pl-6 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[var(--template-primary)]/30"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						{/* Back to Pricing Link */}
						<div className="text-center mt-10">
							<a
								href="/"
								className="inline-flex items-center gap-2 text-[var(--template-primary)] font-medium hover:underline"
							>
								<svg
									className="w-4 h-4 rotate-180"
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
								Back
							</a>
						</div>
					</div>
				</SectionWrapper>
			</main>

			<FooterSection
				businessName={businessName}
				phone={phone}
				email={email}
				address="Calgary, Alberta"
				links={[
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/#about' },
					{ label: 'Pricing', href: '/#pricing' },
					{ label: 'Contact', href: '/#contact' },
					{ label: 'Terms & Conditions', href: '/terms' },
				]}
				serviceLinks={[
					{ label: 'Residential Cleaning', href: '/#pricing' },
					{ label: 'Commercial Cleaning', href: '/#pricing' },
					{ label: 'One-Time Service', href: '/#pricing' },
					{ label: 'Monthly Plans', href: '/#pricing' },
				]}
				socialLinks={{
					facebook: 'https://facebook.com/binmedicplus',
					instagram: 'https://instagram.com/binmedicplus',
				}}
			/>
		</>
	);
}
