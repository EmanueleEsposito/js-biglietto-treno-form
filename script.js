const form = document.getElementById('form');
function salvaInformazioniUtente(){
  let km=  document.getElementById('km-input').value;
  console.log(km)
  let eta =document.getElementById('eta-input').value;
  console.log(eta)  
  calcolaPrezzoBiglietto(km,prezzoAlKm,eta)
  let prezzoBiglietto = calcolaPrezzoBiglietto(km,prezzoAlKm,eta);
  console.log(prezzoBiglietto)

}
form.addEventListener('submit', salvaInformazioniUtente);


const prezzoAlKm = 0.21;
const scontoMinorenni = 0.20;
const scontoOver65 = 0.40;
let kmInput;
let etaInput;

function calcolaPrezzoBiglietto(kmInput,prezzoAlKm,etaInput){
    if (etaInput <= 18) {
        return (kmInput*prezzoAlKm)-(kmInput*prezzoAlKm*scontoMinorenni)
    }
    if (etaInput >= 65) {
        return (kmInput*prezzoAlKm)-(kmInput*prezzoAlKm*scontoOver65)
    }else {
        return kmInput*prezzoAlKm;
    }

}