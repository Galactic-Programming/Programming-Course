// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Toast Notification Functions
function showToast(type, message) {
  const toastEl = document.getElementById(type + "Toast");
  const messageEl = document.getElementById(type + "ToastMessage");

  if (toastEl && messageEl) {
    messageEl.textContent = message;
    const toast = new bootstrap.Toast(toastEl, {
      autohide: true,
      delay: 5000,
    });
    toast.show();
  }
}

function showSuccessToast(message) {
  showToast("success", message);
}

function showErrorToast(message) {
  showToast("error", message);
}

function showInfoToast(message) {
  showToast("info", message);
}

// Auto-show toast from TempData
document.addEventListener("DOMContentLoaded", function () {
  // Check for TempData messages and show appropriate toasts
  const successMessage = document.querySelector("[data-success-message]");
  const errorMessage = document.querySelector("[data-error-message]");

  if (successMessage) {
    showSuccessToast(successMessage.getAttribute("data-success-message"));
  }

  if (errorMessage) {
    showErrorToast(errorMessage.getAttribute("data-error-message"));
  }
});

// Keyboard Shortcuts
const keyboardShortcutHandler = function (e) {
  // Ctrl + N = New Movie (only on Movies index page and if user has permission)
  if (
    e.ctrlKey &&
    e.key === "n" &&
    (window.location.pathname === "/Movies" || window.location.pathname === "/Movies/") // Only on Movies index
    // && userHasCreatePermission // Uncomment and implement this check if you have user permission logic
  ) {
    e.preventDefault();
    window.location.href = "/Movies/Create";
  }

  // Ctrl + F = Focus Search
  if (e.ctrlKey && e.key === "f") {
    e.preventDefault();
    const searchInput = document.getElementById("SearchString");
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }

  // ESC = Clear Search and reload
  if (e.key === "Escape") {
    const searchInput = document.getElementById("SearchString");
    if (searchInput && searchInput.value) {
      searchInput.value = "";
      const form = searchInput.closest("form");
      if (form) {
        // Clear all filters
        form
          .querySelectorAll("select")
          .forEach((select) => (select.selectedIndex = 0));
        form.submit();
      }
    }
  }
};

document.addEventListener("keydown", keyboardShortcutHandler);

// If using a SPA framework, remember to remove the event listener on page/component unload:
// document.removeEventListener("keydown", keyboardShortcutHandler);

// Loading State Handler
function showLoading(element) {
  if (element) {
    element.disabled = true;
    const originalText = element.innerHTML;
    element.setAttribute("data-original-text", originalText);
    element.innerHTML = '<span class="loading-spinner me-2"></span>Loading...';
  }
}

function hideLoading(element) {
  if (element) {
    element.disabled = false;
    const originalText = element.getAttribute("data-original-text");
    if (originalText) {
      element.innerHTML = originalText;
    }
  }
}

// Form submission with loading state
document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      const submitBtn = form.querySelector(
        'button[type="submit"], input[type="submit"]'
      );
      if (submitBtn) {
        showLoading(submitBtn);
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Auto-dismiss alerts after 5 seconds
document.addEventListener("DOMContentLoaded", function () {
  const alerts = document.querySelectorAll(".alert:not(.alert-permanent)");
  alerts.forEach((alert) => {
    setTimeout(() => {
      const bsAlert = new bootstrap.Alert(alert);
      bsAlert.close();
    }, 5000);
  });
});
