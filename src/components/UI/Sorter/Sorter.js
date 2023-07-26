import sorterSelector from '@/sorterSelector';
import CustomSelect from '../customSelect/CustomSelect';

const options = [
  { value: 'brand', label: 'Brand name(A-Z)' },
  { value: 'high', label: 'Higher Price' },
  { value: 'low', label: 'Lower Price' },
  { value: 'best', label: 'Best Sellings' }
]

let sorted;

const Sorter = (props) => {

  const sorterHandler = (criteria) => {
    sorted = sorterSelector(criteria, props.data);
    props.onSorter(sorted);
  }


  return (
    <CustomSelect 
    options={options} 
    default='Sort By' 
    onOption={sorterHandler}
    />
  )
}

export default Sorter;