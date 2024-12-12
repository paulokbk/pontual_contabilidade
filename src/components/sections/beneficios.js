import * as React from "react";

// ** Gatsby Imports
import { StaticImage } from "gatsby-plugin-image";

// ** Assets
import conformidadeLegal from "../../assets/images/icons/beneficios/conformidade-legal.png";
import otimizacaoFiscal from "../../assets/images/icons/beneficios/otimizacao-fiscal.png";
import gestaoFinanceiraEficiente from "../../assets/images/icons/beneficios/gestao-financeira-eficiente.png";
import economiaDeTempo from "../../assets/images/icons/beneficios/economia-de-tempo.png";

const Beneficios = () => {
    return (
        <section id="beneficios">
            <div className="benefits container">
                <h4 className="title">Por que contratar uma contabilidade?</h4>
                <p className="description">
                    Contratar uma contabilidade é essencial para garantir conformidade legal, otimizar a gestão
                    financeira, reduzir riscos fiscais e focar no crescimento estratégico do negócio.
                </p>
                <ul>
                    <li>
                        <img src={conformidadeLegal} alt="Ícone conformidade legal" width={60} />
                        <div>
                            <strong>Conformidade legal</strong>
                            <p>Cumprimento das leis, normas e regulamentos aplicáveis para garantir operações éticas e seguras.</p>
                        </div>
                    </li>
                    <li>
                        <img src={otimizacaoFiscal} alt="Ícone otimização fiscal" width={60} />
                        <div>
                            <strong>Otimização fiscal</strong>
                            <p>Redução legal de tributos, aproveitando benefícios e planejamentos contábeis estratégicos.</p>
                        </div>
                    </li>
                    <li>
                        <img src={gestaoFinanceiraEficiente} alt="Ícone gestão financeira eficiente" width={60} />
                        <div>
                            <strong>Gestão financeira eficiente</strong>
                            <p>Controle estratégico das finanças, com análises contábeis que garantem equilíbrio, redução de custos e crescimento sustentável.</p>
                        </div>
                    </li>
                    <li>
                        <img src={economiaDeTempo} alt="Ícone economia de tempo" width={60} />
                        <div>
                            <strong>Economia de tempo</strong>
                            <p>Automação de processos contábeis, permitindo que a empresa foque no crescimento do seu negócio.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="image-container">
                <div className="image-bg" />
                <StaticImage 
                    src="../../assets/images/beneficios.png"
                    alt="Calculadora"
                    placeholder="blurred"
                />
            </div>
        </section>
    );
};

export default Beneficios;