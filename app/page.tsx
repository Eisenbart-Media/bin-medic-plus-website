import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { WelcomeSection } from '@/components/sections/WelcomeSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { OurProcessSection } from '@/components/sections/OurProcessSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { PricingFaqSection } from '@/components/sections/PricingFaqSection';
import { CtaBannerSection } from '@/components/sections/CtaBannerSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { Ban, Leaf, Bug, CheckCheck } from 'lucide-react';

export default function Home() {
	const businessName = 'Bin Medic+';
	const phone = '(825) 882-2226';
	const email = 'info@binmedic.ca';
	const prebookLink =
		'https://book.housecallpro.com/book/BIN-MEDIC-/38639536204340e28b846908bf2cb80d';

	return (
		<>
			<Navbar
				logo={{
					text: businessName,
					href: '#',
				}}
				links={[
					{ label: 'Home', href: '#' },
					{ label: 'About Us', href: '#about' },
					{ label: 'Our Process', href: '#our-process' },
					{ label: 'Pricing', href: '#pricing' },
					{ label: 'Contact Us', href: '#contact' },
				]}
				cta={{
					label: 'Prebook Now',
					href: prebookLink,
				}}
			/>

			<main>
				<HeroSection
					businessName={businessName}
					headline="Bin Cleaning Experts Building a Better Tomorrow"
					subheadline="Professional, eco-friendly bin cleaning that eliminates odors, bacteria, and germs. Keep your home or business fresh and sanitary with our convenient curbside service."
					ctaText="Prebook Now"
					ctaHref={prebookLink}
				/>

				<WelcomeSection
					businessName={businessName}
					videoId="btw39_f6P6I"
				/>

				<AboutSection
					businessName={businessName}
					headline="A Local Family Business"
					story="We are a local family-owned business deeply committed to both our community and the environment. The inspiration for our services arose from conversations with neighbors about the unpleasantness of 'Those Nasty Bins.' You know the scenario: on a sweltering day, after mowing the lawn or cleaning up after pets, you're enjoying time outdoors when an awful smell suddenly wafts through the air. Where could it be coming from? 'Those Nasty Bins!' Never fear, Bin Medic+ is here and HAS THE CURE FOR YOUR BINS!"
					mission="Bin Medic+ offers an affordable and environmentally friendly mobile bin cleaning service that assists homeowners in eliminating harmful bacteria, offensive odors, pesky insects, and curious rodents. Our specialized self-contained truck utilizes a groundbreaking cleaning process that employs clean hot water heated to 200 degrees F, without any chemical additives. This method effectively kills 99.9% of known bacteria while also eliminating nasty odors."
					closing="Our team provides a reliable hassle-free curbside garbage bin cleaning service that our customers can depend on, helping to ensure a safe and healthy world for future generations."
					stats={[
						{ value: '5,000+', label: 'Bins Cleaned' },
						{ value: '100%', label: 'Eco-Friendly' },
						{ value: '99.9%', label: 'Bacteria Eliminated' },
						{ value: 'Calgary', label: 'Proudly Local' },
					]}
					ctaText="Prebook Today"
					ctaHref={prebookLink}
					image="/about.png"
				/>

				<ReviewsSection
					businessName={businessName}
					googleBusinessUrl="https://www.google.com/maps/place/Bin+Medic%2B/@51.0272883,-114.3680132,10z/data=!4m8!3m7!1s0x5371772292a7d895:0x50455b7b62b0f0a2!8m2!3d50.9541194!4d-114.087835!9m1!1b1!16s%2Fg%2F11pwx98z2y"
					averageRating={5.0}
					totalReviews={795}
					reviews={[
						{
							id: '1',
							author: 'P. Sully',
							rating: 5,
							text: "BIN MEDIC+, a local family business, doesn't disappoint. They schedule bin cleaning after the city garbage collection. The bins are now resistant to summer heat and smell fragrant. Thank you BIN MEDIC+!",
							date: '4 months ago',
						},
						{
							id: '2',
							author: 'Patty Hodges',
							rating: 5,
							text: 'My bins were absolutely filthy, especially the green and black ones.  These are impeccably clean! Thanks so much…we will be calling you again.  😊😊 …',
							date: '2 months ago',
						},
						{
							id: '3',
							author: 'Amber Pessell',
							rating: 5,
							text: `Fantastic!
My bins have never been cleaned before today. They look new! They smell like cleaner instead of my rude new neighbours, dogs poops. (I forgot a before photo-but it was gross).
Thanks so much for having availability a few days out and for being so quick!`,
							date: '2 months ago',
						},
					]}
				/>

				<OurProcessSection
					businessName={businessName}
					videoId="btw39_f6P6I"
				/>

				<WhyChooseUsSection
					businessName={businessName}
					headline="Why Choose Bin Medic+?"
					reasons={[
						{
							id: '1',
							icon: <Ban className="w-10 h-10" />,
							title: 'Eliminates Bacteria & Odors',
							description:
								'Our professional cleaning service cleans, sanitizes, and deodorizes your garbage bins, effectively killing 99.9% of harmful bacteria that gather from slime, dirt, and odors.',
						},
						{
							id: '2',
							icon: <Leaf className="w-10 h-10" />,
							title: 'Environmentally Safe & Clean',
							description:
								'Our self-contained truck prevents wastewater from contaminating storm drains or property. We use clean water and dispose of used water at a licensed facility, ensuring a sanitary and environmentally safe cleaning system.',
						},
						{
							id: '3',
							icon: <Bug className="w-10 h-10" />,
							title: 'Eliminates Insects & Rodents',
							description:
								'Odors and food waste attract pests, creating breeding grounds for harmful bacteria and diseases like E. Coli, Salmonella, and Listeria. Regular maintenance helps eliminate these threats for a cleaner, healthier environment.',
						},
						{
							id: '4',
							icon: <CheckCheck className="w-10 h-10" />,
							title: 'Affordable & Convenient',
							description:
								'Our specialized curbside cleaning system handles the messy task for you. With multiple cost-effective annual plans and one-time cleaning services, Bin Medic+ is the leading provider of professional and affordable bin cleaning solutions.',
						},
					]}
				/>

				<PricingFaqSection
					businessName={businessName}
					ctaHref={prebookLink}
				/>

				<CtaBannerSection
					headline="DON'T DELAY, BOOK BIN MEDIC+ TODAY!"
					subheadline="Let us be the cure for your bins."
					ctaText="Prebook Now"
					ctaHref={prebookLink}
				/>

				<ContactSection
					businessName={businessName}
					phone={phone}
					email={email}
					address="Serving Calgary and surrounding areas, AB"
					businessHours={[
						{ day: 'Monday', hours: 'Closed' },
						{ day: 'Tuesday', hours: 'Closed' },
						{ day: 'Wednesday', hours: '8:00 AM - 8:00 PM' },
						{ day: 'Thursday', hours: '8:00 AM - 8:00 PM' },
						{ day: 'Friday', hours: '8:00 AM - 8:00 PM' },
						{ day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
						{ day: 'Sunday', hours: '9:00 AM - 7:00 PM' },
					]}
				/>
			</main>

			<FooterSection
				businessName={businessName}
				phone={phone}
				email={email}
				address="Calgary, Alberta"
				links={[
					{ label: 'Home', href: '#' },
					{ label: 'About Us', href: '#about' },
					{ label: 'Our Process', href: '#process' },
					{ label: 'Pricing', href: '#pricing' },
					{ label: 'Contact', href: '#contact' },
				]}
				businessHours={[
					{ day: 'Monday', hours: 'Closed' },
					{ day: 'Tuesday', hours: 'Closed' },
					{ day: 'Wed - Sat', hours: '8:00 AM - 8:00 PM' },
					{ day: 'Sunday', hours: '9:00 AM - 7:00 PM' },
				]}
				socialLinks={{
					facebook: 'https://facebook.com/binmedicplus',
					instagram: 'https://instagram.com/binmedicplus',
				}}
			/>
		</>
	);
}
