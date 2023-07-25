"use client"
import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";
import classes from './NavBar.module.css';
import { useDispatch } from "react-redux";
import { signInActions } from "../../store/signIn-slice/sing-slice";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";


const NavBar = () => {

const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

// const logInStatus = localStorage.getItem('isSignIn');
// const dispatch = useDispatch();

const logOutHandler = () => {
  const proceed = window.confirm('Are you sure?');

  if (proceed) {
    dispatch(signInActions.logOut());
    window.location.reload();
  }
}


// let logStatus;

// if (logInStatus) {
//   logStatus = <div onClick={logOutHandler} className={classes.logCont}>
//     <RxAvatar className={classes.icon}/>
//     <button className={classes.logOut}>
//       Log Out
//     </button>
//   </div>
// } else {
//   logStatus = 
//     <div className={classes.logCont}>
//       <Link className='links' to={'sign-in'}>
//         <BsPersonFill className={classes.icon}/>
//       </Link>
//       <span>
//         Sign in
//       </span>
//     </div>
// };


const openMenuModal = () => {
  setIsMenuModalOpen(true);
}

const closeMenuModal = () => {
  setIsMenuModalOpen(false);
}


  return (
    <nav className={classes.nav}>

      <Link href={'/'} className='links'>

      <Image src={'/assets/logoPage.png'} alt='melody mart logo' className={classes.logo} width={100} height={100}></Image>

      </Link>


      <div className={isMenuModalOpen? `${classes.menuModal} ${classes.open}` : classes.menuModal }>
        <ul>
          <li>
            <Link href='/new-arrivals' className={classes.link}>New Arrivals</Link>
          </li>

          <li>
            <Link href='/best-sellings' className={classes.link}>Best-sellings</Link>
          </li>

          <li>
            <Link href='/best-deals' className={classes.link}>Best deals</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Lessons</Link>
          </li>

          <li>
            <Link href='/' className={classes.link}>Contact</Link>
          </li>


          <li className={classes.logCont}>
            {/* {logStatus} */}
          </li>
        </ul>

        <AiFillCloseCircle className={classes.close} onClick={closeMenuModal}/>

      </div>
  


      <BiMenu className={classes.menu} onClick={openMenuModal}/>

    </nav>
  )
}

export default NavBar;