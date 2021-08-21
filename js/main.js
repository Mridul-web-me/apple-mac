
function priceUpdate(item, price){
    const memoryPrice = document.getElementById(item).innerText = price;
    const storagePrice = document.getElementById(item).innerText = price;
    const deliveryCharge = document.getElementById(item).innerText = price;
    // updateBalance
    calculateTotal()
}
// Memory Handaler
document.getElementById('memory2-number').addEventListener('click', function(){
    priceUpdate('memory-extra', 180)
})
document.getElementById('memory1-number').addEventListener('click', function(){
    priceUpdate('memory-extra', 0)
})


// Storage Handaler
document.getElementById('storage1-number').addEventListener('click', function(){
    priceUpdate('storage-extra', 0); 
})
document.getElementById('storage2-number').addEventListener('click', function(){
    priceUpdate('storage-extra', 100);
})
document.getElementById('storage3-number').addEventListener('click', function(){
    priceUpdate('storage-extra', 180);
})

// Delivery Charge Function

function updateCharge(price){
    
}
document.getElementById('free-charge').addEventListener('click', function(){
    priceUpdate('delivery-extra', 0)
})
document.getElementById('paid-charge').addEventListener('click', function(){
    priceUpdate('delivery-extra', 20)
})


function getInputValue(cost){
    const getCostValue = document.getElementById(cost + '-extra');
    const getCost = parseFloat(getCostValue.innerText);
    return getCost;
}

function calculateTotal(){
    const memoryCost = getInputValue('memory');
    const storageCost = getInputValue('storage');
    const deliveryCost = getInputValue('delivery');
    const bestPrice = memoryCost + storageCost + deliveryCost + 1299;
    document.getElementById('best-price').innerText = bestPrice;
    document.getElementById('total-price').innerText = bestPrice;
    document.getElementById('total').innerText = bestPrice;
}


// promo code

document.getElementById('apply-button').addEventListener('click', function(){
    let inputField = document.getElementById('input-field');
    let inputFieldName = inputField.value;
   let totalPrice = document.getElementById('total');
   let total = totalPrice.innerText;
   if(inputFieldName == 'stevekaku'){
    totalPrice.innerText = total - (total * (20 / 100));
    const fail = document.getElementById('fail');
    fail.style.display = 'none';
    const success = document.getElementById('success');
    success.style.display = 'block';
    const button = document.getElementById('apply-button');
    button.setAttribute('disabled', true)
   }
   else{
    const fail = document.getElementById('fail');
    fail.style.display = 'block';
    const success = document.getElementById('success');
    success.style.display = 'none';
   }
   inputField.value = '';
})

