import QuotesImage from "../assets/images/bg-quotes.png";
import Profile1 from "../assets/images/profile-1.jpg";
import Profile2 from "../assets/images/profile-2.jpg";
import Profile3 from "../assets/images/profile-3.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Profile1,
      name: "Satish Patel",
      role: "Founder & CEO. Huddle",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Profile2,
      name: "Bruce McKenzie",
      role: "Founder & CEO. Huddle 2",
    },
    {
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: Profile3,
      name: "Eva Boyd",
      role: "Founder & CEO. Huddle 3",
    },
  ];

  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          {/* Quotes Image */}
          <img
            src={QuotesImage}
            alt=""
            className="absolute -top-2 left-1 w-10 md:-top-16 md:w-20"
          />

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3"
            >
              <p className="text-sm leading-5 md:text-lg">{testimonial.text}</p>

              {/* Customer Info */}
              <div className="flex space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full"
                />

                <div>
                  <h5 className="text-sm font-semibold">{testimonial.name}</h5>
                  <p className="text-xs font-extralight">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
