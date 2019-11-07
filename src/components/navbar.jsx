import React from "react";
import logodark from "./logo-dark.png";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import SignOutButton from "./signout";
import { AuthUserContext } from "./session";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
import { SubscribeForm } from "./subscribe";

//stateless functional component

const NavBar = () => {
  const useStyles = makeStyles(theme => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #4864ad",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
      // top: "50%",
      // left: "50%",
      // transform: `translate(-50%, -50%)`
    }
  }));
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <div className={classes.paper}>
            <h3 id="simple-modal-title" className="h2 color-primary">
              Kita akan segera hadir!
            </h3>
            <p id="simple-modal-description">
              Yuk, jadi salah satu orang pertama untuk tau tentang peluncuran
              kita.
            </p>
            <SubscribeForm />
            {/* <form>
              <input
                type="text"
                name="email"
                className="mb0"
                placeholder="Tulis alamat email"
              />

              <button type="submit" className="mb0 btn">
                Kabari aku!
              </button>
            </form> */}
          </div>
        </Slide>
      </Modal>
      <nav className="mt-2 bg-transparent pr-3 pl-3 pr-sm-5 pl-sm-5 navbar navbar-expand-lg navbar-light">
        <Link to={ROUTES.LANDING} className="navbar-brand">
          <img
            src={logodark}
            className="responsive logo-nav"
            alt="Ceritain.id | Official logo"
          />
        </Link>

        <button
          className="navbar-toggler m-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav mt-2 mt-lg-0 menu-item-list">
            <li className="nav-item">
              <NavLink to={ROUTES.LANDING} exact className="nav-link ml-3">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={ROUTES.ABOUT} className="nav-link ml-3">
                Tentang Ceritain
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={ROUTES.FAQ} className="nav-link ml-3">
                FAQ
              </NavLink>
            </li>

            <AuthUserContext.Consumer>
              {authUser =>
                authUser ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <Link
                        className="btn ml-3 btn-filled btn-rounded nav-item"
                        to={ROUTES.HOME}
                      >
                        Home Page
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="btn ml-3 btn-filled btn-rounded nav-item"
                        to={ROUTES.ACCOUNT}
                      >
                        Account
                      </Link>
                    </li>
                    <li className="nav-item">
                      <SignOutButton />
                    </li>
                  </React.Fragment>
                ) : (
                  <li className="nav-item">
                    <button
                      className="btn ml-3 btn-filled btn-rounded nav-item "
                      onClick={handleOpen}
                    >
                      Mulai Ceritain
                    </button>
                    {/* <Link
                      className="btn ml-3 btn-filled btn-rounded nav-item"
                      to={ROUTES.SIGN_IN}
                    >
                      Mulai Ceritain
                    </Link> */}
                  </li>
                )
              }
            </AuthUserContext.Consumer>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
