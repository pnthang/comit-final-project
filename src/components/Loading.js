import React from 'react'

function Loading(){
    let [loading,setLoading] = React.useState('');
    return (
        <div className="loading-container">
            {/* <img className="loading-logo" src="./images/nelliskitchen.jpg"/> */}
            <div className="loading">Loading....</div>
        </div>
    )
}
export default Loading;