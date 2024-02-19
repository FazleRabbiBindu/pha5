var availableSeats = document.getElementById('availableSeat');
var seatCounter = document.getElementById('seatCount');
var totalPriceId = document.getElementById('totalPrice');
var grandTotalId = document.getElementById('grandTotal');
var numberValue = document.getElementById('phoneNumber').value;

var totalSeat = 40;
var totalPrice = 0;
var discount = 0;
var selectedSeat = 0;
var selectedSeatNumber = [];

function fairCalculation(seatNumber) {
    selectedSeatNumber[selectedSeat] = seatNumber;
    selectedSeat += 1;
    totalPrice += 550;

    totalPriceId.innerText = totalPrice
    seatCounter.innerText = selectedSeat;
    grandTotalId.innerText = totalPrice;
    if (selectedSeat == 4) {
        document.getElementById('couponApply').classList.remove('btn-disabled')
    }

}
function elementManipulation(seatNumber) {
    numberValue = parseInt(document.getElementById('phoneNumber').value);

    if (selectedSeatNumber.length > 0 && !isNaN(numberValue)) {
        document.getElementById('nextButton').classList.remove('btn-disabled');
    }
    else {
        document.getElementById('nextButton').classList.add('btn-disabled');
    }
    // document.getElementById(seatNumber).classList.add('btn-disabled');
    document.getElementById(seatNumber).classList.replace('bg-[#F7F8F8]', 'bg-[#1DD100]');

    document.getElementById('book' + seatNumber).classList.remove('hidden');
}
function seatSelection(seatNumber) {
    if (!selectedSeatNumber.includes(seatNumber)) {
        totalSeat = totalSeat - 1;
        availableSeats.innerText = totalSeat;
        fairCalculation(seatNumber);
        elementManipulation(seatNumber);
    }
    else {
        unhideEl('seatSelected');
    }
}

function bookSeat(seatNumber) {
    (selectedSeat < 4) ? seatSelection(seatNumber) :
        console.log('');

    console.log('seat selected: ', selectedSeat);
    console.log('Selected Seats: ', selectedSeatNumber);

}

function unhideEl(popIndex) {
    switch (popIndex) {
        case 'lowSeat':
            document.getElementById('lowSeat').classList.remove('hidden');
            break;
        case 'notPhone':
            document.getElementById('notPhone').classList.remove('hidden');
            break;
        case 'couponCode':
            document.getElementById('couponCodeAlert').classList.remove('hidden');
            break;
        default:

    }
}
function hideEl(popIndex) {
    switch (popIndex) {
        case 'lowSeat':
            document.getElementById('lowSeat').classList.add('hidden');
            break;
        case 'notPhone':
            document.getElementById('notPhone').classList.add('hidden');
            break;
        case 'couponCode':
            document.getElementById('couponCodeAlert').classList.add('hidden');
            break;
        default:

    }
}

function next() {
    element = document.getElementById('my_modal_1');
    phone = document.getElementById('phoneNumber');
    element.showModal();
}

function activeNext() {
    numberValue = parseInt(document.getElementById('phoneNumber').value);

    if (selectedSeatNumber.length > 0 && !isNaN(numberValue)) {
        document.getElementById('nextButton').classList.remove('btn-disabled');
    }
    else {
        document.getElementById('nextButton').classList.add('btn-disabled');

    }
    console.log('ACTIVE NEXT', document.getElementById('phoneNumber').value);
}

function applyCouponCode() {
    var couponCodeValue = document.getElementById('userCouponCode').value;
    var token = 0;
    // console.log(couponCodeValue);
    if (couponCodeValue === 'NEW15') {
        var discount = ((15 * totalPrice) / 100);
        token = 1;
    }
    else if(couponCodeValue === 'Couple 20')
    {
        var discount = ((20 * totalPrice) / 100);
        token = 1;
    } 
    if(token == 1)
    {
        document.getElementById('discountPrice').innerText = discount;
        document.getElementById('grandTotal').innerText = (totalPrice - discount);
        document.getElementById('couponSection').classList.add('hidden');
        document.getElementById('discountSection').classList.remove('hidden');
        hideEl('couponCode');
    }
    else{
        unhideEl('couponCode');
    }

    console.log(discount);

}