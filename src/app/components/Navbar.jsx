import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
   <>
   <Link href="/">Home</Link>
   <Link href="/about">About</Link>
   <Link href="/contact">Contact</Link>
   </>
  )
}

export default Navbar