'use client';

import { cn } from '@/lib/utils';
import { SectionWrapper } from '../ui/SectionWrapper';
import { TemplateButton } from '../ui/TemplateButton';
import { NativeSelect, NativeSelectOption } from '../ui/native-select';
import { useState, type FormEvent } from 'react';

interface BusinessHours {
	day: string;
	hours: string;
}

interface ContactSectionProps {
	businessName: string;
	phone?: string;
	email?: string;
	address?: string;
	businessHours?: BusinessHours[];
	className?: string;
	onSubmit?: (data: ContactFormData) => void;
}

interface ContactFormData {
	interestedIn: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	streetAddress: string;
	addressLine2: string;
	city: string;
	province: string;
	postalCode: string;
	message: string;
}

const CANADIAN_PROVINCES = [
	'Alberta',
	'British Columbia',
	'Manitoba',
	'New Brunswick',
	'Newfoundland and Labrador',
	'Northwest Territories',
	'Nova Scotia',
	'Nunavut',
	'Ontario',
	'Prince Edward Island',
	'Quebec',
	'Saskatchewan',
	'Yukon',
];

const defaultHours: BusinessHours[] = [
	{ day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
	{ day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
	{ day: 'Sunday', hours: 'Closed' },
];

export const ContactSection = ({
	businessName,
	phone = '(555) 123-4567',
	email = 'info@example.com',
	address = '123 Main Street, Anytown, ST 12345',
	businessHours,
	className,
	onSubmit,
}: ContactSectionProps) => {
	const [formData, setFormData] = useState<ContactFormData>({
		interestedIn: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		streetAddress: '',
		addressLine2: '',
		city: '',
		province: '',
		postalCode: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const displayHours =
		businessHours && businessHours.length > 0
			? businessHours
			: defaultHours;

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (onSubmit) {
			await onSubmit(formData);
		}

		// Simulate submission delay for demo
		await new Promise((resolve) => setTimeout(resolve, 1000));

		setIsSubmitting(false);
		setSubmitted(true);
		setFormData({
			interestedIn: '',
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
			streetAddress: '',
			addressLine2: '',
			city: '',
			province: '',
			postalCode: '',
			message: '',
		});
	};

	return (
		<SectionWrapper background="white" className={className} id="contact">
			{/* Section Header */}
			<div className="text-center mb-12">
				<p className="text-[var(--template-primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
					Get In Touch
				</p>
				<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
					Contact Us
				</h2>
				<p className="text-slate-600 max-w-2xl mx-auto">
					Ready to get started? Reach out to us today for a free
					consultation and quote. We&apos;re here to help!
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Contact Form */}
				<div>
					<form onSubmit={handleSubmit} className="space-y-4">
						{/* Interested In */}
						<div>
							<label
								htmlFor="contact-interested-in"
								className="block text-sm font-medium text-slate-700 mb-2"
							>
								Interested in?
							</label>
							<NativeSelect
								id="contact-interested-in"
								name="interestedIn"
								value={formData.interestedIn}
								onChange={handleInputChange}
								tabIndex={0}
							>
								<NativeSelectOption value="">
									--- Please Select---
								</NativeSelectOption>
								<NativeSelectOption value="residential">
									Residential Bin Cleaning
								</NativeSelectOption>
								<NativeSelectOption value="commercial">
									Commercial Bin Cleaning
								</NativeSelectOption>
								<NativeSelectOption value="general">
									General Inquiry
								</NativeSelectOption>
							</NativeSelect>
						</div>

						{/* Name Section */}
						<div>
							<h3 className="text-sm font-semibold text-slate-900 mb-2">
								Name <span className="text-red-500">*</span>
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* First Name */}
								<div className="flex flex-col">
									<label
										htmlFor="contact-first-name"
										className="block text-xs font-medium text-slate-500 mb-1 self-start"
									>
										First
									</label>
									<input
										type="text"
										id="contact-first-name"
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										required
										className={cn(
											'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
											'text-slate-900 placeholder:text-slate-400',
											'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
											'transition-all duration-200'
										)}
										aria-required="true"
										tabIndex={0}
									/>
								</div>

								{/* Last Name */}
								<div className="flex flex-col">
									<label
										htmlFor="contact-last-name"
										className="block text-xs font-medium text-slate-500 mb-1 self-start"
									>
										Last
									</label>
									<input
										type="text"
										id="contact-last-name"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										required
										className={cn(
											'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
											'text-slate-900 placeholder:text-slate-400',
											'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
											'transition-all duration-200'
										)}
										aria-required="true"
										tabIndex={0}
									/>
								</div>
							</div>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="contact-email"
								className="block text-sm font-medium text-slate-700 mb-2"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="contact-email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								required
								className={cn(
									'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
									'text-slate-900 placeholder:text-slate-400',
									'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
									'transition-all duration-200'
								)}
								aria-required="true"
								tabIndex={0}
							/>
						</div>

						{/* Phone */}
						<div>
							<h3 className="text-sm font-semibold text-slate-900 mb-2">
								Phone <span className="text-red-500">*</span>
							</h3>
							<input
								type="tel"
								id="contact-phone"
								name="phone"
								value={formData.phone}
								onChange={handleInputChange}
								required
								className={cn(
									'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
									'text-slate-900 placeholder:text-slate-400',
									'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
									'transition-all duration-200'
								)}
								aria-required="true"
								tabIndex={0}
							/>
						</div>

						{/* Address Section */}
						<div>
							<h3 className="text-sm font-semibold text-slate-900 mb-2">
								Address <span className="text-red-500">*</span>
							</h3>
							<div className="space-y-4">
								<div>
									<label
										htmlFor="contact-street-address"
										className="block text-xs font-medium text-slate-500 mb-1"
									>
										Street Address
									</label>
									<input
										type="text"
										id="contact-street-address"
										name="streetAddress"
										value={formData.streetAddress}
										onChange={handleInputChange}
										required
										className={cn(
											'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
											'text-slate-900 placeholder:text-slate-400',
											'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
											'transition-all duration-200'
										)}
										aria-required="true"
										tabIndex={0}
									/>
								</div>

								<div>
									<label
										htmlFor="contact-address-line-2"
										className="block text-xs font-medium text-slate-500 mb-1"
									>
										Address Line 2
									</label>
									<input
										type="text"
										id="contact-address-line-2"
										name="addressLine2"
										value={formData.addressLine2}
										onChange={handleInputChange}
										className={cn(
											'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
											'text-slate-900 placeholder:text-slate-400',
											'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
											'transition-all duration-200'
										)}
										tabIndex={0}
									/>
								</div>

								{/* Province */}
								<div>
									<label
										htmlFor="contact-province"
										className="block text-xs font-medium text-slate-500 mb-1"
									>
										Province
									</label>
									<NativeSelect
										id="contact-province"
										name="province"
										value={formData.province}
										onChange={handleInputChange}
										required
										aria-required="true"
										tabIndex={0}
									>
										<NativeSelectOption value="">
											Select Province
										</NativeSelectOption>
										{CANADIAN_PROVINCES.map((province) => (
											<NativeSelectOption
												key={province}
												value={province}
											>
												{province}
											</NativeSelectOption>
										))}
									</NativeSelect>
								</div>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
									{/* City */}
									<div className="flex flex-col">
										<label
											htmlFor="contact-city"
											className="block text-xs font-medium text-slate-500 mb-1 self-start"
										>
											City
										</label>
										<input
											type="text"
											id="contact-city"
											name="city"
											value={formData.city}
											onChange={handleInputChange}
											required
											className={cn(
												'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
												'text-slate-900 placeholder:text-slate-400',
												'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
												'transition-all duration-200'
											)}
											aria-required="true"
											tabIndex={0}
										/>
									</div>

									{/* Postal Code */}
									<div className="flex flex-col">
										<label
											htmlFor="contact-postal-code"
											className="block text-xs font-medium text-slate-500 mb-1 self-start"
										>
											Postal Code
										</label>
										<input
											type="text"
											id="contact-postal-code"
											name="postalCode"
											value={formData.postalCode}
											onChange={handleInputChange}
											required
											className={cn(
												'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white',
												'text-slate-900 placeholder:text-slate-400',
												'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
												'transition-all duration-200'
											)}
											aria-required="true"
											tabIndex={0}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Message */}
						<div>
							<h3 className="text-sm font-semibold text-slate-900 mb-2">
								Your Message
							</h3>
							<textarea
								id="contact-message"
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								rows={5}
								className={cn(
									'w-full px-4 py-3 rounded-sm border border-slate-200 bg-white resize-none',
									'text-slate-900 placeholder:text-slate-400',
									'focus:outline-none focus:ring-2 focus:ring-[var(--template-primary)] focus:border-transparent',
									'transition-all duration-200'
								)}
								placeholder="Tell us how we can help..."
								tabIndex={0}
							/>
						</div>

						{/* Submit Button */}
						<div>
							{submitted ? (
								<div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-sm border border-emerald-100">
									<svg
										className="w-5 h-5 text-emerald-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span className="text-emerald-800 font-medium">
										Thank you! We&apos;ll be in touch soon.
									</span>
								</div>
							) : (
								<TemplateButton
									type="submit"
									variant="primary"
									size="lg"
									disabled={isSubmitting}
									className="w-full sm:w-auto"
								>
									{isSubmitting ? (
										<>
											<svg
												className="animate-spin w-5 h-5"
												fill="none"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												/>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												/>
											</svg>
											Sending...
										</>
									) : (
										<>
											Send Message
											<svg
												className="w-5 h-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</>
									)}
								</TemplateButton>
							)}
						</div>
					</form>
				</div>

				{/* Announcement Content */}
				<div className="flex flex-col justify-start">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
						Thank you for an incredible 2025 season!
					</h2>

					<div className="space-y-4 text-slate-700 mb-8">
						<p>
							Bin Medic+ will be officially close for the winter
							season as of November 16, 2025! Our Bin Medic+ Team
							wants to express our gratitude for supporting our
							locally owned and operated family business. We truly
							appreciate all your wonderful reviews and
							recommendations and can&apos;t wait to serve you
							again next year.
						</p>

						<p>
							Prebooking is now open for your Spring 2026 bin
							cleanings. Book today, as appointments are filling
							up fast.
						</p>

						<p>
							Wishing you a safe and healthy winter. We look
							forward to seeing you all again in the Spring!
						</p>
					</div>

					<div className="mt-8">
						<h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
							Send us a Message!
						</h3>
						<p className="text-slate-700 mb-6">
							We&apos;re here to help. If you would like more
							information or have any questions, please feel free
							to contact us.
						</p>

						<div className="space-y-3">
							<a
								href={`tel:${phone}`}
								className="block text-[var(--template-primary)] font-medium hover:underline"
								tabIndex={0}
							>
								{phone}
							</a>
							<a
								href={`mailto:${email}`}
								className="block text-[var(--template-primary)] font-medium hover:underline break-all"
								tabIndex={0}
							>
								{email}
							</a>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
