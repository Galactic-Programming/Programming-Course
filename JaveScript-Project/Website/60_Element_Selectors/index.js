// ============================================
// ELEMENT SELECTORS - DEMO VÀ GIẢI THÍCH
// ============================================

// Element Selectors = Các phương thức được sử dụng để nhắm mục tiêu và thao tác với các phần tử HTML
//                     Chúng cho phép bạn chọn một hoặc nhiều phần tử HTML từ DOM và áp dụng các thay đổi cho chúng.

// Các phương thức thường được sử dụng:
// - getElementById: Chọn một phần tử duy nhất bằng ID của nó
// - getElementsByClassName: Chọn nhiều phần tử bằng tên class
// - getElementsByTagName: Chọn nhiều phần tử bằng tên thẻ
// - querySelector: Chọn phần tử ĐẦU TIÊN phù hợp với CSS selector
// - querySelectorAll: Chọn TẤT CẢ các phần tử phù hợp với CSS selector

console.log("🎯 ELEMENT SELECTORS DEMO - BẮT ĐẦU!");
console.log("=====================================");

// ============================================
// 1. getElementById - Chọn theo ID
// ============================================
console.log("\n1️⃣ getElementById:");
console.log("- Chọn một phần tử duy nhất bằng ID");
console.log("- Trả về: một phần tử HTML hoặc null");

const uniqueElement = document.getElementById("unique-element");
console.log("✅ Đã chọn phần tử:", uniqueElement);

// Styling cho phần tử được chọn
if (uniqueElement) {
  uniqueElement.style.backgroundColor = "#28a745";
  uniqueElement.style.color = "white";
  uniqueElement.style.transform = "scale(1.05)";
  uniqueElement.style.fontWeight = "bold";
  console.log("✨ Đã áp dụng style cho phần tử ID");
}

// ============================================
// 2. getElementsByClassName - Chọn theo Class
// ============================================
console.log("\n2️⃣ getElementsByClassName:");
console.log("- Chọn nhiều phần tử có cùng class name");
console.log("- Trả về: HTMLCollection (giống array nhưng không phải array)");

const fruits = document.getElementsByClassName("fruits");
console.log("✅ Đã chọn các phần tử fruits:", fruits);
console.log("📊 Số lượng phần tử fruits:", fruits.length);

// Cách 1: Sử dụng for...of loop
console.log("🔄 Cách 1: Sử dụng for...of loop");
for (let fruit of fruits) {
  fruit.style.backgroundColor = "#fd7e14";
  fruit.style.color = "white";
  fruit.style.transform = "translateX(10px)";
  console.log("  - Đã style:", fruit.textContent);
}

// Cách 2: Chuyển đổi thành Array và sử dụng forEach
console.log("🔄 Cách 2: Chuyển đổi thành Array");
Array.from(fruits).forEach((fruit, index) => {
  fruit.style.boxShadow = "0 4px 8px rgba(253, 126, 20, 0.3)";
  console.log(`  - Phần tử ${index + 1}: ${fruit.textContent}`);
});

// ============================================
// 3. getElementsByTagName - Chọn theo Tag Name
// ============================================
console.log("\n3️⃣ getElementsByTagName:");
console.log("- Chọn nhiều phần tử có cùng tên thẻ");
console.log("- Trả về: HTMLCollection");

const h3Elements = document.getElementsByTagName("h3");
const liElements = document.getElementsByTagName("li");

console.log("✅ Đã chọn các thẻ h3:", h3Elements);
console.log("📊 Số lượng h3:", h3Elements.length);

// Style cho các thẻ h3
for (let h3 of h3Elements) {
  h3.style.color = "#6f42c1";
  h3.style.borderBottom = "2px solid #6f42c1";
  h3.style.paddingBottom = "5px";
  console.log("  - Đã style h3:", h3.textContent);
}

console.log("✅ Đã chọn các thẻ li:", liElements);
console.log("📊 Số lượng li:", liElements.length);

// Style cho các thẻ li
Array.from(liElements).forEach((li, index) => {
  li.style.backgroundColor = "#17a2b8";
  li.style.color = "white";
  li.style.border = "none";
  li.style.marginLeft = "20px";
  console.log(`  - Phần tử li ${index + 1}: ${li.textContent}`);
});

