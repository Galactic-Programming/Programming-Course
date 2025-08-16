// ============================================================================
// DOM Navigation Tutorial - Interactive Demo
// ============================================================================

/**
 * DOM Navigation Methods:
 * - firstElementChild: Returns the first child element
 * - lastElementChild: Returns the last child element
 * - nextElementSibling: Returns the next sibling element
 * - previousElementSibling: Returns the previous sibling element
 * - parentElement: Returns the parent element
 * - children: Returns all child elements
 * - childNodes: Returns all child nodes (including text nodes)
 */

class DOMNavigationDemo {
  constructor() {
    this.originalStyles = new Map();
    this.initializeElements();
    this.attachEventListeners();
  }

  initializeElements() {
    // Get all main elements
    this.elements = {
      fruits: document.getElementById("fruits"),
      vegetables: document.getElementById("vegetables"),
      desserts: document.getElementById("desserts"),
      apple: document.getElementById("apple"),
      corn: document.getElementById("corn"),
      iceCream: document.getElementById("ice-cream"),
      resetBtn: document.getElementById("resetBtn"),
      demoBtn: document.getElementById("demoBtn"),
    };

    // Store original styles
    this.storeOriginalStyles();
  }

  storeOriginalStyles() {
    // Store original styles for all food items
    const allFoodItems = document.querySelectorAll(".food-item");
    const allFoodLists = document.querySelectorAll(".food-list");
    const allFoodCategories = document.querySelectorAll(".food-category");

    [...allFoodItems, ...allFoodLists, ...allFoodCategories].forEach(
      (element) => {
        this.originalStyles.set(element, {
          backgroundColor: element.style.backgroundColor || "",
          color: element.style.color || "",
          border: element.style.border || "",
          transform: element.style.transform || "",
        });
      }
    );
  }

  attachEventListeners() {
    this.elements.resetBtn.addEventListener("click", () =>
      this.resetAllStyles()
    );
    this.elements.demoBtn.addEventListener("click", () => this.runDemo());
  }

  resetAllStyles() {
    // Reset all elements to original styles
    this.originalStyles.forEach((styles, element) => {
      Object.assign(element.style, styles);
      element.classList.remove("highlight");
    });

    console.log("🔄 All styles have been reset");
  }

