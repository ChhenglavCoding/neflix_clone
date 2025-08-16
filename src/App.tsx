import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { TrendingSection } from './components/TrendingSection'
import { FeaturesSection } from './components/FeaturesSection'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <TrendingSection />
      <FeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App