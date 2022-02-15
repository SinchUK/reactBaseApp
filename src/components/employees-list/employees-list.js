import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onValueChange}) => {
    
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id}
                id={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onValueChange={onValueChange}
                onToggleProp={(e)=> onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;