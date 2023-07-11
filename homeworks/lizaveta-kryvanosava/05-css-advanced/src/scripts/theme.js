document.querySelector('.theme-toggle').addEventListener('click', changeTheme);

function changeTheme() {
  document.documentElement.setAttribute(
    'color-scheme',
    document.documentElement.getAttribute('color-scheme') === 'light'
      ? 'dark'
      : 'light',
  );
}
