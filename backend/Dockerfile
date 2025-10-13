# Stage 1: Composer (chỉ cài dependency)
FROM composer:2.6 as composer

WORKDIR /var/www

COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist --no-scripts


# Stage 2: PHP 8.2 FPM
FROM php:8.2-fpm-alpine

# Cài các gói hệ thống
RUN apk add --no-cache \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    libxpm-dev \
    freetype-dev \
    zip \
    unzip \
    libxml2-dev \
    oniguruma-dev \
    bash \
    curl \
    mysql-client \
    icu-dev \
    libzip-dev \
    git

# Cài extension PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql mbstring zip exif pcntl bcmath intl gd

WORKDIR /var/www

# Copy toàn bộ mã nguồn (gồm artisan)
COPY . .

# Copy thư mục vendor từ stage composer
COPY --from=composer /var/www/vendor ./vendor

# Chỉnh quyền cho Laravel
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www

EXPOSE 9000

# Không chạy artisan trong Dockerfile nếu thiếu dev dependencies
CMD ["php-fpm"]
