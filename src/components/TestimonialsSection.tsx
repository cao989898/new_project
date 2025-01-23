import { useState } from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Adam Wilson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "It is a fast and reliable electricity company. They fixed the problem in our apartment in a short time. Excellent service."
    },
    {
      name: "Elizabeth Brown",
      role: "Office Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "We could not find a solution to the general electrical problem in our office. They were helpful just in time. Thanks."
    },
    {
      name: "Robert Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      text: "It is a friendly and professional electrical company. We were very satisfied with the electrical service in our building."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Are Our Customers Saying?</h2>
          <p className="text-gray-600">Opinions from our happy customers.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h3>
                <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic">"{testimonials[currentTestimonial].text}"</p>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentTestimonial === index ? 'bg-[#FF7315]' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};