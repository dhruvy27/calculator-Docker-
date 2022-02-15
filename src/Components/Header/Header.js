import React, { useEffect, useRef } from "react";

import "./Header.css";


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // Do something that could throw
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }
    return <button onClick={this.handleClick}>Click Me</button>
  }
}




function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();
//to show last result
  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className="header custom-scroll">
      <div className="header_history">
        {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
      </div>
      <br />
      <div ref={expressionRef} className="header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>
      <p ref={resultRef} className="header_result">
        {props.result}
      </p>
    </div>
  );
}

export default Header;
