class Button extends React.Component {
    handleClick = () => { // Ahora va a App para que tenga acceso
          this.props.onClickFunction(this.props.incrementValue)
    };
    
    render() {
        return ( //OJO ESTÁ EN EL PROPS Y SE VA A LLAMAR A LA FUNCION QUE HAY EN EL IGUAL DE ABAJO
              <button onClick={this.handleClick}>
            + {this.props.incrementValue}
        </button>  
        )
    }
  }
  
  // Este es un componente funcion
  const Result = (props) => {
      return ( //OJO EL PROPS OTRA VEZ!! SE HA PASADO LAS PROPIEDADES AL DEFINIR EL ELEMENTO EN LA LINEA 40
        <div>{props.counter}</div> 
    );
  };
  
  class App extends React.Component {
      state = { counter: 0 }
    
    incrementCounter = (incrementValue) => {
     this.setState((prevState) => ({
             counter: prevState.counter +incrementValue
     }))
    }
    
      render() {
        return (
          <div>
         <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
         <Button incrementValue={2} onClickFunction={this.incrementCounter}/>
         <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
         <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
         <Result counter={this.state.counter}/>
            </div>
      );
    }
  }
  
  
  
  
  ReactDOM.render(<App />, mountNode);