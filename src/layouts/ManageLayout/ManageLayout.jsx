import classNames from 'classnames/bind';
import styles from './ManageLayout.module.scss'

const cx = classNames.bind(styles);

function ManageLayout({children}) {
    return ( 
        <div className={cx('container')}>{children}</div>
     );
}

export default ManageLayout;