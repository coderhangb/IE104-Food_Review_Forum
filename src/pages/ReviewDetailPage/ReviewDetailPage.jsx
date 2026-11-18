import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Bookmark,
  Clock,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Star,
  UserPlus,
  Wallet,
} from 'lucide-react';
import avatarHaiNam from '../../assets/img/avatar-hai-nam.jpg';
import avatarMaiChi from '../../assets/img/avatar-mai-chi.jpg';
import avatarMinhAnh from '../../assets/img/avatar-minh-anh.jpg';
import avatarNgocTran from '../../assets/img/avatar-ngoc-tran.jpg';
import bunChaImage from '../../assets/img/bun-cha.jpg';
import heroFoodImage from '../../assets/img/hero-food.jpg';
import restaurantImage from '../../assets/img/restaurant.jpg';
import RatingStars from '../../components/RatingStars/RatingStars';
import styles from './ReviewDetailPage.module.css';

const ratingCriteria = [
  { label: 'Vị giác', value: 4.8 },
  { label: 'Không gian', value: 4.2 },
  { label: 'Phục vụ', value: 4.3 },
  { label: 'Giá cả', value: 4.5 },
];

const comments = [
  {
    id: 1,
    name: 'Mai Chi',
    badge: 'Thành viên tích cực',
    avatar: avatarMaiChi,
    time: '2 ngày trước',
    content:
      'Mình đi hôm cuối tuần, xếp hàng 20 phút nhưng bún chả lên nhanh. Nhất định phải gọi thêm nem cua bể!',
    likes: 24,
  },
  {
    id: 2,
    name: 'Hải Nam',
    badge: 'Foodie mới',
    avatar: avatarHaiNam,
    time: '2 ngày trước',
    content:
      'Nước chấm ở đây hơi ngọt với khẩu vị miền Nam, nhưng chả nướng thơm thật. 8/10.',
    likes: 11,
  },
  {
    id: 3,
    name: 'Ngọc Trân',
    badge: 'Thành viên tích cực',
    avatar: avatarNgocTran,
    time: '3 ngày trước',
    content:
      'Lưu ngay vào danh sách phải ăn khi ra Hà Nội. Cảm ơn bài review rất chi tiết!',
    likes: 4,
  },
];

/**
 * Trang chi tiết tĩnh duy nhất.
 * Mọi card ở Feed đều trỏ về đây; không đọc id, không context.
 */
