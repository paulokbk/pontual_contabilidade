import * as React from "react";

// ** Assets
import BannerBg from "../../assets/images/banner.jpg";

const Banner = () => {
  const handleScrollToSection = (event, targetId) => {
    event.preventDefault();
  
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight; // Obter altura do cabeçalho fixo
      const elementPosition = targetElement.offsetTop; // Posição da seção
      const offsetPosition = elementPosition - headerHeight; // Ajusta pelo cabeçalho
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Scroll suave
      });
    }
  };

  return (
    <section id="banner" style={{ backgroundImage: `url(${BannerBg})`}}>
      <div className="banner-content">
        <h1>Excelência em Soluções Contábeis</h1>
        <p>Descomplique sua gestão contábil e foque no crescimento do seu negócio.</p>
        <a href="#sobre" className="btn btn-primary" onClick={(e) => handleScrollToSection(e, "#sobre")}>
          Saiba Mais
        </a>
      </div>
    </section>
  );
};

export default Banner;