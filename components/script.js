// script.js
document.addEventListener("DOMContentLoaded", function() {

    //1. Bloco do Menu
    fetch('components/menu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o menu');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
        })
        .catch(error => console.error('Erro:', error));

        //2. Bloco do Footer/Rodapé
        fetch('components/footer.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;

                //Ano dinâmico
                const yearElement = document.getElementById('year');
                if (yearElement) {
                    yearElement.textContent = new Date().getFullYear();
                }
            })
            .catch(error => console.error('Erro ao carregar o footer:', error));
        }); //Esta chave fecha o DOMContentLoaded corretamente

//script para o formulário seguir para destino.html
document.getElementById('formulário').addEventListener('submit',function(event){
    const nome = document.getElementById('nome').ariaValueMax;

    //Validação Simples
    if(nome.length < 3){
        alert("Por favor, insira um nome com pelo menos 3 caracteres.");
        event.preventDefault(); //Impede o envio se a condição não for atendida
        return;
    }
    //Se tudo estiver ok, o navegador prosseguirá naturalmente para destino.html
    console.log("Formulário enviado com sucesso!")
});
