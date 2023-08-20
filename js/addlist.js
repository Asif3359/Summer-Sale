
function totalPriceValue(id){
  const OldtotalPrice =  parseFloat( document.getElementById(id).innerText.split(" ")[3]);
//   console.log(TotalPrice);
return OldtotalPrice;
}

// set total Price Value 
function steTotalPriceValue(id1 , price)
{
     document.getElementById(id1).innerHTML=`
       <p id="total-price" class="font-bold py-1">Total price : <span class="font-semibold text-gray-500"> ${price} TK</span></p>
     `;
    
}
// set discount 
function setDiscountPrice(id4 , price)
{
    document.getElementById(id4).innerHTML=`
    <p id="discount-price" class="font-bold py-1">Discount : <span class="font-semibold text-gray-500">${price} TK</span></p>
    `
}

// set End price value 
function setEndPriceValue(id2 , price)
{
    document.getElementById(id2).innerHTML=`
    <p id="end-price" class="font-bold py-1">Total : <span class="font-semibold text-gray-500">${price} TK</span></p>
    `
}

// appent product title 
let count = 1;
function setItemName(title)
{
    const p = document.createElement("p");

    p.innerHTML = ` 
   <span class="font-bold py-1">${count++}. ${title}</span>
    `
    document.getElementById('list-name').appendChild(p);
}

// cupon-number get cupun number 
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
            if (totalPrice > 0) {
                document.getElementById('purchase-btn').removeAttribute('disabled');
                
            } else {
                document.getElementById('purchase-btn').setAttribute('disabled', 'true');
                
            }

            if (totalPrice >= 200) {
                document.getElementById('cupon-aply-btn').removeAttribute('disabled');
            } else {
                document.getElementById('cupon-aply-btn').setAttribute('disabled', 'true');
            }
            if(price>0)
            {
                setItemName(name);
            }
            
        steTotalPriceValue("total-price",totalPrice.toFixed(2));
       

        let discountPrice= 0 ;
        if(cuponNumber == 100)
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
let cuponNumber = 0;
function cuponCodeClick(target){
    const cuponvalue = getCuponValue("cupon-number");

    if(cuponvalue == "SELL200"){

        cuponNumber=100;
        const total = totalPriceValue("total-price");
        
        discountPrice = (20/100)*(total).toFixed(2);

        setDiscountPrice("discount-price", discountPrice.toFixed(2));
        setEndPriceValue("end-price" ,(total-discountPrice).toFixed(2));
    }

}
document.getElementById("go-home-btn").addEventListener("click",function()
{
    location.reload();
});

// Get a reference to the button

document.getElementById('cupon-code').addEventListener('click', function () {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = document.getElementById('cupon-code').innerText;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Provide feedback to the user
    // alert('Coupon code copied to clipboard:' + document.getElementById('cupon-code').innerText);
});


