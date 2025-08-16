<?php
/**
 * Database Migration Tool
 * 
 * Công cụ quản lý database migrations với nhiều tùy chọn:
 * - Run migrations
 * - Fresh migration (drop & recreate)
 * - Seed sample data
 * - Show database info
 */

require_once '23_Database2.php';

// Load config
$config = require_once 'database_config.php';
$db_config = $config['database'];

echo "<h1>🔧 Database Migration Tool</h1>";

try {
    $migration = new DatabaseMigration(
        $db_config['host'],
        $db_config['username'],
        $db_config['password'],
        $db_config['name']
    );
    
    // Get action from URL parameter
    $action = $_GET['action'] ?? 'info';
    
    switch($action) {
        case 'migrate':
            echo "<h2>🚀 Running Normal Migration</h2>";
            $migration->runAllMigrations();
            break;
            
        case 'fresh':
            echo "<h2>🔄 Fresh Migration (Drop & Recreate)</h2>";
            echo "<div style='background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; border-radius: 5px; margin: 10px 0;'>";
            echo "⚠️ <strong>Warning:</strong> This will delete ALL existing data!";
            echo "</div>";
            $migration->freshMigration();
            break;
            
        case 'seed':
            echo "<h2>🌱 Seeding Sample Data</h2>";
            $migration->seedSampleData();
            break;
            
        case 'show':
            echo "<h2>📋 Database Information</h2>";
            $migration->showDatabaseInfo();
            $migration->showTables();
            break;
            
        case 'info':
        default:
            echo "<h2>ℹ️ Migration Tool Information</h2>";
            $migration->showDatabaseInfo();
            break;
    }
    
    echo "<br><hr>";
    echo "<h3>🛠️ Migration Options:</h3>";
    echo "<div style='display: flex; gap: 10px; flex-wrap: wrap;'>";
    echo "<a href='?action=info' style='background: #17a2b8; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px;'>ℹ️ Info</a>";
    echo "<a href='?action=migrate' style='background: #28a745; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px;'>🚀 Run Migrations</a>";
    echo "<a href='?action=fresh' style='background: #ffc107; color: black; padding: 8px 12px; text-decoration: none; border-radius: 4px;'>🔄 Fresh Migration</a>";
    echo "<a href='?action=seed' style='background: #6f42c1; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px;'>🌱 Seed Data</a>";
    echo "<a href='?action=show' style='background: #6c757d; color: white; padding: 8px 12px; text-decoration: none; border-radius: 4px;'>📋 Show Tables</a>";
    echo "</div>";
    
    echo "<br><h3>📖 How to Use:</h3>";
    echo "<ul>";
    echo "<li><strong>Info:</strong> Hiển thị thông tin database hiện tại</li>";
    echo "<li><strong>Run Migrations:</strong> Tạo tất cả tables (safe, không xóa data)</li>";
    echo "<li><strong>Fresh Migration:</strong> Xóa hết và tạo lại từ đầu (cẩn thận!)</li>";
    echo "<li><strong>Seed Data:</strong> Thêm dữ liệu mẫu để test</li>";
    echo "<li><strong>Show Tables:</strong> Hiển thị danh sách tables</li>";
    echo "</ul>";
    
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
    <title>Database Migration Tool</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
        }
        pre { 
            background: #f8f9fa; 
            padding: 10px; 
            border-radius: 5px; 
            overflow-x: auto; 
        }
        .success { color: #28a745; }
        .error { color: #dc3545; }
        .info { color: #17a2b8; }
        .warning { color: #ffc107; }
    </style>
</head>
<body>
    <!-- Content được output ở trên -->
</body>
</html>