  async runDemo() {
    this.resetAllStyles();

    const steps = [
      { method: "firstElementChild", delay: 1000 },
      { method: "lastElementChild", delay: 2000 },
      { method: "nextElementSibling", delay: 3000 },
      { method: "previousElementSibling", delay: 4000 },
      { method: "parentElement", delay: 5000 },
      { method: "children", delay: 6000 },
      { method: "childNodes", delay: 7000 },
    ];

    console.log("🚀 Starting DOM Navigation Demo...");

    for (const step of steps) {
      await this.delay(step.delay - steps.indexOf(step) * 1000);
      this[step.method]();
    }

    console.log("✅ Demo completed!");
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // ============================================================================
  // DOM Navigation Methods
  // ============================================================================

  firstElementChild() {
    console.log("🎯 Demonstrating: firstElementChild");

    const allLists = [
      this.elements.fruits,
      this.elements.vegetables,
      this.elements.desserts,
    ];

    allLists.forEach((list) => {
      const firstChild = list.firstElementChild;
      if (firstChild) {
        this.applyStyles(firstChild, {
          backgroundColor: "#ffd700",
          color: "#333",
          border: "3px solid #ffed4a",
          transform: "scale(1.05)",
        });
        firstChild.classList.add("highlight");
        console.log(`First child of ${list.id}:`, firstChild.textContent);
      }
    });
  }

  lastElementChild() {
    console.log("🎯 Demonstrating: lastElementChild");

    const allLists = [
      this.elements.fruits,
      this.elements.vegetables,
      this.elements.desserts,
    ];

    allLists.forEach((list) => {
      const lastChild = list.lastElementChild;
      if (lastChild) {
        this.applyStyles(lastChild, {
          backgroundColor: "#32cd32",
          color: "white",
          border: "3px solid #38c172",
          transform: "scale(1.05)",
        });
        lastChild.classList.add("highlight");
        console.log(`Last child of ${list.id}:`, lastChild.textContent);
      }
    });
  }

  nextElementSibling() {
    console.log("🎯 Demonstrating: nextElementSibling");

    const nextSibling = this.elements.apple.nextElementSibling;
    if (nextSibling) {
      this.applyStyles(nextSibling, {
        backgroundColor: "#ff6b6b",
        color: "white",
        border: "3px solid #e74c3c",
        transform: "scale(1.05)",
      });
      nextSibling.classList.add("highlight");
      console.log(
        `Next sibling of ${this.elements.apple.textContent}:`,
        nextSibling.textContent
      );
    }
  }

  previousElementSibling() {
    console.log("🎯 Demonstrating: previousElementSibling");

    const previousSibling = this.elements.corn.previousElementSibling;
    if (previousSibling) {
      this.applyStyles(previousSibling, {
        backgroundColor: "#4ecdc4",
        color: "white",
        border: "3px solid #26d0ce",
        transform: "scale(1.05)",
      });
      previousSibling.classList.add("highlight");
      console.log(
        `Previous sibling of ${this.elements.corn.textContent}:`,
        previousSibling.textContent
      );
    }
  }

  parentElement() {
    console.log("🎯 Demonstrating: parentElement");

    const parent = this.elements.iceCream.parentElement;
    if (parent) {
      this.applyStyles(parent, {
        backgroundColor: "#a8e6cf",
        color: "#333",
        border: "3px solid #81c784",
      });
      parent.classList.add("highlight");
      console.log(
        `Parent of ${this.elements.iceCream.textContent}:`,
        parent.id
      );
    }
  }

  children() {
    console.log("🎯 Demonstrating: children");

    const children = this.elements.fruits.children;
    Array.from(children).forEach((child, index) => {
      this.applyStyles(child, {
        backgroundColor: "#ffa07a",
        color: "white",
        border: "3px solid #ff7f50",
        transform: "scale(1.05)",
      });
      child.classList.add("highlight");
      console.log(`Child ${index + 1} of fruits:`, child.textContent);
    });
  }

  childNodes() {
    console.log("🎯 Demonstrating: childNodes");

    const childNodes = this.elements.vegetables.childNodes;
    Array.from(childNodes).forEach((node, index) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        this.applyStyles(node, {
          backgroundColor: "#dda0dd",
          color: "white",
          border: "3px solid #ba68c8",
          transform: "scale(1.05)",
        });
        node.classList.add("highlight");
        console.log(
          `Element node ${index + 1} of vegetables:`,
          node.textContent
        );
      }
    });
  }

  // ============================================================================
  // Utility Methods
  // ============================================================================

  applyStyles(element, styles) {
    Object.assign(element.style, styles);
  }

  // Method to demonstrate specific navigation
  demonstrateNavigation(elementId, method) {
    const element = document.getElementById(elementId);
    if (!element) return;

    console.log(`🔍 Demonstrating ${method} on element:`, element.textContent);

    switch (method) {
      case "firstElementChild":
        return element.firstElementChild;
      case "lastElementChild":
        return element.lastElementChild;
      case "nextElementSibling":
        return element.nextElementSibling;
      case "previousElementSibling":
        return element.previousElementSibling;
      case "parentElement":
        return element.parentElement;
      case "children":
        return element.children;
      case "childNodes":
        return element.childNodes;
      default:
        console.warn("Unknown method:", method);
        return null;
    }
  }
}

// ============================================================================
// Initialize the application
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const demo = new DOMNavigationDemo();

  // Make demo accessible globally for debugging
  window.domDemo = demo;

  console.log("🎉 DOM Navigation Demo initialized!");
  console.log("💡 Use the buttons to interact with the demo");
  console.log("🔧 Access demo methods via window.domDemo");
});

// ============================================================================
// Additional Helper Functions
// ============================================================================

function logElementInfo(element) {
  if (!element) {
    console.log("❌ Element not found");
    return;
  }

  console.log("📋 Element Info:", {
    tagName: element.tagName,
    id: element.id,
    className: element.className,
    textContent: element.textContent?.trim(),
    childElementCount: element.childElementCount,
    parentElement: element.parentElement?.tagName,
  });
}

// Export for potential module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DOMNavigationDemo, logElementInfo };
}
