


const cards = document.querySelectorAll(".card");



for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  // console.log(card.innerText);

  card.addEventListener('click', function () {
    // console.log("clicked");
    
    // seatLeftSection
    const seatLeftElement = document.getElementById('seatLeft');
    const seatLeftText = seatLeftElement.innerText;
    const seatLeftNumber = parseInt(seatLeftText);
    console.log(typeof seatLeftNumber);
    
    // Decrement left seat number
    const newLeftSeat = seatLeftNumber - 1;
    seatLeftElement.innerText = newLeftSeat;



    // newSelectedSeat
    const newSelectSeatElement = document.getElementById('seatSup');
    const newSelectSeatText = newSelectSeatElement.innerText;
    const newSelectSeatNumber = parseInt(newSelectSeatText);


    // select seat increment
    const newSelectSeat = newSelectSeatNumber + 1;
    newSelectSeatElement.innerText = newSelectSeat;


    // total price
    const totalPriceElement = document.getElementById('totalPrice');
    const totalPriceText = totalPriceElement.innerText;
    const totalPriceNumber = parseInt(totalPriceText);
    
    const totalPrice = totalPriceNumber + 550;
    totalPriceElement.innerText = totalPrice;

   
    
    

    
  


  })
  
}