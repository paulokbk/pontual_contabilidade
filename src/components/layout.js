import * as React from "react"

import "../assets/sass/layout.scss"

import Footer from "./footer"
import Header from "./header"

import companyData from "../data/companyData"

import whatsappImage from '../assets/images/icons/whatsapp.png'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <Header />
      <main>{children}</main>
      <Footer />
      <a href={`https://wa.me/${companyData.whatsapp}`} className="whatsapp-button" target="_blank" rel="noreferrer noopener">
        <img src={whatsappImage} alt="WhatsApp" width={55} />
      </a>
      <ToastContainer />
    </div>
  )
}

export default Layout
