# 🏪 Restaurant management system

Đồ án website hệ thống quản lí nhà hàng

## 📋 Mô tả dự án

Restaurant management system là một ứng dụng web fullstack được xây dựng để hệ thống quản lí nhà hàng:

- **Frontend**: ReactJs, Tailwind CSS + SCSS
- **Backend**: Laravel
- **Features**: Server-Side Rendering, SEO-optimized

## 📁 Cấu trúc dự án

```
restaurant-management-system/
├── fe/                        # Frontend - ReactJS
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── components/        # Các thành phần UI tái sử dụng
│   │   ├── pages/             # Các trang chính (home, menu, admin, v.v.)
│   │   ├── styles/            # SCSS, TailwindCSS configs
│   │   └── utils/             # Tiện ích (API helper, constants, hooks,...)
│   ├── tailwind.config.js     # Cấu hình Tailwind CSS
│   ├── postcss.config.js      # Cấu hình PostCSS
│   └── package.json           # Cấu hình project React
│
└── be/                        # Backend - Laravel
    ├── app/
    │   ├── Http/Controllers/  # Controllers xử lý request
    │   ├── Models/            # Models tương tác CSDL
    │   └── Services/          # (tuỳ chọn) Business logic
    ├── routes/
    │   └── api.php            # API routes
    ├── database/
    │   ├── migrations/        # Tạo bảng DB
    │   └── seeders/           # Dữ liệu mẫu
    ├── .env                   # Biến môi trường (CSDL, mail,...)
    └── composer.json          # Cấu hình Laravel project

```

## 🛠️ Yêu cầu hệ thống

🔧 Yêu cầu cho Frontend (ReactJS)
Node.js: >= 16.x
npm: >= 8.x hoặc yarn: >= 1.22.
Trình duyệt: Chrome, Edge hoặc Firefox mới nhất (để kiểm thử)

🔧 Yêu cầu cho Backend (Laravel)
PHP: >= 8.1
Composer: >= 2.x
MySQL: >= 5.7 hoặc PostgreSQL >= 12
Laravel CLI (tuỳ chọn): để hỗ trợ artisan commands
Apache hoặc Laravel Valet, XAMPP, hoặc Laravel Sail (nếu dùng Docker)

## 🚀 Hướng dẫn cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone <repository-url>
cd restaurant-management-system
```

### 2. Cài đặt và chạy Backend

| **npm**               | **yarn**           |
| --------------------- | ------------------ |
| `cd be`               | `cd be`            |
| `npm install`         | `yarn install`     |
| `npm run db:generate` | `yarn db:generate` |
| `npm run db:migrate`  | `yarn db:migrate`  |
| `npm run start:dev`   | `yarn start:dev`   |
| `npm run build`       | `yarn build`       |
| `npm run start:prod`  | `yarn start:prod`  |

**Backend chạy trên:** `http://localhost:8000`  
**Swagger API:** `http://localhost:8000/api`

### 3. Cài đặt và chạy Frontend

| **npm**         | **yarn**       |
| --------------- | -------------- |
| `cd fe`         | `cd fe`        |
| `npm install`   | `yarn install` |
| `npm run dev`   | `yarn dev`     |
| `npm run build` | `yarn build`   |
| `npm start`     | `yarn start`   |

**Frontend chạy trên:** `http://localhost:4300`

## 🔧 Scripts chính

### Frontend

| **npm**         | **yarn**     | **Mô tả**                        |
| --------------- | ------------ | -------------------------------- |
| `npm run dev`   | `yarn dev`   | Development server với Turbopack |
| `npm run build` | `yarn build` | Build cho production             |
| `npm start`     | `yarn start` | Chạy production server           |
| `npm run lint`  | `yarn lint`  | Lint code với ESLint             |

### Backend

| **npm**             | **yarn**         | **Mô tả**                  |
| ------------------- | ---------------- | -------------------------- |
| `npm run start:dev` | `yarn start:dev` | Development với hot reload |
| `npm run start`     | `yarn start`     | Production mode            |
| `npm run build`     | `yarn build`     | Build TypeScript           |
| `npm run lint`      | `yarn lint`      | Lint code                  |

## 📱 Truy cập ứng dụng

- **Frontend**: http://localhost:4300 (Giao diện người dùng)
- **Backend API**: http://localhost:4301 (API endpoints)
- **Swagger Documentation**: http://localhost:4301/api

## 🛣️ Routes

- `/` → Trang chủ user
- `/admin` → Admin dashboard
- API endpoints: `/user/home`, `/admin/dashboard`, `/common/share`

## 📝 Ghi chú

- **Ports**: Frontend (4300), Backend (4301)
- **Package Manager**: Có thể dùng npm hoặc yarn (không trộn lẫn)
- **Development**: Yarn thường nhanh hơn và cache tốt hơn
