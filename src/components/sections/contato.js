import * as React from "react";

import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { Mail } from "react-feather";
import { IoLocationSharp } from "@react-icons/all-files/io5/IoLocationSharp";

import companyData from "../../data/companyData";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contato = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nome || !email || !mensagem) {
            alert("Campos obrigatórios não preenchidos.")
            return false
        }

        setLoading(true)
      
        emailjs.send(
            process.env.GATSBY_EMAILJS_SERVICE_ID, // ID do serviço
            process.env.GATSBY_EMAILJS_TEMPLATE_ID, // ID do template
            {
                from_name: nome,
                from_email: email,
                message: mensagem,
            },
            process.env.GATSBY_EMAILJS_PUBLIC_KEY // public key
        )
            .then((result) => {
                toast.success("E-mail enviado com sucesso!")
                setNome("");
                setEmail("");
                setMensagem("");
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Erro ao enviar o e-mail. Tente novamente mais tarde.");
                setLoading(false);
            });
    };

    return (
        <section id="contato">
            <h3 className="small-title">Contato</h3>
            <strong className="title">Fale Conosco</strong>
            
            <div className="links d-flex flex-wrap">
                <div className="info-container whatsapp">
                    <a href={`https://wa.me/${companyData.whatsapp}`} target="_blank" rel="noreferrer noopener">
                        <FaWhatsapp size={24} />
                    </a>
                </div>

                <div className="info-container email">
                    <a href={`mailto:${companyData.email}`}>
                        <Mail size={22} />
                    </a>
                </div>

                <div className="info-container local">
                    <a href={companyData.mapLink} target="_blank" rel="noreferrer noopener">
                        <IoLocationSharp size={22} />
                    </a>
                </div>
            </div>

            <div className="float-form">
                <StaticImage 
                    src="../../assets/images/contato.png"
                    alt="Atendimento"
                    placeholder="blurred"
                />

                <div className="form-container container">
                    <strong>Como podemos te ajudar?</strong>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Seu nome"
                            required
                        />
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Seu e-mail"
                            required
                        />
                        <textarea
                            type="textarea"
                            id="mensagem"
                            name="mensagem"
                            value={mensagem}
                            onChange={e => setMensagem(e.target.value)}
                            placeholder="Sua mensagem"
                            style={{ resize: "none" }}
                            required
                        />
                        <button className="btn-primary" type="submit">
                            {!loading ? (
                                "Enviar"
                            ) : (
                                <div className='spinner-border' role='status' style={{ width: '15px', height: '15px' }}></div>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mapa-container">
                <iframe 
                    src={companyData.iframeMapLink} 
                    title="Mapa Google" 
                    width="800" 
                    height="600" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
};

export default Contato;