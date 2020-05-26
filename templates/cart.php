<div class="cart-content">
  <div class='php' id='php'>
    <div class="cart-header">Ваш заказ:</div>
    <div class="my-cart">

    </div>
    <div class="cart-bottom">
         <div class = "total-wraper pb-3">
            <span class="total-name">Сумма:&nbsp;</span>
            <span class="total-sum"></span><span>&nbsp;грн.</span>
        </div>
    </div>
  </div>
    <div class="form-wrapper my-5">
      <form id="order" name="order" role="form" action="php/mail.php" method="POST">
            <div class="form-group">
    
              <input type="text" class="form-control form-cart" name="user_name" id="name" aria-describedby="name" value="" placeholder="Ваше имя">

            </div>
            <div class="form-group">
   
              <input type="email" class="form-control form-cart" name="user_email" id="email" aria-describedby="email" value="" placeholder="Ваш email">
    
            </div>
            <div class="form-group">
    
              <input type="tel" class="form-control form-cart" name="user_phone" id="tel" value="" placeholder="+380(99) 999-99-99" >
            </div>
            <div class="form-group">
    
              <input type="hidden" class="form-control form-cart" name="user_order" id="user_order" value="">

            </div>
            <div class="form-group">
    
              <input type="hidden" class="form-control form-cart" name="total" id="total" value="">

            </div>
            <!-- <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Даю свое разрешение на обработку персональных данных</label>
            </div> -->
            <button type="submit" class="btn btn-primary add-to-cart order-btn">Оформить заказ</button>
        </form>
    </div>

</div>

