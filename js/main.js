
function priceUpdate(item, price){
    const memoryPrice = document.getElementById(item).innerText = price;
    const storagePrice = document.getElementById(item).innerText = price;
    const deliveryCharge = document.getElementById(item).innerText = price;
    // updateBalance
}
// Memory Handaler
document.getElementById('memory2-number').addEventListener('click', function(){
    priceUpdate('extra-memory', 180)
})
document.getElementById('memory1-number').addEventListener('click', function(){
    priceUpdate('extra-memory', 0)
})


// Storage Handaler
document.getElementById('storage1-number').addEventListener('click', function(){
    priceUpdate('extra-storage', 0); 
})
document.getElementById('storage2-number').addEventListener('click', function(){
    priceUpdate('extra-storage', 100);
})
document.getElementById('storage3-number').addEventListener('click', function(){
    priceUpdate('extra-storage', 180);
})

// Delivery Charge Function

function updateCharge(price){
    
}
document.getElementById('free-charge').addEventListener('click', function(){
    priceUpdate('delivery-charge', 0)
})
document.getElementById('paid-charge').addEventListener('click', function(){
    priceUpdate('delivery-charge', 20)
})

