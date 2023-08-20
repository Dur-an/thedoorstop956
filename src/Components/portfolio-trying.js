import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import './Portfolio.css';

import Home from './Home';
import m1 from '../assets/images/modern/1.png'
import m48 from '../assets/images/modern/48.png'
import t1 from '../assets/images/traditional/1.png'
import t7 from '../assets/images/traditional/7.png'
import r22 from '../assets/images/rustic/22.png'
import c9 from '../assets/images/craftsman/9.png'
import c10 from '../assets/images/craftsman/10.png'
import add from '../assets/img/add.png'
import link from '../assets/img/link.png'
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
    const portfolioItems = [{
        category: 'Modern', image: m1, des: "NOTE: size of door affect appearance (size in picture is a 3/6x8/0)Handle bar available in 5ft round nickel or 5ft square nickel or black", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0"
    },
    { category: 'Modern', image: m48, des: "", size: "3/0x8/0 3/6x8/0" },
    { category: 'Traditional', image: t1, des: "", size: "5/0x6/8 5/4x6/8 6/0x6/8 traditional double5/4x8/0 6/0x8/0" },
    { category: 'Traditional', image: t7, des: "", size: "3/0x8/0 3/6x8/0" },
    { category: 'Rustic', image: r22, des: "", size: "3/0x8/0 3/6x8/0" },
    { category: 'Rustic', image: r22, des: "", size: "3/10x8/0 3/6x8/0" },
    { category: 'Craftsman', image: c9, des: "", size: "3/0 x 8/0 3/0 x 6/8" },
    { category: 'Craftsman', image: c10, des: "", size: "3/0 x 8/0 3/0 x 6/8" },
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