import classes from './SignUpAdd.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const SignUpAdd = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p>
          <strong>Special rates for new clients.</strong> — Sign up to get <strong>15% off</strong> on your order!
        </p>
        <Button>
          <Link to='/create-account' className='links'>
            Create an account
          </Link>
        </Button>
      </div>
  </div>
  )
};

export default SignUpAdd;