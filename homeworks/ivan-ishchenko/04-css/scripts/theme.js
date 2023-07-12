const root = document.querySelector(":root");
const body = document.querySelector('body');

const lightThemeColorMap = {
  '--bg-color': '#e7e7e7',
  '--primary-color': 'white',
  '--secondary-color': '#d7d7d7',
  '--accent-color': '#FBD144',
  '--primary-text-color': '#3D3D3D',
  '--secondary-text-color': '#575757',
  '--on-accent-text-color': '#3D3D3D',
}

const darkThemeColorMap = {
  '--bg-color': '#0C151D',
  '--primary-color': '#171F26',
  '--secondary-color': '#0C151D',
  '--accent-color': '#FFE071',
  '--primary-text-color': '#F1F2F4',
  '--secondary-text-color': '#A3ABB2',
  '--on-accent-text-color': '#3D3D3D',
}

const setThemeLight = () => {
  for(const [color, value] of Object.entries(lightThemeColorMap))
    root.style.setProperty(color, value)
}

const setThemeDark = () => {
  for(const [color, value] of Object.entries(darkThemeColorMap))
    root.style.setProperty(color, value)
}

const toggleTheme = () => {
  const theme = localStorage.getItem('theme');
  if(theme === 'light') {
    setThemeDark();
    body.classList.remove('page--theme-light')
    body.classList.add('page--theme-dark')
    localStorage.setItem('theme', 'dark');
  } else {
    setThemeLight();
    body.classList.remove('page--theme-dark')
    body.classList.add('page--theme-light')
    localStorage.setItem('theme', 'light');
  }
}

// set initial theme
if(localStorage.getItem('theme') === 'dark') {
  setThemeDark();
  body.classList.remove('page--theme-light')
  body.classList.add('page--theme-dark')
  localStorage.setItem('theme', 'dark');
} else {
  setThemeLight();
  body.classList.remove('page--theme-dark')
  body.classList.add('page--theme-light')
  localStorage.setItem('theme', 'light');
}

const themeToggle = document.querySelector('.theme_toggle');
themeToggle.onclick = toggleTheme;