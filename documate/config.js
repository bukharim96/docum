/**
 * Documate site settings
 */

module.exports = {
  // Website's HTML title tag value
  title: "Documate",
  // Site logo, placed in topbar
  logo: "./img/logo.png",
  // Topbar and (documentation's) Sidebar
  // navigation links
  navs: require("./navs"),
  // GitHub repository
  repoUrl: "https://github.com/{USERNAME/ORG}/{PROJECT}",
  // Main theme colors
  theme: {
    primaryColor: "#20232a",
    secondaryColor: "#61dafb"
  },
  // Syntax highlighting theme in code
  // blocks. Check [https://prismjs.com/]
  // for more themes
  codeBlockTheme: "default"
};
