<<<<<<< HEAD
const tabButtons = document.querySelectorAll('.tab__buttons-button');
=======
const tabButtons = document.querySelectorAll('.tab-button');
>>>>>>> 5d53e5b2da1e1e1f2f060f3eb632de61c67067cf
const tabPanels = document.querySelectorAll('.tab-panel');

let activeTab = null;

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    const currentTabPanel = document.getElementById(tabId);

    if (currentTabPanel.classList.contains('active')) {
      return;
    }

    tabButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    tabPanels.forEach(panel => {
      panel.classList.remove('active');
    });

    button.classList.add('active');
    currentTabPanel.classList.add('active');
    activeTab = currentTabPanel;
  });
});

