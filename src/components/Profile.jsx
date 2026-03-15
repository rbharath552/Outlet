import React from 'react'

const Profile = () => {
  return (
     
 <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 mb-4 rounded"
        />

        <button className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600">
          Register
        </button>
      </div>
    </div>
  )
}

export default Profile