import React from "react"


const PizzaForm = (props) => {

  return(
      <div className="form-row">
        
        <div className="col-5">
            <input
              id="topping"
              type="text"
              className="form-control"
              placeholder="Pizza Topping"
              value={props.topping}
              onChange={props.editForm}
            />
        </div>

        <div className="col">
          <select id="size" value={props.size} className="form-control" onChange={props.editForm}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="col">
          <div className="form-check">
            <input
              id="vegetarian"
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={props.vegetarian ? true : false}
              onChange={props.editForm}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>

          <div className="form-check">
            <input
              id="vegetarian"
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={props.vegetarian ? false: true}
              onChange={props.editForm}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>

        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.updatePizza}>Submit</button>
        </div>

      </div>
  )

}
export default PizzaForm