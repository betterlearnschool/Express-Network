document.addEventListener("DOMContentLoaded", function () {
    const themeSelect = document.getElementById("theme");
    const savedTheme = localStorage.getItem("theme") || "dark";

    // Apply the saved theme on page load
    applyTheme(savedTheme);

    // If theme dropdown exists, set its value and add change event
    if (themeSelect) {
        themeSelect.value = savedTheme;
        themeSelect.addEventListener("change", function () {
            const newTheme = themeSelect.value;
            localStorage.setItem("theme", newTheme);
            applyTheme(newTheme);
        });
    }
});
<div class="settings-option">
    <label for="theme">Theme</label>
    <select id="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="google">Google</option>
    </select>
</div>


function applyTheme(theme) {
    if (theme === "light") {
        document.body.style.backgroundColor = "#1c1c1c";  // Dark gray (darker light mode)
        document.body.style.color = "#e0e0e0";  // Soft white
    } else if (theme === "google") {
        document.body.style.backgroundColor = "#ffffff"; // White background (Google style)
        document.body.style.color = "#202124"; // Google's dark gray text color
        document.body.style.fontFamily = "Arial, sans-serif"; // Google's default font
    } else {
        document.body.style.backgroundColor = "#121212"; // Regular dark mode
        document.body.style.color = "white";
    }
}
