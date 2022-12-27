
let debitoElContainer = document.querySelector(".debito")
let debitoEl = document.querySelector(".debito-inner");
let includeEl = document.querySelectorAll(".list-add");
let excludeEl = document.querySelector(".list-remove");
let cnpjEl = document.querySelector("#cnpj");
let phoneEl = document.querySelector("#telefone-fixo")
let cellphoneEl = document.querySelector("#telefone-celular")

includeEl.forEach((include)=> {
    include.addEventListener("click", includeField)
})

function includeField(e) {
    debitoElContainer.insertAdjacentHTML("beforeend", `<div class="debito-inner border-bottom">
    <div class="debito-input-container">
        <label for="numero-nota-fiscal">Número da nota fiscal</label>
        <input required class="default-input" name="numero-nota-fiscal" id="numero-nota-fiscal" type="text">
    </div>
    <div class="debito-input-container">
        <label for="data-nota-fiscal">Data da nota fiscal</label>
        <input required class="default-input" name="data-nota-fiscal" id="data-nota-fiscal" type="text">
    </div>
    <div class="debito-input-container">
        <label for="numero-nota-fiscal">Valor em aberto</label>
        <input required class="default-input" id="valor-em-aberto" name="valor-em-aberto" type="text">
    </div>

    <div class="imgs-container">
        <img onclick="includeField(this)" src="list-add.svg" class="list-add" alt="">
        <img onclick="excludeField(this)" src="list-remove.svg" class="list-remove" alt"">
    </div>

    </div>`)
    debitoEl.classList.add("border-bottom")
}

function excludeField(e) {
    e.parentElement.parentElement.remove()
}

document.getElementById('cnpj').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + (x[5] ? '-' + x[5] : '');
  });


const handlePhone = (event) => {
let input = event.target
input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
if (!value) return ""
value = value.replace(/\D/g,'')
value = value.replace(/(\d{2})(\d)/,"($1) $2")
value = value.replace(/(\d)(\d{4})$/,"$1-$2")
return value
}