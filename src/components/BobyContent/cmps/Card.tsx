import React, { useState } from 'react'

interface CardProps {
    title: string;
    description: string;
  }

  const Card = ({ title, description }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div 
        className={`card-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-front">
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    );
}

export default Card