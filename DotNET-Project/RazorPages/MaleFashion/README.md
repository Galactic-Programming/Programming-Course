# Hướng dẫn khởi động dự án MaleFashion (.NET Razor Pages)

---

## English Instructions

### 1. Prerequisites

- .NET SDK 9.0 or later: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
- Visual Studio 2022 or VS Code (recommend installing C# extension)
- PowerShell or Command Prompt

### 2. Steps after cloning the project

#### Step 1: Restore NuGet packages

Run the following command in the project directory:

```powershell
dotnet restore
```

#### Step 2: Restore frontend libraries (wwwroot/lib)

Frontend libraries (Bootstrap, jQuery, etc.) are excluded from source by .gitignore. To restore them, run:

```powershell
libman restore
```

#### Step 3: Build and run the project

Run the following command to build and run:

```powershell
dotnet run
```

Or open the solution in Visual Studio and press F5 to run.

### 3. Configuration (if needed)

- Config files: `appsettings.json`, `appsettings.Development.json`
- You can edit connection strings, logging, etc. in these files.

### 4. Important folders

- `Pages/`: Contains Razor Pages
- `wwwroot/`: Contains static assets (css, js, img, fonts, ...)
- `wwwroot/lib/`: Contains frontend libraries (restored by LibMan)

### 5. Notes

- If you get missing frontend libraries error, make sure you have run `libman restore`.
- If you get build errors, check your .NET SDK version.

---

For more information, contact the project maintainer or see the docs at [https://docs.microsoft.com/aspnet/core/razor-pages/](https://docs.microsoft.com/aspnet/core/razor-pages/)


## 1. Yêu cầu môi trường

- .NET SDK 9.0 trở lên: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)

- Visual Studio 2022 hoặc VS Code (khuyến nghị cài đặt C# extension)

- PowerShell hoặc Command Prompt

## 2. Các bước sau khi clone dự án

### Bước 1: Khôi phục các package NuGet

Chạy lệnh sau trong thư mục dự án:

```powershell
dotnet restore
```

### Bước 2: Khôi phục các thư viện frontend (wwwroot/lib)

Các thư viện frontend (Bootstrap, jQuery, v.v.) đã bị loại khỏi source do .gitignore. Để khôi phục, chạy:

```powershell
libman restore
```

### Bước 3: Build và chạy dự án

Chạy lệnh sau để build và chạy:

```powershell
dotnet run
```

Hoặc mở solution bằng Visual Studio và nhấn F5 để chạy.

## 3. Cấu hình (nếu cần)

- File cấu hình: `appsettings.json`, `appsettings.Development.json`
- Có thể chỉnh sửa các thông số kết nối, logging, ... trong các file này.

## 4. Thư mục quan trọng

- `Pages/`: Chứa các Razor Pages
- `wwwroot/`: Chứa tài nguyên tĩnh (css, js, img, fonts, ...)
- `wwwroot/lib/`: Chứa các thư viện frontend (sẽ được khôi phục bằng LibMan)

## 5. Lưu ý

- Nếu gặp lỗi thiếu thư viện frontend, hãy chắc chắn đã chạy `libman restore`.
- Nếu gặp lỗi build, kiểm tra lại phiên bản .NET SDK.

---

Mọi thắc mắc vui lòng liên hệ quản trị dự án hoặc xem thêm tài liệu tại [https://docs.microsoft.com/aspnet/core/razor-pages/](https://docs.microsoft.com/aspnet/core/razor-pages/)
