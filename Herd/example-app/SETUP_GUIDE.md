# Hướng dẫn cài đặt và khởi động dự án / Setup & Run Guide

---

## Tiếng Việt

Sau khi clone dự án về, bạn cần thực hiện các bước sau để cài đặt và chạy dự án Laravel này:

### 1. Cài đặt các công cụ cần thiết

- PHP >= 8.1
- Composer
- Node.js & npm
- SQLite (hoặc MySQL nếu bạn muốn tự cấu hình)

### 2. Cài đặt các package PHP

Chạy lệnh sau để cài đặt các package PHP:

```bash
composer install
```

### 3. Cài đặt các package Node.js

Chạy lệnh sau để cài đặt các package frontend:

```bash
npm install
```

### 4. Tạo file môi trường

Sao chép file `.env.example` thành `.env`:

```bash
cp .env.example .env
```

Sau đó, chỉnh sửa các thông tin cấu hình trong file `.env` cho phù hợp (nếu cần).

### 5. Tạo key ứng dụng Laravel

```bash
php artisan key:generate
```

### 6. Chạy migration và seed database (nếu có)

```bash
php artisan migrate --seed
```

### 7. Build tài nguyên frontend

```bash
npm run build
```

### 8. Khởi động server

```bash
php artisan serve
```

Truy cập vào địa chỉ hiển thị trên terminal (mặc định là [http://localhost:8000](http://localhost:8000)) để sử dụng ứng dụng.

---

Nếu gặp lỗi hoặc cần hỗ trợ, hãy kiểm tra lại các bước trên hoặc liên hệ với người phát triển dự án.

---

## English

After cloning the project, please follow these steps to install and run this Laravel project:

### 1. Install required tools

- PHP >= 8.1
- Composer
- Node.js & npm
- SQLite (or MySQL if you want to configure manually)

### 2. Install PHP packages

Run the following command to install PHP packages:

```bash
composer install
```

### 3. Install Node.js packages

Run the following command to install frontend packages:

```bash
npm install
```

### 4. Create environment file

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Then, edit the configuration in `.env` as needed.

### 5. Generate Laravel app key

```bash
php artisan key:generate
```

### 6. Run migration and seed database (if needed)

```bash
php artisan migrate --seed
```

### 7. Build frontend assets

```bash
npm run build
```

### 8. Start the server

```bash
php artisan serve
```

Visit the address shown in the terminal (default: [http://localhost:8000](http://localhost:8000)) to use the application.

---

If you encounter errors or need support, please review the steps above or contact the project maintainer.
