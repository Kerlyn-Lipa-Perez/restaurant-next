import React from 'react'
import Link from 'next/link'
import { useState } from 'react'

function Reservas() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, date, time, people });
  };
  return (
    <div>
        <h1>Reservas</h1>
        <Link href="/">Home</Link>
        
    </div>
  )
}

export default Reservas;