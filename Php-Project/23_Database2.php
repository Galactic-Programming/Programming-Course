<?php
/**
 * Database Migration Class
 * 
 * Handles database connection, table creation, and migration operations
 * for the PHP-MySQL learning project.
 * 
 * Features:
 * - Auto database creation
 * - Table migrations with proper structure
 * - Foreign key relationships
 * - Chain method support
 * - Error handling
 */
class DatabaseMigration {
    private $pdo;
    private $db_name;
    
    public function __construct($db_server, $db_username, $db_password, $db_name) {
        $this->db_name = $db_name;
        
        try {
            // Bước 1: Kết nối MySQL server (không cần database cụ thể)
            $dsn = "mysql:host=$db_server;charset=utf8mb4";
            $this->pdo = new PDO($dsn, $db_username, $db_password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Bước 2: Tạo database nếu chưa tồn tại
            $this->createDatabase();
            
            // Bước 3: Kết nối đến database cụ thể
            $dsn = "mysql:host=$db_server;dbname=$db_name;charset=utf8mb4";
            $this->pdo = new PDO($dsn, $db_username, $db_password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            echo "✅ Connected successfully to database '$db_name'<br>";
            
        } catch(PDOException $e) {
            die("❌ Connection failed: " . $e->getMessage());
        }
    }
    
    /**
     * Tạo database nếu chưa tồn tại
     */
    private function createDatabase() {
        $sql = "CREATE DATABASE IF NOT EXISTS {$this->db_name}";
        $this->pdo->exec($sql);
        echo "✅ Database '{$this->db_name}' checked/created successfully!<br>";
    }
    
    /**
     * Tạo bảng users với đầy đủ thông tin
     * Bao gồm: id, username, email, password, thông tin cá nhân, trạng thái
     */
    public function createUsersTable() {
        $sql = "CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) NOT NULL UNIQUE,
            email VARCHAR(100) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            full_name VARCHAR(100),
            phone VARCHAR(20),
            avatar VARCHAR(255) DEFAULT NULL,
            date_of_birth DATE DEFAULT NULL,
            gender ENUM('male', 'female', 'other') DEFAULT NULL,
            status ENUM('active', 'inactive', 'banned') DEFAULT 'active',
            email_verified BOOLEAN DEFAULT FALSE,
            last_login TIMESTAMP NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )";
        
        $this->pdo->exec($sql);
        echo "✅ Table 'users' created successfully!<br>";
        return $this;
    }
    
    /**
     * Tạo bảng categories trước khi tạo products
     * Để thiết lập foreign key relationship
     */
    public function createCategoriesTable() {
        $sql = "CREATE TABLE IF NOT EXISTS categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            slug VARCHAR(100) UNIQUE,
            is_active BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        
        $this->pdo->exec($sql);
        echo "✅ Table 'categories' created successfully!<br>";
        return $this;
    }
    
    /**
     * Tạo bảng products với relationship đến categories
     */
    public function createProductsTable() {
        $sql = "CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            description TEXT,
            price DECIMAL(10, 2) NOT NULL,
            sale_price DECIMAL(10, 2) DEFAULT NULL,
            stock_quantity INT DEFAULT 0,
            category_id INT,
            image_url VARCHAR(255),
            sku VARCHAR(50) UNIQUE,
            weight DECIMAL(8, 2) DEFAULT NULL,
            dimensions VARCHAR(100) DEFAULT NULL,
            is_active BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
        )";
        
        $this->pdo->exec($sql);
        echo "✅ Table 'products' created successfully!<br>";
        return $this;
    }
    
    /**
     * Tạo bảng orders với relationship đến users
     */
    public function createOrdersTable() {
        $sql = "CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            order_number VARCHAR(50) UNIQUE NOT NULL,
            total_amount DECIMAL(10, 2) NOT NULL,
            discount_amount DECIMAL(10, 2) DEFAULT 0,
            shipping_fee DECIMAL(10, 2) DEFAULT 0,
            tax_amount DECIMAL(10, 2) DEFAULT 0,
            final_amount DECIMAL(10, 2) NOT NULL,
            order_status ENUM('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded') DEFAULT 'pending',
            payment_status ENUM('pending', 'paid', 'failed', 'refunded') DEFAULT 'pending',
            payment_method VARCHAR(50),
            shipping_address TEXT,
            billing_address TEXT,
            notes TEXT,
            shipped_at TIMESTAMP NULL,
            delivered_at TIMESTAMP NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )";
        
