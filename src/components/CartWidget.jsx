import Cart from "../assets/png-carrito.png"
import { useContext } from "react";
import { CardContext } from "../contexts/CardContex";
import { Link } from "react-router-dom";

export const CardWidget = () => {
        const {totalWidget} = useContext(CardContext)
        return(
                <Link to ="/Cart">
                        <img src={Cart} alt="Cart" /><span>{totalWidget}</span>
                </Link>
        )        
        
};
