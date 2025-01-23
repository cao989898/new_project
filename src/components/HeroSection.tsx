export const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
    }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fast Electrical Repair<br />
            Trouble Free Service
          </h1>
          <p className="text-xl mb-8">The electrician must be fast and professional</p>
          <div className="space-x-4">
            <button className="bg-[#FF7315] text-white px-8 py-3 rounded-full hover:bg-[#E65C00] transition-colors">
              Learn More →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              Speed Service Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};