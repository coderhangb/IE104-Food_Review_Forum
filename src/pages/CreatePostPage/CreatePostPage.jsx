import { Link } from 'react-router-dom'
import { ArrowLeft, Sparkles } from 'lucide-react'
import styles from './CreatePostPage.module.css'

export default function CreatePostPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                <Link to="/feed" className={styles.backLink}>
                    <ArrowLeft size ={15} aria-hidden="true" />
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
                        Một review chân thành có thể giúp ai đó tìm được quán ngon. Giao diện bên dưới là bản tĩnh dùng để trình diễn
                    </p>
                </header>

                <div className={styles.layout}>
                    <div className={styles.formColumn}>

                    </div>

                    <aside className={styles.previewColumn}>
                    
                    </aside>
                </div>
            </div>
        </div>
    );
}