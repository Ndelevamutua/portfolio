
  document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const sidebarToggle = document.querySelector("#sidebar-close");

    // Close the sidebar by default
    sidebar.classList.add("close");

    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    });

    const menuItems = document.querySelectorAll(".submenu-item");

    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        sidebar.classList.add("close");
      });
    });
  });
