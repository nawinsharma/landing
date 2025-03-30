import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const UserProfileSection = () => {
  // Step data for the guide section
  const steps = [
    {
      number: "1",
      title: "Let your customers share what they love about you",
      description:
        "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
      features: [
        "Create a form in 30 seconds. Share or embed it anywhere",
        "Collect video adn texdt testimonials",
        "Import testimonials from 20+ social & review platforms",
      ],
      buttonText: "Create Your Organization",
      buttonVariant: "default",
      bgGradient:
        "linear-gradient(135deg, rgba(2,162,254,1) 0%, rgba(182,234,255,1) 100%)",
      badgeColor: "bg-[#e6e6ff] text-[#6666ff]",
    },
    {
      number: "2",
      title: "Save, manage, group, tag and search your testimonials",
      description:
        "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
      features: [
        "Create a form in 30 seconds. Share or embed it anywhere",
        "Collect video adn texdt testimonials",
        "Import testimonials from 20+ social & review platforms",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "default",
      bgGradient:
        "linear-gradient(315deg, rgba(255,203,220,1) 0%, rgba(199,44,255,1) 100%)",
      badgeColor: "bg-[#e6e6ff] text-[#6666ff]",
    },
    {
      number: "3",
      title: "Let your customers share what they love about you",
      description:
        "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
      features: [
        "Create a form in 30 seconds. Share or embed it anywhere",
        "Collect video adn texdt testimonials",
        "Import testimonials from 20+ social & review platforms",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "default",
      bgGradient:
        "linear-gradient(135deg, rgba(53,231,234,1) 0%, rgba(244,255,230,1) 100%)",
      badgeColor: "bg-[#badcfb80] text-[#0f54fa]",
    },
    {
      number: "4",
      title: "Save, manage, group, tag and search your testimonials",
      description:
        "Our innovative solutions provide a clear direction, helping you streamline workflows, organize tasks effortlessly, & achieve unparalleled efficiency. Let Zenify Navigator be your compass on the journey to intelligent & effective",
      features: [
        "Create a form in 30 seconds. Share or embed it anywhere",
        "Collect video adn texdt testimonials",
        "Import testimonials from 20+ social & review platforms",
      ],
      buttonText: "Sign up for free",
      buttonVariant: "default",
      bgGradient:
        "linear-gradient(139deg, rgba(102,102,255,1) 20%, rgba(235,235,255,1) 100%)",
      badgeColor: "bg-[#e6e6ff] text-[#6666ff]",
    },
  ];

  // Pricing plan data
  const pricingPlans = [
    {
      title: "Starter",
      subtitle: "For Individuals",
      price: "$599",
      period: "/ Per Yearly",
      description:
        "Affordable option for small teams seeking essential project management.",
      features: [
        { name: "Task Management", included: true },
        { name: "Real-time Collaboration", included: true },
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Resource Allocation", included: false },
        { name: "Mobile Accessibility", included: false },
      ],
      iconUrl: "/uaaxrcvtyxuj4rmcqoy6bkkhmn4-png.png",
      highlighted: false,
    },
    {
      title: "Pro",
      subtitle: "For Startups",
      price: "$999",
      period: "/ Per Yearly",
      description: "Comprehensive package tailored for growing businesses.",
      features: [
        { name: "Task Management", included: true },
        { name: "Real-time Collaboration", included: true },
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Resource Allocation", included: false },
        { name: "Mobile Accessibility", included: false },
      ],
      iconUrl: "/xglpet6hihh5wqrlcupfaamlnjc-png.png",
      highlighted: true,
      discount: 'Use "FIRST100" code for 60% Discount',
    },
    {
      title: "Enterprise",
      subtitle: "For Organizations",
      price: "$1,999",
      period: "/ Per Yearly",
      description:
        "Customized solutions for large enterprises with robust features.",
      features: [
        { name: "Task Management", included: true },
        { name: "Real-time Collaboration", included: true },
        { name: "Customizable Dashboards", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Resource Allocation", included: true },
        { name: "Mobile Accessibility", included: true },
      ],
      iconUrl: "/dzcalyfgx1pdueykasa9kbl0ni-png.png",
      highlighted: false,
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      content:
        "I had a fantastic experience shopping here! The site is easy to navigate, and the customer service is outstanding. My order arrived swiftly, and the product quality was even better than I expected. Highly recommend!",
      author: "Mahmud Tamvir",
      role: "Co-Founder of  Huge icons",
      avatar: "/ellipse-45-5.png",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10 md:gap-20 py-10 md:py-20 px-4 md:px-0">
      {/* Step-by-Step Guide Section */}
      <div className="flex flex-col w-full max-w-[1320px] items-center gap-10 md:gap-20">
        <div className="flex flex-col w-full items-center gap-8 md:gap-14">
          <h2 className="text-3xl md:text-[64px] text-center leading-normal md:leading-[60px] font-normal [font-family:'Alata',Helvetica] text-black">
            A Step-by-Step Guide
          </h2>

          <div className="flex flex-col items-start gap-10 md:gap-20 w-full">
            {steps.map((step, index) => (
              <div
                key={`step-${index}`}
                className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-[78px]"
              >
                {/* Image on left for even index (mobile: always top) */}
                {index % 2 !== 0 && (
                  <div
                    className="w-full md:w-[600px] h-[300px] md:h-[600px] rounded-[20px] overflow-hidden order-1 md:order-none"
                    style={{ background: step.bgGradient }}
                  >
                    <div className="relative w-full h-full md:w-[520px] md:h-[520px] mt-5 md:mt-10 ml-5 md:ml-10">
                      {index === 1 && (
                        <div className="absolute w-full md:w-[520px] h-full md:h-[519px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d5dae8]">
                          <div className="w-[70%] h-[35px] absolute top-[78px] left-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[70%] h-[35px] top-[38px] left-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[10%] h-[70%] top-[38px] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[80%] h-[50%] top-[147px] left-[10%] shadow-[0px_4px_150px_#dde3f1] bg-white rounded-[20px] overflow-hidden">
                            <div className="w-[80%] top-[20%] left-[5%] absolute h-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[25%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[25%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[45%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[45%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[80%] h-[10%] top-[30%] left-[5%] absolute bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[80%] h-[10%] top-[45%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                        </div>
                      )}
                      {(index === 0 || index === 2 || index === 3) && (
                        <>
                          <div className="absolute w-[80%] h-[60%] top-[20%] left-0 bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d4d9e7]">
                            <div className="absolute w-[80%] h-[10%] top-[40%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[80%] h-[10%] top-[55%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                          <div className="absolute w-[60%] h-[55%] top-0 left-[35%] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[50%] h-[30%] top-[25%] left-[40%] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[50%] top-[5%] left-[40%] absolute h-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[50%] h-[10%] top-[15%] left-[40%] absolute bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-6 md:gap-[26px] w-full md:w-[622px] order-2 md:order-none">
                  <div className="flex flex-col gap-4 md:gap-[18px]">
                    <Badge
                      className={`h-[31px] ${step.badgeColor} rounded-[56px] px-3.5 py-1.5 w-fit`}
                    >
                      <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-base leading-[17px]">
                        Step {step.number}
                      </span>
                    </Badge>

                    <h3 className="[font-family:'Alata',Helvetica] font-normal text-2xl md:text-[40px] text-[#010512] leading-normal md:leading-[50px]">
                      {step.title}
                    </h3>

                    <p className="[font-family:'Rethink_Sans',Helvetica] font-normal text-base md:text-lg text-[#525358] leading-normal md:leading-[27.2px]">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6 md:gap-[42px]">
                    <div className="space-y-6 md:space-y-[37px]">
                      {step.features.map((feature, featureIndex) => (
                        <div
                          key={`feature-${featureIndex}`}
                          className="flex items-center gap-4 md:gap-8"
                        >
                          <img
                            className="w-[22px] h-[22px]"
                            alt="Checkmark circle"
                            src="/checkmark-circle-02.svg"
                          />
                          <span className="[font-family:'Rethink_Sans',Helvetica] font-normal text-base md:text-lg text-[#525358] leading-normal md:leading-[27.2px]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`rounded-[100px] px-[25px] py-4 h-[50px] w-full md:w-auto ${
                        index === 2 ? "bg-[#0f54fa]" : "bg-[#1256fb]"
                      } border border-solid ${
                        index === 0 ? "border-none" : "border-[#2b59fc]"
                      }`}
                    >
                      <span
                        className={`${
                          index === 2
                            ? "[font-family:'Urbanist',Helvetica] text-base leading-[22px] font-semibold"
                            : "font-h2-semi-bold text-[length:var(--h2-semi-bold-font-size)] leading-[var(--h2-semi-bold-line-height)]"
                        } text-white`}
                      >
                        {step.buttonText}
                      </span>
                      {index === 0 && (
                        <img
                          className="w-[15px] h-2.5 ml-2"
                          alt="Arrow"
                          src="/group-1000004041.png"
                        />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Image on right for odd index (mobile: always bottom) */}
                {index % 2 === 0 && (
                  <div
                    className="w-full md:w-[600px] h-[300px] md:h-[600px] rounded-[20px] overflow-hidden order-1 md:order-none"
                    style={{ background: step.bgGradient }}
                  >
                    <div className="relative w-full h-full md:w-[520px] md:h-[520px] mt-5 md:mt-10 ml-5 md:ml-10">
                      {index === 3 && (
                        <div className="absolute w-full md:w-[520px] h-full md:h-[519px] bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d5dae8]">
                          <div className="w-[70%] h-[35px] top-[78px] left-[10%] absolute bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[70%] h-[35px] top-[38px] left-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[10%] h-[70%] top-[38px] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[80%] h-[50%] top-[147px] left-[10%] shadow-[0px_4px_150px_#dde3f1] bg-white rounded-[20px] overflow-hidden">
                            <div className="w-[80%] top-[20%] left-[5%] absolute h-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[25%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[25%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[5%] left-[45%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[20%] h-[5%] top-[15%] left-[45%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="w-[80%] h-[10%] top-[30%] left-[5%] absolute bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[80%] h-[10%] top-[45%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                        </div>
                      )}
                      {(index === 0 || index === 2) && (
                        <>
                          <div className="absolute w-[80%] h-[60%] top-[20%] left-0 bg-white rounded-[20px] overflow-hidden shadow-[0px_4px_150px_#d4d9e7]">
                            <div className="absolute w-[80%] h-[10%] top-[40%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                            <div className="absolute w-[80%] h-[10%] top-[55%] left-[5%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          </div>
                          <div className="absolute w-[60%] h-[55%] top-0 left-[35%] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="absolute w-[50%] h-[30%] top-[25%] left-[40%] bg-white rounded-[20px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[50%] top-[5%] left-[40%] absolute h-[10%] bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                          <div className="w-[50%] h-[10%] top-[15%] left-[40%] absolute bg-white rounded-[10px] shadow-[0px_4px_150px_#dde3f1]" />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Success Banner */}
      
        <div className="w-full h-[490px] bg-[#f3f3f3] rounded-[14px] overflow-hidden relative">
           <div className="absolute w-[1487px] h-[1213px] top-[-361px] left-[-83px] bg-[url(/vector-7818.svg)] bg-[100%_100%]">
             <div className="relative w-[618px] h-[227px] top-[474px] left-[425px] flex flex-col items-center gap-[17px]">
               <h3 className="w-[618px] [font-family:'Alata',Helvetica] font-normal text-5xl text-center leading-[54px]">
                <span className="text-[#00b836]">
                  Success!
                  <br />
                </span>
                <span className="text-[#04070d]">
                  Seamlessly manage your Championship with us
                </span>
              </h3>

              <Button className="px-7 py-3 bg-[#0175ff] rounded-[80px] border border-solid shadow-[inset_0px_4px_4px_#4399ff] flex items-center gap-2.5">
                <span className="font-h2-semi-bold text-white">
                  Create Your Championship
                </span>
                <img
                  className="w-[15px] h-2.5"
                  alt="Arrow"
                  src="/group-1000004041.png"
                />
              </Button>
            </div>
          </div>

          <img
            className="hidden md:block absolute w-[2263px] h-[1174px] top-[-1657px] left-[1440px] object-cover"
            alt="Screenshot"
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="flex flex-col w-full max-w-[1352px] items-center gap-8 px-4 md:px-0">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col w-full md:w-[854px] items-center gap-2">
            <h2 className="w-full md:w-[740px] [font-family:'Alata',Helvetica] font-normal text-[#0c0c0c] text-2xl md:text-[40px] text-center leading-normal">
              Flexible Pricing, Unbeatable Value
            </h2>

            <p className="w-full [font-family:'Rethink_Sans',Helvetica] font-medium text-[#666666] text-base md:text-lg text-center leading-normal">
              Discover the perfect plan to power your championships—whether
              you're managing local events or global competitions. Our
              transparent pricing offers all the tools you need, without hidden
              fees. Choose your plan and elevate your events today.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-16 w-full">
          <ToggleGroup
            type="single"
            defaultValue="monthly"
            className="w-[183px] h-14 bg-[#f8f9fa] rounded-[14px] border border-solid border-[#edeff3]"
          >
            <ToggleGroupItem
              value="monthly"
              className="w-[78px] h-11 bg-[#6666ff] rounded-[10px] text-white [font-family:'Inter',Helvetica] font-medium text-[15.9px] leading-6"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="w-[94px] h-11 bg-[#f8f9fa] rounded-[10px] text-neutral-800 [font-family:'Inter',Helvetica] font-medium text-[15.9px] leading-6"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full px-4 md:px-0">
            {pricingPlans.map((plan, index) => (
              <Card
                key={`plan-${index}`}
                className={`w-full md:w-[440px] h-auto md:h-[648px] rounded-[20px] border border-solid border-[#e6e9ee] ${
                  plan.highlighted ? "bg-neutral-100 relative" : ""
                }`}
              >
                <CardContent className="p-0">
                  {plan.highlighted && (
                    <div className="absolute w-[80%] md:w-[276px] h-[33px] top-0 left-[10%] md:left-[82px] bg-[#6666ff] rounded-[100px]">
                      <div className="absolute w-[90%] md:w-[258px] h-[21px] top-1 left-[5%] md:left-3 font-content text-white text-xs md:text-base text-center md:text-left">
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  <div className="flex w-full items-center justify-between p-4 md:p-[30px] mt-4 md:mt-0">
                    <div
                      className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-cover bg-[50%_50%]"
                      style={{ backgroundImage: `url(${plan.iconUrl})` }}
                    />
                    <div className="flex items-end">
                      <div className="font-title-3 text-neutral-800 whitespace-nowrap">
                        {plan.price}
                      </div>
                      <div className="font-content text-[#666666] text-sm md:text-base">
                        {plan.period}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center ml-4 md:ml-[30px]">
                    <div className="font-title-3 text-neutral-800">
                      {plan.title}
                    </div>
                    <Badge
                      className={`ml-2 ${index === 1 ? "bg-[#0175ff]" : "bg-[#0175ff]"} rounded-md text-white`}
                    >
                      {plan.subtitle}
                    </Badge>
                  </div>

                  <p className="mx-4 md:mx-[30px] mt-2 md:mt-[10px] font-content-2 text-[#666666] text-sm md:text-base">
                    {plan.description}
                  </p>

                  <Separator className="mx-4 md:mx-[30px] my-4 md:my-6 border-t border-dashed border-[#e6e9ee]" />

                  <Button
                    className={`mx-4 md:mx-[30px] w-[calc(100%-32px)] md:w-[380px] h-[52px] rounded-[10px] mb-4 md:mb-0 ${
                      index === 1
                        ? "bg-[#0175ff] text-white border border-solid border-white"
                        : "bg-[#f8f9fa] text-[#191919] border border-solid border-[#e6e9ee]"
                    }`}
                  >
                    <span className="font-button-text">Get Started</span>
                    <div
                      className="w-[18px] h-[18px] ml-2 bg-cover"
                      style={{
                        backgroundImage: `url(${index === 1 ? "/hcyhdojiei9tufdxhvtsbo4eak-svg.svg" : "/nwoxflacic3m5vdj82pjiyk1698-svg.svg"})`,
                      }}
                    />
                  </Button>

                  <div className="mx-4 md:mx-[30px] mt-4 md:mt-6 font-title-3 text-neutral-800">
                    Features Included:
                  </div>

                  <div className="mt-2 md:mt-4">
                    {plan.features.map((feature, featureIndex) => (
                      <React.Fragment key={`feature-${featureIndex}`}>
                        <div className="flex items-center mx-4 md:mx-[30px] py-2">
                          <div
                            className={`w-6 h-6 rounded-md ${feature.included ? "bg-[#6666ff]" : "bg-[#f2f4f6] border border-solid border-[#e6e9ee]"}`}
                          >
                            <div
                              className="w-3 h-3 mx-auto mt-1.5 bg-cover"
                              style={{
                                backgroundImage: `url(${feature.included ? "/0im5czrhpjymimt0m4hqfvmharg-svg.svg" : "/gcxi3ehma3z5wfaitti3e1gid0-svg.svg"})`,
                              }}
                            />
                          </div>
                          <div className="ml-4 md:ml-[30px] font-content-2 text-[#333333] text-sm md:text-base">
                            {feature.name}
                          </div>
                          <div
                            className="ml-auto w-[18px] h-[18px] bg-cover"
                            style={{
                              backgroundImage:
                                "url(/hk21vwzrxkkqqvwa0rq5fptw-svg.svg)",
                            }}
                          />
                        </div>
                        {featureIndex < plan.features.length - 1 && (
                          <Separator className="mx-4 md:mx-[30px] h-px bg-[#e6e9ee]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full h-auto md:h-[994px] relative">
        <div className="w-full h-auto md:h-[994px] relative">
          <div className="absolute w-full h-full top-0 left-0 overflow-hidden bg-gradient-to-b from-white to-[rgba(250,250,250,1)]">
            <div className="relative w-full max-w-[2032px] h-auto md:h-[926px] mx-auto mt-4 md:mt-[27px] px-4 md:px-0">
              <div className="w-full h-auto md:h-[757px] top-[100px] md:top-[169px] left-0">
                <div className="flex flex-col md:flex-row items-start gap-6 w-full overflow-x-auto pb-4 md:pb-0">
                  {Array(3)
                    .fill(testimonials[0])
                    .map((testimonial, index) => (
                      <Card
                        key={`testimonial-${index}`}
                        className="w-full md:w-[600px] h-auto md:h-[312px] bg-white rounded-[10px] border border-solid border-neutral-200 flex-shrink-0"
                      >
                        <CardContent className="p-4 md:p-8">
                          <div className="flex items-start gap-1.5">
                            {Array(4)
                              .fill(0)
                              .map((_, i) => (
                                <img
                                  key={`star-full-${i}`}
                                  className="w-5 h-5"
                                  alt="Star"
                                  src="/star-1.svg"
                                />
                              ))}
                            <img
                              className="w-5 h-5"
                              alt="Star"
                              src="/star.svg"
                            />
                          </div>

                          <p className="w-full md:w-[525px] mt-4 md:mt-[27px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#525459] text-base md:text-lg leading-normal md:leading-[27px]">
                            {testimonial.content}
                          </p>

                          <div className="flex items-center gap-4 mt-6 md:mt-[82px]">
                            <img
                              className="w-[50px] md:w-[62px] h-[50px] md:h-[62px] object-cover"
                              alt="Profile"
                              src={testimonial.avatar}
                            />
                            <div className="flex flex-col gap-0.5">
                              <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#04070d] text-base md:text-lg leading-normal md:leading-[26px]">
                                {testimonial.author}
                              </div>
                              <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#04070d] text-sm md:text-base leading-normal md:leading-[26px]">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                <div className="hidden md:flex items-start gap-6 absolute top-[445px] left-[184px] overflow-hidden">
                  {Array(3)
                    .fill(testimonials[0])
                    .map((testimonial, index) => (
                      <Card
                        key={`testimonial-bottom-${index}`}
                        className="w-[600px] h-[312px] bg-white rounded-[10px] border border-solid border-neutral-200"
                      >
                        <CardContent className="p-8">
                          <div className="flex items-start gap-1.5">
                            {Array(4)
                              .fill(0)
                              .map((_, i) => (
                                <img
                                  key={`star-full-bottom-${i}`}
                                  className="w-5 h-5"
                                  alt="Star"
                                  src="/star-1.svg"
                                />
                              ))}
                            <img
                              className="w-5 h-5"
                              alt="Star"
                              src="/star.svg"
                            />
                          </div>

                          <p className="w-[525px] mt-[27px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#525459] text-lg leading-[27px]">
                            {testimonial.content}
                          </p>

                          <div className="flex items-center gap-4 mt-[82px]">
                            <img
                              className="w-[62px] h-[62px] object-cover"
                              alt="Profile"
                              src={testimonial.avatar}
                            />
                            <div className="flex flex-col gap-0.5">
                              <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#010512] text-lg leading-[26px]">
                                {testimonial.author}
                              </div>
                              <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#525459] text-base leading-[26px]">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                <div className="hidden md:block absolute w-[175px] h-[716px] top-0 left-[1678px] bg-white blur-2xl" />
                <div className="hidden md:block absolute w-[175px] h-[716px] top-0 left-[201px] bg-white blur-2xl" />
              </div>

              <div className="flex flex-col items-center gap-2 w-full mt-8 md:mt-0 md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2">
                <h2 className="w-full md:w-[753px] [font-family:'Alata',Helvetica] font-normal text-[#010512] text-2xl md:text-[52px] text-center tracking-[-0.5px] md:tracking-[-1.04px] leading-normal md:leading-[76px]">
                  What Yogasana lovers say using our Software
                </h2>
                <p className="w-full md:w-[861px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#525459] text-base md:text-lg text-center tracking-[-0.3px] md:tracking-[-0.36px] leading-normal md:leading-[26px]">
                  Discover firsthand accounts from organizers, athletes, and
                  judges who have experienced the seamless excellence of our
                  platform. Their stories showcase how we've transformed
                  championship management and elevated competitive success.
                </p>
              </div>
            </div>
          </div>

          <img
            className="hidden md:block absolute w-[368px] h-[30px] top-[92px] left-1/2 transform -translate-x-1/2"
            alt="Vector"
            src="/vector-5-2.svg"
          />
        </div>
      </div>
    </section>
  );
};