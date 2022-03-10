import useLocalStorage from './useLocalStorage'

export default function useDarkMode(initial) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initial)
    return [darkMode, setDarkMode]
}