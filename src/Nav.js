import React ,{useState, useEffect}from 'react'
import './Nav.css'
function Nav() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            setShow(window.scrollY > 100);
        });
        return ()=>{
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img 
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Avatar_1_Placeholder_DumDarac.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav
