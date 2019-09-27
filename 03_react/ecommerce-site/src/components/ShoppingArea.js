import React from "react"
import Product from "./Product"
import Cart from "./Cart"

import jsBook1 from "../images/js-book-1.webp"
import jsBook2 from "../images/js-book-2.webp"
import jsBook3 from "../images/js-book-3.jpg"
import computerScienceBook1 from "../images/computer-science-book-1.jpg"
import computerScienceBook2 from "../images/computer-science-book-2.jpg"
import computerScienceBook3 from "../images/computer-science-book-3.jpg"

class ShoppingArea extends React.Component {

    state = {
        cart: 0
    }

    increaseCart = () => {
        let newQty = this.state.cart + 1;
        this.setState({ cart: newQty })
    }

    decreaseCart = () => {
        if (this.state.cart > 0) {
            let newQty = this.state.cart - 1;
            this.setState({ cart: newQty })
        }
    }


    render() {
        return (
            <div id="shopping-container">
                <Cart count={this.state.cart} />
                <div id="product-container">
                    <Product
                        imgSrc={jsBook1}
                        name="Up & Going"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                    <Product
                        imgSrc={jsBook2}
                        name="Async & Performance"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                    <Product
                        imgSrc={jsBook3}
                        name="Eloquent JavaScript"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                    <Product
                        imgSrc={computerScienceBook1}
                        name="Hidden Language of Code"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                    <Product
                        imgSrc={computerScienceBook2}
                        name="Introduction of Algorithms"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                    <Product
                        imgSrc={computerScienceBook3}
                        name="Algorithm Design Manual"
                        increment={this.increaseCart}
                        decrement={this.decreaseCart}
                    />
                </div>
            </div>
        )
    }
}

export default ShoppingArea;