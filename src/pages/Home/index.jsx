import React from 'react'
import BannerComponent from '../../components/BannerComponent/BannerComponent'
import Slider1 from '../../assets/images/slider1.png';
import Slider2 from '../../assets/images/slider2.png';
import Slider3 from '../../assets/images/slider3.jpg';
import Slider4 from '../../assets/images/slider4.jpg';
import Slider5 from '../../assets/images/slider5.jpg';
import Slider6 from '../../assets/images/slider6.webp';
import Slider7 from '../../assets/images/slider7.jpg';
import Slider8 from '../../assets/images/slider8.jpg';
import Slider9 from '../../assets/images/slider9.jpg';

export default function Home() {

  const sliders = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, Slider8, Slider9]
  console.log(sliders);
  return (
    <div>
      This is home
      <div>section Banner
        <BannerComponent sliders={sliders} />
      </div>
      <div>section Discount</div>


      <div>section Recommend</div>
    </div>
  )
}