        $this->pdo->exec($sql);
        echo "✅ Table 'orders' created successfully!<br>";
        return $this;
    }
    
    /**
     * Tạo bảng order_items để lưu chi tiết đơn hàng
     */
    public function createOrderItemsTable() {
        $sql = "CREATE TABLE IF NOT EXISTS order_items (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_id INT NOT NULL,
            product_id INT NOT NULL,
            quantity INT NOT NULL,
            unit_price DECIMAL(10, 2) NOT NULL,
            total_price DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
            FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
        )";
        
        $this->pdo->exec($sql);
        echo "✅ Table 'order_items' created successfully!<br>";
        return $this;
    }
    
    /**
     * Hiển thị danh sách tất cả tables trong database
     */
    public function showTables() {
        $stmt = $this->pdo->query("SHOW TABLES");
        echo "<h3>📋 Tables in database '{$this->db_name}':</h3>";
        echo "<ul>";
        while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
            echo "<li>📄 " . $row[0] . "</li>";
        }
        echo "</ul>";
        return $this;
    }
    
    /**
     * Xóa table cụ thể (cẩn thận với foreign keys)
     */
    public function dropTable($tableName) {
        // Tạm thời tắt foreign key checks để có thể drop tables
        $this->pdo->exec("SET FOREIGN_KEY_CHECKS = 0");
        $sql = "DROP TABLE IF EXISTS $tableName";
        $this->pdo->exec($sql);
        $this->pdo->exec("SET FOREIGN_KEY_CHECKS = 1");
        echo "🗑️ Table '$tableName' dropped successfully!<br>";
        return $this;
    }
    
    /**
     * Chạy tất cả migrations theo đúng thứ tự
     * Thứ tự quan trọng vì có foreign key relationships
     */
    public function runAllMigrations() {
        echo "<h2>🚀 Running Database Migrations...</h2>";
        echo "<p><strong>Note:</strong> Tables will be created in proper order to handle foreign key relationships.</p>";
        
        // Tạo tables theo thứ tự: parent tables trước, child tables sau
        $this->createUsersTable()           // Independent table
             ->createCategoriesTable()      // Independent table  
             ->createProductsTable()        // Depends on categories
             ->createOrdersTable()          // Depends on users
             ->createOrderItemsTable()      // Depends on orders & products
             ->showTables();
             
        echo "<h2>✅ All migrations completed successfully!</h2>";
        echo "<p><em>Database is ready for use with proper relationships and constraints.</em></p>";
        return $this;
    }
    
    /**
     * Reset database - drop tất cả tables và tạo lại
     */
    public function freshMigration() {
        echo "<h2>🔄 Fresh Migration (Drop & Recreate All Tables)</h2>";
        echo "<p><strong>Warning:</strong> This will delete ALL data!</p>";
        
        // Drop tables theo thứ tự ngược lại (child tables trước)
        $this->dropTable('order_items')
             ->dropTable('orders')
             ->dropTable('products')
             ->dropTable('categories')
             ->dropTable('users');
             
        // Tạo lại tất cả tables
        $this->runAllMigrations();
        
        return $this;
    }
    
    /**
     * Thêm sample data để test
     */
    public function seedSampleData() {
        echo "<h3>🌱 Seeding sample data...</h3>";
        
        try {
            // Sample categories
            $this->pdo->exec("INSERT IGNORE INTO categories (name, description, slug) VALUES 
                ('Electronics', 'Electronic devices and gadgets', 'electronics'),
                ('Clothing', 'Fashion and apparel', 'clothing'),
                ('Books', 'Books and educational materials', 'books')");
            
            // Sample users
            $hashedPassword = password_hash('123456', PASSWORD_DEFAULT);
            $this->pdo->exec("INSERT IGNORE INTO users (username, email, password, full_name) VALUES 
                ('admin', 'admin@example.com', '$hashedPassword', 'Administrator'),
                ('john_doe', 'john@example.com', '$hashedPassword', 'John Doe'),
                ('jane_smith', 'jane@example.com', '$hashedPassword', 'Jane Smith')");
            
            echo "✅ Sample data seeded successfully!<br>";
        } catch(PDOException $e) {
            echo "⚠️ Sample data seeding failed: " . $e->getMessage() . "<br>";
        }
        
        return $this;
    }
    
    /**
     * Lấy PDO connection để sử dụng cho operations khác
     */
    public function getPdo() {
        return $this->pdo;
    }
    
    /**
     * Hiển thị thông tin database
     */
    public function showDatabaseInfo() {
        try {
            $version = $this->pdo->query('SELECT VERSION()')->fetchColumn();
            $charset = $this->pdo->query("SELECT @@character_set_database")->fetchColumn();
            
            echo "<h3>ℹ️ Database Information:</h3>";
            echo "<ul>";
            echo "<li><strong>Database:</strong> {$this->db_name}</li>";
            echo "<li><strong>MySQL Version:</strong> $version</li>";
            echo "<li><strong>Charset:</strong> $charset</li>";
            echo "<li><strong>Connection Status:</strong> ✅ Connected</li>";
            echo "</ul>";
        } catch(PDOException $e) {
            echo "❌ Could not retrieve database info: " . $e->getMessage();
        }
        
        return $this;
    }
}
?>