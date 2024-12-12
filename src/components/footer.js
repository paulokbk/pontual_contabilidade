import * as React from "react"

// ** Gatsby imports
import { StaticImage } from "gatsby-plugin-image";

// ** Third Part Components
import { Instagram, Mail } from "react-feather"
import { IoLocationSharp } from "@react-icons/all-files/io5/IoLocationSharp";
import { IoLogoWhatsapp } from "@react-icons/all-files/io5/IoLogoWhatsapp";
import { IoCodeSlash } from "@react-icons/all-files/io5/IoCodeSlash" 

// ** Data
import companyData from "../data/companyData";

// ** Utils
import getGitHubData from "../utils/getProfileGithub";

const Footer = () => {
  const [devData, setDevData] = React.useState(null);
  
  const logoPath = "../assets/images/logo/logo-pontual-white.png"

  const fetchDevData = async () => {
    const link = await getGitHubData("carol-frazao");
    setDevData(link);
  }

  React.useEffect(() => {
    fetchDevData()
  }, [])
    
  return (
      <footer id="footer">
        <StaticImage 
          src={logoPath}
          alt="Logo"
          width={250}
          placeholder="blurred"
          className="logo-img-container"
        />

        <div className="container">
          <div className="text">
            Entre em contato hoje mesmo e transforme seus planos empresariais em conquistas reais!
          </div>

          <div className="links d-flex align-items-center justify-content-center gap-3">
            <a href={`https://wa.me/${companyData.whatsapp}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <IoLogoWhatsapp size={20} />
            </a>
            <a href={`mailto:${companyData.email}`} target="_blank" rel="noopener noreferrer" title="E-mail">
              <Mail size={20} />
            </a>
            <a href={companyData.instagram}
              target="_blank" rel="noopener noreferrer" title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a href={companyData.mapLink} 
              target="_blank" rel="noopener noreferrer" title="Localização"
            >
              <IoLocationSharp size={20} />
            </a>
          </div>

          <div className="cnpj">
            CNPJ: {companyData.cnpj}
          </div>

          <div className="info d-flex justify-content-center flex-wrap">
            <p>
              <strong>Horário de atendimento</strong> 
              <span>
                {companyData.operation.map((item, index) => (
                  <React.Fragment key={index}>
                    {item} <br />
                  </React.Fragment>
                ))}
              </span>
            </p>

            <p>
              <strong>Endereço</strong>
              <span>
                {companyData.address.map((item, index) => (
                  <React.Fragment key={index}>
                    {item} <br />
                  </React.Fragment>
                ))}
              </span>
            </p>
          </div>
        </div>

        <hr />

        <div className="copyright d-flex justify-content-center flex-wrap">
          <span style={{textTransform: "uppercase"}}>
            Copyright ©  2024 - {companyData.name} - Todos os direitos reservados
          </span>
          {devData && (
            <a href={devData?.blog} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-1">
              <IoCodeSlash size={17} />{" "}
              {devData?.name}
            </a>
          )}
        </div>
      </footer>
  )
}

export default Footer