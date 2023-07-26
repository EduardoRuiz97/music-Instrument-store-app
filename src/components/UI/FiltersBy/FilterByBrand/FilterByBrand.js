import classes from '../FilterBy.module.css';

const FilterByBrand = (props) => {

  const brand = props.brand?.map(item => {
    let brand = item.brand;
    let array = [];
    array.push(brand);
    return brand;
  });

  const noRepeatBrand = [...new Set(brand)];

  const changeHandler = (event) => {
    props.selected({type: 'brand', value: event.target.value});
  }

  return (
    <ul onChange={changeHandler} className={props.isOpen ? `${classes.menu} ${classes.open}`: classes.menu}>

      {noRepeatBrand.map(item => <li key={item}>
        <input type='radio' value={item} id={item} name='filter'></input>
        <label htmlFor={item}>{item}</label>
      </li>)}

    </ul>
  )
};

export default FilterByBrand;