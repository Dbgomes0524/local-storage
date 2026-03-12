const ListItens = [
    {
        Nome: "Daniel",
        Idade: "17"
    },
    {
        Nome: "Antonio",
        idade: "17"
    },
    {
        Nome: "Miguel",
        idade: "17"
    }
]

localStorage.setItem("lista", JSON.stringify(ListItens));