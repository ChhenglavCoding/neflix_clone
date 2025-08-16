import { Button } from './ui/button'
import { Input } from './ui/input'
import { ChevronRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/US-en-20250721-TRIFECTA-perspective_6d968797-b773-4ec4-aa69-2a9c2e41ae94_large.jpg')`
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        
        <p className="text-lg md:text-xl mb-4">
          Starts at $7.99. Cancel anytime.
        </p>
        
        <p className="text-base md:text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
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
    </section>
  )
}