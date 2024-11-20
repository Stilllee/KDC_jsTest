class DarkModeToggle {
  isDarkMode = null;

  constructor({ $target }) {
    const $darkModeToggle = document.createElement("input");
    this.$darkModeToggle = $darkModeToggle;
    this.$darkModeToggle.type = "checkbox";

    $darkModeToggle.className = "DarkModeToggle";
    $target.appendChild($darkModeToggle);

    $darkModeToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });

    this.initColorMode();
  }

  initColorMode() {
    // 초기화
    // isDarkMode state, checkbox 상태, html attr
    this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    this.$darkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      isDarkMode ? "dark" : "light"
    );
  }
}
