<?php
/**
 * PHP Connect to MySQL Database - Main Entry Point
 * 
 * This file demonstrates different methods to connect to MySQL database using PHP.
 * It includes comprehensive examples of both MySQLi and PDO extensions.
 * 
 * Methods covered:
 * 1. MySQLi Extension (PHP MySQL Interface)
 * 2. PDO Extension (PHP Data Objects) - Recommended
 * 3. Database Migration System
 * 4. CRUD Operations Examples
 */

echo "<h1>📚 PHP MySQL Database Connection Tutorial</h1>";

// Include the migration system
include("23_Database1.php");

echo "<hr>";
echo "<h2>📖 Additional Learning Resources</h2>";

echo "<h3>🔗 Quick Navigation:</h3>";
echo "<ul>";
echo "<li><a href='#basic-connection'>Basic Connection Methods</a></li>";
echo "<li><a href='#crud-operations'>CRUD Operations</a></li>";
echo "<li><a href='#best-practices'>Best Practices</a></li>";
echo "<li><a href='#troubleshooting'>Troubleshooting</a></li>";
echo "</ul>";

// Kiểm tra xem migration đã chạy thành công chưa
if (isset($pdo) && $pdo instanceof PDO) {
    echo "<div id='crud-operations'>";
    echo "<h3>🛠️ CRUD Operations Examples</h3>";
    
    // Example 1: Create (Insert) Data
    echo "<h4>1. Create (INSERT) Example:</h4>";
    echo "<pre style='background: #f8f9fa; border: 1px solid #e9ecef; padding: 10px; border-radius: 5px;'>";
    echo htmlspecialchars('
// Insert new user
$stmt = $pdo->prepare("INSERT INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)");
$hashedPassword = password_hash("user123", PASSWORD_DEFAULT);
$stmt->execute(["testuser", "test@example.com", $hashedPassword, "Test User"]);
echo "User created with ID: " . $pdo->lastInsertId();
    ');
    echo "</pre>";
    
    // Example 2: Read (Select) Data
    echo "<h4>2. Read (SELECT) Example:</h4>";
    echo "<pre style='background: #f8f9fa; border: 1px solid #e9ecef; padding: 10px; border-radius: 5px;'>";
    echo htmlspecialchars('
// Select all active users
$stmt = $pdo->prepare("SELECT id, username, email, full_name, created_at FROM users WHERE status = ?");
$stmt->execute(["active"]);
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($users as $user) {
    echo "User: " . $user["username"] . " (" . $user["email"] . ")<br>";
}
    ');
    echo "</pre>";
    
    // Example 3: Update Data
    echo "<h4>3. Update (UPDATE) Example:</h4>";
    echo "<pre style='background: #f8f9fa; border: 1px solid #e9ecef; padding: 10px; border-radius: 5px;'>";
    echo htmlspecialchars('
// Update user information
$stmt = $pdo->prepare("UPDATE users SET full_name = ?, phone = ? WHERE id = ?");
$stmt->execute(["Updated Name", "123-456-7890", 1]);
echo "Affected rows: " . $stmt->rowCount();
    ');
    echo "</pre>";
    
    // Example 4: Delete Data
    echo "<h4>4. Delete (DELETE) Example:</h4>";
    echo "<pre style='background: #f8f9fa; border: 1px solid #e9ecef; padding: 10px; border-radius: 5px;'>";
    echo htmlspecialchars('
// Delete inactive users
$stmt = $pdo->prepare("DELETE FROM users WHERE status = ?");
$stmt->execute(["inactive"]);
echo "Deleted " . $stmt->rowCount() . " inactive users";
    ');
    echo "</pre>";
    
    echo "</div>";
}

echo "<div id='best-practices'>";
echo "<h3>✅ Best Practices:</h3>";
echo "<ol>";
echo "<li><strong>Always use prepared statements</strong> to prevent SQL injection</li>";
echo "<li><strong>Hash passwords</strong> before storing them</li>";
echo "<li><strong>Use transactions</strong> for multiple related operations</li>";
echo "<li><strong>Handle errors properly</strong> with try-catch blocks</li>";
echo "<li><strong>Close connections</strong> when done (PDO does this automatically)</li>";
echo "<li><strong>Use environment variables</strong> for database credentials in production</li>";
echo "</ol>";
echo "</div>";

echo "<div id='troubleshooting'>";
echo "<h3>🔧 Common Issues & Solutions:</h3>";
echo "<ul>";
echo "<li><strong>\"Unknown database\":</strong> Create the database first</li>";
echo "<li><strong>\"Access denied\":</strong> Check username/password</li>";
echo "<li><strong>\"Connection refused\":</strong> Ensure MySQL service is running</li>";
echo "<li><strong>\"Table doesn't exist\":</strong> Run migrations first</li>";
echo "</ul>";
echo "</div>";

echo "<hr>";
echo "<p><em>This tutorial covers the fundamentals of PHP-MySQL database connectivity. Practice with the examples above to master database operations!</em></p>";
?>