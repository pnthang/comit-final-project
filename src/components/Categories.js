import React from 'react'
function Categories(props){
    // console.log(props.categories);
    return (
        <div className="left-categories">
            {props.categories.map((cat)=>{
               return(
                <div className={"category-detail "+ ((props.catSelectedId===cat.id)?'active':'')} key={cat.id} onClick={() => props.selectCat(cat)}>
                    {cat.name}
                </div>
               )
            })}
        </div>
    )
}
export default Categories;