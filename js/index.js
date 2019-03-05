const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Update link text
const navLinks = document.querySelectorAll("a");
navLinks.forEach(function(link, index) {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`];
});


const homeLink = document.createElement("a")
homeLink.textContent = "Home"
homeLink.href = "index.html"
nav = document.querySelector("nav")
console.log(nav)
nav.prepend(homeLink)

const shopLink = document.createElement("a")
shopLink.textContent = "Shop"
shopLink.href = "#"
nav.appendChild(shopLink)

const newLinks = document.querySelectorAll("a");
newLinks.forEach(link => link.style.color = "green")

const headerOne = document.getElementsByTagName("h1");
const headerText = headerOne[0];
const linebreak = document.createElement("br");
const linebreak2 = document.createElement("br");
headerText.textContent = siteContent.cta.h1.slice(0, 3);
// headerText.textContent = "DOM";
headerText.appendChild(linebreak)
headerText.appendChild(document.createTextNode(siteContent.cta.h1.slice(4, 6)))
headerText.appendChild(linebreak2)
headerText.appendChild(document.createTextNode(siteContent.cta.h1.slice(7, 14)))

const btn = document.getElementsByTagName("button");
btn[0].textContent = siteContent.cta.button;

const headerImg = document.getElementById("cta-img");
headerImg.src = siteContent.cta["img-src"];

const mainKeys = Object.keys(siteContent["main-content"])
const mainTop = document.getElementsByClassName("top-content");
let mainArr = []
mainArr.push(mainTop[0].children[0].children[0])
mainArr.push(mainTop[0].children[0].children[1])
mainArr.push(mainTop[0].children[1].children[0])
mainArr.push(mainTop[0].children[1].children[1])

mainArr.push(document.getElementById("middle-img"))

const mainBottom = document.getElementsByClassName("bottom-content");

mainArr.push(mainBottom[0].children[0].children[0])
mainArr.push(mainBottom[0].children[0].children[1])
mainArr.push(mainBottom[0].children[1].children[0])
mainArr.push(mainBottom[0].children[1].children[1])
mainArr.push(mainBottom[0].children[2].children[0])
mainArr.push(mainBottom[0].children[2].children[1])

console.log(mainArr)

mainArr.forEach(function(content, index) {
  content.textContent = siteContent["main-content"][mainKeys[index]]
})

document.getElementById("middle-img").src = "img/mid-page-accent.jpg"

const mainStuff = document.querySelectorAll(".main-content");
console.log(mainStuff)
mainStuff.forEach(thing => console.log(thing))

const contact = document.getElementsByClassName("contact");
contactArr = Array.from(contact[0].children)
console.log(contactArr)
const contactKeys = Object.keys(siteContent["contact"])
// console.log(contactKeys)
contactArr.forEach(function(text, index) {
  text.textContent = siteContent.contact[contactKeys[index]]
})

const linebreak3 = document.createElement("br");
contactArr[1].textContent = siteContent.contact.address.slice(0, 18);
// headerText.textContent = "DOM";contactArr[1].textContent = siteContent.contact.address.slice(0, 25);
contactArr[1].appendChild(linebreak3)
contactArr[1].appendChild(document.createTextNode(siteContent.contact.address.slice(19, 33)))

const footer = document.querySelector("footer");
footer.children[0].textContent = siteContent.footer.copyright