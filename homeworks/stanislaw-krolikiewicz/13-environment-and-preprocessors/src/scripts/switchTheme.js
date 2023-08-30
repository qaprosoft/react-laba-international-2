// code downloaded from https://github.com/iconfu/svg-inject

let currentTheme = localStorage.getItem('theme') || 'light';
const themeSwitcher = document.getElementById('theme-switcher');
const setTheme = theme => {
  if (theme === 'dark') {
    themeSwitcher.classList.replace(
      'theme-switcher--light',
      'theme-switcher--dark',
    );
  } else {
    themeSwitcher.classList.replace(
      'theme-switcher--dark',
      'theme-switcher--light',
    );
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
