import './Index.scss'
import Modal from '../modal/Index';
import React from 'react'; 
import { Link } from 'react-router-dom'
const Header = () => {
    const [modalActive, setModalActive] = React.useState(false)

    console.log(modalActive)
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner d-flex">
                        <div className="header-left">
                            <Link to="/" className="header-logo">
                                <img id='logo' className="cognition-logo" src="/images/cognition.png" alt=""/>
                                human cognition
                            </Link>
                            <Link to="/profile" className="header-statistics" onClick={(e) => {
                                if(localStorage.getItem('login') == 'false'){ // если пользователь не авторизован
                                    e.preventDefault();
                                    setModalActive(true)
                                }
                            }}>Profile</Link>
                        </div>
                        <div className="header-right">
                            <Link to='/registration' className="header__signup">Sign up</Link>
                            <Link to="/login" className="header__login">Sign in</Link>
                        </div>
                    </div>
                </div>
                {modalActive && <Modal modalActive={modalActive} setModalActive={setModalActive}/>}
            </header>
            
        </>
    )
}

export default Header;