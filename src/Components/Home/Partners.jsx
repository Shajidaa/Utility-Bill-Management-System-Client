import Marquee from "react-fast-marquee";

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
    },
    {
      name: "Google",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png",
    },
    {
      name: "Apple",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png",
    },
    {
      name: "Amazon",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
    },
    {
      name: "Meta",
      logo: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png",
    },
    {
      name: "Netflix",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
    },
    {
      name: "Tesla",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Tesla-Logo.png",
    },
    {
      name: "PayPal",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png",
    },
    {
      name: "Stripe",
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png",
    },
    {
      name: "Visa",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Visa-Logo.png",
    },
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6">
        <div className=" flex flex-row items-center gap-2.5 overflow-hidden">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Partners
            </h2>
          </div>
          <Marquee speed={40} pauseOnHover={true} gradient={false}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="mx-6 flex items-center justify-center p-4 
                bg-white dark:bg-gray-800 rounded-lg shadow-sm
                border border-gray-200 dark:border-gray-700
                hover:shadow-md transition-shadow duration-300
                min-w-40 h-20"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="max-h-10 max-w-28 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden items-center justify-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {partner.name}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
