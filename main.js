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

//하단 헤더에서 더보기를 누르면 리스트로 보이기