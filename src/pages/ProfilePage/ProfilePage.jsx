import { Link } from 'react-router-dom';
import {
  Award,
  Bookmark,
  CalendarDays,
  Heart,
  MapPin,
  PenLine,
  Share2,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import avatarHaiNam from '../../assets/img/avatar-hai-nam.jpg';
import avatarMinhAnh from '../../assets/img/avatar-minh-anh.jpg';
import avatarNgocTran from '../../assets/img/avatar-ngoc-tran.jpg';
import bunChaImage from '../../assets/img/bun-cha.jpg';
import phoImage from '../../assets/img/pho.jpg';
import pizzaImage from '../../assets/img/pizza.jpg';
import seafoodImage from '../../assets/img/seafood.jpg';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import styles from './ProfilePage.module.css';

const myPosts = [
  {
    id: 'pho',
    image: phoImage,
    cuisine: 'Món nước',
    title: 'Phở Thìn Lò Đúc: bát phở bò “đánh thức” cả sáng sớm',
    excerpt:
      'Nước dùng trong veo, thịt bò mềm ngọt và bát phở nóng hổi lúc 5 giờ sáng. Một buổi sáng Hà Nội trọn vẹn.',
    restaurant: 'Phở Thìn Lò Đúc',
    area: 'Hai Bà Trưng, Hà Nội',
    price: '50.000đ – 90.000đ',
    rating: 4.3,
    tags: ['Phở bò', 'Ăn sáng', 'Món nước'],
    author: 'Ngọc Trân',
    avatar: avatarNgocTran,
    time: '4 ngày trước',
    likes: 312,
    comments: 2,
    isHot: true,
  },
  {
    id: 'be-man',
    image: seafoodImage,
    cuisine: 'Hải sản',
    title: 'Bé Mặn Đà Nẵng: bữa hải sản ven biển đáng từng đồng',
    excerpt:
      'Tôm hùm nướng bơ tỏi, mực nhồi thịt và hoàng hôn Mỹ Khê — bữa tối trọn vẹn cho chuyến đi.',
    restaurant: 'Bé Mặn',
    area: 'Ngũ Hành Sơn, Đà Nẵng',
    price: '400.000đ – 900.000đ',
    rating: 4.3,
    tags: ['Hải sản', 'View biển', 'Đà Nẵng'],
    author: 'Ngọc Trân',
    avatar: avatarNgocTran,
    time: '5 ngày trước',
    likes: 198,
    comments: 2,
  },
];

const savedPlaces = [
  {
    id: 'bun-cha',
    image: bunChaImage,
    cuisine: 'Món Việt',
    title: 'Bún chả Hương Liên: hương khói than hoa giữa lòng Hà Nội',
    excerpt:
      'Chả nướng xém cạnh, nước chấm chua ngọt vừa vặn và bún sợi mảnh — bữa trưa khiến mình nhớ mãi.',
    restaurant: 'Bún chả Hương Liên',
    area: 'Hai Bà Trưng, Hà Nội',
    price: '60.000đ – 150.000đ',
    rating: 4.5,
    tags: ['Bún chả', 'Đồ nướng', 'Đặc sản Hà Nội'],
    author: 'Minh Anh',
    avatar: avatarMinhAnh,
    time: '2 ngày trước',
    likes: 428,
    comments: 3,
    isHot: true,
  },
  {
    id: 'pizza',
    image: pizzaImage,
    cuisine: 'Món Âu',
    title: "Pizza 4P's Lê Thánh Tôn: đêm Sài Gòn có phô mai burrata",
    excerpt:
      'Đế pizza mỏng giòn, burrata béo mịn và không gian ấm cúng cho một buổi tối đáng nhớ.',
    restaurant: "Pizza 4P's Lê Thánh Tôn",
    area: 'Quận 1, TP. Hồ Chí Minh',
    price: '300.000đ – 600.000đ',
    rating: 4.6,
    tags: ['Pizza', 'Burrata', 'Hẹn hò'],
    author: 'Hải Nam',
    avatar: avatarHaiNam,
    time: '3 tuần trước',
    likes: 367,
    comments: 2,
    isHot: true,
  },
];


export default function ProfilePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="profile-name">
        <div className="container">
          <div className={styles.cover}>
            <span className={styles.coverPattern} aria-hidden="true" />
            <span className={styles.coverQuote}>
              Ăn thật,
              <br />
              kể thật.
              <small>Hồ sơ thành viên Măm Măm</small>
            </span>
          </div>

          <div className={styles.profileCard}>
            <div className={styles.avatarWrap}>
              <img
                className={styles.avatar}
                src={avatarNgocTran}
                alt="Ảnh đại diện của Ngọc Trân"
                width="118"
                height="118"
              />
              <span className={styles.onlineDot} aria-label="Đang hoạt động" />
            </div>

            <div className={styles.info}>
              <div className={styles.nameRow}>
                <h1 id="profile-name">Ngọc Trân</h1>
                <span className={styles.memberBadge}>Thành viên tích cực</span>
              </div>
              <span className={styles.handle}>@ngoctran.eats</span>
              <p className={styles.bio}>
                Mỗi bữa ăn là một câu chuyện. Mình viết để nhớ, và để rủ bạn
                cùng đi ăn.
              </p>

              <div className={styles.meta}>
                <span>
                  <MapPin size={13} aria-hidden="true" />
                  TP. Hồ Chí Minh
                </span>
                <span>
                  <CalendarDays size={13} aria-hidden="true" />
                  Tham gia 18 tháng 3, 2024
                </span>
              </div>

              <div className={styles.actions}>
                <Link to="/create" className={styles.primaryAction}>
                  <PenLine size={15} aria-hidden="true" />
                  Viết review mới
                </Link>
                <button type="button" className={styles.secondaryAction}>
                  <Share2 size={15} aria-hidden="true" />
                  Chia sẻ hồ sơ
                </button>
              </div>
            </div>

            <dl className={styles.stats}>
              <div>
                <dt>Bài review</dt>
                <dd>2</dd>
              </div>
              <div>
                <dt>Quán đã lưu</dt>
                <dd>2</dd>
              </div>
              <div>
                <dt>Lượt thích</dt>
                <dd>510</dd>
              </div>
              <div>
                <dt>Người theo dõi</dt>
                <dd>1.284</dd>
              </div>
            </dl>
          </div>

          <div className={styles.achievements} aria-label="Thành tích">
            <span>
              <Award size={14} aria-hidden="true" />
              Top reviewer tháng 10
            </span>
            <span>
              <Sparkles size={14} aria-hidden="true" />
              Chuyên gia ẩm thực
            </span>
            <span>
              <Heart size={14} aria-hidden="true" />
              Thành viên được yêu mến
            </span>
          </div>
        </div>
      </section>

      <section className={styles.collection} aria-labelledby="collection-title">
        <div className="container">
          <div className={styles.collectionHead}>
            <div>
              <span className="eyebrow">
                <UtensilsCrossed size={13} aria-hidden="true" />
                Bộ sưu tập của bạn
              </span>
              <h2 id="collection-title">Dấu chân ăn uống</h2>
            </div>
            <span className={styles.collectionNote}>
              Tất cả card đều dẫn tới review mẫu
            </span>
          </div>

          <div className={styles.sectionBlock}>
            <div className={styles.sectionTitle}>
              <h3>
                <PenLine size={16} aria-hidden="true" />
                Bài đã đăng
              </h3>
              <span>2</span>
            </div>
            <div className={styles.reviewGrid}>
              {myPosts.map((post) => (
                <ReviewCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          <div className={styles.sectionBlock}>
            <div className={styles.sectionTitle}>
              <h3>
                <Bookmark size={16} aria-hidden="true" />
                Quán đã lưu
              </h3>
              <span>2</span>
            </div>
            <div className={styles.reviewGrid}>
              {savedPlaces.map((place) => (
                <ReviewCard key={place.id} {...place} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
