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
    │   ├── models/            # Models tương tác CSDL (Sequelize/Prisma)
    │   ├── routes/            # API routes
    │   ├── middleware/        # Middleware: Auth, ErrorHandler,...
    │   ├── config/            # Kết nối DB, môi trường
    │   └── app.js             # Express application
    ├── .env                   # Biến môi trường (DB, JWT,...)
    ├── package.json           # Cấu hình NodeJS project
    └── server.js              # Khởi động server Express

🛠️ Yêu cầu hệ thống

🔧 Yêu cầu cho Frontend (ReactJS)

Node.js: >= 16.x

npm: >= 8.x hoặc yarn >= 1.22

Trình duyệt: Chrome, Edge hoặc Firefox mới nhất

🔧 Yêu cầu cho Backend (NodeJS + Express)

Node.js: >= 18.x

npm: >= 9.x

MySQL >= 5.7 hoặc PostgreSQL >= 12

ORM đề xuất: Sequelize hoặc Prisma

Công cụ DB: XAMPP, MySQL Workbench hoặc Docker
