// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../../Styling/Catagory.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useMovieContext } from "../../Context/allData";

export default function App() {
  const { catagory } = useMovieContext();
  console.log(catagory);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mb-5 "
      >
        {catagory.map((cat) => (
          <SwiperSlide key={cat._id}>
            <div>
              <h1 className="text-center text-4xl font-bold badge badge-success p-5  ">{cat.Catagoryname}</h1>
              <img src={cat.imageUrl}/>
            </div>
            
          </SwiperSlide>
        ))}
 
      </Swiper>
    </>
  );
}
