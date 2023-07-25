import classes from './Promos.module.css';
import Button from '../../UI/Button/Button';
import Link from 'next/link';

const Promos = () => {
  return (
    <div className={classes.container}>
      
      <div className={`${classes.promo} ${classes['promo-a']}`}>

        <div className={classes.layer}>
          <span>Starting from $19.00</span>
          <h1>Big Sale Has Started</h1>
          <p>Get your discount until 30th May, 2021. HURRY UP!</p>
          <Button>
            <Link className='links' href='/'>Shop now</Link>
          </Button>
        </div>


      </div>


      <div className={`${classes.promo} ${classes['promo-b']}`}>

        <div className={classes.layer}>
          <span>Starting from $19.00</span>
          <h1>Big Sale Has Started</h1>
          <p>Get your discount until 30th May, 2021. HURRY UP!</p>
          <Button>
            <Link className='links' href='/'>Shop now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Promos;