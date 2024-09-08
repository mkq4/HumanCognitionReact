import './Index.scss'
const Title = () => {
    function handleButtonClick() {
        window.scrollTo({
            top: 970,
            behavior: "smooth"
          });
    }
    return(
        <section className="title">
        <div className="container">
            <div className="title__inner">
                <img src="/images/svg/cognition.svg" alt="" className="title__logo"/>
                <h1 className="title__title">human cognition</h1>
                <h2 className="title__subtitle">Realize your cognitive abilities through tests and games!</h2>
                <button id="startBtn" className="title__btn" onClick={handleButtonClick} >Get Started</button>
            </div>
        </div>
    </section>
    )
}

export default Title;