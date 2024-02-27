//메인배너 슬라이드
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.banner-slider');
    const indexDisplay = document.querySelector('.slider-index'); // Get the index display element
    const totalSlides = slider.children.length;
    let currentIndex = 1; // Start with the first image
    let isSliding = false;
  
    function updateIndexDisplay() {
      indexDisplay.textContent = `${currentIndex} / ${totalSlides} +`;
    }
  
    setInterval(() => {
      if (!isSliding) {
        isSliding = true;
        slider.style.transform = 'translateX(-100%)';
      }
    }, 3000); // Adjust time for each slide
  
    slider.addEventListener('transitionend', () => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      slider.appendChild(slider.firstElementChild); // Move the first image to the end
      slider.offsetHeight; // Force reflow
      slider.style.transition = 'transform 0.5s ease-out';
      isSliding = false;
      // Update the index
      currentIndex = (currentIndex % totalSlides) + 1;
      updateIndexDisplay();
    });
  
    updateIndexDisplay(); // Initial display update
  });
  

  
//글쓰기 버튼을 누르면 리스트들이 보이기

//하단 헤더에서 더보기를 누르면 리스트로 보이기