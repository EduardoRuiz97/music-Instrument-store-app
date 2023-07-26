const Item = (props) => {

  const clickHandler = () => {
    props.onSelected(props.data)
  }


  return (
    <li onClick={clickHandler}>
      {props.data}
    </li>
  )
};

export default Item;