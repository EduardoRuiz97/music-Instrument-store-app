import Link from 'next/link';
import classes from './Options.module.css';

const Options = () => {
  return (
    <ul className={classes.list}>

      <li className={classes.item}>
        Quick Links
        <ul>
          <li>
            <Link href={'/'} className='links'>About us</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Afilliate</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Careers</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Contact</Link>
          </li>
        </ul>
      </li>

      <li className={classes.item}>
        Company
        <ul>
          <li>
            <Link href={'/'} className='links'>Order Tracking</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Customer service</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Returns</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Product support</Link>
          </li>
        </ul>
      </li>

      <li className={classes.item}>
        Shop
        <ul>
          <li>
            <Link href={'/'} className='links'>new arrivals</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Instruments</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Best sellers</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Sale</Link>
          </li>
        </ul>
      </li>

      <li className={classes.item}>
        Customer Care
        <ul>
          <li>
            <Link href={'/'} className='links'>Policy</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Terms & conditions</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>Shipping</Link>
          </li>
          <li>
            <Link href={'/'} className='links'>FAQS</Link>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default Options;