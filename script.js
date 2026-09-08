// 스크롤 시 헤더에 그림자 효과 추가
const header = document.getElementById('header');

function updateHeader() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateHeader);
updateHeader();
