import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { ChevronRight } from 'lucide-react'

const faqs = [
	{
		question: 'What is Netflix?',
		answer:
			'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries on thousands of internet-connected devices.',
	},
	{
		question: 'How much does Netflix cost?',
		answer:
			'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $22.99 a month.',
	},
	{
		question: 'Where can I watch?',
		answer:
			'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.',
	},
	{
		question: 'How do I cancel?',
		answer:
			'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.',
	},
	{
		question: 'What can I watch on Netflix?',
		answer:
			'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.',
	},
	{
		question: 'Is Netflix good for kids?',
		answer:
			'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
	},
]

export function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<section className="py-16 px-4 md:px-12 bg-black">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
					Frequently Asked Questions
				</h2>

				<div className="space-y-2 mb-12">
					{faqs.map((faq, index) => (
						<div key={index} className="bg-gray-800 rounded-sm">
							<button
								className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-700 transition-colors"
								onClick={() =>
									setOpenIndex(openIndex === index ? null : index)
								}
							>
								<span className="text-lg md:text-xl font-medium">
									{faq.question}
								</span>
								{openIndex === index ? (
									<X className="w-6 h-6 flex-shrink-0" />
								) : (
									<Plus className="w-6 h-6 flex-shrink-0" />
								)}
							</button>

							{openIndex === index && (
								<div className="px-6 pb-6">
									<p className="text-gray-300 text-lg leading-relaxed">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="text-center">
					<p className="text-lg mb-6">
						Ready to watch? Enter your email to create or restart your
						membership.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
						<Input
							type="email"
							placeholder="Email address"
							className="flex-1 bg-black/50 border-white/30 text-white placeholder:text-white/70 h-12"
						/>
						<Button className="bg-red-600 hover:bg-red-700 text-white px-6 h-12 text-lg font-medium">
							Get Started
							<ChevronRight className="w-5 h-5 ml-2" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}