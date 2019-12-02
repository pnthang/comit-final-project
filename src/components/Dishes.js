import React from 'react'

function Dishes(props){
      //console.log(props.dishes);
    return (
        <div className="dishes-container">
            {
                props.dishes.map((dish)=>{
                    return (
                        <div className="dish-detail" key="{props.dish.id}">
                            <img src={dish.img}/>
                            <label key={dish.id} >{dish.name}</label>
                            <p>
                                {dish.discription}
                            </p>
                            <span className="dish-detail-price">{dish.price}</span>

                        </div>
                    )
                })
            }
        </div>

    )
}
export default Dishes;