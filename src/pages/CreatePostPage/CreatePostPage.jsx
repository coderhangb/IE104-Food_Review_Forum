import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Check,
  ChevronDown,
  ImagePlus,
  MapPin,
  PenLine,
  ShieldCheck,
  Sparkles,
  Star,
  Trash2,
} from 'lucide-react';
import avatarNgocTran from '../../assets/img/avatar-ngoc-tran.jpg';
import bunChaImage from '../../assets/img/bun-cha.jpg';
import phoImage from '../../assets/img/pho.jpg';
import restaurantImage from '../../assets/img/restaurant.jpg';
import RatingStars from '../../components/RatingStars/RatingStars';
import styles from './CreatePostPage.module.css';

const tagOptions = [
  { label: 'Bún chả', selected: true },
  { label: 'Phở bò', selected: false },
  { label: 'Cơm tấm', selected: false },
  { label: 'Bánh mì', selected: false },
  { label: 'Pizza', selected: false },
  { label: 'Hải sản', selected: false },
  { label: 'Đồ nướng', selected: true },
  { label: 'Món chay', selected: false },
  { label: 'Tráng miệng', selected: false },
  { label: 'Cà phê', selected: false },
  { label: 'Ăn sáng', selected: false },
  { label: 'Hẹn hò', selected: false },
  { label: 'Gia đình', selected: false },
  { label: 'Quán lâu năm', selected: true },
  { label: 'View biển', selected: false },
];

const previewImages = [
  { src: bunChaImage, alt: 'Chả nướng than hoa', label: 'Ảnh bìa' },
  { src: phoImage, alt: 'Bát phở bò', label: 'Ảnh 2' },
  { src: restaurantImage, alt: 'Không gian quán', label: 'Ảnh 3' },
];

/**
 * Trang đăng bài tĩnh: form chỉ để trình diễn giao diện,
 * không có state, upload, validate hay submit.
 */
