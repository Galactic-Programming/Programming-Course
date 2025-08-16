// Demo Weather App với dữ liệu mẫu

class WeatherAppDemo {
  constructor() {
    // Dữ liệu mẫu cho demo
    this.demoData = {
      hanoi: {
        name: "Hanoi",
        sys: { country: "VN" },
        main: {
          temp: 28,
          feels_like: 32,
          humidity: 75,
          pressure: 1013,
        },
        weather: [
          {
            description: "có mây",
            id: 801,
          },
        ],
        wind: { speed: 3.2 },
        visibility: 8000,
      },
      "ho chi minh": {
        name: "Ho Chi Minh City",
        sys: { country: "VN" },
        main: {
          temp: 32,
          feels_like: 36,
          humidity: 80,
          pressure: 1010,
        },
        weather: [
          {
            description: "mưa nhẹ",
            id: 500,
          },
        ],
        wind: { speed: 2.1 },
        visibility: 6000,
      },
      "da nang": {
        name: "Da Nang",
        sys: { country: "VN" },
        main: {
          temp: 30,
          feels_like: 34,
          humidity: 70,
          pressure: 1015,
        },
        weather: [
          {
            description: "trời quang",
            id: 800,
          },
        ],
        wind: { speed: 4.5 },
        visibility: 10000,
      },
      hue: {
        name: "Hue",
        sys: { country: "VN" },
        main: {
          temp: 26,
          feels_like: 29,
          humidity: 85,
          pressure: 1012,
        },
        weather: [
          {
            description: "mưa to",
            id: 502,
          },
        ],
        wind: { speed: 6.2 },
        visibility: 4000,
      },
      "can tho": {
        name: "Can Tho",
        sys: { country: "VN" },
        main: {
          temp: 31,
          feels_like: 35,
          humidity: 78,
          pressure: 1008,
        },
        weather: [
          {
            description: "mưa rào và dông",
            id: 200,
          },
        ],
        wind: { speed: 3.8 },
        visibility: 7000,
      },
    };

    this.currentUnit = "celsius";
    this.searchHistory =
      JSON.parse(localStorage.getItem("weatherSearchHistoryDemo")) || [];
    this.currentWeatherData = null;

    this.initializeElements();
    this.bindEvents();
    this.loadSearchHistory();
    this.updateDateTime();

    // Cập nhật thời gian mỗi phút
    setInterval(() => this.updateDateTime(), 60000);
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

      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const weatherData = this.getDemoWeatherData(city);
      this.currentWeatherData = weatherData;
      this.displayWeatherInfo(weatherData);
      this.addToSearchHistory(city);
      this.cityInput.value = "";
    } catch (error) {
      console.error("Weather fetch error:", error);
      this.displayError(error.message);
    } finally {
      this.hideLoading();
    }
  }

  getDemoWeatherData(city) {
    const cityKey = city.toLowerCase().trim();

    if (this.demoData[cityKey]) {
      return this.demoData[cityKey];
    }

    // Throw error for unknown cities
    throw new Error(
      "Không tìm thấy dữ liệu thời tiết cho thành phố này. Thử: Hanoi, Ho Chi Minh, Da Nang, Hue, Can Tho"
    );
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
      "weatherSearchHistoryDemo",
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
}

// Initialize the Demo Weather App when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new WeatherAppDemo();
});
