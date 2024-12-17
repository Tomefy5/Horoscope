import { useState } from "react";
import "./App.css";
import ZodiacSign from "./components/ZodiacSign";
import {
  Mountain,
  Star,
  Users,
  Badge,
  Flower,
  Bug,
  ArrowUpRight,
  Waves,
  Fish,
  Loader,
} from "lucide-react";

const APIKEY = import.meta.env.VITE_RAPIDE_API_HOROSCOPE;

function App() {
  const zodiacData = [
    { name: "Bélier", icon: Mountain, fetchName: "aries" },
    { name: "Taureau", icon: Star, fetchName: "taurus" },
    { name: "Gémeaux", icon: Users, fetchName: "gemini" },
    { name: "Cancer", icon: Star, fetchName: "cancer" },
    { name: "Lion", icon: Badge, fetchName: "leo" },
    { name: "Vierge", icon: Flower, fetchName: "virgo" },
    { name: "Balance", icon: Star, fetchName: "libra" },
    { name: "Scorpion", icon: Bug, fetchName: "scorpio" },
    { name: "Sagittaire", icon: ArrowUpRight, fetchName: "sagittarius" },
    { name: "Capricorne", icon: Mountain, fetchName: "capricorn" },
    { name: "Verseau", icon: Waves, fetchName: "aquarius" },
    { name: "Poissons", icon: Fish, fetchName: "pisces" },
  ];

  const [sign, setSign] = useState("");
  const [loading, setLoading] = useState(true);
  const [horoscope, setHoroscope] = useState(null);

  const fetchHoroscope = async (selectedSign) => {
    setLoading(true);

    const url = `https://daily-horoscope-api.p.rapidapi.com/api/Daily-Horoscope-English/?zodiacSign=${selectedSign}&timePeriod=weekly`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": APIKEY,
        "x-rapidapi-host": "daily-horoscope-api.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setHoroscope(result);
      setSign(selectedSign);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-200 w-full min-h-[100vh] pb-16 pt-10 lg:pt-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 lg:mb-6 text-blue-800">
          Daily Horoscope 😊
        </h1>
        <p className="w-[80%] mx-auto text-sm md:text-base text-blue-900">
          Discover what the stars have in store for you today
        </p>
      </div>
      <div className="px-4 mx-auto mt-16 w-full md:w-[80%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {zodiacData.map((sign, index) => (
          <ZodiacSign
            key={index}
            zodiacSign={sign.name}
            ZodiacIcon={sign.icon}
            fetchHoroscope={() => fetchHoroscope(sign.fetchName)}
          />
        ))}
      </div>
      <div className="mt-16 px-4 w-full md:w-[80%] mx-auto">
        <h2 className="font-medium text-3xl text-center mb-8 text-blue-800">
          {sign === ""
            ? "What is your horoscope today 🤔"
            : `Horoscope for ${sign} 😌`}
        </h2>
        {loading ? (
          <Loader
            className="animate-spin text-blue-500 mx-auto mt-10  opacity-0 animate-fade-in transition-opacity duration-100"
            size={50}
          />
        ) : (
          <p className="text-sm md:text-base text-blue-950">
            {horoscope.prediction}
          </p>
        )}
      </div>
    </div>
  )
}

export default App;
