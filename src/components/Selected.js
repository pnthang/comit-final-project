import React from 'react'

function Selected(props){
    console.log(props);
    return (
        <div className="selected-container">
            {
                props.selectedDishes.map((dish)=>{
                    return (
                        <div className="selected-detail" key={'selected-'+dish.id}>
                            <div className="selected-information">
                                <div>
                                    <label key={dish.id} >[{dish.id}]{dish.name}</label>
                                </div>
                                <button onClick={()=>props.removeDish(dish)}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Selected