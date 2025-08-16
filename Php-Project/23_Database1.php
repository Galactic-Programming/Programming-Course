<?php
/**
 * Database Setup & Migration Runner
 * 
 * File này chạy các database migrations và thiết lập kết nối cơ sở dữ liệu
 * cho dự án học PHP-MySQL.
 * 
 * Chức năng:
 * - Tự động tạo database nếu chưa có
 * - Chạy migrations để tạo tables
 * - Thiết lập relationships giữa các tables
 * - Cung cấp PDO connection để sử dụng
 */

// Include class Migration
require_once '23_Database2.php';

// Thông tin kết nối database
$db_server = getenv('DB_SERVER') ?: "localhost";
$db_username = getenv('DB_USERNAME') ?: "root";
$db_password = getenv('DB_PASSWORD') ?: "";
$db_name = getenv('DB_NAME') ?: "mydatabase";

echo "<h1>🏗️ Database Setup & Migration</h1>";

try {
    // Tạo instance của Migration class
    $migration = new DatabaseMigration($db_server, $db_username, $db_password, $db_name);
    
    // Hiển thị thông tin database
    $migration->showDatabaseInfo();
    
    // Chạy tất cả migrations
    $migration->runAllMigrations();
    
    // Tuỳ chọn: Thêm sample data (uncomment dòng dưới nếu muốn)
    // $migration->seedSampleData();
    
    // Lấy PDO connection để sử dụng cho các operations khác
    $pdo = $migration->getPdo();
    
    echo "<br><div style='background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 5px;'>";
    echo "<h3 style='color: #155724; margin: 0;'>🎉 Database setup completed successfully!</h3>";
    echo "<p style='margin: 5px 0 0 0; color: #155724;'>✅ Database is ready to use with all tables and relationships configured.</p>";
    echo "</div>";
    
    // Hiển thị options để quản lý database
    echo "<br><hr>";
    echo "<h3>🛠️ Database Management Options:</h3>";
    echo "<p>You can now:</p>";
    echo "<ul>";
    echo "<li>📝 <strong>Insert data:</strong> Use the PDO connection to add records</li>";
    echo "<li>🔍 <strong>Query data:</strong> Select and display information</li>";
    echo "<li>✏️ <strong>Update records:</strong> Modify existing data</li>";
    echo "<li>🗑️ <strong>Delete data:</strong> Remove unwanted records</li>";
    echo "</ul>";
    
    // Sample code snippet để user tham khảo
    echo "<h4>💡 Sample Usage:</h4>";
    echo "<pre style='background: #f8f9fa; border: 1px solid #e9ecef; padding: 10px; border-radius: 5px;'>";
    echo htmlspecialchars('
// Sử dụng $pdo connection:
$stmt = $pdo->prepare("SELECT * FROM users WHERE status = ?");
$stmt->execute([\'active\']);
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($users as $user) {
    echo "User: " . $user[\'username\'] . "<br>";
}
    ');
    echo "</pre>";
    
} catch(Exception $e) {
    echo "<div style='background: #f8d7da; border: 1px solid #f5c6cb; padding: 15px; border-radius: 5px;'>";
    echo "<h3 style='color: #721c24; margin: 0;'>❌ Migration Error</h3>";
    echo "<p style='margin: 5px 0 0 0; color: #721c24;'>" . $e->getMessage() . "</p>";
    echo "</div>";
    
    echo "<br><h4>🔧 Troubleshooting Tips:</h4>";
    echo "<ol>";
    echo "<li><strong>Check MySQL Service:</strong> Ensure MySQL is running</li>";
    echo "<li><strong>Verify Credentials:</strong> Username/password must be correct</li>";
    echo "<li><strong>Database Permissions:</strong> User must have CREATE/ALTER privileges</li>";
    echo "<li><strong>Port Access:</strong> Default MySQL port is 3306</li>";
    echo "</ol>";
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Database Migration Status</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        pre { background: #f8f9fa; padding: 10px; border-radius: 5px; overflow-x: auto; }
        .success { color: #28a745; }
        .error { color: #dc3545; }
        .info { color: #17a2b8; }
    </style>
</head>
<body>
    <!-- Content đã được output ở trên -->
</body>
</html>