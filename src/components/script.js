// script.js
document.addEventListener("DOMContentLoaded", function() {

    //1. Bloco do Menu
    fetch('../components/menu.html')
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

        //2. bloco do Rodapé 
        fetch('../components/footer.html')
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
