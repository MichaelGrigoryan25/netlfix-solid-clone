import "./Nav.css";
import { createState, createComputed } from "solid-js";

function Nav() {
  const [state, handleShow] = createState({ show: false });

  createComputed(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow({ show: true });
      } else {
        handleShow({ show: false });
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  });

  return (
    <div className={`nav ${state.show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://nativeadvertisinginstitute.com/wp-content/uploads/2015/03/Netflix_Logo_Digital-Video.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
