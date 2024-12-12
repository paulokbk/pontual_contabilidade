import * as React from "react";

// ** Assets
import DestaquesBg from "../../assets/images/destaques-bg.jpg"
import irpf from "../../assets/images/icons/destaques/irpf.png"
import eSocial from "../../assets/images/icons/destaques/eSocial.png"
import notaFiscal from "../../assets/images/icons/destaques/nota-fiscal.png"
import simplesNacional from "../../assets/images/icons/destaques/simples-nacional.png"
import lucroPresumido from "../../assets/images/icons/destaques/lucro-presumido.png"
import lucroReal from "../../assets/images/icons/destaques/lucro-real.png"

const Destaques = () => {
  return (
    <div
        className="destaques"
        style={{ background: `url(${DestaquesBg}) center no-repeat` }}
    >
        <div className="icons">
            <img src={irpf} alt="IRPF" className="irpf" width={70} />
            <div className="line" />
            <img src={eSocial} alt="eSocial" className="eSocial" width={85} />
            <div className="line" />
            <img src={notaFiscal} alt="Nota Fiscal" className="nota-fiscal" width={85} />
            <div className="line" />
            <img src={simplesNacional} alt="Simples Nacional" className="simples-nacional" width={85} />
            <div className="line" />
            <img src={lucroPresumido} alt="Lucro Presumido" className="lucro-presumido" width={85} />
            <div className="line" />
            <img src={lucroReal} alt="Lucro Real" className="lucro-real" width={85} />
        </div>
    </div>
  );
};

export default Destaques;