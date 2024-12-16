import './App.css'
import ZodiacSign from './components/ZodiacSign'
import { 
  Mountain, Star, Users, Badge, Flower, 
  Bug, ArrowUpRight, Waves, Fish 
} from "lucide-react";

function App() {

  const zodiacData = [
    { name: "Bélier", icon: Mountain },
    { name: "Taureau", icon: Star },
    { name: "Gémeaux", icon: Users },
    { name: "Cancer", icon: Star },
    { name: "Lion", icon: Badge },
    { name: "Vierge", icon: Flower },
    { name: "Balance", icon: Star },
    { name: "Scorpion", icon: Bug },
    { name: "Sagittaire", icon: ArrowUpRight },
    { name: "Capricorne", icon: Mountain },
    { name: "Verseau", icon: Waves },
    { name: "Poissons", icon: Fish },
  ]

  return (
    <div className="bg-blue-100 w-full min-h-[100vh] pt-10 lg:pt-16">
     <div className='text-center'>
      <h1 className='text-3xl md:text-4xl font-extrabold mb-4 lg:mb-6 text-blue-800'>Daily Horoscope</h1>
      <p className='w-[80%] mx-auto text-sm md:text-base text-blue-900'>Discover what the stars have in store for you today</p>
     </div>
     <div className='px-4 mx-auto mt-16 w-full md:w-[80%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
      {
        zodiacData.map((sign, index) => (
          <ZodiacSign key={index} zodiacSign={sign.name} ZodiacIcon={sign.icon} />
        ))
      }
     </div>
    </div>
  )
}

export default App
