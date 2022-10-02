import React from 'react'

type CardProps = {
  children: React.ReactNode; 
};

const Card = ({children}: CardProps) => {
  return (
    <div className = "container">{children}
    </div>
  )
}

export default Card