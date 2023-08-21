import Form from "./Form/Form";
import classes from './Footer.module.css';
import Options from "./Options/Options";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className={classes.footer}>

      <div className={classes.container}>

        <div className={classes.text}>

          <div className={classes.box}>
          <Image src={'/assets/logo-instrument-music-app-2.png'} alt='melody mart logo' className={classes.logo} width={200} height={200}></Image>
          </div>

          <div className={classes.box}>
            <p>Have a question? Call us any time!</p>
            <span>437 255 2550</span>
          </div>

          <div className={classes.box}>
            <p>Write to us! We're here for you 24/7!</p>
            <span>email.example@email.com</span>
          </div>

          <Form />

        </div>

        <div>
          <Options />
        </div>
      </div>

    </footer>
  )
};

export default Footer;