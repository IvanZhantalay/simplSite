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

            out+='<div class= "name"><strong>Профессиональное массажное масло<br> «';
            out+='<strong data-redactor-tag="strong" class ="strong-name">'+data[key]['nameB']+'</strong>';
            out+= '» '+data[key]['size']+' ml.</strong></div>';

            out+='<p class ="pricing">'+data[key]['price']+ ' ' +data[key]['value']+'</p>';
            // out+='<p><a  class="btn btn-default btn-md about-btn" role="button" data-toggle="modal" data-target="#largeModal" data-art="'+key+'">Подробнее</a></p>';
            out+='<p><a  class="btn btn-primary add-to-cart " role="button" data-art="'+key+'">Заказать с бесплатной доставкой</a></p>';
            out+='</div>';
            out+='</div>';
            out+='</div>';
        }
        
        $('.line').html(out);
        $('a.add-to-cart').on('click', addToCart);

        // $('a.about-btn').on('click', aboutCartOpen);
        // console.log($('a.about-btn'));
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

}

window.addEventListener('storage', test, false);
//убираем кружек с корзины при очисте Стореджа 
function test(){
    showMiniCart()
    } 

    function aboutCartOpen() {
        //открывает доп сведения о товаре
        let art = $(this).attr('data-art')
         console.log(art);

        //  $("html").addClass("modal-open")



        $.getJSON("goods.json", function (data){
            let out2 = '';
            let out3 = '';

            out2+='<div class="thumbnail tmbCenter">';
            out2+='<img class = "aboutImg" src="'+data[art].image+'">';
            out2+='<div class = "caption">';
            out2+='</div>';
            out2+='</div>';
            out2+='</div>';


            out3+='<div class= "name"><strong> «';
            out3+='<strong data-redactor-tag="strong" class ="strong-name">'+data[art]['nameB']+'</strong>';
            out3+= '» '+data[art]['size']+' ml.</strong></div>';

            out3+='<p class ="pricing">'+data[art]['price']+ ' ' +data[art]['value']+'</p>';
            out3+='<p><a  class="btn btn-primary add-to-cart " role="button" data-art="'+art+'">Заказать с бесплатной доставкой</a></p>';
            
            out3+='<div class= "Smole-name"><strong> «';
            out3+='<strong data-redactor-tag="strong" class ="strong-name2">'+data[art]['name']+'</strong>';
            out3+= '» '+data[art]['size']+' ml.</strong></div>';



            out3+= '<div class = "deck-wrap"><p>'+data[art]['description']+'</p></div>';

        $('.img-part').html(out2);
        $('.desc-part').html(out3);

        }); 



        // if ($("html").hasClass("modal-open") && !$(".modal").hasClass("show")) {
        //     console.log('нет');
        //     $("html").removeClass("modal-open")
        // }
        // else {
        //     console.log('да');
        //     $("html").addClass("modal-open")
            
            
        // }

    }
