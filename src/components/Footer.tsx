import { Globe } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const footerLinks = [
  ["FAQ", "Help Center", "Account", "Media Center"],
  ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
  ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
  ["Speed Test", "Legal Notices", "Only on Netflix", "Ad Choices"]
]

export function Footer() {
  return (
    <footer className="py-16 px-4 md:px-12 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-400 mb-8">Questions? Call 1-866-952-4456</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href="#" 
                  className="block text-gray-400 hover:text-white text-sm underline transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        
        <div className="mb-8">
          <Select defaultValue="english">
            <SelectTrigger className="w-auto bg-transparent border border-gray-600 text-gray-400">
              <Globe className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Khmer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <p className="text-gray-400 text-sm">Netflix Cambodia</p>
      </div>
    </footer>
  )
}