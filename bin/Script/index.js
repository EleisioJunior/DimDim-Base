const homeAtivo = document.querySelector(".Home__ver_desver")
const homeOculte = document.querySelector(".Home__preco")

homeAtivo.addEventListener("click",() =>{
    homeAtivo.classList.toggle("Home__ativo")
})

homeAtivo.addEventListener("click",() =>{
    homeOculte.classList.toggle("Home__ocultePreco")
})