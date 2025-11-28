# 🏪 Restaurant management system

Đồ án website hệ thống quản lí nhà hàng

## 📋 Mô tả dự án

Restaurant management system là một ứng dụng web fullstack được xây dựng để hệ thống quản lí nhà hàng:

- **Frontend**: ReactJs, Tailwind CSS + SCSS
- **Backend**: LaravelNodeJS + Express
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
└── be/                        # Backend - NodeJS + Express
    ├── src/
    │   ├── controllers/       # Controllers xử lý request
    │   ├── models/            # Models tương tác CSDL
    │   ├── routes/            # API routes
    │   ├── middleware/        # Middleware (Auth, ErrorHandler,...)
    │   ├── config/            # Config DB, env
    │   └── app.js             # Express application
    ├── .env                   # Biến môi trường (DB, JWT,...)
    └── package.json           # Cấu hình NodeJS project


```

## 🛠️ Yêu cầu hệ thống

🔧 Yêu cầu cho Frontend (ReactJS)
Node.js: >= 16.x
npm: >= 8.x hoặc yarn: >= 1.22.
Trình duyệt: Chrome, Edge hoặc Firefox mới nhất (để kiểm thử)

🔧 Yêu cầu cho Backend (NodeJS + Express)
Node.js: >= 18.x
npm: >= 9.x
MySQL: >= 5.7 hoặc PostgreSQL >= 12
ORM: Sequelize hoặc Prisma (tuỳ chọn)

## 🚀 Hướng dẫn cài đặt và chạy dự án

### 1. Clone repository

```bash
git clone <repository-url>
cd restaurant-management-system
```

### 2. Cài đặt và chạy Backend

| **node**               |                                  |
| ---------------------- | -------------------------------- |
| `cd be`                | `# Di chuyển vào backend`        |
| `npm install`          | `# Cài đặt package NodeJS`       |
| `cp .env.example .env` | `# Tạo file config môi trường`   |
| `npm run migrate`      | `# Chạy migration database`      |
| `npm run dev`          | `# Khởi động server dev Express` |


**Backend chạy trên:** `http://localhost:8000`  

### 3. Cài đặt và chạy Frontend

| **npm**         | **yarn**       |
| --------------- | -------------- |
| `cd fe`         | `cd fe`        |
| `npm install`   | `yarn install` |
| `npm run dev`   | `yarn dev`     |
| `npm run build` | `yarn build`   |
| `npm start`     | `yarn start`   |

**Frontend chạy trên:** `http://localhost:3000`

## 🔧 Scripts chính

### Frontend

| **npm**         | **yarn**     | **Mô tả**                        |
| --------------- | ------------ | -------------------------------- |
| `npm run dev`   | `yarn dev`   | Development server React         |
| `npm run build` | `yarn build` | Build cho production             |
| `npm start`     | `yarn start` | Chạy production server           |
| `npm run lint`  | `yarn lint`  | Lint code với ESLint             |

### Backend

| **npm**           | **Mô tả**                    |
| ----------------- | ---------------------------- |
| `npm run migrate` | Chạy database migrations     |
| `npm run dev`     | Khởi động dev server Express |
| `npm run seed`    | Seed dữ liệu mẫu (tuỳ chọn)  |
| `npm run start`   | Chạy production server       |


## 📱 Truy cập ứng dụng

- **Frontend**: http://localhost:3000 (Giao diện người dùng)
- **Backend API**: http://localhost:8000

## 🛣️ Routes

- `/` → Trang chủ user
- `/admin` → Admin dashboard
- API endpoints: `/user/home`, `/admin/dashboard`, `/common/share` (Express thường prefix API bằng /api)

## 📝 Ghi chú

- **Ports**: Frontend (3000), Backend (8000)
- **Package Manager**: Có thể dùng npm hoặc yarn (không trộn lẫn)
- **Back End**: Dùng NodeJS + Express

- **Development**: Yarn thường nhanh hơn và cache tốt hơn
