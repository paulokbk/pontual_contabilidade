import * as React from "react";

// ** Data
import companyData from "../../data/companyData";

// ** Third Part Components
import { CgPhone } from "@react-icons/all-files/cg/CgPhone";

// ** Gatsby Imports
import { StaticImage } from "gatsby-plugin-image";

// ** Assets
import ApprovalIcon from "../../assets/images/icons/approval.png"
import SatisfactionIcon from "../../assets/images/icons/satisfaction.png"

const Sobre = () => {
  const imagePath = "../../assets/images/sobre.png"

  return (
    <section id="sobre">
      <div className="container content">
        <h2 className="small-title">Sobre nós</h2>
        <strong className="title">Eficiência, qualidade e atendimento ágil</strong>
        <p className="paragraph mt-3">
          A {companyData.name} oferece soluções estratégicas e personalizadas para simplificar sua
          gestão financeira e maximizar resultados. Oferecemos um atendimento eficiente e sob medida,
          unindo expertise tradicional à inovação e praticidade das tecnologias mais avançadas do mercado.
        </p>
        <p className="emphasized">
          <em>
            Com mais de {companyData.yearsOfExperience} anos de experiência, garantimos serviços personalizados,
            alinhados às suas necessidades e focados em resultados concretos.
          </em>
        </p>
        <p>
          Escolha quem entende do assunto e transforme desafios em oportunidades.
        </p>
        <a href={`tel:${companyData.phone}`} className="btn btn-primary">
          <CgPhone size={20} />
          Entre em contato
        </a>
      </div>

      <div className="container image-container">
        <StaticImage 
          src={imagePath}
          alt="Profissionais analisando documentos e gráficos"
          placeholder="blurred"
        />
        <div className="stats mt-3 d-flex align-items-center justify-content-around flex-wrap gap-3">
          <div className="stats-data d-flex align-items-center gap-1">
            <img src={ApprovalIcon} alt="Ícone de aprovação" width={50} />
            <p>
              <strong>+{companyData.yearsOfExperience}</strong> <br />
              <span>Anos de experiencia</span>
            </p>
          </div>
          <div className="stats-data d-flex align-items-center gap-2">
            <img src={SatisfactionIcon} alt="Ícone de satisfação" width={50} />
            <p>
              <strong>+{companyData.clientsServed}</strong> <br />
              <span>Clientes satisfeitos</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;