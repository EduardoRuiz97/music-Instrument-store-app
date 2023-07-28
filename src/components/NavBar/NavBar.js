"use client"
import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";
import classes from './NavBar.module.css';
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector} from "react-redux";
import { RxAvatar } from "react-icons/rx";
import { loggedInActions } from "@/redux/features/autentication";
import { useRouter } from "next/navigation";


const NavBar = () => {

const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
const router = useRouter();

const dispatch = useDispatch();
const logInStatus = useSelector(state => state.logged.isLoggedIn)


const logOutHandler = () => {
  dispatch(loggedInActions.logOut());
  router.refresh()
};


let logStatus;

if (logInStatus) {
  logStatus = <div className={classes.logCont} onClick={logOutHandler}>
    <RxAvatar className={classes.icon}/>
    <button className={classes.logOut}>
      Log Out
    </button>
  </div>
} else {
  logStatus = 
    <div className={classes.logCont}>
      <Link className='links' href={'/login'}>
        <BsPersonFill className={classes.icon}/>
      </Link>
      <span>
        Sign in
      </span>
    </div>
};


const openMenuModal = () => {
  setIsMenuModalOpen(true);
}

const closeMenuModal = () => {
  setIsMenuModalOpen(false);
}


  return (
    <nav className={classes.nav}>

      <Link href={'/home'} className='links'>

      <Image src={'/assets/logoPage.png'} alt='melody mart logo' className={classes.logo} width={100} height={100}></Image>

      </Link>


      <div className={isMenuModalOpen? `${classes.menuModal} ${classes.open}` : classes.menuModal }>
        <ul>
          <li>
            <Link href='/' className={classes.link}>New Arrivals</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Best-sellings</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Best deals</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Lessons</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Contact</Link>
          </li>


          <li className={classes.logCont}>
            {logStatus}
          </li>
        </ul>

        <AiFillCloseCircle className={classes.close} onClick={closeMenuModal}/>

      </div>
  


      <BiMenu className={classes.menu} onClick={openMenuModal}/>

    </nav>
  )
}

export default NavBar;