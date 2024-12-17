import NavTabs from "./NavTabs";

function Header() {
    return <>
<header>    
    <h1>Nattan</h1>
    <nav>
    <NavTabs />
    {/* <nav>
        <a href="#about-me">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact-me">Contact Me</a>
        <a href="#resume">Resume</a>
    </nav> */}
    </nav>
</header>
<div class="hero-banner"> 
    <h2>Sky Is The Limit</h2>
</div>

</>
}

export default Header;