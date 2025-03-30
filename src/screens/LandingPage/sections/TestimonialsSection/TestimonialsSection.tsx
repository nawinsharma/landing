import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Infinite moving background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-full animate-moveBackground">
          <div className="absolute w-[50%] h-full bg-[#0f54fb] left-0"></div>
          <div className="absolute w-[50%] h-full bg-[#0f54fb] left-[50%]"></div>
        </div>
      </div>

      {/* Content */}
      <Card className="relative w-full max-w-[1320px] mt-48 mx-auto bg-transparent rounded-[14px] overflow-hidden shadow-shadow h-auto sm:h-[536px] border-none">
        <CardContent className="relative h-full p-0">
          <div className="relative w-full h-full px-6 sm:px-[43px] py-8 sm:py-0">
            {/* Background decorative elements */}
            <img
              className="absolute w-[300px] sm:w-[531px] h-[120px] sm:h-[210px] bottom-0 right-0 opacity-70 sm:opacity-100"
              alt="Decorative ellipse"
              src="/ellipse-1504.svg"
            />
            <img
              className="absolute w-[300px] sm:w-[578px] h-[120px] sm:h-[204px] top-0 left-0 opacity-70 sm:opacity-100"
              alt="Decorative ellipse"
              src="/ellipse-1505.svg"
            />

            {/* Content container */}
            <div className="flex flex-col items-center justify-center h-full pt-12 sm:pt-[108px] pb-8 sm:pb-0">
              <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-[899px]">
                <div className="flex flex-col items-center gap-4 sm:gap-[22px]">
                  {/* Badge */}
                  <Badge
                    className="px-4 py-2 rounded-[100px] bg-transparent border-none"
                    variant="outline"
                  >
                    <span className="font-normal text-white text-sm sm:text-base leading-[15px] sm:leading-[17px] font-['Rethink_Sans',Helvetica]">
                      Testimonials Made Easy
                    </span>
                  </Badge>

                  {/* Main heading */}
                  <h2 className="w-full font-normal text-white text-2xl sm:text-5xl leading-[1.2] sm:leading-[54px] text-center font-['Alata',Helvetica] px-2 sm:px-0">
                    Experience the Impact of Our Software in your Next Yogasana
                    Championship.
                  </h2>

                  {/* Subheading */}
                  <p className="w-full max-w-[90%] sm:max-w-[488px] font-normal text-white text-base sm:text-lg text-center leading-6 font-['Rethink_Sans',Helvetica] opacity-90">
                    Host Your Championships Locally or Globally – We Provide All
                    the Tools You Need.
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  className="h-[44px] sm:h-[50px] px-6 sm:px-[25px] py-3 sm:py-4 bg-[#ffffff29] rounded-[100px] hover:bg-[#ffffff40] transition-colors duration-200"
                  variant="ghost"
                >
                  <span className="font-h2-semi-bold font-[number:var(--h2-semi-bold-font-weight)] text-white text-sm sm:text-[length:var(--h2-semi-bold-font-size)] tracking-[var(--h2-semi-bold-letter-spacing)] leading-[var(--h2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--h2-semi-bold-font-style)]">
                    Get start for free
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};