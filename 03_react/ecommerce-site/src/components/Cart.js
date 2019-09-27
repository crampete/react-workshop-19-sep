import React from 'react';
import axios from "axios"
import cartImage from "../images/cart.png"


class Cart extends React.Component {

    state = {
        phone: ""
    }

    updateNumber = (event) => {
        this.setState({ "phone": event.target.value });
    }

    checkOut = () => {
        if (this.state.phone.length !== 10) {
            alert("Invalid Phone Number")
            return
        }
        let authKey = "secret"
        let message = "Successfully ordered " + this.props.count + " books."

        let url = "https://api.msg91.com/api/sendhttp.php?mobiles=" + this.state.phone + "&authkey=" + authKey + "&route=4&sender=TESTIN&message=" + message + "&country=91"
        axios.get(url).then((res) => {
            console.log(res)
        })
    }

    render() {
        return (
            <div id="cart">
                <input value={this.state.phone} onChange={this.updateNumber} placeholder="Phone Number"></input>
                <button onClick={this.checkOut}>Checkout</button>
                <div id="cart-image">
                    <img src={cartImage} />
                    <span id="cart-count">{this.props.count}</span>
                </div>
            </div>

        )
    }
}

export default Cart;