// Anthea's Code

// footer
function Footer() {
  const FooterSection = [
    {
      heading: "Quick Links",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/",
        },
        {
          name: "shop",
          link: "/",
        },
        {
          name: "create a listing",
          link: "/",
        },
        {
          name: "contact",
          link: "/",
        },
      ],
    },
    {
      heading: "Help & Info",
      links: [
        {
          name: "track your order",
          link: "/payments",
        },
        {
          name: "returns + exchanges",
          link: "/shipping",
        },
        {
          name: "shipping + delivery",
          link: "/cancellation",
        },
        {
          name: "contact us",
          link: "/infringement",
        },
        {
          name: "faqs",
          link: "/faq",
        },
      ],
    },
    {
      heading: "Contact us",
      links: [
        {
          name: "Do you have any questions or suggestions? info@theluxportal.com",
          link: "#",
          uppercase: false,
        },
        {
          name: "Do you need support? Give us a call. +27 87 470 0072",
          link: "#",
          uppercase: false,
        },
      ],
    },
  ];

  const SocialMedia = [
    {
      name: "facebook",
      link: "#",
    },
    {
      name: "instagram",
      link: "#",
    },
    {
      name: "linkedin",
      link: "#",
    },
    {
      name: "twitter",
      link: "#",
    },
  ];

  return (
    <div className="bg-[#f5f5f5] pb-10 pt-[100px] ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:px-20">
        <div className="flex flex-col gap-4">
          <img
            src="/tlp-logo.png"
            alt="logo"
            className="mb-4"
            height={18}
            width={180}
          />
          <p className="text-gray-500 text-sm">
            We are a luxury online boutique based in South Africa that sells
            pre-loved or never worn luxury label clothing, handbags and
            accessories.
          </p>
          <div className="flex flex-row gap-8 items-center justify-start mt-4">
            {SocialMedia.map((media, key) => (
              <div key={key} className="hover:cursor-pointer">
                <img
                  src={`/${media.name}.png`}
                  alt={media.name}
                  height={14}
                  width={14}
                />
              </div>
            ))}
          </div>
        </div>
        {FooterSection.map((section, key) => (
          <div key={key} className="flex flex-col gap-1">
            <h6 className="text-xl font-normal uppercase mb-4">
              {section.heading}
            </h6>
            {section.links.map((link, key) => (
              <a
                key={key}
                href={link.link}
                className={`text-[14px] text-gray-500 ${
                  link.uppercase != false ? "uppercase" : ""
                } hover:text-gray-900`}
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-300 px-10 pt-5">
        <img src="/Shipment.png" alt="logo" height={38} width={380} />
        <p className="text-gray-500 text-[14px] text-center">
          © Copyright 2023 The Lux Portal. All rights reserved. Design by De Vos
          Inc.
        </p>
      </div>
    </div>
  );
}

export default Footer;
