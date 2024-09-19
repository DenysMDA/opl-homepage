import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay  } from 'swiper/modules';
import client_1 from '../../../assets/1.png'
import client_2 from '../../../assets/2.png'
import client_3 from '../../../assets/3.png'
import client_4 from '../../../assets/4.png'
import client_5 from '../../../assets/5.png'
import client_6 from '../../../assets/6.png'
import client_7 from '../../../assets/7.png'
import client_8 from '../../../assets/8.png'
import client_9 from '../../../assets/9.png'
import client_10 from '../../../assets/10.png'
import client_11 from '../../../assets/11.png'
import client_12 from '../../../assets/12.png'
import client_13 from '../../../assets/13.png'
import client_14 from '../../../assets/14.png'
import client_15 from '../../../assets/15.png'


const sliders = [client_1, client_2, client_3, client_4, client_5, client_6, client_7, client_8, client_9, client_10, client_11, client_12, client_13, client_14, client_15]


const BodySlider = () => {
    return (
        <>
          <Swiper
            slidesPerView={8}
            spaceBetween={30}
            freeMode={true}

            autoplay={{
                delay: 2000, 
                disableOnInteraction: false, 
              }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            {sliders.map((el, idx) => (
             <SwiperSlide key={el+idx}><img className='slider-img' src={el} alt="slider-img" /></SwiperSlide>
            ))}

          </Swiper>
        </>
      );
}

export default BodySlider