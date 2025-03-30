import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const PricingSection = ()  => {
  // Feature data for mapping
  const features = [
    {
      title: "Streamlined Athlete Enrollment",
      description:
        "Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.",
    },
    {
      title: "Comprehensive Panel Creation",
      description:
        "Build and manage judge panels effortlessly—assign roles and responsibilities to ensure fair and consistent evaluations.",
    },
    {
      title: "Seamless Multi-Level Management",
      description:
        "With robust features tailored for L1, L2, and L3, our platform integrates administrative tasks, competition oversight,.",
    },
    {
      title: "Dynamic Event & Result Tracking",
      description:
        "Log and track thousands of events in real time, providing clear insights and analytics to help you monitor progress and celebrate success",
    },
    {
      title: "Secure and Efficient Workflows",
      description:
        "From locking enrollments to adjusting marks, our software ensures data integrity and a secure workflow.",
    },
    {
      title: "User-Friendly Interface & Dedicated Support",
      description:
        "Our software is designed to adapt to your specific championship needs, ensuring a smooth experience from setup to execution.",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10 sm:gap-20 py-8 sm:py-16 px-4 sm:px-0">
      <h2 className="[font-family:'Alata',Helvetica] font-normal text-white text-3xl sm:text-[56px] text-center tracking-[0] leading-[1.2] sm:leading-[60px]">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 w-full max-w-[1320px]">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="col-span-1">
              <Card className="border-0 bg-transparent h-full">
                <CardContent className="p-4 sm:p-0">
                  <div className="flex flex-col items-start gap-1.5">
                    <h3 className="mt-[-1.00px] [font-family:'Alata',Helvetica] font-normal text-white text-2xl sm:text-[32px] tracking-[0] leading-8 sm:leading-10">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-[#f4f5f7] text-base sm:text-lg tracking-[-0.36px] leading-6 sm:leading-7">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {index < features.length - 1 && (
              <Separator
                className={`${
                  index % 3 === 2 ? "hidden sm:block" : "block sm:hidden"
                } bg-white/50`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};