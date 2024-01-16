import React from 'react'


class App1 extends React.Component {
    constructor() {
        this.state = {
          id: 1,
          name: "test"
        };
    }

  render() {
    return <div>
        <Child value="Name" />
        <Child1 value="Name1" />
    </div>;
  }
}
  
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 2,
          name: "test1",
          count: 0
        };
      }

      handleIncrement () {
        this.setState({ count: this.state.count + 1});
        
        // this.setState({ count: this.state.count + 1});
        // this.setState({ count: this.state.count + 1});
        // this.setState({ count: this.state.count + 1});
        // +1
        
        // this.setState((prevState) => ({ count: prevState.count + 1 }))
        // this.setState((prevState) => ({ count: prevState.count + 1 }))
        // this.setState((prevState) => ({ count: prevState.count + 1 }))
        // +3
        
          this.changeCount();
      }
      changeCount () {
        this.setState((prevState) => {
          return { count: prevState.count - 1}
        })
      }
      // vs
    //   changeCount () {
    //     this.setState({ count: prevState.count - 1});
    //   }

      handleDecrement () {
        this.setState({ count: this.state.count - 1});
      }
      static getDerivedStateFromProps(props, state) {
        return null;
      }

      componentDidMount() {
        //AJAX calls
      }
      
      shouldComponentUpdate(nextProps, nextState) {
        //return condition which defines component update  
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
        // The value returned is always passed down to the componentDidUpdate method.
      }

      componentDidUpdate(prevProps, prevState, snapshot) {
        //logic can be set up for actions on an updated DOM
      }

      componentWillUnmount(){
        //clean up logic
        window.removeEventListener("restart");
      }

      static getDerivedStateFromError(error){
        // If a child component of a parent component has an error we can use this method to display an error screen
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      componentDidCatch(error, info) {
        //logging errors
        console.log(info.componentStack);
      }

  render(){     
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
    }
    return (
      <h3>
        The value passed from parent is {this.props.value}
        <div>
            <p>{this.state.id}</p>
            <p>{this.state.name}</p>
            <p>{this.state.count}</p>
        </div>
        <div>    
            <button onClick={this.handleIncrement}>Increment by 1</button>
            <button onClick={this.handleDecrement}>Decrement by 1</button>
        </div>
      </h3>
    );
  }
}

function Child1 (props) {
  return <h3>The value passed from parent is {props.value}</h3>;
}
