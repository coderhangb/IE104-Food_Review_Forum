import { Link } from "react-router-dom";
import { ArrowRight, PenLine, Sparkles } from "lucide-react";
import RatingStars from "../../components/RatingStars/RatingStars";
import styles from "./HomePage.module.css";
import heroFood from "../../assets/img/hero-food.jpg";
import avatarMinhAnh from "../../assets/img/avatar-minh-anh.jpg";
import avatarNgocTran from "../../assets/img/avatar-ngoc-tran.jpg";

export default function HomePage() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img
        className={styles.background}
        src={heroFood}
        alt=""
        aria-hidden="true"
      />
      <span className={styles.overlay} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <Sparkles size={14} aria-hidden="true" />
            Diễn đàn review quán ăn
          </span>

          <h1 className={styles.title} id="hero-title">
            Mỗi bữa ăn,
            <br />
            <em>một câu chuyện.</em>
          </h1>

          <p className={styles.description}>
            Nơi những người mê ăn kể lại trải nghiệm thật — từ quán vỉa hè quen
            thuộc đến bàn tiệc đáng nhớ. Tìm quán hợp gu, lưu lại và rủ bạn cùng
            đi.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/feed">
              Khám phá món ăn
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.secondaryButton} to="/create">
              <PenLine size={16} aria-hidden="true" />
              Viết review của bạn
            </Link>
          </div>

          <dl className={styles.stats}>
            <div>
              <dt>Review thật</dt>
              <dd>1.200+</dd>
            </div>
            <div>
              <dt>Quán đã thử</dt>
              <dd>350+</dd>
            </div>
            <div>
              <dt>Tỉnh thành</dt>
              <dd>18</dd>
            </div>
          </dl>
        </div>

        <aside className={styles.featuredCard} aria-label="Review nổi bật">
          <span className={styles.featuredLabel}>
            <Sparkles size={12} aria-hidden="true" />
            Được yêu thích tuần này
          </span>

          <div className={styles.scoreLine}>
            <strong>4.8</strong>
            <span>
              <RatingStars value={4.8} size="md" />
              <small>từ 1.284 foodie</small>
            </span>
          </div>

          <p className={styles.quote}>
            “Miếng chả nướng xém cạnh, nước chấm chua ngọt vừa vặn — bữa trưa
            khiến mình nhớ mãi.”
          </p>

          <div className={styles.cardFooter}>
            <span className={styles.avatars}>
              <img src={avatarMinhAnh} alt="" width="30" height="30" />
              <img src={avatarNgocTran} alt="" width="30" height="30" />
              <span>+1.2k</span>
            </span>
            <Link to="/review" className={styles.readMore}>
              Đọc review
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </aside>
      </div>

      <span className={styles.sideNote} aria-hidden="true">
        Hà Nội · Sài Gòn · Đà Nẵng
      </span>
    </section>
  );
}
