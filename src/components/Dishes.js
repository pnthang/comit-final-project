import React from 'react'

function Dishes(props){
      //console.log(props.dishes);
    return (
        <div className="dishes-container">
            {
                props.dishes.map((dish)=>{
                    return (
                        <div className="dish-detail" key={'dish-'+ dish.id}>
                            <img className="dish-image" src="https://via.placeholder.com/100"/>
                            <div className="dish-information">
                                <div>
                                    <label key={dish.id} >[{dish.id}]{dish.name}</label>
                                    <p>
                                        {dish.discription}
                                    </p>
                                    <span className="dish-detail-price"><i>$</i>{dish.price/100}</span>
                                </div>
                                <button onClick={()=>props.selectDish(dish)}>Selected</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}
export default Dishes;