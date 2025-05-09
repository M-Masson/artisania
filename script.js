const flipBtn = document.querySelectorAll(".flip-btn");



flipBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
        const cardInner = btn.closest(".card").querySelector(".card-inner")
        cardInner.classList.toggle("flipped")
    })
})

