export const ProjectsSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Commercial Wiring",
      description: "Professional electrical installation for office buildings"
    },
    {
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Residential Repairs",
      description: "Complete home electrical maintenance and repairs"
    },
    {
      image: "https://images.unsplash.com/photo-1621905252289-3e2de4850156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Industrial Solutions",
      description: "Large-scale industrial electrical projects"
    },
    {
      image: "https://images.unsplash.com/photo-1621905252144-249150dcd237?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Emergency Services",
      description: "24/7 emergency electrical repair services"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Browse Our Popular Electrical Projects</h2>
          <p className="text-gray-400">Your electrical system must be installed safely and professionally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <button className="mt-4 border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};