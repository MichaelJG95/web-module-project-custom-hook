import React, { useState } from 'react'

export default function useDarkMode(initial) {
    const [darkMode, setDarkMode] = useState(initial)
    return [darkMode, setDarkMode]
}