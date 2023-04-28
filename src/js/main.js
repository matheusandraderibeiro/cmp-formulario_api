const valorCep = document.getElementById ("cep");

valorCep.addEventListener ("focusout", () => {buscaCEP (cep.value)});
valorCep.addEventListener ("click", () => {valorCep.value = ""});

async function buscaCEP (cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const converteCEP = await consultaCEP.json();
        const uf = document.getElementById ("uf");
        const rua = document.getElementById ("rua");
        const bairro = document.getElementById ("bairro");
        const cidade = document.getElementById ("cidade");
        
        uf.value = converteCEP.uf;
        rua.value = converteCEP.logradouro;
        bairro.value = converteCEP.bairro;
        cidade.value = converteCEP.localidade;

        if (converteCEP.erro) {
            throw Error("Cep invalido");
        }
        
        return converteCEP;
    } catch (erro) {
        valorCep.value = ("Cep invalido. Por gentileza, tente outro.");
    }
}
