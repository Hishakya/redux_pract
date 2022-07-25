import React from "react";

const Home = (props) => {
    //through props we r getting add_to_cart function here from "homecontainer"
    //2nd  or 1st log output
    console.log("props from home ",props.data)
    return (
        <div>
            <div>
                {/* this is for counting item added to cart */}
            {/* <span>{props.data.length}</span> */}
            </div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
               
                <img src="zee5t.png" alt="zee5t"/>
            </div>
            <div className="text-wrapper item">
                <span>
                    I-Phone
                </span>
                <span>
                    Price: $1000.00
                </span>
            </div>
            <div className="btn-wrapper item">
                {/* here we r calling addtocarthandler function */}
                {/* when we click on addToCartHandler "action" must be called  */}
                <button  
                onClick={() => 
                props.addToCartHandler({price:1000,name:'i phone 11'})}>
                    Add To Cart</button>
            </div>
        </div>
    </div>
    )
}

export default Home