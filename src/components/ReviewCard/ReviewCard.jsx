import { Link } from 'react-router-dom';
import { Bookmark, Flame, Heart, MapPin, MessageCircle } from 'lucide-react';
import RatingStars from '../RatingStars/RatingStars';
import styles from './ReviewCard.module.css';

/**
 * Card món ăn dùng chung cho Feed và Profile.
 */

export default function ReviewCard({
  image,
  alt,
  cuisine,
  title,
  excerpt,
  restaurant,
  area,
  price,
  rating,
  tags = [],
  author,
  avatar,
  time,
  likes,
  comments,
  isHot = false,
}) {
  return (
    <article className={styles.card}>
      <Link
        to="/review"
        className={styles.link}
        aria-label={`Xem review: ${title}`}
      >
        <div className={styles.media}>
          <img
            src={image}
            alt={alt || `Món ăn tại ${restaurant}`}
            loading="lazy"
          />
          <span className={styles.mediaOverlay} aria-hidden="true" />

          <span className={styles.badgeGroup}>
            {isHot && (
              <span className={`${styles.badge} ${styles.hotBadge}`}>
                <Flame size={12} aria-hidden="true" />
                Hot
              </span>
            )}
            <span className={styles.badge}>{cuisine}</span>
          </span>

          <span className={styles.bookmark} aria-hidden="true">
            <Bookmark size={16} />
          </span>

          {price && <span className={styles.price}>{price}</span>}
        </div>

        <div className={styles.body}>
          <span className={styles.location}>
            <MapPin size={13} aria-hidden="true" />
            {area}
          </span>

          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>

          <ul className={styles.tags} aria-label="Thẻ món ăn">
            {tags.slice(0, 3).map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className={styles.ratingRow}>
            <strong>{rating.toFixed(1)}</strong>
            <RatingStars value={rating} size="sm" />
            <span>{restaurant}</span>
          </div>

          <div className={styles.footer}>
            <span className={styles.author}>
              <img src={avatar} alt="" width="28" height="28" loading="lazy" />
              <span>
                <strong>{author}</strong>
                <small>{time}</small>
              </span>
            </span>

            <span className={styles.actions}>
              <span>
                <Heart size={14} aria-hidden="true" />
                {likes}
              </span>
              <span>
                <MessageCircle size={14} aria-hidden="true" />
                {comments}
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
