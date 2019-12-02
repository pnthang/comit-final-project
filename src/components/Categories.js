import React from 'react'
function Categories(props){
    // console.log(props.categories);
    return (
        <div className="left-categories">
            {props.categories.map((obj)=>{
               return(
                <div className={"category-detail"+ (props.catSelected?'active':'')} key={props.id} onClick={() => props.selectCat(props)}>
                    {props.name}
                </div>
               )
            })}
        </div>
    )
}
export default Categories;