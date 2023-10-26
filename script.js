const button= document.querySelector(`#button`) 
const card= document.querySelector(`#card`);

button.addEventListener(`click`, getApi)




function getApi(){
    //   b. använder URI:n som parameter till en fetch-request,
    //    use URL as a parameter to a fetch reques
fetch( `https://deckofcardsapi.com/api/deck/new/draw/?count=1
`)
.then(res => res.json())
.then(data =>
{
console.log(data);
if (data.card && data.card.lenght>0){
    card.image=data.card[0];
    const createlemt= document.createElement("img");//how should I add src here?????????
    createlemt.setAttribute(card.image);
    card.innerHTML=``;
    card.appendChild(image)

}
    
})
.catch(err => console.log(err))

}
