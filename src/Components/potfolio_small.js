import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import './Portfolio.css';

import Home from './Home';
import add from '../assets/img/add.png'
import link from '../assets/img/link.png'
import m1 from '../assets/images/modern/1.png'
import m2 from '../assets/images/modern/2.png'
import m3 from '../assets/images/modern/3.png'
import m4 from '../assets/images/modern/4.png'
import m5 from '../assets/images/modern/5.png'
import m6 from '../assets/images/modern/6.png'
import m7 from '../assets/images/modern/7.png'
import m8 from '../assets/images/modern/8.png'
import m9 from '../assets/images/modern/9.png'
import m10 from '../assets/images/modern/10.png'
import m11 from '../assets/images/modern/11.png'
import m12 from '../assets/images/modern/12.png'
import m13 from '../assets/images/modern/13.png'
import m14 from '../assets/images/modern/14.png'
import m15 from '../assets/images/modern/15.png'
import m16 from '../assets/images/modern/16.png'
import m17 from '../assets/images/modern/17.png'
import m18 from '../assets/images/modern/18.png'
import m19 from '../assets/images/modern/19.png'
import m20 from '../assets/images/modern/20.png'
import m21 from '../assets/images/modern/21.png'
import m22 from '../assets/images/modern/22.png'
import m23 from '../assets/images/modern/23.png'
import m24 from '../assets/images/modern/24.png'
import m25 from '../assets/images/modern/25.png'
import m26 from '../assets/images/modern/26.png'
import m27 from '../assets/images/modern/27.png'
import m28 from '../assets/images/modern/28.png'
import m29 from '../assets/images/modern/29.png'
import m30 from '../assets/images/modern/30.png'
import m31 from '../assets/images/modern/31.png'
import m32 from '../assets/images/modern/32.png'
import m33 from '../assets/images/modern/33.png'
import m34 from '../assets/images/modern/34.png'
import m35 from '../assets/images/modern/35.png'
import m36 from '../assets/images/modern/36.png'
import m37 from '../assets/images/modern/37.png'
import m38 from '../assets/images/modern/38.png'
import m39 from '../assets/images/modern/39.png'
import m40 from '../assets/images/modern/40.png'
import m41 from '../assets/images/modern/41.png'
import m42 from '../assets/images/modern/42.png'
import m43 from '../assets/images/modern/43.png'
import m44 from '../assets/images/modern/44.png'
import m45 from '../assets/images/modern/45.png'
import m46 from '../assets/images/modern/46.png'
import m47 from '../assets/images/modern/47.png'
import m48 from '../assets/images/modern/48.png'
import r1 from '../assets/images/rustic/1.png'
import r2 from '../assets/images/rustic/2.png'
import r3 from '../assets/images/rustic/3.png'
import r4 from '../assets/images/rustic/4.png'
import r5 from '../assets/images/rustic/5.png'
import r6 from '../assets/images/rustic/6.png'
import r7 from '../assets/images/rustic/7.png'
import r8 from '../assets/images/rustic/8.png'
import r9 from '../assets/images/rustic/9.png'
import r10 from '../assets/images/rustic/10.png'
import r11 from '../assets/images/rustic/11.png'
import r12 from '../assets/images/rustic/12.png'
import r13 from '../assets/images/rustic/13.png'
import r14 from '../assets/images/rustic/14.png'
import r15 from '../assets/images/rustic/15.png'
import r16 from '../assets/images/rustic/16.png'
import r17 from '../assets/images/rustic/17.png'
import r18 from '../assets/images/rustic/18.png'
import r19 from '../assets/images/rustic/19.png'
import r20 from '../assets/images/rustic/20.png'
import r21 from '../assets/images/rustic/21.png'
import r22 from '../assets/images/rustic/22.png'
import r23 from '../assets/images/rustic/23.png'
import t1 from '../assets/images/traditional/1.png'
import t2 from '../assets/images/traditional/2.png'
import t3 from '../assets/images/traditional/3.png'
import t4 from '../assets/images/traditional/4.png'
import t5 from '../assets/images/traditional/5.png'
import t6 from '../assets/images/traditional/6.png'
import t7 from '../assets/images/traditional/7.png'
import c1 from '../assets/images/craftsman/1.png'
import c2 from '../assets/images/craftsman/2.png'
import c3 from '../assets/images/craftsman/3.png'
import c4 from '../assets/images/craftsman/4.png'
import c5 from '../assets/images/craftsman/5.png'
import c6 from '../assets/images/craftsman/6.png'
import c7 from '../assets/images/craftsman/7.png'
import c8 from '../assets/images/craftsman/8.png'
import c9 from '../assets/images/craftsman/9.png'
import c10 from '../assets/images/craftsman/10.png'




