import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  clearInputs = () => {
      this.setState({
         name: "",
         salary: ""
      })
  }

  onSendForm = (e) => {
    const {onSubmit} = this.props;
    const {name, salary} = this.state;
    if (name.length > 3 && salary !== '') {
      onSubmit(name, salary);
    } 
    this.clearInputs();
  }

  render() {
    
    const {name,salary} = this.state;
    return (
      <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label" 
          name="name" 
          value={name}
          placeholder="Как его зовут?" onChange={this.onValueChange}/>
        <input
          type="number"
          className="form-control new-post-label" 
          name="salary" 
          value={salary}
          placeholder="З/П в $?" onChange={this.onValueChange}/>
        <button type="submit" 
                className="btn btn-outline-light"
                onClick={(e) => {e.preventDefault(); this.onSendForm()}}>
          Добавить
        </button>
      </form>
    </div>
    )
  }
};

export default EmployeesAddForm;
