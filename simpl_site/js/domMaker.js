const cr = document.querySelector(".goods");

const line = document.createElement('div');
    line.classList.add("row");
    line.classList.add("line");

function getListContent() {
    let fragment = new DocumentFragment();
  //загружаею товары на страницу
        for(let i=0; i<goods.length; i++) {

            const card = document.createElement('div');
                card.classList.add("col-md-4");
                card.classList.add("col-sm-6");
                card.classList.add("good");
                card.classList.add("test");
 
                const thumb = document.createElement('div');
                    thumb.classList.add("thumbnail");
                    thumb.classList.add("tmbCenter");
                    card.append(thumb);


                    const cardImg = document.createElement('img');
                        cardImg.classList.add("cardImg");
                        thumb.append(cardImg);

                    const priceCont = document.createElement('div');
                        priceCont.classList.add("caption");
                        thumb.append(priceCont);

                        const shName = document.createElement('h3');
                            shName.classList.add("cardName");
                            priceCont.append(shName);

                        const priceVal = document.createElement('span');
                            priceCont.append(priceVal);

                        const priceCar = document.createElement('span');
                            priceCont.append(priceCar);

                    const presCont = document.createElement('div');
                        presCont.classList.add("presCont");
                        thumb.append(presCont);
                    
                        const inStock = document.createElement('span');
                            presCont.append(inStock);

                        const buttonLink = document.createElement('a');
                            buttonLink.classList.add("btn");
                            buttonLink.classList.add("btn-primary");
                            buttonLink.setAttribute('role', 'button');
                            presCont.append(buttonLink);

        shName.innerHTML = goods[i].name;
        cardImg.setAttribute("src", goods[i].image);

        fragment.append(card);
    }
      return fragment;
  }
  cr.append(line);
  line.append(getListContent());
  