const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao Cadastro de Imoveis!\n" +
        "Total de imoveis: " + imoveis.length + "\n\n" +
        "Escolha uma opção: \n1. Novo imovel\n2. Listar imoveis disponiveis: \n3. Sair"
    )
    switch (opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietario: ")
            imovel.quartos = prompt("Informe a quantidade de quartos do imovel: ")
            imoveis.banheiros = prompt("Informe a quantidade de banheiros do imoveis: ")
            imoveis.garagem = prompt("O imovel possui garagem ? (Sim/Não)") 

            const confirmacao = confirm(
                "Salvar este imovel?\n"+
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui garagem?: " + imovel.garagem 
            )
                //adicioando os campos dentro do array 
            if (confirmacao) {  
                imoveis.push(imovel)
                alert("Imovel salvo com sucesso!")
            }else {
                alert("Voltando ao menu")
            }
            break
        case "2":
            for(let i = 0 ; i < imoveis.length ; i++) {
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem?: " + imoveis[i].garagem 
                )
            }
            break
        case "3":
            alert ("Saindo...")
            break
        default:
            alert("Opção invalida, tente novamente..")
            break
    }
} while (opcao !== "3")
