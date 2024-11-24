/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palabrasClave = [
    "tech",
    "web",
    "design",
    "app",
    "cloud",
    "studio",
    "hub",
    "space"
  ];

  document.getElementById("generateBtn").addEventListener("click", function() {
    const randomPalabra =
      palabrasClave[Math.floor(Math.random() * palabrasClave.length)];
    const randomNumero = Math.floor(Math.random() * 100);
    const domainName = `${randomPalabra}${randomNumero}.com`;
    document.getElementById("domainName").innerText = domainName;
  });
};
