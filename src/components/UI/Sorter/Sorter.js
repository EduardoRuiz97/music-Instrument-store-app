import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'brand', label: 'Brand name(A-Z)' },
  { value: 'high', label: 'Higher Price' },
  { value: 'low', label: 'Lower Price' },
  { value: 'best', label: 'Best Sellings' }
]

const colorStyles =  {
  control: (styles) => ({...styles, fontWeight: '600', fontSize: '1em', width: '100%'}),

  option: (styles, {isSelected}) => {
    return {...styles, fontWeight: '500', color: isSelected ? 'white' : ' rgb(119, 119, 119)', backgroundColor: isSelected ? '#F8B803' : 'white'}
  }
};




const Sorter = (props) => {
  
  const sorterHandler = (event) => {
    props.onSorter(event.value);
  }

  return (
    <>
      <Select options={options} styles={colorStyles} onChange={sorterHandler}/>
    </>
  )
}

export default Sorter;