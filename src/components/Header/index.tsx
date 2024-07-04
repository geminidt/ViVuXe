import './Header.scss';
import VivuxeLogo from '../../assets/VivuxeLogo.png'

const Header: React.FC = () => {
    return(
        <div className='vivu_layout'>
            <div className='header'>
                <div className='m_container'>
                    <a href="/#" className='logo_container'>
                        <div className='full_logo'>
                            <img loading='lazy' alt="Vivuxe" src={VivuxeLogo} style={{color: "#e0f4ff"}} />
                        </div>
                    </a>
                    <div className='menu_container'>
                        <a href="/#">Về VivuXe </a>
                        <div className='vertical_line'></div>
                        <div></div>
                        <a className='btn btn__s' href="/#">Đăng ký</a>
                        <a className='btn btn__s login' href="/#">Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
