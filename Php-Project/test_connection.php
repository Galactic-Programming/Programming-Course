<?php
/**
 * Simple Database Connection Test
 * 
 * File này để test kết nối database cơ bản trước khi chạy migration.
 * Hữu ích để debug vấn đề kết nối.
 */

// Load config
$config = require_once 'database_config.php';
$db_config = $config['database'];

echo "<h1>🔍 Database Connection Test</h1>";

// Test 1: Basic MySQL Connection (without database)
echo "<h2>Test 1: MySQL Server Connection</h2>";
try {
    $dsn = "mysql:host={$db_config['host']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "✅ <strong>SUCCESS:</strong> Connected to MySQL server successfully!<br>";
    
    // Get MySQL version
    $version = $pdo->query('SELECT VERSION()')->fetchColumn();
    echo "📋 <strong>MySQL Version:</strong> $version<br>";
    
    // Show available databases
    $stmt = $pdo->query('SHOW DATABASES');
    echo "<h3>📚 Available Databases:</h3>";
    echo "<ul>";
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        $dbName = $row['Database'];
        if ($dbName === $db_config['name']) {
            echo "<li>🎯 <strong>$dbName</strong> (target database)</li>";
        } else {
            echo "<li>📄 $dbName</li>";
        }
    }
    echo "</ul>";
    
} catch(PDOException $e) {
    echo "❌ <strong>FAILED:</strong> " . $e->getMessage() . "<br>";
    echo "<h3>🔧 Possible Solutions:</h3>";
    echo "<ul>";
    echo "<li>Check if MySQL service is running</li>";
    echo "<li>Verify username and password</li>";
    echo "<li>Check host and port settings</li>";
    echo "</ul>";
    exit;
}

// Test 2: Specific Database Connection
echo "<hr>";
echo "<h2>Test 2: Target Database Connection</h2>";
try {
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['name']};charset={$db_config['charset']}";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password']);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "✅ <strong>SUCCESS:</strong> Connected to database '{$db_config['name']}' successfully!<br>";
    
    // Show tables in the database
    $stmt = $pdo->query('SHOW TABLES');
    $tables = $stmt->fetchAll(PDO::FETCH_NUM);
    
    if (count($tables) > 0) {
        echo "<h3>📋 Existing Tables:</h3>";
        echo "<ul>";
        foreach ($tables as $table) {
            echo "<li>📄 " . $table[0] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>📭 <em>No tables found. Ready for migration!</em></p>";
    }
    
} catch(PDOException $e) {
    if (strpos($e->getMessage(), 'Unknown database') !== false) {
        echo "⚠️ <strong>INFO:</strong> Database '{$db_config['name']}' does not exist yet.<br>";
        echo "📝 <strong>Action:</strong> This is normal for first-time setup. Run migration to create it.<br>";
    } else {
        echo "❌ <strong>FAILED:</strong> " . $e->getMessage() . "<br>";
    }
}

echo "<hr>";
echo "<h2>🎯 Next Steps:</h2>";
echo "<ol>";
echo "<li><strong>If all tests passed:</strong> Your database is ready!</li>";
echo "<li><strong>If database doesn't exist:</strong> Run <code>23_Database1.php</code> to create it</li>";
echo "<li><strong>If connection fails:</strong> Check the troubleshooting tips above</li>";
echo "</ol>";

echo "<h3>🔗 Quick Links:</h3>";
echo "<ul>";
echo "<li><a href='23_Database1.php'>🚀 Run Database Migration</a></li>";
echo "<li><a href='migration_tool.php'>🔧 Migration Tool</a></li>";
echo "<li><a href='23_Database.php'>📚 Full Tutorial</a></li>";
echo "</ul>";
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Database Connection Test</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            line-height: 1.6;
        }
        code {
            background: #f8f9fa;
            padding: 2px 4px;
            border-radius: 3px;
            border: 1px solid #e9ecef;
        }
        .success { color: #28a745; }
        .error { color: #dc3545; }
        .info { color: #17a2b8; }
        .warning { color: #ffc107; }
    </style>
</head>
<body>
</body>
</html>
