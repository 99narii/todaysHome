//메인배너 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.banner-slider');
    const indexDisplay = document.querySelector('.slider-index'); 
    const totalSlides = slider.children.length;
    let currentIndex = 1;
    let isSliding = false;
  
    function updateIndexDisplay() {
      indexDisplay.textContent = `${currentIndex} / ${totalSlides} +`;
    }
  
    setInterval(() => {
      if (!isSliding) {
        isSliding = true;
        slider.style.transform = 'translateX(-100%)';
      }
    }, 3000);
  
    slider.addEventListener('transitionend', () => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.appendChild(slider.firstElementChild);
      slider.offsetHeight;
      slider.style.transition = 'transform 0.5s ease-out';
      isSliding = false;
      currentIndex = (currentIndex % totalSlides) + 1;
      updateIndexDisplay();
    });
  
    updateIndexDisplay(); 
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    // 버튼 요소 선택
    var modalOpenBtn = document.getElementById('modal-open');
    
    // 버튼 클릭 이벤트 리스너 추가
    modalOpenBtn.addEventListener('click', function() {
      // div 요소 선택
      var divModal = document.getElementById('menus');
      // div의 display 속성을 'block'으로 변경하여 보이게 함
      divModal.style.display = 'block';
    });
  });

//글쓰기 버튼을 누르면 리스트들이 보이기

document.querySelector('.header-upper-writeBtn').addEventListener('click', function() {
  var lists = document.querySelector('.header-upper-lists');
  if (lists.style.display === 'block') {
    lists.style.display = 'none';
  } else {
    lists.style.display = 'block';
  }
});


//하단 헤더에서 더보기를 누르면 리스트로 보이기

//카테고리 캐러셀

document.addEventListener("DOMContentLoaded", function() {
  const categoryList = document.querySelector(".category-list ul");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let scrollAmount = 0;

  //초기 prev 버튼 숨김
  prevBtn.style.display = 'none';

  nextBtn.addEventListener("click", function() {
    scrollAmount += 500; 
    categoryList.style.transform = `translateX(-${scrollAmount}px)`;

    // 스크롤이 시작되면 prev btn 보임
    if (scrollAmount > 0) {
      prevBtn.style.display = 'block';
    }
  });

  prevBtn.addEventListener("click", function() {
    scrollAmount -= 500; 
    scrollAmount = Math.max(0, scrollAmount); 
    categoryList.style.transform = `translateX(-${scrollAmount}px)`;

    // 스크롤 위치가 0이면 prev btn 숨김
    if (scrollAmount === 0) {
      prevBtn.style.display = 'none';
    }
  });
});




