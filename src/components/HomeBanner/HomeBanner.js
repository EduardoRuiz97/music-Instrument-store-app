import Link from "next/link";
import Button from "../UI/Button/Button";
import classes from './HomeBanner.module.css';

const HomeBanner = () => {


  return (
    <>
      <section className={classes.section}>
        <div className={classes.banner}>
          <div className={classes.text}>
            <span>Melody Mart</span>
            <h1>Unleash your inner musician with us</h1>
            <p>Instruments, equipment & supplies from <strong>$50.00</strong></p>
            <Link className="links" href='/instrument-list/guitar'>
              <Button>
                Shop now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
};

export default HomeBanner;