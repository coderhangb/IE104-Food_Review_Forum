import { Link } from 'react-router-dom';
import {
  ChevronDown,
  PenLine,
  Search,
  SlidersHorizontal,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import avatarHaiNam from '../../assets/img/avatar-hai-nam.jpg';
import avatarMaiChi from '../../assets/img/avatar-mai-chi.jpg';
import avatarMinhAnh from '../../assets/img/avatar-minh-anh.jpg';
import avatarNgocTran from '../../assets/img/avatar-ngoc-tran.jpg';
import banhMiImage from '../../assets/img/banh-mi.jpg';
import bunChaImage from '../../assets/img/bun-cha.jpg';
import comTamImage from '../../assets/img/com-tam.jpg';
import phoImage from '../../assets/img/pho.jpg';
import pizzaImage from '../../assets/img/pizza.jpg';
import seafoodImage from '../../assets/img/seafood.jpg';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import styles from './FeedPage.module.css';


const feedItems = [
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
    id: 'pho-thin',
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
    id: 'com-tam',
    image: comTamImage,
    cuisine: 'Cơm',
    title: 'Cơm Tấm Ba Ghiền: miếng sườn nướng to gấp đôi bàn tay',
    excerpt:
      'Sườn nướng mềm thấm vị, cơm tấm dẻo thơm, chan mỡ hành béo ngậy. Một đĩa ăn no nê giữa Sài Gòn.',
    restaurant: 'Cơm Tấm Ba Ghiền',
    area: 'Phú Nhuận, TP. Hồ Chí Minh',
    price: '60.000đ – 120.000đ',
    rating: 4.3,
    tags: ['Cơm tấm', 'Sườn nướng', 'Món Việt'],
    author: 'Hải Nam',
    avatar: avatarHaiNam,
    time: '1 tuần trước',
    likes: 289,
    comments: 2,
  },
  {
    id: 'banh-mi',
    image: banhMiImage,
    cuisine: 'Bánh mì',
    title: 'Bánh mì Huỳnh Hoa: ổ bánh mì “nặng trịch” giữa Quận 1',
    excerpt:
      'Vỏ bánh giòn, pate béo, chả lụa và dưa chua đầy ắp. Một ổ bánh mì ăn là no đến chiều.',
    restaurant: 'Bánh Mì Huỳnh Hoa',
    area: 'Quận 1, TP. Hồ Chí Minh',
    price: '40.000đ – 80.000đ',
    rating: 4.0,
    tags: ['Bánh mì', 'Ăn nhanh', 'Quán nổi tiếng'],
    author: 'Mai Chi',
    avatar: avatarMaiChi,
    time: '2 tuần trước',
    likes: 245,
    comments: 2,
  },
  {
    id: 'pizza-4ps',
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

const filterChips = ['Tất cả', 'Món Việt', 'Món nước', 'Hải sản', 'Món Âu'];

export default function FeedPage() {
  return (
    <div className={styles.page}>
      <header className={styles.feedHeader}>
        <div className={`container ${styles.headerInner}`}>
          <div>
            <span className="eyebrow">
              <Sparkles size={13} aria-hidden="true" />
              Cộng đồng Măm Măm
            </span>
            <h1>Feed món ngon</h1>
            <p>
              Những bài review mới nhất từ người ăn thật. Chọn một món, đọc
              câu chuyện và lưu quán cho lần ghé sau.
            </p>
          </div>

          <Link className={styles.createLink} to="/create">
            <PenLine size={16} aria-hidden="true" />
            Chia sẻ quán của bạn
          </Link>
        </div>
      </header>

      <div className="container">
        <div className={styles.toolbar} aria-label="Bộ lọc tĩnh">
          <span className={styles.searchBox}>
            <Search size={18} aria-hidden="true" />
            Tìm tên quán, món ăn hoặc khu vực...
          </span>

          <div className={styles.filterChips}>
            {filterChips.map((chip, index) => (
              <span
                key={chip}
                className={`${styles.chip} ${
                  index === 0 ? styles.chipActive : ''
                }`}
              >
                {chip}
              </span>
            ))}
          </div>

          <span className={styles.sortBox}>
            <SlidersHorizontal size={14} aria-hidden="true" />
            Mới nhất
            <ChevronDown size={14} aria-hidden="true" />
          </span>
        </div>

        <div className={styles.feedMeta}>
          <span>
            <UtensilsCrossed size={14} aria-hidden="true" />6 bài review
          </span>
          <span>Mọi bài viết đều dẫn tới review mẫu</span>
        </div>

        <div className={styles.grid}>
          {feedItems.map((item) => (
            <ReviewCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}