let titleCount = 1;


const cards = document.querySelectorAll(".nabisco");
// console.log(cards);


for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  // console.log(card);

  card.addEventListener('click', function () {
    // console.log("clicked");

    const seatNumber = card.querySelector("h3").innerText;
    console.log(seatNumber);


    const seatTable = document.getElementById("seatCount");

    const tr = document.createElement("tr");
    tr.innerText = seatNumber + "Economy " + " 550 " ;

    seatTable.appendChild(tr);
    

    
    





  });
  
}