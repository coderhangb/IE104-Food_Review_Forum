import { Link, NavLink } from "react-router-dom";
import { PenLine, UtensilsCrossed } from "lucide-react";
import avatarNgocTran from "../../assets/img/avatar-ngoc-tran.jpg";
import styles from "./Header.module.css";

const navItems = [
  { to: "/", label: "Trang chủ", end: true },
  { to: "/feed", label: "Feed" },
  { to: "/create", label: "Đăng bài" },
  { to: "/profile", label: "Trang cá nhân" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link
          className={styles.brandLink}
          to="/"
          aria-label="Măm Măm - Trang chủ"
        >
          <span className={styles.logoMark} aria-hidden="true">
            <UtensilsCrossed size={21} strokeWidth={2.2} />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Măm Măm</span>
            <span className={styles.brandTagline}>ăn thật · kể thật</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link className={styles.cta} to="/create">
            <PenLine size={15} aria-hidden="true" />
            Viết review
          </Link>
          <Link className={styles.userLink} to="/profile">
            <img
              className={styles.avatar}
              src={avatarNgocTran}
              alt=""
              width="36"
              height="36"
            />
            <span className={styles.userName}>Ngọc Trân</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
