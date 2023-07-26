import classes from '../FilterBy.module.css';

const FilterByPrice = (props) => {
  
  const range =[
    {min: 0, max: 500},
    {min: 500, max: 1000},
    {min: 1000, max: 5000},
    {min: 5000, max: 10000},
    {min: 10000, max: 30000},
  ]

  const changeHandler = (event) => {
    props.selected({type: 'price', value: range[event.target.value]}, event.target.checked);
  }
  
  return (
    <ul onChange={changeHandler} className={props.isOpen ? `${classes.menu} ${classes.open}`: classes.menu}>
      {range.map((item, index) => 
      <li key={index}>
        <input type='radio' value={index} id={`item${index}`} name='filter'></input>
        <label htmlFor={`item${index}`}>{`${item.min} - ${item.max}`}</label>
      </li>
      )}
    </ul>
  )
};


export default FilterByPrice;