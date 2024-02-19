var availableSeats = document.getElementById('availableSeat');
var seatCounter = document.getElementById('seatCount');
var totalPriceId = document.getElementById('totalPrice');
var grandTotalId = document.getElementById('grandTotal');

var totalSeat = 8;
var totalPrice = 0;
var discount = 0;
var selectedSeat = 0;
var selectedSeatNumber = [];

function fairCalculation(seatNumber)
{
    selectedSeatNumber[selectedSeat] = seatNumber;
    selectedSeat += 1;
    totalPrice += 550;
    totalPriceId.innerText=totalPrice
    seatCounter.innerText = selectedSeat;
    grandTotalId.innerText = totalPrice;

}
function elementManipulation(seatNumber)
{
    document.getElementById('nextButton').classList.remove('btn-disabled')
    // document.getElementById(seatNumber).classList.add('btn-disabled');
    document.getElementById(seatNumber).classList.replace( 'bg-[#F7F8F8]', 'bg-[#1DD100]');

    document.getElementById('book'+seatNumber).classList.remove('hidden');
}
function seatSelection(seatNumber) {
    if(!selectedSeatNumber.includes(seatNumber))
    {
        totalSeat = totalSeat - 1;
        availableSeats.innerText = totalSeat;
        elementManipulation(seatNumber);
        fairCalculation(seatNumber);
    }
    else{
        unhideEl('seatSelected');
    }
}

function bookSeat(seatNumber) {
    (selectedSeat < 4) ? seatSelection(seatNumber) :
        console.log('you have reached your limit');

    console.log('seat selected: ', selectedSeat);
    console.log('Selected Seats: ', selectedSeatNumber);

}

function unhideEl(popIndex){
    switch (popIndex){
        case 'lowSeat':
            document.getElementById('lowSeat').classList.remove('hidden');
        break;
        case 'notPhone':
            document.getElementById('notPhone').classList.remove('hidden');
        break;
        default:

    }
}
function hideEl(popIndex){
    switch (popIndex){
        case 'lowSeat':
            document.getElementById('lowSeat').classList.add('hidden');
        break;
        case 'notPhone':
            document.getElementById('notPhone').classList.add('hidden');
        break;
        default:

    }
}

function next()
{
    seatsBooked = selectedSeatNumber.length;
    // console.log(seatsBooked);
    
    element = document.getElementById('my_modal_1');
    phone = document.getElementById('phoneNumber');
    var phoneNumber = parseInt(phone.value);
    console.log(phoneNumber);

    if(seatsBooked>0 && !isNaN(phoneNumber))
    {
        element.showModal();
    }
    else{
        (seatsBooked<=0)?unhideEl('lowSeat'):hideEl('lowSeat');

        (isNaN(phoneNumber))?unhideEl('notPhone'):hideEl('notPhone');
    }
}