var vez = "X";
var xPontos = 0;
var oPontos = 0;

$(".area-jogo div").click(
    function(){
        if($(this).html() != "") 
            return;//encerra a função
        
        $(this).html(vez);

        if(vez == "X")
            vez = "O";
        else
            vez = "X";
        
        $("#j1").toggleClass("btn-outline-primary");
        $("#j1").toggleClass("btn-primary");
        $("#j2").toggleClass("btn-outline-danger");
        $("#j2").toggleClass("btn-danger");

        verificaGanhador();
    }
)

function verificaGanhador(){
    //criando um array com todas as casas do jogo
    let casas =  document.getElementsByClassName("casa");

    if(casas[0].innerHTML == casas[1].innerHTML &&
        casas[0].innerHTML == casas[2].innerHTML &&
        casas[0].innerHTML != ""){
        //1ª horizontal
        if(casas[0].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c0").addClass("vitoria");
        $("#c1").addClass("vitoria");
        $("#c2").addClass("vitoria");
    } else if(casas[3].innerHTML == casas[4].innerHTML &&
        casas[3].innerHTML == casas[5].innerHTML &&
        casas[3].innerHTML != ""){
        //2ª horizontal
        if(casas[3].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c3").addClass("vitoria");
        $("#c4").addClass("vitoria");
        $("#c5").addClass("vitoria");
    } else if(casas[6].innerHTML == casas[7].innerHTML &&
        casas[6].innerHTML == casas[8].innerHTML &&
        casas[6].innerHTML != ""){
        //3ª horizontal
        if(casas[6].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c6").addClass("vitoria");
        $("#c7").addClass("vitoria");
        $("#c8").addClass("vitoria");
    } else if(casas[0].innerHTML == casas[3].innerHTML &&
        casas[0].innerHTML == casas[6].innerHTML &&
        casas[0].innerHTML != ""){
        //1ª vertical
        if(casas[6].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c0").addClass("vitoria");
        $("#c3").addClass("vitoria");
        $("#c6").addClass("vitoria");
    } else if(casas[1].innerHTML == casas[4].innerHTML &&
        casas[1].innerHTML == casas[7].innerHTML &&
        casas[1].innerHTML != ""){
        //2ª vertical
        if(casas[1].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c1").addClass("vitoria");
        $("#c4").addClass("vitoria");
        $("#c7").addClass("vitoria");
    } else if(casas[2].innerHTML == casas[5].innerHTML &&
        casas[2].innerHTML == casas[8].innerHTML &&
        casas[2].innerHTML != ""){
        //3ª vertical
        if(casas[2].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c2").addClass("vitoria");
        $("#c5").addClass("vitoria");
        $("#c8").addClass("vitoria");
    } else if(casas[0].innerHTML == casas[4].innerHTML &&
        casas[0].innerHTML == casas[8].innerHTML &&
        casas[0].innerHTML != ""){
        //1ª diagonal
        if(casas[0].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c0").addClass("vitoria");
        $("#c4").addClass("vitoria");
        $("#c8").addClass("vitoria");
    } else if(casas[2].innerHTML == casas[4].innerHTML &&
        casas[2].innerHTML == casas[6].innerHTML &&
        casas[2].innerHTML != ""){
        //2ª diagonal
        if(casas[2].innerHTML.toLowerCase() == "x"){
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 1");
            xPontos++;
        } else {
            $("#alert").addClass("show");
            $("#textoAlert").html("Vitória do Jogador 2");
            oPontos++;
        }
        $("#c2").addClass("vitoria");
        $("#c4").addClass("vitoria");
        $("#c6").addClass("vitoria");
    }
    $("#xPontos").html(xPontos);
    $("#oPontos").html(oPontos);
}

$("#btnReset").click(
    function(){
        $(".casa").html("");
        vez = "X";
        $("#j1").attr('class', 'btn btn-primary')
        $("#j2").attr('class','btn btn-outline-danger');
        $(".casa").removeClass("vitoria");
    }
)