# Sử dụng Node LTS mới
FROM node:18-alpine

# Tạo thư mục ứng dụng
WORKDIR /app

# Copy package files và cài đặt phụ thuộc
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code vào image
COPY . .

# Build ứng dụng React (ra thư mục build/ hoặc dist/)
RUN npm run build

# Cài server để serve file tĩnh
RUN npm install -g serve

# Chạy ứng dụng React
CMD ["serve", "-s", "build", "-l", "3000"]
