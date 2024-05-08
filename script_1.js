//função de criação do objeto Personagem:
function Personagem(Genero, Categoria, Natureza) {
    this.Genero = Genero;
    this.Categoria = Categoria;
    this.Natureza = Natureza;
    this.Equipamento = function() {
        switch (this.Categoria) {
            case 'Arqueiro':
                return 'Arco-curto';
                break;
            case 'Barbaro':
                return 'Machado';
                break;
            case 'Ladino':
                return 'Adaga';
                break;
            default:
                return 'Indefinido';
        }
    };
}
//função para instanciar o objeto Heroi e exibir na página:
function SalvarHeroi() {
    var opcao = new Array(3);
    for (var i = 0; i <= 2; i++) {
        var selecao = document.getElementById(i);
        opcao[i] = selecao.options[selecao.selectedIndex].text;
    }
    //criação do objeto Heroi:
    var Heroi = new Personagem(opcao[0], opcao[1], opcao[2]);
    //Exibição dos atributos do objeto Heroi:
    document.getElementById('genero').innerHTML = Heroi.Genero;
    document.getElementById('categoria').innerHTML = Heroi.Categoria;
    document.getElementById('natureza').innerHTML = Heroi.Natureza;
    document.getElementById('equipamento').innerHTML=Heroi.Equipamento();
}