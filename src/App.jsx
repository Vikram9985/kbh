import React from 'react'
import Register from './components/Register'
import HomePage from './components/HomePage'

export default function App() {
  return (
    <div className="p-4">
      {/* Render the Register page/component */}
      <Register />
      <HomePage/>
    </div>
  )
}