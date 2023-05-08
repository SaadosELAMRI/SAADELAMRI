import React, { useState } from 'react'
import { sendContactForm } from '../lib/api'

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault() // prevent default form submission behavior
    try {
      const response = await sendContactForm(formValues)
      console.log(response) // handle successful response here
    } catch (error) {
      console.error(error) // handle error here
    }
  }

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
      <h1 className='text-2xl font-bold text-center p-4'>Let's work together</h1>
      <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 gap-2'>
          <input
            className='border shadow-lg p-3'
            type='text'
            placeholder='Name'
            name='name'
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            className='border shadow-lg p-3'
            type='email'
            placeholder='Email'
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <input
          className='border shadow-lg p-3 w-full my-2'
          type='text'
          placeholder='Subject'
          name='subject'
          value={formValues.subject}
          onChange={handleChange}
        />
        <textarea
          className='border shadow-lg p-3 w-full'
          cols='30'
          rows='10'
          placeholder='Message'
          name='message'
          value={formValues.message}
          onChange={handleChange}
        ></textarea>
        <button className='border shadow-lg p-3 w-full mt-2' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
