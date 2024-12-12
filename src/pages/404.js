import * as React from "react"

import Seo from "../components/seo"

import NotFound from "../assets/images/404.png"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  const handleGoToHome = () => {
    navigate("/");
  }

  return (
    <main className="d-flex flex-column justify-content-center align-items-center gap-4" style={{ width: "100%", height: "100vh"}}>
      <img src={NotFound} alt="404 Not Found" width={250} />
      <h1 style={{fontSize: "1.4rem"}}>Ops.. Página não encontrada.</h1>
      <button className="btn-primary" onClick={handleGoToHome}>Voltar para o início</button>
    </main>
  )
}


export const Head = () => <Seo title="404: Página não encontrada" />

export default NotFoundPage
