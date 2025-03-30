import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const FeaturesOverviewSection = ()  => {
  // Footer navigation data
  const footerNavigation = [
    {
      title: "Shopify",
      links: ["About us", "Features", "Blogs", "Reviews", "Pricing"],
    },
    {
      title: "Support",
      links: ["Integrations", "Careers", "Contact us", "FAQ's"],
    },
    {
      title: "Developers",
      links: ["Changelog", "Cookie Policy", "Coming Soon"],
    },
    {
      title: "Products",
      links: ["Privacy Policy", "Licensing", "Terms & Conditions", "Password"],
    },
  ];

  // Social media icons data
  const socialIcons = [
    {
      icon: <TwitterIcon className="w-[18px] h-[15px]" />,
      ariaLabel: "Twitter",
    },
    {
      icon: <FacebookIcon className="w-[11px] h-[17px]" />,
      ariaLabel: "Facebook",
    },
    { icon: <YoutubeIcon className="w-4 h-[11px]" />, ariaLabel: "Youtube" },
    {
      icon: <InstagramIcon className="w-[17px] h-4" />,
      ariaLabel: "Instagram",
    },
  ];

  return (
    <footer className="w-full bg-[#0f54fb] py-[70px] px-[60px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Company Logo/Name */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2.5">
              <h2 className="w-fit [font-family:'Alata',Helvetica] font-normal text-white text-[28px] leading-[30px] whitespace-nowrap">
                Company Name
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-[70px]">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className="w-[38px] h-[38px] rounded-[50px] border border-solid border-[#ffffff29] flex items-center justify-center"
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-[120px]">
            {footerNavigation.map((column, index) => (
              <div key={index} className="mb-8">
                <h3 className="font-semibold text-white text-base leading-[30px] mb-[46px]">
                  {column.title}
                </h3>
                <nav>
                  <ul className="space-y-9">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="font-normal text-white text-sm leading-6 hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-[21px] mt-[70px] border-t border-[#ffffff33] flex justify-between items-center">
          <div className="font-normal text-white text-sm leading-[21px]">
            Copyright © 2025 Yogasana Bharat. All rights reserved.
          </div>
          <div className="font-h3 text-white text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)]">
            Designed by Aman. Powered by Yogasana Bharat.
          </div>
        </div>
      </div>
    </footer>
  );
};
