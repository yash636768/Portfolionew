import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'Amazing developer! Delivered my project on time and exceeded expectations.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Smith',
    text: 'Great communication and top-notch skills. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-3xl mx-auto bg-section-gradient relative overflow-hidden py-16 rounded-3xl shadow-xl"
    >
      <div className="absolute -top-32 left-0 w-[350px] h-[350px] animated-blob z-0" aria-hidden="true"></div>
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Testimonials</h2>
      <Swiper spaceBetween={30} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center bg-glass rounded-lg shadow p-8">
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="text-gray-700 dark:text-gray-300 mb-2">"{t.text}"</p>
              <span className="font-semibold text-blue-500">- {t.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Testimonials; 