import React, { useContext } from "react";
import { CardContext } from "../contexts/CardContex";
import { Link } from "react-router-dom";
import CartImage from "../assets/png-carrito.png";

const CardWidget = () => {
        const { totalWidget } = useContext(CardContext);

        return (
                <Link to="/Cart">
                        <img src={CartImage} alt="Cart" /><span>{totalWidget}</span>
                </Link>
        );
};

export default CardWidget;

