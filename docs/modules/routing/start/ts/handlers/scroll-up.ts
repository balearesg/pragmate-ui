const TOP = 0
const BEHAVIOR = 'smooth'

export function ScrollUp () {
    window.scrollTo({ top: TOP, behavior: BEHAVIOR });
    return true
}