import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Globe } from 'lucide-react'

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4">
      <div className="flex items-center">
        <h1 className="text-red-600 text-2xl md:text-4xl font-bold">NETFLIX</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Select defaultValue="english">
          <SelectTrigger className="w-auto bg-transparent border border-white/30 text-white">
            <Globe className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="spanish">Khmer</SelectItem>
          </SelectContent>
        </Select>
        
        <Button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Sign In
        </Button>
      </div>
    </header>
  )
}