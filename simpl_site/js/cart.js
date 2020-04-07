let cart={}; //корзина

$.getJSON('goods.json', function(data){
    let goods = data; //Все товары в массиве
    // console.log(goods);
    checkCart();
    showCart();
    showMiniCart();

    //console.log(cart);

    function showCart(){
        if ($.isEmptyObject(cart)){
            let out = '';
            let sum = 0;
            out+= '<div class ="emptyCart">Ваша корзина пуста. Добавьте товар в корзину на <a href="/">Главной странице</a></div>';
            
            $('.my-cart').html(out);
            $('.total-sum').html(sum);

        }
        else{
        let sum = 0;   
        let out = '';
    for (let key in cart){
        // out+= key + '---'+ cart[key]+'<BR>';
        
        out+= '<div class="cart-product-wrapper">';
        out+= '<div class="cart-img-thumb">';
        // out+= '<img class = "cardImg" src="'+goods[key].image+'">';
        out+= '<div class ="cart-img-wraper" style="background-image:url('+goods[key].image+');"></div>';
        out+='</div>';
        out+= '<div class ="cart-product-title">'+ goods[key].nameC+'</div>';
        out+='<div class = "cart-plus-minus mr-5">'
        out+= '<button class = "btn btn-primary minus cart-btn" data-art="'+key+'"><img src="img/minus24.png" alt=""></button>';
        out+= '<span class="product-quantity">'+cart[key]+'</span>'
        
        out+= '<button class = "btn btn-primary plus cart-btn" data-art="'+key+'"><img src="img/plus24.png" alt=""></button>';
        out+= '</div>';
        out+= '<div class = "product-amount">'+cart[key]*goods[key].price +'&nbsp;'+  goods[key].value+'</div>'
        out+= '<div class = "delete-wraper">'
        out+= '<button class = "btn btn-primary delete cart-btn pl-3" data-art="'+key+'"><img src="img/delite24.png" alt=""></button>';
        out+= '</div>';
        out+= '</div>';
        out+= '<br>';
        
        sum+= cart[key]*goods[key].price;
    }
    $('.my-cart').html(out);
    $('.total-sum').html(sum);

    $('#user_order').attr("value", out);
    $('#total').attr("value", sum +" грн");

    $('.plus').on('click', plusGoods);
    $('.minus').on('click', minusGoods);
    $('.delete').on('click', deleteGoods);
    }
    function plusGoods(){
        let articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
        showMiniCart();
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
        showMiniCart();
    }
    }

    function deleteGoods(){
        // console.log('test');
        let articul = $(this).attr('data-art');

            delete cart[articul];

        saveCartToLS(); //созраняем корзину в Локальное хранилище
        showCart();
        showMiniCart();
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