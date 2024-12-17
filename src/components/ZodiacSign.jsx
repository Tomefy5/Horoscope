export default function ZodiacSign({ ZodiacIcon, zodiacSign, fetchHoroscope }) {
  return (
    <button onClick={fetchHoroscope} className="flex flex-col justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 text-slate-100 hover:text-slate-300 transition-all duration-200 rounded-md py-5 lg:py-8">
      <ZodiacIcon size={45} />
      <span className="text-lg lg:text-xl font-medium">{zodiacSign}</span>
    </button>
  );
}
