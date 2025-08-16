import { Tv, Download, Globe, Users } from 'lucide-react'

const features = [
  {
    icon: Tv,
    title: "Enjoy on your TV",
    description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
  },
  {
    icon: Download,
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch."
  },
  {
    icon: Globe,
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  },
  {
    icon: Users,
    title: "Create profiles for kids",
    description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">More Reasons to Join</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}