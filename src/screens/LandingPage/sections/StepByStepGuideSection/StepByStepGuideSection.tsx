import React from "react";
import { Button } from "../../../../components/ui/button";

export const StepByStepGuideSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      {/* Hero background with gradient overlay */}
      <div className="relative w-full h-[600px] sm:h-[1006px]">
        <div className="w-full h-full bg-[url(/screenshot-2024-06-14-at-10-21-36-1.png)] bg-cover bg-center">
          <div className="relative h-[500px] sm:h-[839px] top-[100px] sm:top-[167px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.3)] to-white" />
        </div>

        {/* Hero content */}
        <div className="absolute top-[100px] sm:top-[205px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 sm:gap-8 max-w-[1234px] w-full px-4 sm:px-0">
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-full">
            <h1 className="mt-[-1.00px] font-['Alata',Helvetica] font-normal text-white text-4xl sm:text-[80px] text-center tracking-[-0.5px] sm:tracking-[-1.00px] leading-[1.2] sm:leading-[84px]">
              The World&#39;s First Yogasana Championship Software
            </h1>

            <p className="w-full sm:w-[770px] font-['Rethink_Sans',Helvetica] font-medium text-[#f4f5f7] text-lg sm:text-xl leading-7 sm:leading-8 text-center px-4 sm:px-0">
              Experience the future of competition management with Yogasana
              Bharat—a cutting-edge platform designed to streamline every aspect
              of your championship.
            </p>

            <img
              className="relative w-[200px] sm:w-[363px] h-[20px] sm:h-[30px] mt-[10px] sm:mt-[19px]"
              alt="Vector"
              src="/vector-6.svg"
            />
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-[26px]">
            <Button className="h-[45px] sm:h-[50px] px-4 sm:px-5 py-3 sm:py-4 bg-white text-[#333f47] rounded-[55px] shadow-shadow hover:bg-gray-100 text-sm sm:text-base">
              <span className="font-h2-semi-bold font-[number:var(--h2-semi-bold-font-weight)] text-[length:var(--h2-semi-bold-font-size)] tracking-[var(--h2-semi-bold-letter-spacing)] leading-[var(--h2-semi-bold-line-height)]">
                Get start for free
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Software screenshot */}
      <div className="relative">
        <img
          className="relative w-full sm:w-[1361px] h-[500px] sm:h-[900px] mx-auto -mt-[200px] sm:-mt-[403px] object-contain"
          alt="State district management interface"
          src="/state-district-mng--1.png"
        />

        {/* Gradient overlay for the bottom part */}
        <div className="absolute w-full h-[400px] sm:h-[864px] top-[50px] sm:top-[83px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.3)] to-white" />
      </div>
    </section>
  );
};