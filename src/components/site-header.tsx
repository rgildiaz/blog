"use client"

import { siteConfig } from '@/src/config/site'
import { useState } from 'react'

function DarkModeButton(props: { darkMode: boolean, onClick: () => void }) {
  return (<div
    className='h-full self-center justify-self-end text-4xl md:text-5xl hover:text-slate-500 hover:cursor-pointer transition-colors'
    onClick={props.onClick}
  >
    {props.darkMode ? "☼" : "☾"}</div>
  )
}

export function SiteHeader() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className='mb-4 w-full top-3 sticky backdrop-blur-lg bg-slate-200/50 py-3 px-5 rounded-lg flex flex-row justify-between'>
      <h1 className="text-start text-5xl md:text-6xl font-sans font-light mb-2" >{siteConfig.name}</h1>
      <DarkModeButton darkMode={darkMode} onClick={toggleDarkMode} />
    </div>
  )
}