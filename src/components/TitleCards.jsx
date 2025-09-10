// TitleCards.jsx
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, cards }) => {
  const cardsRef = useRef();
  const navigate = useNavigate();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const ref = cardsRef.current;
    ref.addEventListener("wheel", handleWheel);
    return () => ref.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards mt-12 mb-8 ">
      <h2 className="mb-2 font-bold text-xl">{title ?? "Popular na TDM"}</h2>
      <div className="card-list flex gap-2.5 overflow-x-scroll" ref={cardsRef}>
        {cards.map((card, index) => (
          <div
            className="card relative shrink-0"
            key={index}
            onClick={() => navigate(`/player/${card.id}`)}
          >
            <img
              className="w-60 rounded-sm cursor-pointer"
              src={card.image}
              alt={card.name}
            />
            <p className="absolute bottom-2 right-2 text-white px-2 rounded">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
