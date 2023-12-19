import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PortalPopup from "../components/PortalPopup";
import ProfileMenu from "../components/ProfileMenu";
import RandomizerPopup from "../components/RandomizerPopup";
import styles from "./UserProfileProfile.module.css";

const UserProfileProfile = () => {
  const [isRandomizerPopupOpen, setRandomizerPopupOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/user-profile-profile-edit");
  }, [navigate]);

  const onRESTAURANTSVISITEDTextClick = useCallback(() => {
    navigate("/user-profile-restaurants-visited");
  }, [navigate]);

  const onREVIEWSMADETextClick = useCallback(() => {
    navigate("/user-profile-reviews-made");
  }, [navigate]);

  const onIcon1Click = useCallback(() => {
    navigate("/user-profile-reviews-made");
  }, [navigate]);

  const onDineOut62Click = useCallback(() => {
    navigate("/user-profile-restaurants-visited");
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

  return (
    <>
      <div className={styles.userProfileProfile}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <b className={styles.save}>Edit</b>
        </div>
        <div className={styles.userProfileProfileChild} />
        <div className={styles.userProfileProfileItem} />
        <b className={styles.ellaineJoyce}>Ellaine Joyce</b>
        <b className={styles.profile}>PROFILE</b>
        <img className={styles.icon} alt="" src="/42-2@2x.png" />
        <div className={styles.userProfileProfileInner} />
        <div className={styles.lineDiv} />
        <div className={styles.profile1}>PROFILE</div>
        <div
          className={styles.restaurantsVisited}
          onClick={onRESTAURANTSVISITEDTextClick}
        >
          RESTAURANTS VISITED
        </div>
        <div className={styles.reviewsMade} onClick={onREVIEWSMADETextClick}>
          REVIEWS MADE
        </div>
        <div className={styles.username}>Username</div>
        <div className={styles.email}>Email</div>
        <div className={styles.password}>Password</div>
        <div className={styles.div}>*****</div>
        <div className={styles.ellainejoyceclarocitedu}>
          ellainejoyce.claro@cit.edu
        </div>
        <div className={styles.ellainejoyce}>ellainejoyce</div>
        <img className={styles.icon1} alt="" src="/46-2@2x.png" />
        <img
          className={styles.icon2}
          alt=""
          src="/48-4@2x.png"
          onClick={onIcon1Click}
        />
        <img
          className={styles.dineout62}
          alt=""
          src="/dineout-6-2@2x.png"
          onClick={onDineOut62Click}
        />
        <img className={styles.dineout35} alt="" src="/dineout-3-5@2x.png" />
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
    </>
  );
};

export default UserProfileProfile;
