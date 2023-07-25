import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Layout(props) {
  return (
    <>
      <NavBar />
        {props.children}
      <Footer />
    </>
  )
}  