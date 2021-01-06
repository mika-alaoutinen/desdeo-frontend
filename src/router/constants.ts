export const home = '/'
export const about = '/about'
export const barchart = '/barchart'

interface NavLink {
  text: string,
  to: NavPath
}

type NavPath =
  | typeof home
  | typeof about
  | typeof barchart

// The routes for the application
export const navigation: NavLink[] = [
  { text: 'Home', to: home },
  { text: 'About', to: about },
  { text: 'Bar chart', to: barchart },
]