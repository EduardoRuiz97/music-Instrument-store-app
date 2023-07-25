import classes from './Banner.module.css';
import Image from 'next/image';


const Banner = (props) => {

  const item = props.item.filter(item => item.instrument === 'guitar' && item.type ==='electric' && item.discount === true).sort((a,b) => {
    const aPrice = Number(a['discount-percent']);
    const bPrice = Number(b['discount-percent']);

    return aPrice > bPrice;
  })[0];


  return (
    <div className={classes.banner}>
      <div className={classes.layer}>
        <div className={classes.container}>
          <Image src='/assets/guitarbanner-img.png' alt={item.model} width={300} height={200}></Image>
      
          <div className={classes.text}>
            <span>Guitar of the month</span>
            <h1>{item.model}</h1>
            <h2>{item.brand}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner