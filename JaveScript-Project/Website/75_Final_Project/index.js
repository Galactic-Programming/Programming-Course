// Enhanced Weather App JavaScript Code

class WeatherApp {
  constructor() {
    // this.apiKey = "9b9145c29b3cba03fd42a1f89d14f59f"; // OpenWeatherMap API key (REMOVED for security)
    this.apiKey = null; // Will be fetched securely from backend
    this.currentUnit = "celsius";
    this.searchHistory =
      JSON.parse(localStorage.getItem("weatherSearchHistory")) || [];
    this.currentWeatherData = null;

    this.initializeElements();
    this.bindEvents();
    this.loadSearchHistory();
    this.updateDateTime();

    // Fetch API key securely from backend before allowing weather fetches
    this.fetchApiKey().then(() => {
      // Cập nhật thời gian mỗi phút
      setInterval(() => this.updateDateTime(), 60000);
    });
  }

  initializeElements() {
    this.weatherForm = document.querySelector(".weatherForm");
    this.cityInput = document.querySelector(".cityInput");
    this.card = document.querySelector(".card");
    this.errorCard = document.querySelector(".error-card");
    this.loading = document.querySelector(".loading");
    this.recentSearches = document.querySelector(".recent-searches");
    this.searchHistoryContainer = document.querySelector(".search-history");

    // Weather display elements
    this.cityDisplay = document.querySelector(".cityDisplay");
    this.tempDisplay = document.querySelector(".tempDisplay");
    this.feelsLike = document.querySelector(".feels-like");
    this.humidityDisplay = document.querySelector(".humidityDisplay");
    this.descDisplay = document.querySelector(".descDisplay");
    this.weatherEmoji = document.querySelector(".weatherEmoji");
    this.dateTime = document.querySelector(".date-time");
    this.windDisplay = document.querySelector(".windDisplay");
    this.pressureDisplay = document.querySelector(".pressureDisplay");
    this.visibilityDisplay = document.querySelector(".visibilityDisplay");
    this.errorDisplay = document.querySelector(".errorDisplay");

    // Temperature unit buttons
    this.tempUnits = document.querySelectorAll(".temp-unit");
  }

  bindEvents() {
    this.weatherForm.addEventListener("submit", (e) =>
      this.handleFormSubmit(e)
    );

    // Temperature unit toggle
    this.tempUnits.forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.toggleTemperatureUnit(e.target.dataset.unit)
      );
    });

    // Enter key support for input
    this.cityInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        this.handleFormSubmit(e);
      }
    });
  }

  async handleFormSubmit(event) {
    event.preventDefault();

    const city = this.cityInput.value.trim();

    if (!city) {
      this.displayError("Vui lòng nhập tên thành phố");
      return;
    }

    try {
      this.showLoading();
      const weatherData = await this.getWeatherData(city);
      this.currentWeatherData = weatherData;
      this.displayWeatherInfo(weatherData);
      this.addToSearchHistory(city);
      this.cityInput.value = "";
    } catch (error) {
      console.error("Weather fetch error:", error);
      this.displayError(this.getErrorMessage(error));
    } finally {
      this.hideLoading();
    }
  }

  async getWeatherData(city) {
    if (!this.apiKey) {
      throw new Error("API_KEY_NOT_LOADED");
    }
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=vi`;

    console.log(`🌐 Calling API: ${apiUrl}`);

    const response = await fetch(apiUrl);

    console.log(`📡 Response status: ${response.status}`);

    if (!response.ok) {
      const errorData = await response.text();
      console.error("❌ API Error Response:", errorData);

      if (response.status === 404) {
        throw new Error("CITY_NOT_FOUND");
      } else if (response.status === 401) {
        throw new Error("INVALID_API_KEY");
      } else {
        throw new Error("NETWORK_ERROR");
      }
    }

    const data = await response.json();
    console.log("✅ Weather data received:", data);
    return data;
  }

  displayWeatherInfo(data) {
    const {
      name: city,
      sys: { country },
      main: { temp, feels_like, humidity, pressure },
      weather: [{ description, id }],
      wind: { speed },
      visibility,
    } = data;

    this.hideError();
    this.showWeatherCard();

    // Location and time
    this.cityDisplay.textContent = `${city}, ${country}`;
    this.updateDateTime();

    // Temperature
    this.updateTemperatureDisplay(temp, feels_like);

    // Weather description and emoji
    this.descDisplay.textContent = description;
    this.weatherEmoji.textContent = this.getWeatherEmoji(id);

    // Weather details
    this.humidityDisplay.textContent = `${humidity}%`;
    this.windDisplay.textContent = `${speed} m/s`;
    this.pressureDisplay.textContent = `${pressure} hPa`;
    this.visibilityDisplay.textContent = `${(visibility / 1000).toFixed(1)} km`;

    // Add animation to weather card
    this.card.style.animation = "none";
    this.card.offsetHeight; // Trigger reflow
    this.card.style.animation = "slideIn 0.5s ease";
  }

  updateTemperatureDisplay(temp, feelsLike) {
    if (this.currentUnit === "celsius") {
      this.tempDisplay.textContent = `${Math.round(temp)}°C`;
      this.feelsLike.textContent = `Cảm nhận như ${Math.round(feelsLike)}°C`;
    } else {
      const tempF = this.celsiusToFahrenheit(temp);
      const feelsLikeF = this.celsiusToFahrenheit(feelsLike);
      this.tempDisplay.textContent = `${Math.round(tempF)}°F`;
      this.feelsLike.textContent = `Cảm nhận như ${Math.round(feelsLikeF)}°F`;
    }
  }

  toggleTemperatureUnit(unit) {
    if (unit === this.currentUnit) return;

    this.currentUnit = unit;

    // Update active button
    this.tempUnits.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.unit === unit);
    });

    // Update temperature display if we have data
    if (this.currentWeatherData) {
      const {
        main: { temp, feels_like },
      } = this.currentWeatherData;
      this.updateTemperatureDisplay(temp, feels_like);
    }
  }

  celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  getWeatherEmoji(weatherId) {
    const emojiMap = {
      // Thunderstorm
      200: "⛈️",
      201: "⛈️",
      202: "⛈️",
      210: "🌩️",
      211: "🌩️",
      212: "🌩️",
      221: "🌩️",
      230: "⛈️",
      231: "⛈️",
      232: "⛈️",
      // Drizzle
      300: "🌦️",
      301: "🌦️",
      302: "🌧️",
      310: "🌦️",
      311: "🌧️",
      312: "🌧️",
      313: "🌦️",
      314: "🌧️",
      321: "🌦️",
      // Rain
      500: "🌦️",
      501: "🌧️",
      502: "🌧️",
      503: "🌧️",
      504: "🌧️",
      511: "🌨️",
      520: "🌦️",
      521: "🌧️",
      522: "🌧️",
      531: "🌧️",
      // Snow
      600: "🌨️",
      601: "❄️",
      602: "❄️",
      611: "🌨️",
      612: "🌨️",
      613: "🌨️",
      615: "🌨️",
      616: "🌨️",
      620: "🌨️",
      621: "❄️",
      622: "❄️",
      // Atmosphere
      701: "🌫️",
      711: "💨",
      721: "🌫️",
      731: "💨",
      741: "🌫️",
      751: "💨",
      761: "💨",
      762: "🌋",
      771: "💨",
      781: "🌪️",
      // Clear
      800: "☀️",
      // Clouds
      801: "🌤️",
      802: "⛅",
      803: "🌥️",
      804: "☁️",
    };

    return emojiMap[weatherId] || "❓";
  }

  addToSearchHistory(city) {
    const cityName = city.trim().toLowerCase();

    // Remove if already exists
    this.searchHistory = this.searchHistory.filter(
      (item) => item.toLowerCase() !== cityName
    );

    // Add to beginning
    this.searchHistory.unshift(city.trim());

    // Keep only last 5 searches
    if (this.searchHistory.length > 5) {
      this.searchHistory = this.searchHistory.slice(0, 5);
    }

    // Save to localStorage
    localStorage.setItem(
      "weatherSearchHistory",
      JSON.stringify(this.searchHistory)
    );

    this.loadSearchHistory();
  }

  loadSearchHistory() {
    if (this.searchHistory.length === 0) {
      this.recentSearches.style.display = "none";
      return;
    }

    this.searchHistoryContainer.innerHTML = "";

    this.searchHistory.forEach((city) => {
      const historyItem = document.createElement("span");
      historyItem.className = "history-item";
      historyItem.textContent = city;
      historyItem.addEventListener("click", () => {
        this.cityInput.value = city;
        this.handleFormSubmit(new Event("submit"));
      });

      this.searchHistoryContainer.appendChild(historyItem);
    });

    this.recentSearches.style.display = "block";
  }

  updateDateTime() {
    if (this.dateTime) {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      };
      this.dateTime.textContent = now.toLocaleDateString("vi-VN", options);
    }
  }

  showLoading() {
    this.loading.style.display = "block";
    this.hideWeatherCard();
    this.hideError();
  }

  hideLoading() {
    this.loading.style.display = "none";
  }

  showWeatherCard() {
    this.card.style.display = "block";
    this.hideError();
  }

  hideWeatherCard() {
    this.card.style.display = "none";
  }

  showError() {
    this.errorCard.style.display = "block";
    this.hideWeatherCard();
  }

  hideError() {
    this.errorCard.style.display = "none";
  }

  displayError(message) {
    this.errorDisplay.textContent = message;
    this.showError();
  }

  getErrorMessage(error) {
    const errorMessages = {
      CITY_NOT_FOUND:
        "🏙️ Không tìm thấy thành phố. Vui lòng kiểm tra lại tên thành phố.",
      INVALID_API_KEY: `🔑 API key không hợp lệ!
        
        Hướng dẫn khắc phục:
        1. Kiểm tra API key tại: https://home.openweathermap.org/api_keys
        2. Đảm bảo key đã được kích hoạt (có thể mất vài phút)
        3. Xác thực email nếu chưa làm
        4. Thử tạo API key mới nếu cần
        
        API key hiện tại: ${this.apiKey ? this.apiKey.substring(0, 8) : "N/A"}...`,
      NETWORK_ERROR: "🌐 Lỗi kết nối mạng. Vui lòng thử lại sau.",
      API_KEY_NOT_LOADED: "🔒 Không thể tải API key. Vui lòng thử lại sau.",
      default: "❌ Đã có lỗi xảy ra. Vui lòng thử lại sau.",
    };

    return errorMessages[error.message] || errorMessages.default;
  }
}

// Initialize the Weather App when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WeatherApp();
});

// Service Worker registration for PWA (optional)
// Removed because sw.js does not exist in the project, which would cause a 404 error.
// If you add a sw.js file in the future, you can restore this block.
