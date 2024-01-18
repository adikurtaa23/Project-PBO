

let totalHargagas = 0;
let food = [
    {
        name:`GAS 5.5KG`,
        stok: 2,
        harga: 30000,
        image: 'image/5.5kg.png'
    },
    {
        name:`GAS 12 KG`,
        stok: 0,
        harga: 60000,
        image: 'image/12kg.png'
    },
    {
        name:`GAS 3kg`,
        stok: 12,
        harga: 25000,
        image: '3kg.png'
    },
    {
  name:`Galon Aqua`,
        stok: 20,
        harga: 17000,
        image: 'image/galon.jpeg'

    },
    {
        name:`Galon Grand`,
              stok: 20,
              harga: 17000,
              image: 'image/grand.png'
      
          },
          {
            name:`Galon Le Mineral`,
                  stok: 20,
                  harga: 17000,
                  image: 'image/lemin.png'
          
              },
              {
                name:`Galon Cleo`,
                      stok: 20,
                      harga: 17000,
                      image: 'image/cleo.png'
              
                  },
                  {
                    name:`Beras Maknyuss 5 kg`,
                          stok: 100,
                          harga: 74000,
                          image: 'image/maknyus.png'
                  
                      },
                      {
                        name:`Beras Pandan Wangi 5 kg`,
                              stok: 100,
                              harga: 75000,
                              image: 'image/pandan.png'
                      
                          },
                          {
                            name:`Beras Sania 5 kg`,
                                  stok: 200,
                                  harga: 71000,
                                  image: 'image/sania.png'
                          
                              },
                     {
                                name:`Minyak Goreng Sania 1 liter`,
                                      stok: 200,
                                      harga: 17000,
                                      image: 'image/minyak.png'
                              
                                  },
                         {
                                    name:`Minyak Goreng Bimoli 1 liter`,
                                          stok: 200,
                                          harga: 19300,
                                          image: 'image/bimoli.png'
                                  
                                      },
                                 {
                                    name:`Minyak Goreng Sunco 1 liter`,
                                          stok: 200,
                                          harga: 18300,
                                          image: 'image/sunco.png'
                                  
                                      },
                                {
                                    name:`Minyak Goreng Filma 1 liter`,
                                          stok: 200,
                                          harga: 20300,
                                        image:'image/filma.png'
                                        },
                                    {
                                                    name:`Gula pasir Rose Brand 1 kg`,
                                                          stok: 200,
                                                          harga: 16100,
                                                          image: 'image/rose.png'
                                                        },
                                     {
                                                            name:`Gula pasir GULAKU 1 kg`,
                                                                  stok: 200,
                                                                  harga: 16000,
                                                                  image: 'image/gulaku.png'
                                                                },
                            {
                                                                    name:`Gula pasir GMP 1 kg`,
                                                                          stok: 200,
                                                                          harga: 17000,
                                                                          image: 'image/gmp.png'
                                                                        },
    {
                                                                            name:`Tepung Terigu Segitiga Biru 1 kg`,
                                                                                  stok: 200,
                                                                                  harga: 13000,
                                                                                  image: 'image/segitiga.png'
                                                                                },
    
]

let cart = [

];

let pembelian =[

];

function debug(){
    console.log(pembelian); 
}

function checkAvailable(){
    var available = true;
    for(var i = 0; i<cart.length; i++){
        for(var j = 0; j<food.length; j++){
            if(cart[i].name === food[j].name){
                if(food[j].stok < cart[i].jumlah){
                    available = false;
                    alert(`Stok ${food[j].name} tinggal ${food[j].stok}`);
                    break;
                }
            }  
        }
        if(!available){
            break;
        }
    }

    return available
}

function orderFood(){
  
    if(checkAvailable()){
        for(var x = 0; x<cart.length; x++){
            for(var y = 0; y<food.length; y++){
                if(cart[x].name === food[y].name){  
                        food[y].stok -= cart[x].jumlah;
                }
            }
        }
        var cartList = document.getElementById('cartList');

        // UNTUK MATIKAN CARTLIST
        cartList.setAttribute('style','display:none');
        alert(`Pesanan telah diterima, Mohon menunggu pesanan, Total Harga : Rp${toRupiah(totalHargagas)},00`);
        cart.push(totalHargagas);
        pembelian.push(cart);
        totalHargagas = 0;
        cart = [];
        generateData();    
    }
    console.log(pembelian); 
    console.log(food);
}

function addtoCart(index) {
    console.log(food[index].name);
    var hasExist = false;
    var hasEmpty = false;
    if(food[index].stok <= 0){
        alert(`${food[index].name} habis, silahkan pesan menu lainnya yang tersedia`);
        hasEmpty = true;
    }
    for(var i = 0; i<cart.length; i++){
        if(food[index].name === cart[i].name){
            if(food[index].stok - cart[i].jumlah <=0){
                alert(`${food[index].name} habis, silahkan pesan menu lainnya yang tersedia`);
                hasEmpty = true;
                break;
            }else{
                totalHargagas += cart[i].harga;
                //console.log(totalHargaMakanan);
                cart[i].jumlah ++;
                hasExist = true;
                break;
            }      
        }
    }
    if(!hasExist && !hasEmpty){
        let obj ={
            name: food[index].name,
            harga: food[index].harga,
            jumlah: 1,
            image: food[index].image,
        }
        totalHargagas +=food[index].harga;
        cart.push(obj);
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }
}

