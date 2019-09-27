import React from 'react';

class Product extends React.Component {

    render() {
        return (
        <div className="product">
            <img src={this.props.imgSrc} />
            <p>{this.props.name}</p>
            <p className="product-buttons">
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.increment} className="increment-button">+</button>
            </p>
        </div>
        )
    }
}


export default Product;