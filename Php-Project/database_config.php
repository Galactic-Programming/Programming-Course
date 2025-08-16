<?php
/**
 * Database Configuration File
 * 
 * Chứa thông tin cấu hình database để dễ dàng quản lý và bảo mật.
 * Trong production, nên sử dụng environment variables thay vì hardcode.
 */

return [
    'database' => [
        'host' => 'localhost',
        'username' => 'root',
        'password' => getenv('DB_PASSWORD'),
        'name' => 'mydatabase',
        'charset' => 'utf8mb4',
        'port' => 3306
    ],
    'options' => [
        'timeout' => 30,
        'retry_attempts' => 3,
        'debug_mode' => true
    ]
];
?>
