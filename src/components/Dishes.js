import React from 'react'

function Dishes(props){
      //console.log(props.dishes);
    return (
        <div className="dishes-container">
            {
                props.dishes.map((obj)=>{
                    return (
                        <div className="dish-detail" key="{props.dish.id}">
                            <img src={props.dish.img}/>
                            <label key={props.dish.id} >{props.dish.name}</label>
                            <p>
                                {props.dish.discription}
                            </p>
                            <span className="dish-detail-price">{props.dish.price}</span>

                        </div>
                    )
                })
            }
        </div>

    )
}
export default Dishes;