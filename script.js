
    function somar() {
        var n1 = document.getElementById("n1").value
        var n2 = document.getElementById("n2").value
        var soma = Number(n1) + Number(n2)
        document.querySelector(".result").innerHTML=soma

    }
    function diminuir(){
        var n1 = document.getElementById("n1").value
        var n2 = document.getElementById("n2").value
        var menos = Number(n1) - Number(n2)
        document.querySelector(".result").innerHTML=menos
    }
    function mutiplicar(){
        var n1 = document.getElementById("n1").value
        var n2 = document.getElementById("n2").value
        var resultado = Number(n1) * Number(n2)
        document.querySelector(".result").innerHTML=resultado
    }
    function dividir(){
        var n1 = document.getElementById("n1").value
        var n2 = document.getElementById("n2").value
        var resultado = Number(n1) / Number(n2)
        document.querySelector(".result").innerHTML=resultado
    }
    function limpar(){
    document.getElementById("n1").value=""
    document.getElementById("n2").value=""

    }

