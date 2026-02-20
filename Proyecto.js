function todollar(){

    let coin = parseFloat(document.getElementById("coin").value);
    let dollars=(coin * 0.94);
    
    document.getElementById("cambio_divisa").innerText = coin + " euros son " + dollars.toFixed(2) + " dólares.";

    return;
}

function toeuro(){
    
    let coin = parseFloat(document.getElementById("coin").value);
    let euros = (coin / 0.94);

    document.getElementById("cambio_divisa").innerText = coin + " dólares son " + euros.toFixed(2) + " euros.";

    return;
}