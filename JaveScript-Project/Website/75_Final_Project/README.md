# Weather App - Ứng dụng Thời tiết

Một ứng dụng thời tiết hiện đại với giao diện thân thiện và nhiều tính năng tiện ích.

## 🌟 Tính năng

### 🎯 Tính năng chính

- ✅ Tìm kiếm thời tiết theo tên thành phố
- ✅ Hiển thị nhiệt độ hiện tại và cảm nhận
- ✅ Thông tin chi tiết: độ ẩm, tốc độ gió, áp suất, tầm nhìn
- ✅ Chuyển đổi giữa độ C và độ F
- ✅ Emoji thời tiết sinh động
- ✅ Lịch sử tìm kiếm (lưu trong localStorage)

### 🎨 Giao diện

- ✅ Thiết kế responsive, hoạt động tốt trên mọi thiết bị
- ✅ Gradient background đẹp mắt
- ✅ Hiệu ứng blur glass-morphism hiện đại
- ✅ Animation mượt mà
- ✅ Loading state với spinner
- ✅ Error handling thân thiện

### 🌍 Ngôn ngữ

- ✅ Giao diện tiếng Việt
- ✅ Mô tả thời tiết bằng tiếng Việt (từ API)
- ✅ Thời gian hiển thị theo múi giờ Việt Nam

## 🚀 Cách sử dụng

### 1. Chuẩn bị API Key

1. Đăng ký tài khoản tại [OpenWeatherMap](https://openweathermap.org/api)
2. Lấy API key miễn phí
3. Thay thế `"YOUR_API_KEY"` trong file `index.js` bằng API key của bạn:

```javascript
this.apiKey = "your_actual_api_key_here";
```

### 2. Chạy ứng dụng

1. Mở file `index.html` trong trình duyệt
2. Nhập tên thành phố vào ô tìm kiếm
3. Nhấn nút tìm kiếm hoặc Enter

### 3. Sử dụng các tính năng

- **Tìm kiếm**: Nhập tên thành phố (tiếng Anh hoặc tiếng Việt)
- **Chuyển đổi nhiệt độ**: Click nút °C hoặc °F
- **Lịch sử**: Click vào các thành phố đã tìm gần đây
- **Responsive**: Sử dụng trên điện thoại, tablet, desktop

## 🔧 Cấu trúc dự án

``` bash
75_Final_Project/
├── index.html          # Giao diện chính
├── style.css           # Styling và animations
├── index.js            # Logic ứng dụng
└── README.md           # Hướng dẫn này
```

## 🎯 Các cải tiến đã thực hiện

### So với phiên bản gốc

#### 1. **Giao diện (UI/UX)**

- ❌ **Cũ**: Giao diện đơn giản, chỉ có form và card cơ bản
- ✅ **Mới**: Thiết kế hiện đại với gradient, glass-morphism, animations

#### 2. **Tính năng**

- ❌ **Cũ**: Chỉ hiển thị nhiệt độ, độ ẩm, mô tả
- ✅ **Mới**: Thêm áp suất, tốc độ gió, tầm nhìn, cảm nhận nhiệt độ

#### 3. **Trải nghiệm người dùng**

- ❌ **Cũ**: Không có loading state, error handling cơ bản
- ✅ **Mới**: Loading spinner, error messages tiếng Việt, lịch sử tìm kiếm

#### 4. **Responsive Design**

- ❌ **Cũ**: Không tối ưu cho mobile
- ✅ **Mới**: Hoạt động hoàn hảo trên mọi thiết bị

#### 5. **Code Quality**

- ❌ **Cũ**: Code functional, khó mở rộng
- ✅ **Mới**: OOP với class, dễ maintain và mở rộng

## 🌐 API được sử dụng

- **OpenWeatherMap API**: Dữ liệu thời tiết real-time
- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Tham số**: `q` (city), `appid` (API key), `units=metric`, `lang=vi`

## 📱 Tương thích

- ✅ Chrome, Firefox, Safari, Edge (phiên bản mới)
- ✅ iOS Safari, Android Chrome
- ✅ Desktop, Tablet, Mobile
- ✅ Độ phân giải từ 320px trở lên

## 🔮 Tính năng có thể mở rộng

- 📅 Dự báo thời tiết 5-7 ngày
- 🗺️ Tích hợp bản đồ
- 📍 Tự động phát hiện vị trí
- 🌡️ Biểu đồ nhiệt độ theo giờ
- 🔔 Thông báo thời tiết
- 💾 Lưu thành phố yêu thích
- 🌈 Theme tùy chỉnh theo thời tiết

## 📞 Hỗ trợ

Nếu gặp vấn đề:

1. Kiểm tra API key đã được thiết lập chưa
2. Kiểm tra kết nối internet
3. Mở Developer Tools để xem lỗi console
4. Đảm bảo tên thành phố được nhập chính xác

---

Được phát triển với ❤️ bằng Vanilla JavaScript, CSS3 và HTML5
