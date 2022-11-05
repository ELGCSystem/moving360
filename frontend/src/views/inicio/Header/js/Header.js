import React from 'react'
import '../css/Header.css';
import casaHeader from '../img/casaHeader.jpg'

const Header = () => {
  return (
    <div className='header-principal'>
      <img className='img-header' src={casaHeader} alt="" />
      <a href='/' className='anchor-header'>Quiero Vender</a>
      <a href='/comprar' className='anchor-header'>Quiero Comprar</a>
      <a href='/alquilar' className='anchor-header'>Quiero Alquilar</a>
    </div>
  )
}

export default Header
