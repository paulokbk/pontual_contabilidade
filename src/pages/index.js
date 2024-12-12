import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Banner from "../components/sections/banner"
import Sobre from "../components/sections/sobre"
import Destaques from "../components/sections/destaques"
import Servicos from "../components/sections/servicos"
import Beneficios from "../components/sections/beneficios"
import Contato from "../components/sections/contato"

const IndexPage = () => { 
  return (
    <Layout>
      <Banner />
      <Sobre />
      <Destaques />
      <Servicos />
      <Beneficios />
      <Contato />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
