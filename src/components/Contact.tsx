import React from 'react'
import DropdownMenuCustom from './DropDownMenuCustom'
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <DropdownMenuCustom label="Contact" items={[
  { label: "WhatsApp", href: "https://wa.me/6285156900361", icon: <FaWhatsapp className="text-green-500" /> },
  { label: "Gmail", href: "mailto:yusrilhafis@gmail.com", icon: <SiGmail className="text-red-500" /> },
]} />

    </div>
  )
}

export default Contact

