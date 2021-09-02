import React from 'react'
import { BsFillStarFill } from "react-icons/bs";


const StarRating = ({rating, handleRating}) => {
    
    function stars (rating){
        let star = [] ; 
        for (let i = 1; i <= 5 ; i++) {
            if (i<=rating) {
                star.push(
                    <span onClick={()=>handleRating(i)} style={{color: "gold", cursor:'pointer'}}> <BsFillStarFill/></span>
                )
            }else
                star.push(
                    <span onClick={()=>handleRating(i)}  style={{color: "gray", cursor:'pointer'}}> <BsFillStarFill/></span>
                )
        }
        return star 
    }
    return (
        <div>
            {stars(rating)}
        </div>
    )
}
StarRating.defaultProps = {
    handleRating : () => {}
}
export default StarRating