// ============================================
// 4. querySelector - Chọn phần tử ĐẦU TIÊN
// ============================================
console.log("\n4️⃣ querySelector:");
console.log("- Chọn phần tử ĐẦU TIÊN phù hợp với CSS selector");
console.log("- Trả về: một phần tử HTML hoặc null");
console.log("- Có thể sử dụng: class (.class), id (#id), tag, attribute, etc.");

const firstSpecialItem = document.querySelector(".special-item");
console.log(
  "✅ Đã chọn phần tử đầu tiên với class 'special-item':",
  firstSpecialItem
);

if (firstSpecialItem) {
  firstSpecialItem.style.backgroundColor = "#dc3545";
  firstSpecialItem.style.color = "white";
  firstSpecialItem.style.transform = "scale(1.1)";
  firstSpecialItem.style.fontWeight = "bold";
  console.log("✨ Chỉ phần tử ĐẦU TIÊN được style!");
}

// ============================================
// 5. querySelectorAll - Chọn TẤT CẢ phần tử
// ============================================
console.log("\n5️⃣ querySelectorAll:");
console.log("- Chọn TẤT CẢ các phần tử phù hợp với CSS selector");
console.log("- Trả về: NodeList (có thể sử dụng forEach trực tiếp)");

const allButtons = document.querySelectorAll(".btn");
console.log("✅ Đã chọn tất cả button:", allButtons);
console.log("📊 Số lượng button:", allButtons.length);

// NodeList có thể sử dụng forEach trực tiếp
allButtons.forEach((button, index) => {
  button.style.backgroundColor = "#6f42c1";
  button.style.transform = `rotate(${index * 5}deg)`;
  button.textContent = `Button ${index + 1} - Selected!`;
  console.log(`  - Button ${index + 1} đã được style`);
});

// ============================================
// SO SÁNH VÀ TIPS
// ============================================
console.log("\n📋 SO SÁNH VÀ TIPS:");
console.log("=====================================");

console.log("🔍 HTMLCollection vs NodeList:");
console.log("- HTMLCollection: getElementsByClassName, getElementsByTagName");
console.log("- NodeList: querySelectorAll");
console.log("- NodeList có thể dùng forEach, HTMLCollection thì không");

console.log("\n⚡ Performance:");
console.log("- getElementById: Nhanh nhất (vì ID là duy nhất)");
console.log("- getElementsByClassName: Nhanh");
console.log("- getElementsByTagName: Nhanh");
console.log("- querySelector: Chậm hơn (nhưng linh hoạt)");
console.log("- querySelectorAll: Chậm nhất (nhưng mạnh mẽ)");

console.log("\n🎯 Khi nào nên dùng:");
console.log("- getElementById: Khi bạn biết ID cụ thể");
console.log("- getElementsByClassName: Khi cần tất cả phần tử cùng class");
console.log("- getElementsByTagName: Khi cần tất cả phần tử cùng thẻ");
console.log("- querySelector: Khi cần 1 phần tử với CSS selector phức tạp");
console.log(
  "- querySelectorAll: Khi cần nhiều phần tử với CSS selector phức tạp"
);

console.log("\n✅ DEMO HOÀN THÀNH!");
console.log("🎉 Kiểm tra Elements tab trong DevTools để xem các thay đổi!");

// ============================================
// THỰC HÀNH THÊM - Advanced Examples
// ============================================
console.log("\n🚀 THỰC HÀNH NÂNG CAO:");
console.log("=====================================");

// Sử dụng querySelector với CSS selectors phức tạp
const firstListItem = document.querySelector("ul li:first-child");
if (firstListItem) {
  firstListItem.style.border = "3px solid gold";
  firstListItem.style.fontWeight = "bold";
  console.log("✨ Đã style phần tử li đầu tiên:", firstListItem.textContent);
}

// Sử dụng querySelectorAll với CSS selectors phức tạp
const allEvenButtons = document.querySelectorAll(".btn:nth-child(even)");
allEvenButtons.forEach((btn, index) => {
  btn.style.backgroundColor = "#e83e8c";
  console.log(`✨ Button chẵn ${index + 1} đã được style đặc biệt`);
});

// Kiểm tra xem phần tử có tồn tại không
const nonExistentElement = document.getElementById("not-exist");
if (nonExistentElement) {
  console.log("Phần tử tồn tại");
} else {
  console.log("⚠️ Phần tử không tồn tại - luôn kiểm tra trước khi thao tác!");
}
