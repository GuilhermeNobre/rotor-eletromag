var current_rotor;
var fen_rotor;
var pot_bomb;

function calc_data()
{    
    var resist_bomb = document.getElementById("resist-bomb").value;
    console.log(resist_bomb)
    var resist_roto  = document.getElementById("resist-roto").value;
    console.log(resist_roto);
    var corrent_moto = document.getElementById("corrent-moto").value;
    console.log(corrent_moto);
    var tensao_moto = document.getElementById("tensao-moto").value;
    console.log(tensao_moto);

    var questA = calc_current(tensao_moto, resist_bomb, corrent_moto).toFixed(2); 
    document.getElementById("corrente").innerText = questA + " A";

    var questB = calc_forc_eletro(tensao_moto, resist_roto);
    document.getElementById("forca-rotor").innerText = questB.toFixed(2) + " V";

    var questC;
}

function calc_current(tension, resist_bomb, current)
{
    current_rotor = current - (tension/resist_bomb);
    document.getElementById("corrente").innerText = ""
    return current - (tension/resist_bomb);
}

function calc_forc_eletro(tension, resist_roto)
{
    fen_rotor = tension/(resist_roto * current_rotor);
    document.getElementById("forca-rotor").innerText = ""
    return tension/(resist_roto * current_rotor);
}

function calc_pot_bomb(resist_bomb, tension)
{
    pot_bomb = resist_bomb * Math.pow((tension/ resist_bomb), 2);
    document.getElementById("pot-bobinas").innerText = "";
}