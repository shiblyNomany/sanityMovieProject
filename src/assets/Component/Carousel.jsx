 import CarouselOne from '../../image/Carousel-1.jpg'
 import Carouseltwo from '../../image/Carousel-2.jpg'
  
 import CarouselFour from '../../image/Carousel-4.jfif'
 import CarouselFive from '../../image/Carousel-5.jfif'
 import CarouselSix from '../../image/Carousel-6.jfif'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styling/CarouselStyle.css';

 
 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-auto pt-0'> <img src={CarouselOne} alt="" /></SwiperSlide>
        <SwiperSlide className='h-auto pt-0'><img src={Carouseltwo} alt="" /></SwiperSlide>
        
        <SwiperSlide className='h-auto pt-0'><img src={CarouselFour} alt="" /></SwiperSlide>
        <SwiperSlide className='h-auto pt-0'><img src={CarouselFive} alt="" /></SwiperSlide>
        <SwiperSlide className='h-auto pt-0'><img src={CarouselSix} alt="" /></SwiperSlide>
         
      </Swiper>
    </>
  );
}
