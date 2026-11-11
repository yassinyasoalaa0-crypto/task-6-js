const projects = [
  {
    id: 1,
    title: "Corporate Dashboard System",
    description: "Pellentesque habitant morbi tristique senectus.",
    category: "Web design",
    isFeatured: false,
    date: "2024",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "./imgs/portfolio-2.webp",
  },
  {
    id: 2,
    title: "Smart Finance Application",
    description: "Maecenas tempus tellus eget condimentum rhoncus.",
    category: "Mobile App",
    isFeatured: true,
    date: "2024",
    tags: ["Flutter", "Dart", "Firebase"],
    image: "./imgs/portfolio-4.webp",
  },
  {
    id: 3,
    title: "Fashion Label Identity",
    description: "Donec quam felis ultricies nec pellentesque pretium.",
    category: "branding",
    isFeatured: false,
    date: "2023",
    tags: ["Photoshop", "Illustrator", "InDesign"],
    image: "./imgs/portfolio-6.webp",
  },
];
const layrpopup = document.querySelector(".layer-popuo")
const prodactContenar = document.querySelector(".brodact")
const ExitLayerPopup = document.querySelector(".exit-layer")
const galareImgs = document.querySelector(".imgs-popup img")
const nextPopup = document.querySelector(".next-layer")
const prevPopup = document.querySelector(".prev-layer")
let carentDefoltOPen = 0
projects.forEach((product) => prodactContenar.innerHTML += `
<div class="card overflow-hidden relative border-[#fff] duration-300 hover:shadow-xl" onclick = "openLeyrPopup(${product.id})">
        <div class="imgs ">
          <img src="${product.image}" alt="" class=" ">
          <div class="layer flex items-center justify-center gap-4">
            <a href="#" class="bg-[#fff] w-[50px] h-[50px] rounded-full  flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-[#fff] duration-200 shadow-md" ><i class="fa-solid fa-eye"></i></a>
            <a href="#" class="bg-[#fff] w-[50px] h-[50px] rounded-full  flex items-center justify-center text-[#0ea5e9] hover:bg-[#0ea5e9] hover:text-[#fff] duration-200 shadow-md" ><i class="fa-solid fa-link"></i></a>
          </div>
        </div>
        <div class="content">
          <h3 class="text-[17px] font-semibold">${product.title}</h3>
          <p class="text-[15px] text-[#555] ">${product.description}</p>
        </div>
        <div class="icons flex justify-between items-center">
          <div class="icon flex gap-4 text-[14px] font-[600] text-[#0ea5e9] ">
            <span class="cont-icon">${product.tags[0]}</span>
            <span class="cont-icon">${product.tags[1]}</span>
          </div>
          <div class="date">
            <span class="text-[#888] text-[14px] font-[600]">${product.date}</span>
          </div>
        </div>
        <div class="labol absolute tect-[#0987c2] bg-[#fff] top-4 left-5 text-[13px] font-[600] text-[#0ea5e9] shadow">
          <span>${product.category}</span>
        </div>

        ${product.isFeatured === true ? `
  <div class="labol absolute bg-[#0ea5e9] top-4 right-5 text-[13px] font-[600] text-[#fff] shadow">
    <span>Featured</span>
  </div>
  ` : ""}
      </div > 
    ` )
function openLeyrPopup(projectsid) {
  layrpopup.classList.remove("opacity-0", "pointer-events-none")
  const LayerConten = projects.find(projects => projects.id === projectsid)
  const carentINdex = projects.findIndex(projects => projects.id === projectsid)
  galareImgs.src = LayerConten.image
  carentDefoltOPen = carentINdex
}
function exitLeyrPopup() {
  layrpopup.classList.add("opacity-0", "pointer-events-none")
}
function nextLeyarPopup() {
  if (carentDefoltOPen >= projects.length - 1) {
    carentDefoltOPen = 0;
    galareImgs.src = projects[carentDefoltOPen].image
    return;
  }
  carentDefoltOPen++
  galareImgs.src = projects[carentDefoltOPen].image
}
function prevLeyarPopup() {
  if (carentDefoltOPen === 0) {
    carentDefoltOPen = projects.length - 1
  }
  else {
    carentDefoltOPen--
  }
  galareImgs.src = projects[carentDefoltOPen].image

}