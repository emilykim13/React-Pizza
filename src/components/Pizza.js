import React from "react"

const Pizza = (props) => {

  const clickHandler = () => {
    props.editPizza(props)
  }

  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No" }</td>
      <td><button 
            type="button" 
            className="btn btn-primary"
            onClick={clickHandler}
          >
          Edit Pizza
          </button></td>
    </tr>
  )
}

export default Pizza
