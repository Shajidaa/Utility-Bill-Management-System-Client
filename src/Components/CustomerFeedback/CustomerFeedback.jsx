import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Tariq Rahman",
    location: "Rajshahi",
    feedback:
      "PayUp made paying my bills stress-free. One platform for everything!",
    rating: 5,
    role: "Software Engineer",
  },
  {
    name: "Rafiq Ahmed",
    location: "Dhaka",
    feedback:
      "The reminders help me never miss a due date again. Truly reliable service.",
    rating: 5,
    role: "Business Owner",
  },
  {
    name: "Karim Hassan",
    location: "Sylhet",
    feedback:
      "Outstanding service! The automated bill payments feature has revolutionized my expenses.",
    rating: 5,
    role: "Financial Advisor",
  },
  {
    name: "Fatima Khan",
    location: "Khulna",
    feedback:
      "PayUp's security features give me complete peace of mind for all transactions.",
    rating: 5,
    role: "Accountant",
  },
];

const CustomerFeedback = () => {
  return (
    <section className="py-20">
      <MyContainer>
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Our Customers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Honest feedback from professionals who rely on PayUp for secure and
            efficient bill management.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-8 flex flex-col justify-between">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  “{testimonial.feedback}”
                </p>

                {/* Customer Info */}
                <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </section>
  );
};

export default CustomerFeedback;
