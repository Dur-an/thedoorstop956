import React, { useState } from 'react';
import './Portfolio.css'
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



const GalleryButton = ({ category, images, activeCategory }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (category !== activeCategory) {
    return null; // Don't render if the category is not the active category
  }

  return (
    <div>
      <h2>{category}</h2>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          alt={image.des}
          onClick={() => openPopup(image)}
        />
      ))}

      {showPopup && (
        <div className="popup">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <div className="content">
            <div className="image">
              <img style={{ width: "100%" }} src={selectedImage.image} alt={selectedImage.des} />
            </div>
            <div className="details">
              <h3 className="category-heading">{selectedImage.des}</h3>
              <p className="size-paragraph">Size: {selectedImage.size}</p>
              {selectedImage.info && (
                <p className="info-paragraph">More Info: {selectedImage.info}</p>
              )}
                {selectedImage.handles && (
                  <p className="handles-paragraph">Handles available: {selectedImage.handles}</p>
                )}
                {selectedImage.handles2 && (
                  <p className="handles-paragraph">{selectedImage.handles2}</p>
                )}
                {selectedImage.handles3 && (
                  <p className="handles-paragraph">{selectedImage.handles2}</p>
                )}
              )
              
          </div>
        </div>
    </div>
      )}
      </div>
  );
};

