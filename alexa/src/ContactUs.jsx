import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import ProfileMenu from "../components/ProfileMenu";
import RandomizerPopup from "../components/RandomizerPopup";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const [isRandomizerPopupOpen, setRandomizerPopupOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isProfileMenu1Open, setProfileMenu1Open] = useState(false);
  const navigate = useNavigate();

  const onSignInContainerClick = useCallback(() => {
    navigate("/home-page-logged-in");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home-page-logged-in");
  }, [navigate]);

  const onDiscoverTextClick = useCallback(() => {
    navigate("/discover-page");
  }, [navigate]);

  const openRandomizerPopup = useCallback(() => {
    setRandomizerPopupOpen(true);
  }, []);

  const closeRandomizerPopup = useCallback(() => {
    setRandomizerPopupOpen(false);
  }, []);

  const onSearchContainerClick = useCallback(() => {
    navigate("/discover-page");
  }, [navigate]);

  const openProfileMenu = useCallback(() => {
    setProfileMenuOpen(true);
  }, []);

  const closeProfileMenu = useCallback(() => {
    setProfileMenuOpen(false);
  }, []);

  const openProfileMenu1 = useCallback(() => {
    setProfileMenu1Open(true);
  }, []);

  const closeProfileMenu1 = useCallback(() => {
    setProfileMenu1Open(false);
  }, []);

  return (
    <>
      <div className={styles.contactUs}>
        <div className={styles.loginForm}>
          <div className={styles.loginFormInner}>
            <div className={styles.groupChild} />
          </div>
          <div className={styles.loginTextParent}>
            <b className={styles.loginText}>Contact Us</b>
            <div className={styles.username}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.enterUsername} />
              </div>
              <div className={styles.firstname}>Firstname</div>
            </div>
            <div className={styles.username1}>
              <div className={styles.rectangleParent}>
                <div className={styles.instanceChild} />
                <div className={styles.enterUsername} />
              </div>
              <div className={styles.firstname}>Lastname</div>
            </div>
            <div
              className={styles.connectWithOur}
            >{`Connect with our team and let us assist you with any inquiries or assistance you need. We're here to support you every step of the way. `}</div>
            <div className={styles.signIn} onClick={onSignInContainerClick}>
              <div className={styles.signInChild} />
              <div className={styles.send}>Send</div>
            </div>
            <div className={styles.email}>
              <div className={styles.rectangleContainer}>
                <div className={styles.instanceChild} />
                <div className={styles.enterUsername2}>Enter Email</div>
              </div>
            </div>
            <div className={styles.groupDiv}>
              <div className={styles.instanceChild} />
              <div className={styles.enterUsername3} />
            </div>
            <div className={styles.whatCanWe}>What can we help you with?</div>
          </div>
        </div>
        <img
          className={styles.foodPromos1}
          alt=""
          src="/food-promos-1@2x.png"
        />
        <div className={styles.navbar}>
          <img
            className={styles.navbarChild}
            alt=""
            src="/rectangle-7@2x.png"
          />
          <b className={styles.home} onClick={onHomeTextClick}>
            Home
          </b>
          <b className={styles.discover} onClick={onDiscoverTextClick}>
            Discover
          </b>
          <b className={styles.randomizer} onClick={openRandomizerPopup}>
            Randomizer
          </b>
          <div className={styles.search} onClick={onSearchContainerClick}>
            <div className={styles.wrapperSpan}>
              <img className={styles.spanIcon} alt="" src="/span@2x.png" />
            </div>
            <div className={styles.input}>
              <div className={styles.divplaceholder}>
                <div className={styles.locationRestaurantFood}>
                  Location, Restaurant, Food...
                </div>
              </div>
            </div>
          </div>
          <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
          <div className={styles.location}>
            <div className={styles.spanvuzv6} />
            <div className={styles.cebuCityPhilippines}>
              Cebu City, Philippines
            </div>
            <div className={styles.divselectorIcon} />
            <img className={styles.imgIcon} alt="" src="/img@2x.png" />
            <div className={styles.span1shxr}>
              <div className={styles.img} />
            </div>
            <div className={styles.wrapperImg}>
              <img className={styles.imgIcon1} alt="" src="/img@2x.png" />
            </div>
          </div>
          <div className={styles.component1} onClick={openProfileMenu}>
            <div className={styles.component1Child} />
            <img
              className={styles.foodPromos71}
              alt=""
              src="/food-promos-7-1@2x.png"
            />
            <img
              className={styles.component1Item}
              alt=""
              src="/polygon-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.component11} onClick={openProfileMenu1}>
          <div className={styles.component1Child} />
          <img
            className={styles.foodPromos71}
            alt=""
            src="/food-promos-7-1@2x.png"
          />
          <img className={styles.polygonIcon} alt="" src="/polygon-1@2x.png" />
        </div>
        <div className={styles.redRectangleFooter}>
          <div className={styles.redRectangleFooterChild} />
          <div className={styles.dineoutParent}>
            <b className={styles.dineout}>DineOut</b>
            <b className={styles.copyright2023}>
              Copyright © 2023 DineOut, Inc
            </b>
          </div>
        </div>
        <div className={styles.m010t0534GChatIcon18sep22} />
      </div>
      {isRandomizerPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeRandomizerPopup}
        >
          <RandomizerPopup onClose={closeRandomizerPopup} />
        </PortalPopup>
      )}
      {isProfileMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileMenu}
        >
          <ProfileMenu onClose={closeProfileMenu} />
        </PortalPopup>
      )}
      {isProfileMenu1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProfileMenu1}
        >
          <ProfileMenu onClose={closeProfileMenu1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContactUs;
