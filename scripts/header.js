const header = document.querySelector('.header');

const setHeaderHeight = () => {
    if (window.pageYOffset > 100) {
      header.classList.remove('big');
      header.classList.add('small');
    } else {
        header.classList.remove('small');
      header.classList.add('big');
    }
};

setHeaderHeight();

document.addEventListener('scroll', setHeaderHeight);