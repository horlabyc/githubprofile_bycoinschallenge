
const doHandleMenuClick = () => {
  const headerItems = document.querySelector('.header-items');
  if(headerItems.className === 'header-items') {
    headerItems.className += ' d-none';
  } else {
    headerItems.className = 'header-items';
  }
}