const App = () => {
  const galleries = [
    {
      category: 'Modern',
      images: [
        {
          image: m1, des:"Model 1.4", info:"Frost inserts", handles:"5ft round nickel", handles2:"5ft square nickel or black", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0"},
        { image: m2, des: "Model 2 Double I", info:"Handle bars are optional. Available in 1 bar, 2 bar, or no bar. ",handles:"5ft round nickel", handles2:"6ft round nickel", size: "3/6x8/0 4/0x8/0" },
        { image: m3, des: "Model 3 4", info:"12x12 Circuit", handles: " 5ft round nickel", handles2:" 5ft square nickel and black", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m4, des: "Model 4 7 ", info:"Spotlight frost horizontal or 5 spotlight frost no 6/8 door.", handles:"6ft handlebar round nickel", handles2:"5ft handlebar round nickel", handles3:"5ft handlebar square nickel or black", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m5, des: "Model 5 4", info:"12x12 frost spotlight", handles:"5ft round bar nickel", handles2:"5ft square bar nickel or black", size: "3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m6, des: "Model 6 7 ", info:"Spotlight 11x5 or 5 spotlight inserts on 6/8", handles:"4ft/5ft round nickel", handles2:"4ft/5ft square bar nickel or black", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m7, des: "Model 7", info:"Flush", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m8, des: "Model 8 4", info:"7x15 micro granite vertical or 3 on 6/8 ", handles:"4ft/5ft round bar nickel", handles2:"4ft/5ft square bar nickel or black", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m9, des: "Model 9 5 ", info:" Vertical 22x3.5 frost", handles:"5ft round bar nickel", handles2:" 5ft square bar nickel or black", size: "3/0x8/0, 3/6x8/0 " },
        { image: m10, des: "Model 10", info:" Vertical spotlight frost arrow (6)", handles:" 5ft/6ft round bar nickel", size: "3/6x8/0, 4/0x8/0" },
        { image: m11, des: "Model 11 1", info:" 7x64 granite with 7x6 granite", handles: "5ft/6ft round bar nickel", size: "3/6x8/0, 4/0x8/0" },
        { image: m12, des: "Model 12", info:"8x80 frost glass", handles:" 5ft/6ft round bar nickel", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m13, des: "Model 13 6", info:" Frost spotlight 22x3.5 horizontal or 5 inserts 6/8", handles: "4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0" },
        { image: m14, des: "Model 14 8", info:"Frost spotlight 22x3.5 vertical",   size: "4/0x8/0" },
        { image: m15, des: "Model 15", info:"Flush", handles:"4ft 5ft 6ft round", handles2:" 4ft 5ft square", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0" },
        { image: m16, des: "Model 16 5", info:"Frost spotlight 22x20 or 4 on 6/8", handles:" 4ft 5ft 6ft round", handles2:" 4ft 5ft square", size: "30x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0 " },
        { image: m17, des: "Model 17", info:" Double I", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/6x8/0, 4/0x8/0 " },
        { image: m18, des: "Model 18 6", info:"Frost spotlight arrow", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/6x8/0,  4/0x8/0  " },
        { image: m19, des: "Model 19 5", info:" Frost spotlight 22x3.5 Vertical", handles:" 4ft 5ft 6ft round", handles2:" 4ft 5ft square", size: "3/0x8/0, 3/6x8/0,  4/0x8/0  " },
        { image: m20, des: "Model 20", info:" Double I", handles:" 4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/6x8/0,  4/0x8/0" },
        { image: m21, des: "Model 21 5", info:"Spotlight frost 22x10 or 4 on 6/8", handles:" 4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/0x6/8,  3/0x8/0, 3/6x8/0,  4/0x8/0" },
        { image: m22, des: "Model 22", info:"Flush", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/0x6/8  3/0x8/0  3/6x8/0  4/0x8/0" },
        { image: m23, des: "Model 23", info:"Double 8x80", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square",  size: "3/6x8/0 4/0x8/0" },
        { image: m24, des: "Model 24", info:"8x80 frost", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/0x6/8  3/0x8/0 3/6x8/0 4/0x8/0" },
        { image: m25, des: "Model 25 6", info:"Frost fpotlight 22x3.5 horizontal zigzag or five on 6/8", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0 " },
        { image: m26, des: "Model 26", info:"Double I", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "3/6x8/0 4/0x8/0  " },
        { image: m27, des: "Model 27", info:"Triple I ", size: "4/0x8/0" },
        { image: m28, des: "Model 28", info:"Frost spotlight 22x3.5 veritcal", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: " 3/0x8/0 3/6x8/0 4/0x8/0  " }, { image: m29, des: "Handle sizes available 4ft 5ft 6ft round 4ft 5ft square  ", size: "3/0x6/83/0x8/0 3/6x8/0  4/0x8/0 " },
        { image: m30, des: "Model 29", info:"8x80 Frost", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "60x8/ 0 6 / 0x6 / 8" },
        { image: m31, des: "Model 30 Double", info:"Spotlight frost 22x3.5 or 10. 6/8", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", size: "6/0x8/0  6/0x6/8" },
        { image: m32, des: "Model 31 8x80", info: "Double", handles:"4ft 5ft round", handles2:"4ft 5ft square", size: "5/0x6/8, 5/4x6/8, 6/0x6/8, 5/0x8/0, 5/4x8/0, 6/0x8/0" },
        { image: m33, des: "Model 32", info:"Geo tex", size: "6/0x8/0" },
        { image: m34, des: "Model 32", info:"Geo tex", size: "6/0x8/0" },
        { image: m35, des: "Model 33 5 Double", info:"Frost spotlight 22x3.5 Vertical", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square" ,size: "5/0x8/0, 5/4x8/0, 6/0x8/0" },
        { image: m36, des: "Model 34 8", info:"12x12 Circuit or 6. on a 6/8.", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square",handles3:"(Full frost available)", size: "5/0x6/8, 5/4x6/8, 6/0x6/8, 5/0x8/0, 5/4x8/0, 6/0x8/0" },
        { image: m37, des: "Model 35 12 ", info:"inserts 6x7 or 10 inserts on 6/8", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square", handles3:"Modern double or single door", size: "5/0x6/8, 5/4x6/8, 6/0x6/8, 5/0x8/0, 5/4x8/0, 6/0x8/0 " },
        { image: m38, des: "Model 36", info:"2 panel square top", handles2:"Modern double or single door", size: "6/0x8/0" },
        { image: m39, des: "Model 37 ", info:"Single I", handles:"4ft 5ft 6ft round", handles2:"4ft 5ft square",  size: "5/4x8/0, 6/0x8/0" },
        { image: m40, des: "Model 47 Double", info:"Frost spotlight 22x3.5 horizontal, or 10 inserts on 6/8", size: "3/0x6/8 3/0x8/0 3/6x8/0 4/0x8/0 5/4x6/8 6/0x6/8 5/4x8/0 6/0x8/0" },
        { image: m41, des: "Model 53", info:"Double I inverted", size: "3/6x8/0, 4/0x8/0" },
        { image: m42, des: "Model 56 Double", info:"Flush", handles:"4ft 5ft 6ft round nickel", handles2:"4ft 5ft square nickel or black", size: "5/0x6/8, 5/4x6/8, 6/0x6/8, 5/0x8/0, 5/4x8/0, 6/0x8/0 " },
        { image: m43, des: "Model 67", info:"Waterslide", size: " 3/0x6/8, 3/0x8/0, 3/6x8/0, 6/0x6/8, 6/0x8/0, 5/4x6/8, 5/4x8/0" },
        {
          image: m44, des: "Model 69", info:"Renewed impression",  size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0, 5/4x6/8, 6/0x6/8, 6/0x8/0"
        },
        { image: m45, des: "Patio Doors", info:"Doubles/Singles/Sidelights/Quads/Triples" },
        { image: m46, des: "Modern baypoint", info:"Doubles/Singles/Sidelights", size: "3/0x8/0 3/6x8/0" },
        { image: m47, des: "Modern", info:"Doubles/Singles/Sidelights", size: "3/0x8/0 3/6x8/0" },
        { image: m48, des: "Modern", info:"Doubles/Singles/Sidelights", size: "3/0x8/0 3/6x8/0" },

      ],
    },
    {
      category: 'Traditional',
      images: [
        {  image: t1, des: "Model 38 Double", info:"6 Panel", handles2:"Traditional double", size: "5/0x6/8, 5/4x6/8, 6/0x6/8" },
        {  image: t2, des: "Model 57", info:"8 Panel", size: "6/0x6/8" },
        {  image: t3, des: "Model 67", handles2:"Traditional/Modern", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 6/0x6/8, 6/0x8/0, 5/4x6/8, 5/4x8/0" },
        {  image: t4, des: "Model 69", info:"Renewed impression", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 4/0x8/0, 5/4x6/8, 6/0x6/8, 6/0x8/0" },
        {  image: t5, des: "Model 70", info:"Mohave", handles2:"Traditional/Rustic", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 6/0x6/8, 6/0x8/0" },
        {  image: t7, des: "Traditional", info:"Avant", size:"Doubles/Singles/Sidelights" },
      ],
    },
    {
      category: 'Rustic',
      images: [
        {  image: r1, des: "Model 39", info: "2 Panel eyebrow plank", size: "3/0x6/8, 3/0x8/0, 3/6x8/0" },
  {  image: r2, des: "Model 40", info: "9 Panel", size: "3/0x8/0 3/6x8/0" },
  {  image: r3, des: "Model 41", info: "2 Panel eyebrow plank", size: "e 3/0x6/8, 3/0x8/0, 3/6x8/0" },
  {  image: r4, des: "Model 42", info: "2 Panel square top plank", size: "3/0x8/0, 3/6x8/0" },
  {  image: r5, des: "Model 43 (Double)", info: "2 Panel eyebrow plank", size: "6/0x6/8, 6/0x8/0" },
  {  image: r6, des: "Model 45", info: "2 Panel eyebrow plank", size: "3/0x6/8, 3/0x8/0, 3/6x8/0" },
  {  image: r7, des: "Model 48 (Double)",info: "Catalina", size: "5/4x6/8, 6/0x6/8, 5/4x8/0, 6/0x8/0" },
  {  image: r8, des: "Model 49 (Double)",info: "9 Panel", size: "6/0x8/0" },
  {  image: r9, des: "Model 50 (Double)", info: "1 panel square top plank", size: "3/0x8/0, 3/6x8/0" },
  {  image: r10, des: "Model 51", info: "Therma Tru wrought iron Agustin arch", size: "6/0x6/8, 6/0x8/0" },
  {  image: r11, des: "Model 52", info: "Therma Tru wrought iron Agustin arch", size: "3/0x8/0, 3/6x8/0" },
  {  image: r12, des: "Model 57", info: "8 Panel (Traditional/Rustic)", size: "6/0x6/8" },
  {  image: r13, des: "Model 58", info: "2 Panel square top plank", size: "3/0x8/0, 3/6x8/0" },
  {  image: r14, des: "Model 59", info: "2 Panel eyebrow plank with sidelights 8x64 Micro Granite", size: "3/0x6/8 with 1/0 or 1/2 sidelights, 3/0x8/0 with 1/2 sidelight" },
  {  image: r15, des: "Model 61", info: " 1 Panel square top plank", handles: "4ft, 5ft, 6ft round nickel", handles2:"4ft, 5ft square nickel or black", size: "3/0x8/0, 3/6x8/0" },
  {  image: r16, des: "Model 62", info: "Therma Tru Barraza arch", size: "6/0x6/8, 6/0x8/0" },
  {  image: r17, des: "Model 65 (Double)", info:" Catalina", size: "5/4x6/8, 6/0x6/8, 5/4x8/0, 6/0x8/0 " },
  {  image: r18, des: "Model 66", info: "Texas Star Wrought iron", size: "3/0x6/8 with 2. 1/0 or 1/2 sidelights, 3/0x8/0 with 2. 1/2 sidelights" },
  {  image: r19, des: "Model 68", info: "Mediterranean",  size: "3/0x6/8, 6/0x6/8" },
  {  image: r20, des: "Model 70", info: "Mohave (Traditional/Rustic)", size: "3/0x6/8, 3/0x8/0, 3/6x8/0, 6/0x6/8, 6/0x8/0" },
  {  image: r21, des: "Rustic", size: "2/8x6/8, 3/0x6/8, 2/8x8/0, 3/0x8/0" },
      ],
    },
    {
      category: 'Craftsman',
      images: [
        {  image: c1, des: "Model 44 6 light craftsman", size: "3/0x6/8, 3/0x8/0" },
        {  image: c2, des: "Model 46 22x64 6 light SDL", info:"Available in rain, clear, micro granite.", size: "3/0x6/8, 3/0x8/0, 6/0x6/8, 5/4x8/0, 6/0x8/0 " },
        {  image: c3, des: "Model 54 6 light craftsman", info:"With Dentil", size: "3/0x6/8 3/0x8/0 " },
        {  image: c4, des: "Model 55 6 light craftsman", size: "3/6x8/0" },
        {  image: c5, des: "Model 60 22x64 6 light SDL", info: "Available in rain, clear, micro, granite.", size: "3/0x6/8, 3/0x8/0" },
        {  image: c6, des: "Model 63 22x64 6 light SDL", info: "Available in rain, clear, micro, granite.", size: "3/0x6/8, 3/0x8/0, 6/0x6/8, 6/0x8/0" },
        {  image: c7, des: "Model 64 x", size: "6/0x8/0" },
        {  image: c8, des: "Craftsman one light", size: "3/0x6/8, 3/0x8/0" },
        {  image: c9, des: "Craftsman", size: "3/0x8/0, 3/0x6/8" },
        {  image: c10, des: "Ocean Craftsman", size: "3/10x8/0, 3/0x6/8" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(galleries[0].category);

  const changeCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <div className="buttons">
        {galleries.map((gallery, index) => (
          <button
            key={index}
            onClick={() => changeCategory(gallery.category)}
            className={activeCategory === gallery.category ? "active" : ""}
          >
            {gallery.category}
          </button>
        ))}
      </div>
      <div className="gallery">


        {galleries.map((gallery, index) => (
          <GalleryButton
            key={index}
            category={gallery.category}
            images={gallery.images}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
