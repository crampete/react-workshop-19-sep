import React from 'react';

class Product extends React.Component {

    render() {
        return (
        <div className="product">
            <img src={this.props.imgSrc} />
            <p>{this.props.name}</p>
        </div>
        )
    }
}


export default Product;