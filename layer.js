const params = new URLSearchParams(location.search)
const number = params.get("id")
const product = projects[number-1]
const contentCard = document.querySelector(".layer-content-card")
 contentCard.innerHTML = `
 <div class="cardes contenar bg-[#fff] rounded-[15px] flex gap-[40px] ">
            <div class="cared-imedg w-1/2 h-[80vh] overflow-hidden rounded-[15px] border border-[#99999925]  shadow-md">
                <img src="${product.image}" alt="" class="conte">
            </div>
            <div class="cared-conrent w-1/2">
                <div class="card-text">
                    <h2 class="text-[30px] font-[600]">${product.title}</h2>
                    <p>${product.description}</p>
                </div>
                <div class="icon  text-[14px] font-[600] text-[#0ea5e9] ">
                    <span class="cont-icon">${product.tags[0]}</span>
                    <span class="cont-icon">${product.tags[1]}</span>
                </div>
            </div>
        </div>
`