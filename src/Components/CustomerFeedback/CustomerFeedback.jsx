import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Tariq Rahman",
    location: "Rajshahi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    feedback: "PayUp made paying my bills stress-free. One platform for everything!",
    rating: 5,
    role: "Software Engineer"
  },
  {
    name: "Rafiq Ahmed",
    location: "Dhaka",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    feedback: "The reminders help me never miss a due date again. Truly reliable service.",
    rating: 5,
    role: "Business Owner"
  },
  {
    name: "Karim Hassan",
    location: "Sylhet",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    feedback: "Outstanding service! The automated bill payments feature has revolutionized my expenses.",
    rating: 5,
    role: "Financial Advisor"
  },
  {
    name: "Fatima Khan",
    location: "Khulna",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    feedback: "PayUp's security features give me complete peace of mind for all transactions.",
    rating: 5,
    role: "Accountant"
  }
];

const CustomerFeedback = () => {
  return (
    <div className="py-16 ">
      <MyContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real stories from people who use PayUp to simplify their monthly bills.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-blue-500',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>
    </div>
  );
};

export default CustomerFeedback;
