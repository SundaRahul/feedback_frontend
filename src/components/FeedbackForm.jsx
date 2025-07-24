import React, { useState } from 'react'

function FeedbackForm({onAdd}) {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        message:''
    });

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.name||!formData.email||!formData.message){
            alert("Please fill all the fields")
            return;
        }
        onAdd(formData);
        setFormData({ name: '', email: '', message: '' });
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
  return (
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto bg-gray-100 p-6 rounded-2xl shadow-md space-y-4'>
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Submit Feedback</h2>

        <div>
            <label className="block text-xl font-medium text-gray-600" >Name</label>
            <input type="text" name="name" 
            className='w-full text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-ring-blue-500'
            value={formData.name}
            onChange={handleChange}
            required />
        </div>
        <div>
            <label className="block text-xl font-medium text-gray-600" >Email</label>
            <input type="email" name="email" 
            className='w-full text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-ring-blue-500'
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div>
            <label className="block text-xl font-medium text-gray-600" >Message</label>
            <textarea name="message" 
            className='w-full text-black mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus-ring-blue-500'
            value={formData.message}
            onChange={handleChange}
            required />
        </div>

        <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>

    </form>
  )
}

export default FeedbackForm