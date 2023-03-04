function calcTip(){
    let subtmt = document.getElementById('subtotal');
    let tiptmt = document.getElementById('tip');
    let totmt = document.getElementById('total');

    let sub = subtmt.value;

   
    let tip = tiptmt.value;
     if(tip<99 && tip>=0){
         let total =((tip /100) * sub) + parseInt(sub);
        totmt.innerHTML = '$' + total;
     }
    else{
        totmt.innerHTML = 'Tip must be between 0 - 99';
    }
}