export default function CreatePostPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <Link to="/feed" className={styles.backLink}>
          <ArrowLeft size={15} aria-hidden="true" />
          Quay lại Feed
        </Link>

        <header className={styles.pageHeader}>
          <span className="eyebrow">
            <Sparkles size={13} aria-hidden="true" />
            Chia sẻ trải nghiệm
          </span>
          <h1>
            Kể lại <em>bữa ăn</em> của bạn
          </h1>
          <p>
            Một review chân thành có thể giúp ai đó tìm được quán ngon. Giao
            diện bên dưới là bản tĩnh dùng để trình diễn.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={styles.formColumn}>
            <section className={styles.section} aria-labelledby="section-info">
              <div className={styles.sectionHead}>
                <span className={styles.stepNumber} aria-hidden="true">
                  01
                </span>
                <div>
                  <h2 id="section-info">Thông tin quán</h2>
                  <p>Những điều cơ bản để mọi người tìm được đúng quán.</p>
                </div>
              </div>

              <div className={styles.fieldGrid}>
                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="restaurant-name">Tên quán *</label>
                  <input
                    id="restaurant-name"
                    type="text"
                    defaultValue="Bún chả Hương Liên"
                  />
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="restaurant-address">Địa chỉ *</label>
                  <input
                    id="restaurant-address"
                    type="text"
                    defaultValue="35 Lê Văn Hưu, Phạm Đình Hổ"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="restaurant-city">Khu vực</label>
                  <span className={styles.selectWrap}>
                    <select id="restaurant-city" defaultValue="Hà Nội">
                      <option>Hà Nội</option>
                      <option>TP. Hồ Chí Minh</option>
                      <option>Đà Nẵng</option>
                      <option>Huế</option>
                    </select>
                    <ChevronDown size={15} aria-hidden="true" />
                  </span>
                </div>

                <div className={styles.field}>
                  <label htmlFor="restaurant-district">Quận / huyện *</label>
                  <input
                    id="restaurant-district"
                    type="text"
                    defaultValue="Hai Bà Trưng"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="restaurant-cuisine">Loại món ăn</label>
                  <span className={styles.selectWrap}>
                    <select id="restaurant-cuisine" defaultValue="Món Việt">
                      <option>Món Việt</option>
                      <option>Món nước</option>
                      <option>Cơm</option>
                      <option>Bánh mì</option>
                      <option>Món Âu</option>
                      <option>Hải sản</option>
                    </select>
                    <ChevronDown size={15} aria-hidden="true" />
                  </span>
                </div>

                <div className={styles.field}>
                  <label htmlFor="restaurant-price">Mức giá mỗi người</label>
                  <span className={styles.selectWrap}>
                    <select
                      id="restaurant-price"
                      defaultValue="100.000đ – 300.000đ"
                    >
                      <option>Dưới 100.000đ</option>
                      <option>100.000đ – 300.000đ</option>
                      <option>300.000đ – 500.000đ</option>
                      <option>Trên 500.000đ</option>
                    </select>
                    <ChevronDown size={15} aria-hidden="true" />
                  </span>
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="restaurant-hours">Giờ mở cửa *</label>
                  <div className={styles.hoursRow}>
                    <input
                      id="restaurant-hours"
                      type="time"
                      defaultValue="10:30"
                    />
                    <span aria-hidden="true">đến</span>
                    <input type="time" defaultValue="21:00" aria-label="Giờ đóng cửa" />
                  </div>
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="restaurant-phone">
                    Số điện thoại{' '}
                    <span className={styles.optional}>(không bắt buộc)</span>
                  </label>
                  <input
                    id="restaurant-phone"
                    type="tel"
                    defaultValue="024 3943 4106"
                  />
                </div>
              </div>
            </section>

            <section className={styles.section} aria-labelledby="section-rating">
              <div className={styles.sectionHead}>
                <span className={styles.stepNumber} aria-hidden="true">
                  02
                </span>
                <div>
                  <h2 id="section-rating">Chấm điểm trải nghiệm</h2>
                  <p>Bộ điểm tĩnh cho 4 tiêu chí — không có thao tác chấm.</p>
                </div>
              </div>

              <div className={styles.ratingGrid}>
                <div className={styles.ratingItem}>
                  <div>
                    <span className={styles.ratingLabel}>Vị giác</span>
                    <span className={styles.ratingHint}>Món ăn ngon, đậm đà?</span>
                  </div>
                  <RatingStars value={5} showValue size="md" />
                </div>
                <div className={styles.ratingItem}>
                  <div>
                    <span className={styles.ratingLabel}>Không gian</span>
                    <span className={styles.ratingHint}>Sạch sẽ, dễ chịu?</span>
                  </div>
                  <RatingStars value={4} showValue size="md" />
                </div>
                <div className={styles.ratingItem}>
                  <div>
                    <span className={styles.ratingLabel}>Phục vụ</span>
                    <span className={styles.ratingHint}>Nhanh nhẹn, thân thiện?</span>
                  </div>
                  <RatingStars value={5} showValue size="md" />
                </div>
                <div className={styles.ratingItem}>
                  <div>
                    <span className={styles.ratingLabel}>Giá cả</span>
                    <span className={styles.ratingHint}>
                      Xứng đáng với chất lượng?
                    </span>
                  </div>
                  <RatingStars value={4} showValue size="md" />
                </div>

                <div className={styles.averageBox}>
                  <span>Điểm dự kiến</span>
                  <strong>
                    4.5<small>/5</small>
                  </strong>
                  <RatingStars value={4.5} size="sm" />
                </div>
              </div>
            </section>

            <section className={styles.section} aria-labelledby="section-photos">
              <div className={styles.sectionHead}>
                <span className={styles.stepNumber} aria-hidden="true">
                  03
                </span>
                <div>
                  <h2 id="section-photos">Hình ảnh món ăn</h2>
                  <p>Ảnh mẫu tĩnh, ảnh đầu tiên sẽ làm ảnh bìa.</p>
                </div>
              </div>

              <button type="button" className={styles.dropzone}>
                <span className={styles.dropIcon} aria-hidden="true">
                  <ImagePlus size={23} />
                </span>
                <strong>Kéo ảnh vào đây hoặc chọn từ thiết bị</strong>
                <span>JPG, PNG, WEBP · tối đa 8MB mỗi ảnh</span>
              </button>

              <div className={styles.previewGrid}>
                {previewImages.map((image, index) => (
                  <div key={image.label} className={styles.previewTile}>
                    <img src={image.src} alt={image.alt} />
                    <span className={styles.imageIndex}>{image.label}</span>
                    <div className={styles.previewActions}>
                      {index > 0 && (
                        <button type="button" aria-label="Đặt làm ảnh bìa">
                          <Star size={13} aria-hidden="true" />
                        </button>
                      )}
                      <button type="button" aria-label={`Xóa ${image.alt}`}>
                        <Trash2 size={13} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
                <button type="button" className={styles.addTile}>
                  <ImagePlus size={18} aria-hidden="true" />
                  Thêm ảnh
                </button>
              </div>

              <p className={styles.hint}>
                Chưa có ảnh? Hệ thống sẽ dùng một ảnh minh họa — bạn vẫn có thể
                đăng bài bình thường.
              </p>
            </section>

            <section className={styles.section} aria-labelledby="section-story">
              <div className={styles.sectionHead}>
                <span className={styles.stepNumber} aria-hidden="true">
                  04
                </span>
                <div>
                  <h2 id="section-story">Nội dung &amp; thẻ món ăn</h2>
                  <p>
                    Kể điều bạn thích, điều chưa ổn và mẹo gọi món cho người
                    đến sau.
                  </p>
                </div>
              </div>

              <div className={styles.fieldGrid}>
                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="review-title">Tiêu đề review *</label>
                  <input
                    id="review-title"
                    type="text"
                    defaultValue="Bún chả Hương Liên — hương khói than hoa giữa lòng Hà Nội"
                  />
                  <span className={styles.counter}>62/120</span>
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="review-content">Cảm nhận chi tiết *</label>
                  <textarea
                    id="review-content"
                    rows={7}
                    defaultValue="Suất bún chả đầy đặn, chả nướng xém cạnh và nước chấm chua ngọt vừa vặn. Không gian quán đông nhưng nhân viên rất nhanh nhẹn. Mình sẽ quay lại vào một buổi trưa se lạnh."
                  />
                  <span className={styles.counter}>186/2000</span>
                </div>

                <div className={`${styles.field} ${styles.full}`}>
                  <span className={styles.fieldLabel}>Thẻ món ăn / trải nghiệm</span>
                  <p className={styles.tagHint}>
                    Chọn tối đa 5 thẻ để bài review dễ được tìm thấy hơn.
                  </p>
                  <div className={styles.tagList}>
                    {tagOptions.map((tag) => (
                      <span
                        key={tag.label}
                        className={`${styles.tagChip} ${
                          tag.selected ? styles.tagChipSelected : ''
                        }`}
                      >
                        {tag.selected && <Check size={12} aria-hidden="true" />}
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className={styles.formActions}>
              <p>
                Bằng việc đăng bài, bạn đồng ý chia sẻ trải nghiệm một cách
                trung thực và tôn trọng cộng đồng.
              </p>
              <div>
                <Link to="/feed" className={styles.cancelButton}>
                  Hủy
                </Link>
                <button type="button" className={styles.submitButton}>
                  <PenLine size={16} aria-hidden="true" />
                  Đăng review
                </button>
              </div>
            </div>
          </div>

          <aside className={styles.previewColumn}>
            <div className={styles.previewSticky}>
              <div className={styles.previewLabel}>
                <span>Xem trước bài viết</span>
                <span className={styles.liveDot}>Live</span>
              </div>

              <article className={styles.liveCard}>
                <div className={styles.liveMedia}>
                  <img src={bunChaImage} alt="Ảnh bìa xem trước" />
                  <span className={styles.mediaBadge}>Món Việt</span>
                  <span className={styles.mediaPrice}>100.000đ – 300.000đ</span>
                </div>

                <div className={styles.liveBody}>
                  <span className={styles.liveMeta}>
                    <MapPin size={11} aria-hidden="true" />
                    Hai Bà Trưng, Hà Nội
                  </span>
                  <h2>
                    Bún chả Hương Liên — hương khói than hoa giữa lòng Hà Nội
                  </h2>
                  <p className={styles.liveRestaurant}>Bún chả Hương Liên</p>
                  <div className={styles.liveRating}>
                    <strong>4.5</strong>
                    <RatingStars value={4.5} size="sm" />
                  </div>
                  <ul className={styles.liveTags}>
                    <li>Bún chả</li>
                    <li>Đồ nướng</li>
                    <li>Đặc sản Hà Nội</li>
                  </ul>
                  <div className={styles.liveFooter}>
                    <img src={avatarNgocTran} alt="" width="26" height="26" />
                    <span>Ngọc Trân</span>
                    <small>Vừa xong</small>
                  </div>
                </div>
              </article>

              <div className={styles.tipCard}>
                <span className={styles.tipTitle}>
                  <ShieldCheck size={14} aria-hidden="true" />
                  Mẹo viết review được yêu
                </span>
                <ul>
                  <li>Kể một chi tiết cụ thể bạn nhớ nhất.</li>
                  <li>Nêu cả điểm cộng và điểm cần cải thiện.</li>
                  <li>Ghi rõ món đã gọi và giá tham khảo.</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}