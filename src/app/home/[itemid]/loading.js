import Spinner from '@/components/UI/Spinner/Spinner';
import classes from '../../../styles/loading.module.css';

export default function Loading () {

  return (

    <div className={classes.loading}>
      <h1>Loading instrument details...</h1>
      <Spinner />
    </div>
  )
}