import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: 'facebook',
    logo: <FaFacebookF />
  },
  {
    name: 'instagram',
    logo: <FaInstagram />
  }, {
    name: 'twitter',
    logo: <FaTwitter />
  }
]

const Footer = () => {
  return (
    <footer className="bg-[#b51818] py-8 px-12 flex justify-evenly items-center ">
      <Link href={'/'}  >
        Shoplette
      </Link>
      <h1>@2024 Shoplette All rights reserved</h1>
      <ul className='flex justify-between items-center gap-8 ' >
        {socialLinks.map((item) => (
          <li key={item.name} >
            {item.logo}
          </li>
        ))}
      </ul>
    </footer>

  )
}

export default Footer