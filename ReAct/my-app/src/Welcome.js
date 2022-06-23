import React from "react";
import { useState } from 'react'

function Print(props) {
    return (
        <h3>This is {props.name}</h3>
    );
}

//it is not pending

function Welcome(props) {
    return (
        <>
            {/* <div>
                <h1>Welcome ! I am a {props.tencuaprop} </h1>
            </div> */}
            <Car />
            <FavoriteColor />
            <ChangeColorTest />
            <ChangeCarColor />
        </>

    )
}

function UseStateDemo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

function ChangeColorTest() {
    const [color, setColor] = useState("red");
    return (
        <div className="container">
            <h1>
                My favorite color is <span style={{ color: color }}>{color}</span>
            </h1>
            <button onClick={() => {
                if (color == "red") {
                    setColor("blue")
                } else {
                    setColor("red")
                }
            }}>Click to change color</button>
        </div>
    );
}

function FavoriteColor() {
    const [color, setColor] = useState("red");
    return (
        <>
            <h1>My favorite color is <span style={{ color: color }}>{color}</span>!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </>
    );
}

function ChangeCarColor(props) {
    const [color, setColor] = useState("red");
    return (
        <div className="container">
            <h1>
                I am a <span style={{ color: color }}>{color}</span> {props.carName}
            </h1>
            <button onClick={() => {
                if (color == "red") {
                    setColor("blue")
                } else {
                    setColor("red")
                }
            }}>Click to change color</button>
        </div>
    );
}

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            bg: "white",
        };
    }
    changeColor = () => {
        this.setState({ color: "white" });
        this.setState({ bg: "blue" });
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a <span style={{ color: this.state.color, backgroundColor: this.state.bg }}>{this.state.color}</span>
                    {this.state.model}
                    from {this.state.year}.
                </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >Change color</button>
            </div>
        );
    }
}


export default Welcome;