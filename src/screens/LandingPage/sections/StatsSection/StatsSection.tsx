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
    { src: "/ellipse-280.png", position: "top-10 left-10" },
    { src: "/ellipse-281.png", position: "top-20 right-20" },
    { src: "/ellipse-282.png", position: "bottom-10 left-20" },
    { src: "/ellipse-283.png", position: "bottom-20 right-10" },
    { src: "/ellipse-284.png", position: "top-1/3 left-1/4" },
    { src: "/ellipse-285.png", position: "top-1/4 right-1/3" },
    { src: "/ellipse-286.png", position: "bottom-1/3 right-1/4" },
    { src: "/ellipse-287.png", position: "bottom-1/4 left-1/3" },
  ];

  return (
    <div className="max-w-[1320px] mx-auto relative px-4 sm:px-6 lg:px-8 py-12">
      {/* Testimonial Avatars - Fixed positions */}
      <div className="hidden sm:block absolute w-full h-full pointer-events-none">
        {testimonialAvatars.map((avatar, index) => (
          <img
            key={index}
            src={avatar.src}
            alt=""
            className={`absolute w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-sm ${avatar.position}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center mb-8 sm:mb-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-4 sm:mb-6 text-[#333f47]">
          Championship Excellence,
          <br className="hidden sm:block" />
          Proven by Numbers
        </h2>

        <div className="bg-[#f5f7ff] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 w-full max-w-[800px]">
          <p className="text-base sm:text-lg md:text-xl text-[#333f47] leading-relaxed">
            Join the platform that's transforming competition management—over
            250 championships organized, 3000+ athletes empowered, and
            100,000+ events logged. Experience the future of Yogasana excellence
            today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl shadow-sm"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-normal text-[#333f47] relative pb-3">
              {stat.title}
              <div className="absolute bottom-0 left-0 w-[80px] sm:w-[100px] h-1 bg-[#ffc947]" />
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-[#666666] leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}

        {/* Decorative Line */}
        <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-[#e6e6e6] hidden md:block" />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-8 sm:mt-12 relative z-10">
        <Button className="bg-[#0f54fa] text-white rounded-full px-6 py-2 sm:px-8 sm:py-3 hover:bg-[#0039e6] transition-colors text-sm sm:text-base">
          Sign up for free
        </Button>
      </div>
    </div>
  );
};