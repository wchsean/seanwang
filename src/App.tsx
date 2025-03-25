import 'react';

import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Projects from "./components/Project";

import { Swiper, SwiperSlide } from "swiper/react";
import '/node_modules/swiper/swiper.css'; // Swiper 基本樣式
import '/node_modules/swiper/modules/navigation.css'; // 按鈕功能
import '/node_modules/swiper/modules/pagination.css'; // 分頁圓點.
import { Parallax } from 'swiper/modules';
import '/node_modules/swiper/modules/parallax.css';


import { Pagination, Mousewheel } from "swiper/modules";


import './styles/index.css'
import './styles/App.css'
import Skill from './components/Skill';
import Contact from './components/Contact';



function App() {
  return (
    <>
    <div className='bg-[url(../assets/bg4.jpg)] bg-scroll bg-center bg-cover'>

    <div>
    <Swiper
      direction="vertical"  // 🔹 垂直模式
      slidesPerView={1}     // 🔹 一次顯示 1 張
      spaceBetween={30}     // 🔹 Slide 之間的間隔
      pagination={{ clickable: true }}  // 🔹 分頁圓點
      mousewheel={true}      // 🔹 可用滑鼠滾輪控制
      modules={[Pagination, Mousewheel, Parallax]} // 🔹 加入對應功能模組
      style={{ height: "100vh" }} // 🔹 讓 Swiper 佔滿整個視窗
      parallax={true}
      
    >
      <SwiperSlide ><Home /></SwiperSlide>
      <SwiperSlide ><AboutMe /></SwiperSlide>
      <SwiperSlide><Projects /></SwiperSlide>
      <SwiperSlide><Skill /></SwiperSlide>
      <SwiperSlide><Contact /></SwiperSlide>
    </Swiper>
    </div>
    {/*
        <div className="flex">
    
    <Home />
    </div>
 
    
    <Nav />

    <AboutMe />
    <Projects />
    <Resume />
    <Contact />
    <Wave />

    */}
    
    </div>
    </>
  )
}

export default App
