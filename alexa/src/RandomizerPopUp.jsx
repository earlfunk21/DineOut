import { useCallback, useState } from "react";
import PickedRestaurant from "./PickedRestaurant";
import PortalPopup from "./PortalPopup";
import styles from "./RandomizerPopup.module.css";

const RandomizerPopup = () => {
  const [isPickedRestaurantOpen, setPickedRestaurantOpen] = useState(false);

  const openPickedRestaurant = useCallback(() => {
    setPickedRestaurantOpen(true);
  }, []);

  const closePickedRestaurant = useCallback(() => {
    setPickedRestaurantOpen(false);
  }, []);

  return (
    <>
      <div className={styles.randomizerPopup}>
        <div className={styles.randomizerPopupInner}>
          <div className={styles.instanceChild} />
        </div>
        <img
          className={styles.foodPromos51}
          alt=""
          src="/food-promos-5-1@2x.png"
        />
        <div className={styles.registerParent} onClick={openPickedRestaurant}>
          <div className={styles.register} />
          <b className={styles.clickForA}>Click for a surpise</b>
        </div>
        <div className={styles.generateARandomContainer}>
          <span className={styles.generateARandomContainer1}>
            <p className={styles.generateARandom}>
              Generate a random restaurant
            </p>
            <p className={styles.generateARandom}> with our randomizer!</p>
          </span>
        </div>
        <b className={styles.stillCantDecideContainer}>
          <span className={styles.generateARandomContainer1}>
            <p className={styles.generateARandom}>{`Still can’t decide `}</p>
            <p className={styles.generateARandom}>{`where to eat? `}</p>
          </span>
        </b>
        <img
          className={styles.deleteButtonIcon}
          alt=""
          src="/delete-button@2x.png"
        />
      </div>
      {isPickedRestaurantOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePickedRestaurant}
        >
          <PickedRestaurant onClose={closePickedRestaurant} />
        </PortalPopup>
      )}
    </>
  );
};

export default RandomizerPopup;