function removeFood(value){
    
    //console.log(cart[value].jumlah);
    if(cart[value].jumlah > 0){
        totalHargagas -=cart[value].harga;
        cart[value].jumlah--;
    }   
    if(cart[value].jumlah === 0){
        cart.splice(value,1);
        
    }
    generateData();
    var cartlist = document.getElementById('cartList');
    if(cart.length !== 0){
        cartlist.setAttribute('style', 'display:inline-block');
    }else{

        // UNTUK MATIKAN CARTLIST

        
        cartlist.setAttribute('style', 'display:none');
    }
}

function toRupiah(harga){
    var result = '';
    harga = String(harga);
    var arr = [];
    var count = 0;
    for(var i = harga.length-1; i>=0; i--){
        if(count === 3 && harga[i] !=undefined){
            arr.push('.');
            arr.push(harga[i]);
            count = 1;
            // console.log(count,i,'MASUK'); 
        }else{
            arr.push(harga[i]);
            count++;
            //console.log(count,i-1);
        }
    }
    //console.log(arr);
    for(var i = arr.length-1; i>=0; i--){
        result += arr[i];
    }
    return result;
}

//console.log(toRupiah(1910450));

function generateData(){
    const foodList = document.getElementById('foodList');
    const cartList = document.getElementById('cartList');
    foodList.innerHTML = '';
    cartList.innerHTML = '';
    
    for(var i =0; i<food.length; i++){
        let name = food[i].name;
        let stok = food[i].stok;
        let harga = food[i].harga;
        let image = food[i].image;
      
        let divCard = document.createElement('div');
        divCard.classList.add('card')

    
        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCard.appendChild(imageData);
    
        let title = document.createElement('p');
        title.innerHTML = name;
        divCard.appendChild(title);

        let divAction = document.createElement('div');
        divAction.classList.add('action');

        let spanData = document.createElement('span');
        spanData.innerHTML = `Rp ${toRupiah(harga)},00 | Stok : ${stok}`;
        divAction.appendChild(spanData);

        let buttonAdd = document.createElement('button');
        buttonAdd.innerHTML = '<i class="fas fa-cart-plus"></i> Pesan';
        buttonAdd.setAttribute('value', i);
        buttonAdd.setAttribute('onclick', 'addtoCart(this.value)');
        divAction.appendChild(buttonAdd);
        divCard.appendChild(divAction);
        //console.log(divCard);
        foodList.appendChild(divCard);
    
    }

    let totalDiv = document.createElement('div');
    totalDiv.classList.add('total');

    let totalh1 = document.createElement('h1');
    totalh1.innerHTML = `TOTAL : Rp${toRupiah(totalHargagas)},00`;
    totalDiv.appendChild(totalh1);

    let totalhr = document.createElement('hr');
    totalDiv.appendChild(totalhr);
    //console.log(totalDiv);
    cartList.appendChild(totalDiv);

    //console.log('BelumMasuk');
    for(var x =0; x<cart.length; x++){
        
        let name = cart[x].name;
        let jumlah = cart[x].jumlah;
        let harga = cart[x].harga;
        let image = cart[x].image;
        //console.log('MASUK');
        let divCardx = document.createElement('div');
        divCardx.classList.add('card-order') ;  
        //console.log(divCardx);

        let divCardDetail = document.createElement('div');
        divCardDetail.classList.add('detail');

        let imageData = document.createElement('img')
        imageData.setAttribute("src",image);
        divCardDetail.appendChild(imageData);
        
        let foodName = document.createElement('p');
        // foodName.setAttribute('id','nameCart')
        foodName.innerHTML = name;
        divCardDetail.appendChild(foodName);

        let foodJumlah = document.createElement('span');
        foodJumlah.innerHTML = jumlah;
        divCardDetail.appendChild(foodJumlah);
        
        divCardx.appendChild(divCardDetail);

        let buttonCancel = document.createElement('button');
        buttonCancel.setAttribute('value', x );
        buttonCancel.setAttribute('id', 'cancelCart' );
        buttonCancel.setAttribute('onclick', 'removeFood(this.value)');
        buttonCancel.innerHTML = '<i class="fas fa-trash"></i> Hapus';
        divCardx.appendChild(buttonCancel);
        //console.log(divCardx);
    
        cartList.appendChild(divCardx);
    }

    let divbutton = document.createElement('div');
    divbutton.classList.add("card-finish");

    let buttonOrder = document.createElement('button');
    //buttonOrder.classList.add('order');
    buttonOrder.setAttribute('onclick', 'orderFood()');
    buttonOrder.innerHTML = 'ORDER SEKARANG';
    divbutton.appendChild(buttonOrder);
    cartList.appendChild(divbutton);


  

}
generateData()
