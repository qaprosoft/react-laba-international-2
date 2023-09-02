document.querySelector('.theme-toggle').onclick = function () {
  document.documentElement.setAttribute(
    'color-scheme',
    document.documentElement.getAttribute('color-scheme') === 'light'
      ? 'dark'
      : 'light',
  );
};
