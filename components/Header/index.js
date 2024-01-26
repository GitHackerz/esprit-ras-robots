import './style.css'

const Header = ({ title, children }) => {
    return (
        <section className="header">
            <h1>{title}</h1>
            <p>{children}</p>
        </section>
    )
}

export default Header
