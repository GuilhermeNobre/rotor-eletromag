var current_rotor;
var fen_rotor;
var pot_bomb;
var pot_roto;
var pot_out;
var rendem_pot;

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

    var questC = calc_pot_bomb(resist_bomb, tensao_moto);
    document.getElementById("pot-bobinas").innerText = questC.toFixed(2) + " W";

    var questD = calc_pot_rot(resist_roto);
    document.getElementById("pot-rotor").innerText = questD.toFixed(2) + " W";

    var questE = calc_pot_out();
    document.getElementById("pot-out-motor").innerText = questE.toFixed(2) + " W";

    var questF = calc_rendem_pot(tensao_moto, corrent_moto);
    document.getElementById("efic-motor").innerText = questF.toFixed(2) + " %";
}

function calc_current(tension, resist_bomb, current)
{
    current_rotor = current - (tension/resist_bomb);
    document.getElementById("corrente").innerText = ""
    return current - (tension/resist_bomb);
}

function calc_forc_eletro(tension, resist_roto)
{
    fen_rotor = tension - (resist_roto * current_rotor);
    document.getElementById("forca-rotor").innerText = ""
    return tension - (resist_roto * current_rotor);
}

function calc_pot_bomb(resist_bomb, tension)
{
    pot_bomb = resist_bomb * Math.pow((tension/ resist_bomb), 2);
    document.getElementById("pot-bobinas").innerText = "";
    return resist_bomb * Math.pow((tension/ resist_bomb), 2);
}

function calc_pot_rot(resist_roto)
{
    pot_roto = resist_roto * Math.pow(current_rotor, 2);
    document.getElementById("pot-rotor").innerText = "";
    return resist_roto * Math.pow(current_rotor, 2);
}

function calc_pot_out()
{
    pot_out = fen_rotor * current_rotor;
    document.getElementById("pot-out-motor").innerText = "";
    return fen_rotor * current_rotor;
}

function calc_rendem_pot(tension, current)
{
    rendem_pot = (pot_out / (tension * current)) * 100;
    document.getElementById("efic-motor").innerText = "";
    return (pot_out / (tension * current)) * 100;
}