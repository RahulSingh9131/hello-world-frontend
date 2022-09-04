import React from 'react'
import "../css/card.css"

const Card = ({item}) => {
    const {id,brand,category,description,discountPercentage,thumbnail,price,rating,stock,title}=item;
  return (
    <div className='productcard'>
        <div className="card shadow-card" key={id}>
            <h3 className='card-category'>{category}</h3>
            <div className="card-top">
                <img className="card-img" src={thumbnail} alt="productCard" />
            </div>
            <div className="card-bottom">
                <div className="card-body">
                    <h2 className="body-title">{title}</h2>
                    <h3 className="body-title">{brand}</h3>
                    <p className='body-category'>{description}</p>
                    <div className="body-text">
                        <p>₹  {price}</p>
                        <p className="">InStock- {stock}</p>
                        <span>({discountPercentage}% off)</span>
                        <div className='number-rating-container'>
                            <span>{rating}</span>
                            <i className='fa fa-star'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card