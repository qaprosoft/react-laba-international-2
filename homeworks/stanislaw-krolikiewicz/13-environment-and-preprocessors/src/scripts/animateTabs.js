const animateTabs = () => {
  const tabs = document.querySelectorAll('.tabs__button');
  let activeTab = document.querySelector('.tabs__button--active');
  const background = document.querySelector('.tabs__background');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const {offsetLeft} = tab;
      background.style.left = `${offsetLeft}px`;
      activeTab.classList.remove('tabs__button--active');
      tab.classList.add('tabs__button--active');
      activeTab = document.querySelector('.tabs__button--active');
    });
  });
  onresize = () => {
    clearTimeout(window.resizeFinished);

    resizeFinished = setTimeout(() => {
      const {offsetLeft} = activeTab;
      background.style.left = `${offsetLeft}px`;
    }, 500);
  };
};

animateTabs();