const imagesPerPage = 9;



function Portfolio(props, ref) {
  const [activeButton, setActiveButton] = useState('All');

  const handleButtonClick = (filter) => {
    setActiveButton(filter);
  };
  useEffect(() => {
    const section = document.querySelector(".section");

    const handleScroll = () => {
      const sectionPosition = section.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 0.0001;

      if (sectionPosition < screenPosition) {
        section.classList.add("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedImage('');
    setShowModal(false);
  };
  const portfolioItems = [
    {
     image: m1, des: "NOTE: size of door affect appearance (size in picture is a 3/6x8/0)Handle bar available in 5ft round nickel or 5ft square nickel or black", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0"
  },
  {  image: m2, des: "Handle bar 5ft round nickel 6ft round nickel Note: handle bars are optional, can be with only 1 bar or 2 or NO BAR ", size: "3/6x8/0 4/0x8/0" },
  {  image: m3, des: "Handle bar available in 5ft round nickel and 5ft square nickel and black", size: "3/0x6/8 3/0x8/03/6x8/0 4/0x8/0" },
  {  image: m4, des: "Handlebar 6ft handlebar round nickel 5ft handlebar round nickel 5ft handlebar square nickel or black", size: "3/0 x 6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m5, des: "Handle bar sizes 5ft round bar nickel or 5ft square bar nickel or black", size: "3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m6, des: "Handle bar sizes 4ft/ 5ft round bar nickel or 4ft/5ft square bar nickel or black ", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m7, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m8, des: "Handle bar sizes 4ft/5ft round bar nickel or 4ft/5ft square bar nickel or black", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m9, des: "Handle bar sizes 5ft round bar nickel or 5ft square bar nickel or black ", size: "3/0x8/0 3/6x8/0 " },
  {  image: m10, des: "Handle bar sizes 5ft /6ft round bar nickel", size: "3/6x8/0 4/0x8/0" },
  {
     image: m11, des: "Handle bar sizes 5ft/6ft round bar nickel", size: "3/6x8/0 4/0x8/0"
  },
  {  image: m12, des: "Handle bar sizes 5ft/6ft round bar nickel", size: "3/0x6/8 3/0x8/03/6x8/0 4/0x8/0" },
  {  image: m13, des: "Handle sizes available 4ft 5ft 6ft round4ft 5ft square", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m14, des: "Handle sizes available 4ft 5ft 6ft round4ft 5ft square", size: "4/0x8/0" },
  {  image: m15, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m16, des: "Handle sizes available 4ft 5ft 6ft round4ft 5ft square", size: "30x6/8 3/0x8/0 3/6x8/0 4/0x8/0 " },
  {  image: m17, des: "Handle sizes available 4ft 5ft 6ft round4ft 5ft square", size: "3/6x8/0. 4/0x8/0 " },
  {  image: m18, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square", size: "3/6x8/0  4/0x8/0  " },
  {  image: m19, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square ", size: "3/0x8/0 3/6x8/0  4/0x8/0  " },
  {  image: m20, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square", size: "3/6x8/0  4/0x8/0" },
  {  image: m21, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square", size: "3/0x6/8  3/0x8/0 3/6x8/0  4/0x8/0" },
  {  image: m22, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square  ", size: "3/0x6/8  3/0x8/0  3/6x8/0  4/0x8/0" },
  {  image: m23, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square ", size: "3/6x8/0 4/0x8/0" },
  {  image: m24, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square ", size: "3/0x6/8  3/0x8/0 3/6x8/0 4/0x8/0" },
  {  image: m25, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square ", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0 " },
  {  image: m26, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square ", size: "3/6x8/0 4/0x8/0  " },
  {  image: m27, des: "", size: "4/0x8/0" },
  {  image: m28, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square ", size: "e 3/0x8/0 3/6x8/0 4/0x8/0  " }, {  image: m29, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square  ", size: "3/0x6/83/0x8/0 3/6x8/0  4/0x8/0 " },
  {  image: m30, des: "Handle sizes  available  4ft 5ft 6ft round  4ft 5ft square", size: "60x8/ 0 6 / 0x6 / 8" },
  {  image: m31, des: "Handle sizes  available  4ft 5ft 6ft round  4ft 5ft square", size: "6/0x8/0  6/0x6/8" },
  {  image: m32, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square", size: "5/0x6/8.   5/4x6/8  6/0x6/8  5/0x8/0  5/4x8/0  6/0x8/0" },
  {  image: m33, des: "", size: "6/0x8/0" },
  {  image: m34, des: "", size: "6/0x8/0" },
  {  image: m35, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square", size: "5/0x8/0 5/4x8/0 6/0x8/0" },
  {  image: m36, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square  ", size: "5/0x6/8 5/4x6/8 6/0x6/8 5/0x8/0 5/4x8/0 6/0x8/0" },
  {  image: m37, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square ", size: "5/0x6/8 5/4x6/8 6/0x6/8 5/0x8/0 5/4x8/0 6/0x8/0 " },
  {  image: m38, des: "", size: "6/0x8/0" },
  {  image: m39, des: "Handle sizes available 4ft 5ft 6ft round  4ft 5ft square ", size: "5/4x8/0 6/0x8/0" }, {  image: m40, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0 5/4x6/8 6/0x6/8 5/4x8/0 6/0x8/0" },
  {  image: m41, des: "", size: "3/6 x8/0 4/0x8/0  " },
  {  image: m42, des: "Handle bar sizes 4ft 5ft 6ft round nickel 4ft 5ft square nickel or Black", size: "5/0x6/8 5/4x6/8 6/0x6/8 5/0x8/0 5/4x8/0 6/0x8/0 " },
  {  image: m43, des: "", size: "e 3/0x6/8 3/0x8/0 3/6x8/0 6/0x6/8 6/0x8/0  5/4x6/8 5/4x8/0" },
  {
     image: m44, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0  5/4x6/8 6/0x6/8 6/0x8/0"
  },
  {  image: m45, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: m46, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: m47, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: m48, des: "", size: "3/0x8/0 3/6x8/0" },





  {  image: t1, des: "", size: "5/0x6/8 5/4x6/8 6/0x6/8 traditional double5/4x8/0 6/0x8/0" },
  {  image: t2, des: "", size: "6/0x6/8" },
  {  image: t3, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 6/0x6/8 6/0x8/05/4x6/8 5/4x8/0" },
  {  image: t4, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/05/4x6/8 6/0x6/8 6/0x8/0" },
  {  image: t5, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0" },
  {  image: t6, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: t7, des: "", size: "3/0x8/0 3/6x8/0" },

  {  image: r1, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0" },
  {  image: r2, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r3, des: "", size: "e 3/0x6/8 3/0x8/0 3/6x8/0" },
  {  image: r4, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r5, des: "", size: "6/0x6/8 6/0x8/0" },
  {  image: r6, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0" },
  {  image: r7, des: "", size: "5/4x6/8 6/0x6/8 5/4x8/0 6/0x8/0" },
  {  image: r8, des: ".", size: "6/0x8/0" },
  {  image: r9, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r10, des: "", size: "6/0x6/8 6/0x8/0" },
  {  image: r11, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r12, des: "", size: "6/0x6/8" },
  {  image: r13, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r14, des: "", size: "3/0x6/8 with 1/0 or 1/2 sidelights3/0x8/0 with 1/2 sidelight" },
  {  image: r15, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r16, des: "", size: "6/0x6/8 6/0x8/0" },
  {  image: r17, des: "", size: "5/4x6/8 6/0x6/8 5/4x8/0 6/0x8/0 " },
  {  image: r18, des: "", size: "3/0x6/8 with 2. 1/0 or 1/2 sidelights3/0x8/0 with 2. 1/2 sidelights" },
  {  image: r19, des: "", size: "3/0x6/8 6/0x6/8" },
  {  image: r20, des: "", size: "3/0x6/8 3/0x8/0 3/6x8/0 6/0x6/8 6/0x8/0" },
  {  image: r21, des: "", size: "2/8 x 6/8 3/0 x 6/8 2/8 x 8/0 3/0 x 8/0" },
  {  image: r22, des: "", size: "3/0x8/0 3/6x8/0" },
  {  image: r22, des: "", size: "3/10x8/0 3/6x8/0" },

  {  image: c1, des: "", size: "3/0x6/8 3/0x8/0" },
  {  image: c2, des: "", size: "3/0x6/8 3/0x8/0 6/0x6/8 5/4x8/0 6/0x8/0 " },
  {  image: c3, des: "", size: "3/0x6/8 3/0x8/0 " },
  {  image: c4, des: "", size: "3/6x8/0" },
  {  image: c5, des: "", size: "3/0x6/8 3/0x8/0" },
  {  image: c6, des: "", size: "3/0x6/8 3/0x8/0 6/0x6/8 6/0x8/0" },
  {  image: c7, des: "", size: "6/0x8/0" },
  {  image: c8, des: "", size: "3/0 x 6/8 3/0 x 8/0" },
  {  image: c9, des: "", size: "3/0 x 8/0 3/0 x 6/8" },
  {  image: c10, des: "", size: "3/10 x 8/0 3/0 x 6/8" },


  ];



  const filteredItems =
    activeButton === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeButton);


      
  return (
    <>

      <div className="Portfolio-css section ">
        <section id="portfolio" className="portfolio" >
          <div className="aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Beautiful Doors for Any Home or Business.</p>
            </div>

            <ul
              id="portfolio-flters"
              className="d-flex justify-content-center aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <li
                onClick={() => handleButtonClick('All')}
                className={activeButton === 'All' ? 'filter-active' : ''}
              >
                All
              </li>
              <li
                onClick={() => handleButtonClick('Modern')}
                className={activeButton === 'Modern' ? 'filter-active' : ''}
              >
                Modern
              </li>
              <li
                onClick={() => handleButtonClick('Traditional')}
                className={activeButton === 'Traditional' ? 'filter-active' : ''}
              >
                Traditional
              </li>
              <li
                onClick={() => handleButtonClick('Rustic')}
                className={activeButton === 'Rustic' ? 'filter-active' : ''}
              >
                Rustic
              </li>
              <li
                onClick={() => handleButtonClick('Craftsman')}
                className={activeButton === 'Craftsman' ? 'filter-active' : ''}
              >
                Craftsman
              </li>


            </ul>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
              <div className=" portfolio-item">


              </div>
              {filteredItems.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-wrap">
                    <img
                      src={item.image}
                      className="img-fluid img-f"
                      alt=""
                      onClick={() => handleImageClick(item.image)}
                    />
                    <div className="portfolio-info">
                      <div className="portfolio-links">
                        <div>
                          <img
                            className="plus-icon"
                            src={add}
                            alt=""
                            onClick={() => handleImageClick(item.image)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredItems.map((item, index) => (
                showModal && (
                  <div
                    className="image-modal alert"
                    style={{ top: `calc(${window.pageYOffset}px - 120vh)` }}
                    key={index}
                  >
                    <div className="modal-content">
                      <div className="model-c">
                        <div className="c-img">
                          <img src={selectedImage} alt="" />
                        </div>
                        <div className="c-c">
                          <h4>Category: {item.category}</h4>
                          <p>Sizes Available : {item.size}</p>
                        </div>
                      </div>
                      <button className="close-icon" onClick={handleModalClose}>
                        X
                      </button>
                    </div>
                  </div>
                )
              ))}

            </div>
          </div>
        </section>
      </div></>

  );
}
export default React.forwardRef(Portfolio);