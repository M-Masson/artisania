const flipBtn = document.querySelectorAll(".flip-btn")
const btnPlus = document.querySelectorAll(".btn-plus")
const modal1 = document.createElement("aside")
const login = document.getElementById("connexion")



flipBtn.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
        const cardInner = btn.closest(".card").querySelector(".card-inner")
        cardInner.classList.toggle("flipped")
    })
})
btnPlus.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
        const cardInner = btn.closest(".card").querySelector(".card-inner")
        cardInner.classList.toggle("flipped")
    })
})

const outsideClick = (event)=>{
    if(!event.target.closest(".modal-page") && modal1.contains(event.target)){
        closeModal()
    }
}


const openModal = ()=>{
    
    if(!document.body.contains(modal1)){
        modal1.classList.add("modal")
        document.body.appendChild(modal1);
    }

   
    modal1.style.display = "flex";
    modal1.setAttribute("aria-modal", "true");
    modal1.removeAttribute("aria-hidden"); 
    modal1.innerHTML = "";

   

    const modalPage = document.createElement("div")
    modalPage.classList.add("modal-page")

    modalPage.addEventListener("click", (e)=>{
        e.stopPropagation();
    })

    const modalTitle = document.createElement("p")
    modalTitle.classList.add("form-title")
    modalTitle.innerText = "Connexion"
    
    const modalForm = document.createElement("form")
    modalForm.classList.add("login-form")

    const modalEmailLabel = document.createElement("label")
    modalEmailLabel.setAttribute("for", "email")
    modalEmailLabel.innerText = "E-mail"

    const modalPasswordLabel = document.createElement("label")
    modalPasswordLabel.setAttribute("for","password")
    modalPasswordLabel.innerText = "Mot de passe"

    const modalEmailInput = document.createElement("input")
    modalEmailInput.classList.add("email")
    modalEmailInput.setAttribute("type", "text")
    modalEmailInput.setAttribute("name", "email")

    const modalPasswordInput = document.createElement("input")
    modalPasswordInput.classList.add("password")
    modalPasswordInput.setAttribute("type", "password")
    modalPasswordInput.setAttribute("name", "password")

    const errorMessage = document.createElement("div")
    errorMessage.classList.add("error")

    const submitBtn = document.createElement("input")
    submitBtn.classList.add("submit")
    submitBtn.setAttribute("type", "submit")
    submitBtn.setAttribute("value", "Se connecter")

    const singinBtn = document.createElement("a")
    singinBtn.classList.add("singin-btn")
    singinBtn.setAttribute("href", "")
    singinBtn.innerText = "S'inscrire"

    const forgetBtn = document.createElement("a")
    forgetBtn.classList.add("forget-btn")
    forgetBtn.setAttribute("href", "")
    forgetBtn.innerText = "Mot de passe oublié"
    
    modal1.appendChild(modalPage)
    modalPage.appendChild(modalTitle)
    modalPage.appendChild(modalForm)
    modalForm.appendChild(modalEmailLabel)
    modalForm.appendChild(modalEmailInput)
    modalForm.appendChild(modalPasswordLabel)
    modalForm.appendChild(modalPasswordInput)
    modalForm.appendChild(errorMessage)
    modalForm.appendChild(singinBtn)
    modalForm.appendChild(forgetBtn)

    document.addEventListener("click", outsideClick)
}

login.addEventListener("click", ()=>{
    openModal()
})

const closeModal = ()=>{
    modal1.style.display = "none"
    modal1.setAttribute("aria-hidden", "true")
    modal1.removeAttribute("aria-modal")
    document.removeEventListener("click", outsideClick)
}

