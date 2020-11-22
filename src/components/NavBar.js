import React,{useEffect} from 'react';
import '../styles/navbar.scss';
import Logo from './../img/logo.svg';
const Navbar=() => {
    const [scrolled,setScrolled] = React.useState(false);
    const handleScroll=() => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })
    let navbarClasses=['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <header className={navbarClasses.join(" ")}>
        <div className="logo">
          <img src={Logo} alt="Logo" title="Logo" />
        </div>

        <nav className="navigation">
            <ul>
              <li><a href="#post1">Home</a></li>
              <li><a href="#post2">Paintings</a></li>
              <li><a href="#post3">Wood art</a></li>
              <li><a href="#post4">Stone art</a></li>
            </ul>
        </nav>

    </header>
    );
};
export default Navbar;