import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Ratings.module.css";

const Ratings = () => {
  const navigate = useNavigate();

  const onReserveButtonContainerClick = useCallback(() => {
    navigate("/restaurant-details");
  }, [navigate]);

  return (
    <div className={styles.ratings}>
      <div className={styles.review1Parent}>
        <div className={styles.review1}>
          <div className={styles.review1Child} />
          <div className={styles.rating}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.kristinjones}>@KRISTINJONES</div>
          <div className={styles.iWouldRecommend}>
            I would recommend this for all my friend!
          </div>
          <div className={styles.dayAgo}>1 DAY AGO</div>
          <div className={styles.roundAvatars60X60}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon2} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div1}>8</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review2}>
          <div className={styles.review1Child} />
          <div className={styles.rating1}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.cameronwilliam}>@cameronwilliam</div>
          <div className={styles.iLoveIt}>I love it so much</div>
          <div className={styles.daysAgo}>2 DAYs AGO</div>
          <div className={styles.roundAvatars60X61}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon2} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div1}>8</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review5}>
          <div className={styles.review5Child} />
          <div className={styles.rating2}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.johnwilson}>@JohnWilson</div>
          <div className={styles.dayAgo1}>1 DAY AGO</div>
          <div className={styles.roundAvatars35X35}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber2}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner4}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div4}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus2}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon10} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner5}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div5}>8</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review3}>
          <div className={styles.review1Child} />
          <div className={styles.rating}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.kristinjones}>@courtneyhenry</div>
          <div className={styles.iWouldRecommend}>It’s just good</div>
          <div className={styles.dayAgo}>1 DAY AGO</div>
          <div className={styles.roundAvatars60X60}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon2} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div1}>8</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review4}>
          <div className={styles.review1Child} />
          <div className={styles.rating4}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.kristinjones}>@jacobjones</div>
          <div className={styles.iWouldRecommend}>Great dishes.</div>
          <div className={styles.dayAgo}>1 DAY AGO</div>
          <div className={styles.roundAvatars60X611}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon2} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div1}>8</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.review11}>
          <div className={styles.review1Item} />
          <div className={styles.rating4}>
            <img className={styles.star2Icon} alt="" src="/star-2@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-3@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-4@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-5@2x.png" />
            <img className={styles.star2Icon} alt="" src="/star-6@2x.png" />
          </div>
          <div className={styles.kristinjones}>@eleanorpena</div>
          <div className={styles.iWouldRecommend}>A very good experience!</div>
          <div className={styles.dayAgo}>1 DAY AGO</div>
          <div className={styles.roundAvatars35X351}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <div className={styles.badgesnumber5}>
              <img className={styles.ovalIcon} alt="" src="/oval@2x.png" />
              <div className={styles.inner10}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div10}>8</div>
              </div>
            </div>
            <div className={styles.badgesstatus5}>
              <div className={styles.wrapperOval}>
                <img className={styles.ovalIcon2} alt="" src="/oval@2x.png" />
              </div>
              <div className={styles.inner}>
                <img className={styles.ovalIcon1} alt="" src="/oval@2x.png" />
                <div className={styles.div11}>8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b className={styles.reviews}>Reviews</b>
      <div className={styles.ratingsChild} />
      <div
        className={styles.reserveButton}
        onClick={onReserveButtonContainerClick}
      >
        <b className={styles.postReview}>Post review</b>
      </div>
      <div className={styles.star6Parent}>
        <img className={styles.star6Icon6} alt="" src="/star-6@2x.png" />
        <img className={styles.star7Icon} alt="" src="/star-7@2x.png" />
        <img className={styles.star6Icon7} alt="" src="/star-6@2x.png" />
        <img className={styles.star8Icon} alt="" src="/star-6@2x.png" />
        <img className={styles.star6Icon8} alt="" src="/star-6@2x.png" />
      </div>
      <div className={styles.writeAReview}>Write a review...</div>
      <div className={styles.ratingsItem} />
      <img className={styles.cameraIcon} alt="" src="/camera@2x.png" />
      <img className={styles.icon} alt="" src="/56299279-1@2x.png" />
      <img className={styles.icon1} alt="" src="/56299278-1@2x.png" />
    </div>
  );
};

export default Ratings;
