import React from "react";

class Counter extends React.Component {

    state =  {
        counter: 0
    }

    increment = () => {
        let newCount = this.state.counter + 1
        this.setState({
            counter: newCount
        })
    }

    decrement = () => {
        if (this.state.counter > 0) {
            let newQty = this.state.counter - 1
            this.setState({
                counter: newQty
            })
        }
    }

    render() {
        return(
            <div className="counter">
                <h1>{this.props.caption}</h1>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }

}

export default Counter;