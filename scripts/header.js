const topLink = document.querySelector('#top-link ')
const header = document.querySelector('.header');

const setHeaderHeight = () => {
    if (window.pageYOffset > 100) {
      header.classList.remove('big');
      header.classList.add('small');
      topLink.style.opacity = 1;
    } else {
        header.classList.remove('small');
        topLink.style.opacity = 0;
      header.classList.add('big');
    }
};

setHeaderHeight();

document.addEventListener('scroll', setHeaderHeight);