const vardi = ['Jana Kalnina', 'toms brivmurnieks', 'roberts lengdons', 'luize freska', 'andris dridzis'];
const balvas = ['phone', 'house', 'ledusskapis', 'kamera', 'TV'];
const naudaKopa = 100000000000;
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas'); // pievieno mainīgo
rindas.innerHTML += ' ';
let balvas = document.querySelector('.balvas'); // pievieno mainīgo
balvas.innerHTML += ' ';


for (let i = 0; i < uzvaretajuSkaits; i++) {

    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);
    let uzvaretajs = vardi[rand];
    let balvas=balvas[rand];
    rindas.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td> ${uzvaretajs} </td>
        <td> ${balvas}</td>
    </tr>`

}