import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from '~/assets/images';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(styles);

function Header() {
  console.log(faCircleXmark);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img scr={images.logo} alt='TikTok'/>
        </div>

        <div className={cx('search')}>
          <input placeholder="Search..." spellCheck={false}/>
          <button className={cx('clear')}>
          <FontAwesomeIcon icon={faCircleXmark} />
          
          </button>
          {/* Loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
          <button className={cx('search-btn')}>
            {/* Search */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