export default function ReviewDetailPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/feed" className={styles.backLink}>
            <ArrowLeft size={15} aria-hidden="true" />
            Quay lại Feed
          </Link>
          <span aria-hidden="true">/</span>
          <span>Hà Nội</span>
          <span aria-hidden="true">/</span>
          <span>Món Việt</span>
        </nav>

        <header className={styles.header}>
          <div className={styles.tagRow}>
            <span className={styles.trendingTag}>
              <Flame size={12} aria-hidden="true" />
              Đang hot
            </span>
            <span className={styles.tag}>Món Việt</span>
            <span className={styles.tag}>Đồ nướng</span>
          </div>

          <h1 className={styles.title}>
            Bún chả Hương Liên: hương khói than hoa giữa lòng Hà Nội
          </h1>
          <p className={styles.excerpt}>
            Chả nướng than hoa xém cạnh, nước chấm chua ngọt vừa vặn — suất bún
            chả 120k khiến mình nhớ mãi.
          </p>

          <p className={styles.restaurantLine}>
            <MapPin size={15} aria-hidden="true" />
            <strong>Bún chả Hương Liên</strong>
            <span>Hai Bà Trưng, Hà Nội</span>
          </p>

          <div className={styles.byline}>
            <span className={styles.authorInline}>
              <img src={avatarMinhAnh} alt="" width="42" height="42" />
              <span>
                <strong>Minh Anh</strong>
                <small>4 tháng 11, 2026 · 5 phút đọc</small>
              </span>
            </span>

            <span className={styles.headerActions}>
              <span className={`${styles.actionButton} ${styles.actionActive}`}>
                <Heart size={15} fill="currentColor" aria-hidden="true" />
                428
              </span>
              <span className={styles.actionButton}>
                <Bookmark size={15} aria-hidden="true" />
                Đã lưu
              </span>
            </span>
          </div>
        </header>

        <div className={styles.gallery}>
          <figure className={styles.galleryMain}>
            <img src={bunChaImage} alt="Chả nướng than hoa tại Bún chả Hương Liên" />
            <figcaption>Chả nướng than hoa xém cạnh, thơm mùi sả</figcaption>
          </figure>
          <figure className={styles.gallerySide}>
            <img src={restaurantImage} alt="Không gian quán Bún chả Hương Liên" />
            <figcaption>Không gian quán đông khách nhưng thoáng</figcaption>
          </figure>
          <figure className={styles.gallerySide}>
            <img src={heroFoodImage} alt="Mâm thức ăn tại quán" />
            <figcaption>Mâm bún chả đầy đặn cho hai người</figcaption>
          </figure>
        </div>

        <div className={styles.layout}>
          <div className={styles.mainColumn}>
            <article className={styles.article}>
              <div className={styles.articleHeading}>
                <span className="eyebrow">Câu chuyện bữa ăn</span>
                <h2>Review chi tiết</h2>
              </div>

              <div className={styles.story}>
                <p>
                  Mình ghé Bún chả Hương Liên vào một trưa thứ Bảy, khi cơn mưa
                  Hà Nội vừa tạnh. Quán nằm trên phố Lê Văn Hưu, không quá hào
                  nhoáng nhưng mùi than hoa từ bếp cuốn ra tận cửa khiến bước
                  chân tự chậm lại.
                </p>
                <blockquote>
                  “Chả nướng than hoa xém cạnh, nước chấm chua ngọt vừa vặn —
                  suất bún chả 120k khiến mình nhớ mãi.”
                </blockquote>
                <p>
                  Suất bún chả đầy đặn: bún sợi mảnh, chả viên và chả miếng
                  nướng xém cạnh, thơm mùi sả và mật ong. Nước chấm là điểm ăn
                  tiền — chua thanh, ngọt dịu, đủ vị đu đủ và cà rốt giòn. Mình
                  gọi thêm nem cua bể, vỏ giòn rụm, nhân cua thơm phức.
                </p>
                <p>
                  Không gian quán khá đông, bàn kê sát nhau nên nếu đi nhóm đông
                  bạn nên đến sớm. Nhân viên nhanh nhẹn, bún ra trong khoảng 10
                  phút. Mức giá 120.000đ cho hai người là hợp lý cho một quán
                  nổi tiếng giữa trung tâm.
                </p>
                <p>
                  Điểm trừ duy nhất là quán hơi ồn và nhà vệ sinh cần được chăm
                  chút hơn. Nhưng với chất lượng chả nướng, mình vẫn sẽ quay lại
                  — nhất là vào một buổi trưa se lạnh.
                </p>
              </div>

              <div className={styles.articleBottom}>
                <ul className={styles.articleTags} aria-label="Thẻ bài viết">
                  <li>Bún chả</li>
                  <li>Đồ nướng</li>
                  <li>Đặc sản Hà Nội</li>
                  <li>Quán lâu năm</li>
                </ul>

                <div className={styles.helpfulRow}>
                  <span>Bạn thấy review này hữu ích?</span>
                  <span className={styles.helpfulButton}>
                    <Heart size={14} aria-hidden="true" />
                    Hữu ích · 428
                  </span>
                  <span className={styles.helpfulButton}>
                    <Bookmark size={14} aria-hidden="true" />
                    Lưu quán
                  </span>
                </div>
              </div>
            </article>

            <section
              className={styles.commentsSection}
              id="comments"
              aria-labelledby="comments-title"
            >
              <div className={styles.commentsHead}>
                <div>
                  <span className="eyebrow">
                    <MessageCircle size={13} aria-hidden="true" />
                    Cùng bàn luận
                  </span>
                  <h2 id="comments-title">
                    Thảo luận <span>(3)</span>
                  </h2>
                </div>
                <p>Bình luận mẫu — giao diện tĩnh.</p>
              </div>

              <div className={styles.commentList}>
                {comments.map((comment) => (
                  <article key={comment.id} className={styles.comment}>
                    <img
                      className={styles.commentAvatar}
                      src={comment.avatar}
                      alt=""
                      width="40"
                      height="40"
                    />
                    <div className={styles.commentBody}>
                      <div className={styles.commentBubble}>
                        <div className={styles.commentTop}>
                          <strong>{comment.name}</strong>
                          <span>{comment.badge}</span>
                          <small>{comment.time}</small>
                        </div>
                        <p>{comment.content}</p>
                      </div>
                      <div className={styles.commentActions}>
                        <span>
                          <Heart size={13} aria-hidden="true" />
                          Thích · {comment.likes}
                        </span>
                        <span>Trả lời</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <p className={styles.commentPrompt}>
                Đăng nhập để tham gia thảo luận cùng cộng đồng Măm Măm.
              </p>
            </section>
          </div>

          <aside className={styles.sidebar} aria-label="Thông tin quán và đánh giá">
            <section className={styles.scoreCard} aria-labelledby="score-title">
              <div className={styles.scoreTop}>
                <div>
                  <span className={styles.cardKicker} id="score-title">
                    Điểm tổng
                  </span>
                  <div className={styles.bigScore}>
                    4.5<small>/5</small>
                  </div>
                  <RatingStars value={4.5} size="sm" />
                  <p className={styles.ratingCount}>326 lượt đánh giá</p>
                </div>
                <span className={styles.scoreBadge}>
                  <Star size={12} fill="currentColor" aria-hidden="true" />
                  Xuất sắc
                </span>
              </div>

              <div className={styles.criteriaList}>
                {ratingCriteria.map((criterion) => (
                  <div key={criterion.label} className={styles.criteriaRow}>
                    <div className={styles.criteriaHead}>
                      <span>{criterion.label}</span>
                      <strong>{criterion.value.toFixed(1)}</strong>
                    </div>
                    <div className={styles.criteriaBar}>
                      <span
                        style={{ width: `${(criterion.value / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.infoCard} aria-labelledby="info-title">
              <span className={styles.cardKicker} id="info-title">
                Thông tin quán
              </span>
              <h2 className={styles.infoName}>Bún chả Hương Liên</h2>

              <ul className={styles.infoList}>
                <li>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>Địa chỉ</span>
                    <p>35 Lê Văn Hưu, Phạm Đình Hổ, Hai Bà Trưng, Hà Nội</p>
                  </div>
                </li>
                <li>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <Clock size={16} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>Giờ mở cửa</span>
                    <p>
                      10:30 – 21:00 <em className={styles.openStatus}>Đang mở cửa</em>
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <Wallet size={16} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>Giá tham khảo</span>
                    <p>60.000đ – 150.000đ / người</p>
                  </div>
                </li>
                <li>
                  <span className={styles.infoIcon} aria-hidden="true">
                    <Phone size={16} />
                  </span>
                  <div>
                    <span className={styles.infoLabel}>Điện thoại</span>
                    <p>024 3943 4106</p>
                  </div>
                </li>
              </ul>

              <span className={styles.directionButton}>
                <Navigation size={15} aria-hidden="true" />
                Chỉ đường trên Google Maps
              </span>
            </section>

            <section className={styles.authorCard} aria-labelledby="author-title">
              <span className={styles.cardKicker} id="author-title">
                Người viết
              </span>
              <div className={styles.authorCardHead}>
                <img src={avatarMinhAnh} alt="" width="56" height="56" />
                <div>
                  <strong>Minh Anh</strong>
                  <span>Chuyên gia ẩm thực</span>
                </div>
              </div>
              <p className={styles.authorBio}>
                Đi tìm những bữa ăn khiến người ta nhớ lâu hơn cả món ăn.
              </p>
              <div className={styles.authorStats}>
                <span>
                  <strong>1</strong> bài review
                </span>
                <span>
                  <strong>428</strong> lượt thích
                </span>
              </div>
              <span className={styles.followButton}>
                <UserPlus size={15} aria-hidden="true" />
                Theo dõi tác giả
              </span>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}