/*********§***************************** codice riciclato ***********************************************************/
//------Dichiarazione variabili--------


document.querySelector("#calcolateBtn").addEventListener("click", function (e) {

    e.preventDefault();

    const prezzoKm = 0.21;
    const scontoOver = 0.4;
    const scontoMinori = 0.2;

    const kmString = document.getElementById("numeroKmUser").value;
    const etaString = document.getElementById("age").value;

    console.log(kmString);
    console.log(etaString);

    const kmInt = parseInt(kmString).toFixed(2);
    //const etaInt = parseInt(etaString).toFixed(0);
    console.log(kmInt);
    console.log(etaString);
    //iserire età e km nella tabella
    document.getElementById("eta").innerHTML = `${etaString}`;
    document.getElementById("km").innerHTML = `${kmInt}`;

    let costo = 0;

    //------------Svolgimento-------------
    //calcolo costo del biglietto sui km
    costo = kmInt * prezzoKm;
    console.log(`Il costo del biglietto in base ai km senza verificare gli sconti è di € ${costo}`);

    if (etaString === "junior") {
        costo -= (costo * scontoMinori);
        console.log(`Effettuato lo sconto per minori di 18 anni`);
        document.getElementById("sconto").innerHTML = `20% - Under 18`;

    }else if (etaString === "silver") {
        costo -= (costo * scontoOver);
        console.log(`Effettuato lo sconto per over 65 anni`);
        document.getElementById("sconto").innerHTML = `40% - Over 65`;

    }
    //costo = costo.toFixed(2);
    //Risultato
    console.log(`Il costo totale del biglietto è di € ${costo.toFixed(2)}`);
    document.getElementById("costo").innerHTML = `${costo.toFixed(2)}`;
}
)