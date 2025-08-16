import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const trendingShows = [
  {
    id: 1,
    title: "Wednesday",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRhpHnfh6ia4QcotnBIjOTFL15LZcxTPjXf5VFU_E_ayrXSswVPM_vAfqrmSoUqf-gC_bRjsC6918GtEasl95dPq6PmppVAHtndE5xrFBIzsX0JVN6c9w-0AVT1lkdh3b6Xa.webp?r=2b8",
    rank: 1
  },
  {
    id: 2,
    title: "The Glory",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcrhAaNZU6tXbpVoi9LpbMZmjZX22ZfuOwNmuPy5i4quoB8cWiO-67vbTk07rZyX5YtKKci5c0XoFHJ1vphlx0Rau-hgCpnzEfMORMer4uPuTytZw3q4AMK38cPtc4fjKe2e.webp?r=711",
    rank: 2
  },
  {
    id: 3,
    title: "Night Agent",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfQbkxRwQV_zSeEDI92Hhu86ttq6vTI-NPSom5LdKyBMDQnH1igsOb6RDax9ISrNh5kO1_moHkhPGwegaKDB6vjbSWkpcddy-AGeaMkLfCDuBReX6VSfydIvc-9dldHeD-dw.webp?r=453",
    rank: 3
  },
  {
    id: 4,
    title: "Ginny & Georgia",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeysJ_o0Fqo2Esnk8H3hp3V1VarIGpeg_GoiaL3A4_BLVb29OEEM1b17gQxKFblxZaEl42kzUG8QkRINoZ4HHxAN8N-WoN_YF_fcPYgiIiq03s81yru4DEvGn7SiPnW55-JK.webp?r=49b",
    rank: 4
  },
  {
    id: 5,
    title: "You",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTNcdaPf8yIvGQiDNX6KeyXmDqOEZHsb-b5qxPWuiUEkkOtnToNwuJM9LZJKoUT_ty_4xupoIxNgLWH9nske5roXj1_eBEmdCdcMLCvZsVhmCXYHdu7AGhrKtLme8TM15I17.webp?r=bcd",
    rank: 5
  },
  {
    id: 6,
    title: "Money Heist",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRhpHnfh6ia4QcotnBIjOTFL15LZcxTPjXf5VFU_E_ayrXSswVPM_vAfqrmSoUqf-gC_bRjsC6918GtEasl95dPq6PmppVAHtndE5xrFBIzsX0JVN6c9w-0AVT1lkdh3b6Xa.webp?r=2b8",
    rank: 6
  },
  {
    id: 7,
    title: "Stranger Things",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTNcdaPf8yIvGQiDNX6KeyXmDqOEZHsb-b5qxPWuiUEkkOtnToNwuJM9LZJKoUT_ty_4xupoIxNgLWH9nske5roXj1_eBEmdCdcMLCvZsVhmCXYHdu7AGhrKtLme8TM15I17.webp?r=bcd",
    rank: 7
  },
  {
    id: 8,
    title: "Squid Game",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRhpHnfh6ia4QcotnBIjOTFL15LZcxTPjXf5VFU_E_ayrXSswVPM_vAfqrmSoUqf-gC_bRjsC6918GtEasl95dPq6PmppVAHtndE5xrFBIzsX0JVN6c9w-0AVT1lkdh3b6Xa.webp?r=2b8",
    rank: 8
  },
  {
    id: 9,
    title: "All of Us Are Dead",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTNcdaPf8yIvGQiDNX6KeyXmDqOEZHsb-b5qxPWuiUEkkOtnToNwuJM9LZJKoUT_ty_4xupoIxNgLWH9nske5roXj1_eBEmdCdcMLCvZsVhmCXYHdu7AGhrKtLme8TM15I17.webp?r=bcd",
    rank: 9
  },
  {
    id: 10,
    title: "Alice in Borderland",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTNcdaPf8yIvGQiDNX6KeyXmDqOEZHsb-b5qxPWuiUEkkOtnToNwuJM9LZJKoUT_ty_4xupoIxNgLWH9nske5roXj1_eBEmdCdcMLCvZsVhmCXYHdu7AGhrKtLme8TM15I17.webp?r=bcd",
    rank: 10
  },
  {
    id: 11,
    title: "The Witcher",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRhpHnfh6ia4QcotnBIjOTFL15LZcxTPjXf5VFU_E_ayrXSswVPM_vAfqrmSoUqf-gC_bRjsC6918GtEasl95dPq6PmppVAHtndE5xrFBIzsX0JVN6c9w-0AVT1lkdh3b6Xa.webp?r=2b8",
    rank: 11
  },
  {
    id: 12,
    title: "Kingdom",
    image: "https://occ-0-2219-2218.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTNcdaPf8yIvGQiDNX6KeyXmDqOEZHsb-b5qxPWuiUEkkOtnToNwuJM9LZJKoUT_ty_4xupoIxNgLWH9nske5roXj1_eBEmdCdcMLCvZsVhmCXYHdu7AGhrKtLme8TM15I17.webp?r=bcd",
    rank: 12
  }

]

export function TrendingSection() {
  return (
    <section className="py-12 px-4 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Trending Now</h2>
        
        <div className="relative">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {trendingShows.map((show) => (
              <div key={show.id} className="flex-shrink-0 relative group cursor-pointer">
                <div className="relative">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-32 md:w-40 h-44 md:h-56 object-cover rounded-md transition-transform group-hover:scale-105"
                  />
                  <div className="absolute -bottom-4 -left-4 text-6xl md:text-8xl font-black text-white stroke-2 stroke-gray-800">
                    {show.rank}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}