// import React from 'react'
// import card1 from "../../assets/card-1.png"
// import card2 from "../../assets/card-2.png"
// import card3 from "../../assets/card-3.png"


// const cards=[
//     {
//         id:1,
//         image:card1,
//         trend:'2024 Trend',
//         title:'Womens Shirt',
//     },
//     {
//         id:2,
//         image:card2,
//         trend:'2024 Trend',
//         title:'Womens Dresses',
//     },
//     {
//         id:3,
//         image:card3,
//         trend:'2024 Trend',
//         title:'Womens Casuals',
//     },
// ]
// const HeroSections = () => {
//   return (
//     <section className='section__container hero__container'>
//         {
//             cards.map((card)=>(
//                 <div key={card.id} className='hero_card'>
//                     <img src={card.image} alt="" />
//                     <div className='hero__content'>
//                         <p>{card.trend}</p>
//                         <h4>{card.title}</h4>
//                         <a href="#">Discover More</a>
//                     </div>
//                 </div>
//             ))
//         }
//     </section>
//   )
// }

// export default HeroSections
import React from "react";
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";

const cards = [
  {
    id: 1,
    image: card1,
    trend: "2024 Trend",
    title: "Womens Shirt",
  },
  {
    id: 2,
    image: card2,
    trend: "2024 Trend",
    title: "Womens Dresses",
  },
  {
    id: 3,
    image: card3,
    trend: "2024 Trend",
    title: "Womens Casuals",
  },
];

const HeroSections = () => {
  const sectionStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    padding: "2rem",
  };

  const cardStyle = {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "translateZ(20px) scale(1.05)",
    boxShadow: "5px 5px 25px rgba(0, 0, 0, 0.2)",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
  };

  const contentStyle = {
    position: "absolute",
    top: "50%",
    right: "5%",
    transform: "translateY(-50%)",
    textAlign: "right",
    background: "rgba(255, 255, 255, 0.0)",
    padding: "1rem",
    borderRadius: "5px",
    width: "90%",
  };

  const trendStyle = {
    fontSize: "1rem",
    fontWeight: "600",
    color: "darkred",
    marginBottom: "0.5rem",
    fontStyle: "italic",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "790",
    color: "#333",
    marginBottom: "1rem",
    fontFamily: "'Roboto', sans-serif",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "underline",
    fontWeight: "600",
    fontSize: "1rem",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = cardHoverStyle.transform;
    e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "none";
    e.currentTarget.style.boxShadow = cardStyle.boxShadow;
  };

  return (
    <section style={sectionStyle}>
      {cards.map((card) => (
        <div
          key={card.id}
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={card.image} alt={card.title} style={imageStyle} />
          <div style={contentStyle}>
            <p style={trendStyle}>{card.trend}</p>
            <h4 style={titleStyle}>{card.title}</h4>
            <a href="#" style={linkStyle}>
              Discover More
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSections;

