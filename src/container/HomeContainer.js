import Home from "../component/Home.jsx";
import {connect}  from 'react-redux'
import { addToCart } from "../service/action/action.js";

//mapstatetoprop for adding item to cart 
const mapStateToProps = state => ({
     //cardData:state or
     cardData:state.cardItems
})

const mapDispatchToProps =dispatch => ({
    addToCartHandler:data=>dispatch(addToCart(data))
})

// % Note : you can use x,y,a,b etc instead of mapStatetoProps or for dispatch they r just like  variable
export default connect(mapStateToProps,mapDispatchToProps)(Home)


//export default Home

// step 4