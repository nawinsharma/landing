import React from "react";
import { Button } from "../../../../components/ui/button";

export const StatsSection = (): JSX.Element => {
  const stats = [
    {
      title: "250+ Championships Organized",
      description: "Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.",
    },
    {
      title: "3,000+ Athletes Empowered",
      description: "Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!",
    },
    {
      title: "100,000+ Events Logged",
      description: "Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!",
    },
  ];

  const testimonialAvatars = [
    "/ellipse-280.png",
    "/ellipse-281.png",
    "/ellipse-282.png",
    "/ellipse-283.png",
    "/ellipse-284.png",
    "/ellipse-285.png",
    "/ellipse-286.png",
    "/ellipse-287.png",
  ];

  return (
    <div className="max-w-[1320px] mx-auto relative">
      {/* Testimonial Avatars */}
      <div className="absolute w-full h-full">
        {testimonialAvatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar}
            alt={`Testimonial ${index + 1}`}
            className="absolute w-12 h-12 rounded-full border-2 border-white"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-2xl sm:text-4xl font-normal mb-6 text-[#333f47]">
          Championship Excellence,
          <br />
          Proven by Numbers
        </h2>

        <div className="bg-[#f5f7ff] rounded-3xl p-6 sm:p-8 mb-12 max-w-[800px]">
          <p className="text-lg sm:text-xl text-[#333f47] leading-relaxed">
            Join the platform that's transforming competition management—over
            250 championships organized, 3000+ athletes empowered, and
            100,000+ events logged. Experience the future of Yogasana excellence
            today. Join now
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 relative"
          >
            <h3 className="text-2xl sm:text-3xl font-normal text-[#333f47] relative">
              {stat.title}
              <div className="absolute -bottom-2 left-0 w-[100px] h-1 bg-[#ffc947]" />
            </h3>
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}

        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-[#e6e6e6] hidden md:block" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button className="bg-[#0f54fa] text-white rounded-full px-8 py-3 hover:bg-[#0039e6] transition-colors">
          Sign up for free
        </Button>
      </div>
    </div>
  );
};