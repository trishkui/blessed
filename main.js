let shop = document.getElementById("shop");


let generateShop = () => {
    return  (shop.innerHTML = `
    <div class="item">
        <img width="200" src="https://images.pexels.com/photos/15520040/pexels-photo-15520040.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="">
        <div class="details">
            <h3>sheep</h3>
            <p>this is a sheep that is useful</p>
            <div class="price-quantity">
                <h2>$45</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div> `
    
    )    
    
    
};
generateShop();
