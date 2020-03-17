let cart = {}; //моя корзина

$('document').ready(function(){
 
   $('.goods').append('<div class = "row line"></div>');
    loadGoods();
    checkCart();
    showMiniCart();
})

function loadGoods(){
    // загружаем товары на страницу
    $.getJSON("goods.json", function (data){
        console.log(data);
        let out = '';
        for(let key in data){

            out+='<div class ="col-md-4 col-sm-6 good test">';
            out+='<div class="thumbnail tmbCenter">';
            out+='<img class = "cardImg" src="'+data[key].image+'">';
            out+='<div class = "caption">';
            out+='<h3 class = "cardName">'+data[key]['name']+'</h3>';
            out+='<p>'+data[key]['price']+ ' ' +data[key]['value']+'</p>';
            out+='<p><a  class="btn btn-primary add-to-cart" role="button" data-art="'+key+'">Купить</a></p>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
        }
        
        $('.line').html(out);
        $('a.add-to-cart').on('click', addToCart);
    });

}

function addToCart() {
    //добавляем товар в корзину
    // console.log('test');
     let articul = $(this).attr('data-art')
     
     if(cart[articul] !=undefined){ 
        cart[articul]++; 
     }
     else{
        cart[articul] = 1; 
     }
     localStorage.setItem('cart', JSON.stringify(cart) );
     console.log(cart);
     showMiniCart();

}

function checkCart(){
    //проверяем наличие сохранения в локалСторедже
    console.log(localStorage.getItem('ddd') );
    if(localStorage.getItem('cart') !=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    } 
}

function showMiniCart(){
    // показываем содержимое корзины
    let out = '';
    let sumGoods = 0;
    for(let g in cart){
        out += g + '---' +cart[g]+'<br>';
        sumGoods += cart[g];
    }
            if (sumGoods !=0 && localStorage.length > 0){
            //если товары есть показываем их количество 
            $('.cart span').removeClass( "cart-ball-empty");
            $('.cart span').addClass( "cart-ball");

            $('.cart span').html(sumGoods);
        }
        else{
            $('.cart span').removeClass( "cart-ball");
            $('.cart span').addClass( "cart-ball-empty");
        }

// $('.mini-cart').html(out);
}

window.addEventListener('storage', test, false);
//убираем кружек с корзины при очисте Стореджа 
function test(){
    showMiniCart()
    } 

