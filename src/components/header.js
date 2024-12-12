import * as React from "react"
import classnames from "classnames"
import { useEffect, useRef, useState } from "react";

// ** Gatsby Imports
import { Link } from "gatsby"

// ** Assets
import LogoPontual from "../assets/images/logo/logo-icon-pontual.png"
import LogoPontualWhite from "../assets/images/logo/logo-icon-pontual-white.png"

// ** Third Part Components
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Menu, X } from "react-feather"

// ** Data
import companyData from "../data/companyData";

const Header = () => {
  const [showHeaderMenu, setShowHeaderMenu] = useState(false);
  const [desktopView, setDesktopView] = useState(false);
  const [active, setActive] = useState("#banner");
  const [isScrolled, setIsScrolled] = useState(false);

  const navHeaderRef = useRef(null);
  const headerRef = useRef(null);

  const handleShowHeaderMenu = () => {
    setShowHeaderMenu(!showHeaderMenu);
  }
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navHeaderRef.current &&
        !navHeaderRef.current.contains(event.target) &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setShowHeaderMenu(false);
      }
    };
  
    if (showHeaderMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHeaderMenu]);

  // Monitora a largura da janela para ajustar estado showHeaderMenu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowHeaderMenu(false);
        setDesktopView(true);
      } else {
        setDesktopView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Verifica se o scroll passou de 4rem (64px)
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove o listener ao desmontar o componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (event, targetId) => {
    event.preventDefault();
  
    setActive(targetId);
  
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      const headerHeight = headerRef.current.offsetHeight; // Altura do cabeçalho
      const elementPosition = targetElement.offsetTop; // Posição do elemento na página
      const offsetPosition = elementPosition - headerHeight; // Compensação pela altura do cabeçalho
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Scroll suave
      });
    }
  };

  return (
    <header 
      ref={headerRef} 
      className={`header d-flex align-items-center justify-content-between ${isScrolled ? 'scrolled' : ''}`}
    >
      <Link to="/" className="logo d-flex align-items-center">
        <img
          src={LogoPontual}
          alt="Logo"
          height={38}
          style={{ margin: 0 }} 
        />
          <strong>{companyData.name}</strong>
      </Link>

      <Navbar 
        variant="light" 
        expand="lg"
        className="navbar-custom"
        ref={navHeaderRef}
      >
        <Container 
          className={classnames('flex-grow-1 d-flex justify-content-end container-menu', {
            'd-none': desktopView
          })}
          onClick={handleShowHeaderMenu}
        >
          {!showHeaderMenu && (
            <Menu className="menu-icon" size={42} onClick={handleShowHeaderMenu} />
          )}
        </Container>
        
        <Navbar.Collapse 
          id="header-navbar-collapse"
          className={classnames('w-100 show', {
            'visible-menu': showHeaderMenu || desktopView,
            'd-none': desktopView
          })}
        >
          {!desktopView && (
            <div className="topper-menu p-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={LogoPontualWhite}
                  alt="Logo"
                  height={20}
                  style={{ margin: 0 }} 
                />
                <strong>{companyData.name}</strong>
              </div>

               <X 
                size={35} 
                onClick={handleShowHeaderMenu} 
                className={classnames({ 'color-orange': showHeaderMenu })}
              />
            </div>
          )}
          <Nav className="ms-auto nav-header">
            <Nav.Link as={Link} to="#banner" onClick={(e) => handleScrollTo(e, "#banner")} className={classnames({ active: active === "#banner" })}>
              <span>Início</span>
            </Nav.Link>

            <Nav.Link as={Link} to="#sobre" onClick={(e) => handleScrollTo(e, "#sobre")} className={classnames({ active: active === "#sobre" })}>
              <span>Sobre nós</span>
            </Nav.Link>

            <Nav.Link as={Link} to="#servicos" onClick={(e) => handleScrollTo(e, "#servicos")} className={classnames({ active: active === "#servicos" })}>
              <span>Nossas soluções</span>
            </Nav.Link>

            <Nav.Link as={Link} to="#contato" onClick={(e) => handleScrollTo(e, "#contato")} className={classnames({ active: active === "#contato" })}>
              <span>Fale conosco</span>
            </Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
