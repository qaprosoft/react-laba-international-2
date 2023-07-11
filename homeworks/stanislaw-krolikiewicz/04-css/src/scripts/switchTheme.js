let currentTheme = localStorage.getItem('theme') || 'light';
const body = document.querySelector('body');
const themeSwitcher = document.getElementById('theme-switcher');
const themeSwitcherIcon = document.getElementById('theme-switcher__icon');

const setTheme = (theme) => {
  if (theme === 'dark') {
    themeSwitcherIcon.classList
      .replace('theme-switcher__icon--light', 'theme-switcher__icon--dark');
  } else {
    themeSwitcherIcon.classList
      .replace('theme-switcher__icon--dark', 'theme-switcher__icon--light');
  }
  document.documentElement.className = theme;
};

const switchTheme = () => {
  if (currentTheme === 'light') {
    setTheme('dark');
    currentTheme = 'dark';
  } else {
    setTheme('light');
    currentTheme = 'light';
  }
  
  localStorage.setItem('theme', currentTheme);
};

setTheme(currentTheme);

themeSwitcher.addEventListener('click', () => {
  switchTheme();
});