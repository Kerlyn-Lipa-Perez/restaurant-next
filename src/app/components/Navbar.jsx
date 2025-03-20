import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
   <>
   <Link href="/">Home</Link>
   <Link href="/about">About</Link>
   <Link href="/contact">Contact</Link>
   </>
  )
}

export default Navbar;