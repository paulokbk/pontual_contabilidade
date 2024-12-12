import * as React from "react";
import classnames from "classnames";

// ** Gatsby Imports
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// ** Data
import servicos from "../../data/servicos";
import companyData from "../../data/companyData";

// ** Third Part Components
import { GiClick } from "@react-icons/all-files/gi/GiClick";

const Servicos = () => {
    const [selected, setSelected] = React.useState(null);
    const [lastSelect, setLastSelect] = React.useState(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            // Verifica se o clique foi fora de um card
            if (!event.target.closest(".card-servico")) {
                setLastSelect(selected);
                setSelected(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [selected]);

    const CardServico = ({ servico }) => {
        // Consulta para buscar todas as imagens
        const data = useStaticQuery(graphql`
            query {
                allFile(filter: {relativeDirectory: {eq: "servicos"}}) {
                    edges {
                        node {
                            relativePath
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED,
                                    formats: [AUTO, WEBP, AVIF]
                                )
                            }
                        }
                    }
                }
            }
        `);
    
        // Função para encontrar a imagem correspondente
        const getServiceImage = (relativePath) => {
            const imageNode = data.allFile.edges.find(edge => edge.node.relativePath === relativePath);
            return imageNode ? getImage(imageNode.node.childImageSharp.gatsbyImageData) : null;
        };
    
        const serviceImage = getServiceImage(servico.imagePath);

        const isSelected = selected === servico.name;
        const unSelected = lastSelect === servico.name;

        const handleCardClick = (event) => {
            // Previne a propagação para não fechar o card ao clicar nele
            event.stopPropagation();
            
            if (!isSelected) {
                setSelected(servico.name);
                setLastSelect(selected);
            }
        };

        return (
            <div className="card-servico" onClick={handleCardClick}>
                <div className={classnames("card-front", { selected: isSelected, unSelected })}>
                    {serviceImage && <GatsbyImage image={serviceImage} alt={servico.name} />}
                    <span className="front-content d-flex flex-column gap-1 align-items-center">
                        <strong>{servico.name}</strong>
                        <GiClick size={30} />
                    </span>
                </div>
                <div className={classnames("card-back", { selected: isSelected })}>
                    <strong>{servico.name}</strong>
                    <p>{servico.description}</p>
                    <a href={`tel:${companyData.phone}`} target="_blank" rel="noopener noreferrer">
                        Entrar em contato →
                    </a>
                </div>
            </div>
        )
    }

    return (
        <section id="servicos">
            <div className="container content">
                <h3 className="small-title">Nossos serviços</h3>
                <strong className="title">Soluções para o seu negócio</strong>
                <div className="cards-container">
                    {servicos?.map((servico, index) => {
                        return (
                            <CardServico 
                                key={index} 
                                servico={servico} 
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Servicos;