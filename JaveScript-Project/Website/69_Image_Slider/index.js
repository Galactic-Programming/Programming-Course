// ===== IMAGE SLIDER - ENHANCED VERSION =====

// Khởi tạo các biến toàn cục
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const currentSlideSpan = document.getElementById("current-slide");
const totalSlidesSpan = document.getElementById("total-slides");
const playPauseBtn = document.getElementById("play-pause-btn");
const speedRange = document.getElementById("speed-range");
const speedValue = document.getElementById("speed-value");

let currentSlideIndex = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let autoPlaySpeed = 3000; // 3 giây

// ===== KHỞI TẠO SLIDER =====
document.addEventListener("DOMContentLoaded", function () {
  initializeSlider();
  setupEventListeners();
});

function initializeSlider() {
  if (slides.length === 0) {
    console.error("Không tìm thấy slide nào!");
    return;
  }

  // Hiển thị slide đầu tiên
  showSlide(0);

  // Cập nhật tổng số slide
  totalSlidesSpan.textContent = slides.length;

  // Bắt đầu auto-play
  startAutoPlay();

  console.log(`🎯 Slider đã được khởi tạo với ${slides.length} slides`);
}

// ===== HIỂN THỊ SLIDE =====
function showSlide(index) {
  // Kiểm tra index hợp lệ
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  // Ẩn tất cả slides
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    indicators[i].classList.remove("active");
  });

  // Hiển thị slide hiện tại
  slides[currentSlideIndex].classList.add("active");
  indicators[currentSlideIndex].classList.add("active");

  // Cập nhật counter
  currentSlideSpan.textContent = currentSlideIndex + 1;

  // Log thông tin slide hiện tại
  const slideData = slides[currentSlideIndex].dataset;
  console.log(`📍 Đang hiển thị: ${slideData.city}, ${slideData.country}`);
}

// ===== ĐIỀU HƯỚNG SLIDE =====
function nextSlide() {
  showSlide(currentSlideIndex + 1);
  resetAutoPlay(); // Reset timer khi user tương tác
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
  resetAutoPlay(); // Reset timer khi user tương tác
}

function currentSlide(index) {
  showSlide(index - 1); // index bắt đầu từ 1
  resetAutoPlay(); // Reset timer khi user tương tác
}

// ===== AUTO-PLAY FUNCTIONS =====
function startAutoPlay() {
  if (isAutoPlaying) {
    autoPlayInterval = setInterval(nextSlide, autoPlaySpeed);
    updatePlayPauseButton();
  }
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  updatePlayPauseButton();
}

function toggleAutoPlay() {
  isAutoPlaying = !isAutoPlaying;

  if (isAutoPlaying) {
    startAutoPlay();
    showNotification("▶️ Đã bật tự động chuyển slide");
  } else {
    stopAutoPlay();
    showNotification("⏸️ Đã tạm dừng tự động chuyển slide");
  }
}

function resetAutoPlay() {
  if (isAutoPlaying) {
    stopAutoPlay();
    startAutoPlay();
  }
}

function updatePlayPauseButton() {
  const icon = playPauseBtn.querySelector("i");
  const text = playPauseBtn.querySelector("span");

  if (isAutoPlaying) {
    icon.className = "fas fa-pause";
    text.textContent = "Tạm dừng";
  } else {
    icon.className = "fas fa-play";
    text.textContent = "Phát";
  }
}

// ===== SPEED CONTROL =====
function changeSpeed(newSpeed) {
  autoPlaySpeed = parseInt(newSpeed);
  speedValue.textContent = autoPlaySpeed / 1000 + "s";

  // Restart auto-play với tốc độ mới
  if (isAutoPlaying) {
    stopAutoPlay();
    startAutoPlay();
  }

  showNotification(`⚡ Đã thay đổi tốc độ: ${autoPlaySpeed / 1000}s`);
}

// ===== KEYBOARD NAVIGATION =====
function setupEventListeners() {
  // Bàn phím
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        prevSlide();
        event.preventDefault();
        break;
      case "ArrowRight":
        nextSlide();
        event.preventDefault();
        break;
      case " ": // Space bar
        toggleAutoPlay();
        event.preventDefault();
        break;
      case "Home":
        currentSlide(1);
        event.preventDefault();
        break;
      case "End":
        currentSlide(slides.length);
        event.preventDefault();
        break;
    }
  });

  // Touch/Swipe support cho mobile
  let startX = 0;
  let endX = 0;

  const slider = document.querySelector(".slider");

  slider.addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
  });

  slider.addEventListener("touchend", function (event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for swipe
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide(); // Swipe left - next slide
      } else {
        prevSlide(); // Swipe right - prev slide
      }
    }
  }

  // Tạm dừng auto-play khi hover
  const sliderContainer = document.querySelector(".slider-container");
  sliderContainer.addEventListener("mouseenter", function () {
    if (isAutoPlaying) {
      stopAutoPlay();
    }
  });

  sliderContainer.addEventListener("mouseleave", function () {
    if (isAutoPlaying) {
      startAutoPlay();
    }
  });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
  // Tạo notification element
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 25px;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animation
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Auto remove
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 2500);
}

// ===== UTILITY FUNCTIONS =====
function getSlideInfo() {
  const currentSlide = slides[currentSlideIndex];
  const data = currentSlide.dataset;
  return {
    index: currentSlideIndex + 1,
    total: slides.length,
    city: data.city,
    country: data.country,
    isAutoPlaying: isAutoPlaying,
    speed: autoPlaySpeed,
  };
}

// ===== DEBUG & DEVELOPMENT =====
function logSliderStatus() {
  const info = getSlideInfo();
  console.table(info);
}

// Expose functions to global scope for debugging
window.sliderDebug = {
  logStatus: logSliderStatus,
  getInfo: getSlideInfo,
  goToSlide: currentSlide,
  toggleAuto: toggleAutoPlay,
};

// ===== PRELOAD IMAGES =====
function preloadImages() {
  slides.forEach((slide) => {
    const img = slide.querySelector("img");
    const imageUrl = img.src;
    const preloadImg = new Image();
    preloadImg.src = imageUrl;
  });
  console.log("🖼️ Đã preload tất cả hình ảnh");
}

// Preload images sau khi DOM loaded
document.addEventListener("DOMContentLoaded", preloadImages);

// ===== WELCOME MESSAGE =====
console.log(`
🌟 ===== WELCOME TO TRAVEL SLIDER ===== 🌟
🎯 Các phím tắt:
   ← → : Chuyển slide
   Space: Tạm dừng/Phát
   Home: Slide đầu tiên  
   End: Slide cuối cùng
📱 Hỗ trợ swipe trên mobile
🖱️ Hover để tạm dừng auto-play
🐛 Debug: window.sliderDebug
=============================================
`);
