import './Index.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__copyright">Copyright 2023 Human Cognition</div>
                    <div className="footer__contact"><a target="_blank" href="mailto:egordelovayakolbasa@yandex.ru" rel="noreferrer">egordelovayakolbasa@yandex.ru</a></div>
                    <div className="footer__git-hub"><a target="_blank" 
                    href="https://github.com/EgorSalchenko" rel="noreferrer">GitHub</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;