import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state={
    pizzas: [],
    id: "",
    topping: "", 
    size: "",
    vegetarian: ""
  }

  componentDidMount(){
    this.getPizzas()
  }

  getPizzas = () => {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(pizzas => {this.setState({pizzas})})
  }

  editPizza = (props) => {
    this.setState({
      id: props.id,
      topping: props.topping,
      size: props.size,
      vegetarian: props.vegetarian
    })
  }

  editForm = (e) => {
    if(e.target.id === "topping" || e.target.id === "size"){
      this.setState({
        [e.target.id]:e.target.value
      })
    } else if (e.target.id === "vegetarian"){
      this.setState(lastState => ({
        vegetarian: !lastState.vegetarian
      }))
    }
  }

  updatePizza = () => {
    let pizzaData = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }
    fetch(`http://localhost:3001/pizzas/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json",
        "Accept": "Application/json"
      },
      body: JSON.stringify(pizzaData)
    })
    .then(res => res.json())
    .then(updatedPizza => {
      let prevPizzasArr = [...this.state.pizzas]
      let newPizzasArr = prevPizzasArr.map(prevPizza => prevPizza.id === updatedPizza.id ? updatedPizza : prevPizza)
      this.setState({
        pizzas: newPizzasArr,
        id: "",
        topping: "",
        size: "",
        vegetarian: ""
      })
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          topping={this.state.topping}
          size={this.state.size}
          vegetarian={this.state.vegetarian}
          editForm={this.editForm}
          updatePizza={this.updatePizza}

        />
        <PizzaList
          pizzas={this.state.pizzas}
          editPizza={this.editPizza}
        />
      </Fragment>
    );
  }
}

export default App;
