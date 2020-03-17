let cart={}; //корзина

$.getJSON('goods.json', function(data){
    let goods = data; //Все товары в массиве
    // console.log(goods);
    checkCart();
    showCart();

    //console.log(cart);

    function showCart(){
        if ($.isEmptyObject(cart)){
            let out = '';
            out+= '<div class ="emptyCart">Ваша корзина пуста. Добавьте товар в корзину <a href="site.html">Главная страница</a></div>';
            $('.my-cart').html(out);
        }
        else{
        let out = '';
    for (let key in cart){
        // out+= key + '---'+ cart[key]+'<BR>';

        out+='<div class = "delete-wraper">'
        out+= '<button class = "btn btn-primary delete" data-art="'+key+'">x</button>';
        out+='</div>';
        out+= '<div class="cart-img-thumb">';
        // out+= '<img class = "cardImg" src="'+goods[key].image+'">';
        out+= '<div class ="cart-img-wraper" style="background-image:url('+goods[key].image+');"></div>';
        out+='</div>';
        out+= '<div class ="cart-product-title">'+ goods[key].nameB+'</div>';
        out+='<div class = "cart-plus-minus">'
        out+= '<button class = "btn btn-primary minus" data-art="'+key+'">-</button>';
        out+= '<span class="product-quantity">'+cart[key]+'</span>'
        
        out+= '<button class = "btn btn-primary plus" data-art="'+key+'">+</button>';
        out+= '</div>';
        out+='<div class = "product-amount">'+cart[key]*goods[key].price +'&nbsp;'+  goods[key].value+'</div>'
        out+= '<br>';
    }
    $('.my-cart').html(out);
    $('.plus').on('click', plusGoods);
    $('.minus').on('click', minusGoods);
    $('.delete').on('click', deleteGoods);
    }
    function plusGoods(){
        let articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }
    function minusGoods(){
        let articul = $(this).attr('data-art');
        if(cart[articul]>1){
        cart[articul]--;
        }
        else{
            delete cart[articul];
        }
        saveCartToLS(); //созраняем корзину в Локальное хранилище
        showCart();
    }
    }

    function deleteGoods(){
        console.log('test');
        let articul = $(this).attr('data-art');

            delete cart[articul];

        saveCartToLS(); //созраняем корзину в Локальное хранилище
        showCart();
    }

});

function checkCart(){
    //проверяем наличие сохранения в локалСторедже
    if(localStorage.getItem('cart') !=null){
        cart = JSON.parse(localStorage.getItem('cart'));
    } 
}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart) );
}