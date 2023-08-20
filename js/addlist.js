
// get old total price with attribute id 
function totalPriceValue(id){
  const OldtotalPrice =  parseFloat( document.getElementById(id).innerText.split(" ")[3]);
  return OldtotalPrice;
}

// set total Price Value  with attrivute id1 , price 
function steTotalPriceValue(id1 , price)
{
     document.getElementById(id1).innerHTML=`
       <p id="total-price" class="font-bold py-1">Total price : <span class="font-semibold text-gray-500"> ${price} TK</span></p>
     `; 
}

// set discount with attribute id4 , price 
function setDiscountPrice(id4 , price)
{
    document.getElementById(id4).innerHTML=`
    <p id="discount-price" class="font-bold py-1">Discount : <span class="font-semibold text-gray-500">${price} TK</span></p>
      `
}

// set End price value  with attribute id2 , price 
function setEndPriceValue(id2 , price)
{
    document.getElementById(id2).innerHTML=`
    <p id="end-price" class="font-bold py-1">Total : <span class="font-semibold text-gray-500">${price} TK</span></p>
    `
}

// append product title with attribute title 
let count = 1;
function setItemName(title)
{
    const p = document.createElement("p");
    p.innerHTML = ` 
   <span class="font-bold py-1">${count++}. ${title}</span>
    `
    document.getElementById('list-name').appendChild(p);
}

// cupon-number get cupun number  with attribute id3
function getCuponValue(id3)
{
    const cuponCard = document.getElementById(id3).value;
    document.getElementById(id3).value="";
    return cuponCard;
}



// this is selcet item 
function CardClick(target)
{
    const name = target.childNodes[3].childNodes[3].innerText;
    const price = parseFloat(target.childNodes[3].childNodes[5].innerText.split(" ")[0]); 
    const total = totalPriceValue("total-price");

    const totalPrice = price + total ;

            // if total price is getterthen 0 make purchase btn disabled
            if (totalPrice > 0) {
                document.getElementById('purchase-btn').removeAttribute('disabled');
                
            } else {
                document.getElementById('purchase-btn').setAttribute('disabled', 'true');
                
            }

            // if total price is getterthen 200 or 200  apply button is enable 
            if (totalPrice >= 200) {
                document.getElementById('cupon-aply-btn').removeAttribute('disabled');
            } else {
                document.getElementById('cupon-aply-btn').setAttribute('disabled', 'true');
            }

            // if price == 0 then not add it in card 
            if(price>0)
            {
                setItemName(name);
            }
            
        steTotalPriceValue("total-price",totalPrice.toFixed(2));
       
        // when apply with promo code then the functionality 
        let discountPrice = 0 ;
        if(cuponNumber == 100) // condition if apply is clicked
        {
            discountPrice = (20/100)*(totalPrice);
            
            setDiscountPrice("discount-price", discountPrice.toFixed(2));
            setEndPriceValue("end-price" ,(totalPrice-discountPrice).toFixed(2));
        }
        else
        {
            setEndPriceValue("end-price" ,(totalPrice).toFixed(2));
        }
}



// for aply button 
// when apply cupon code then in time change value  
let cuponNumber = 0; // this is a variable to access in when click card 
function cuponCodeClick(target){
    const cuponvalue = getCuponValue("cupon-number");

    if(cuponvalue == "SELL200"){

        cuponNumber=100; // when clickd apply 
        const total = totalPriceValue("total-price");
        
        discountPrice = (20/100)*(total).toFixed(2);


        // and intime change value 
        setDiscountPrice("discount-price", discountPrice.toFixed(2));
        setEndPriceValue("end-price" ,(total-discountPrice).toFixed(2));
    }

}

// when clicked go Home button the relode this page 
document.getElementById("go-home-btn").addEventListener("click",function()
{
    location.reload();
});



// Get a reference to the button
// extra code copy cuponCode with button 
document.getElementById('cupon-code').addEventListener('click', function () {
    const textarea = document.createElement('textarea');
    textarea.value = document.getElementById('cupon-code').innerText;

    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    // alert('Coupon code copied to clipboard:' + document.getElementById('cupon-code').innerText);
});


