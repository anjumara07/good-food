function navbar(){
    return`<div id="navbar">
    <div id="logo">
        <a href="/home.html">
            <img src="https://st4.depositphotos.com/4525103/29157/v/950/depositphotos_291573524-stock-illustration-orange-logo-template-good-food.jpg" alt="" style="border-radius: 50%" width="100%" height="100%">
        </a>
    </div>
    <input id="search-food" type="text" placeholder="Enter Food">
    <div id="list">
        <a href="/latestFood.html" id="latest"><p>Latest Food</p></a>
        <a href="/recipeOfDay.html"><p>Recipe Of The Day</p></a>
        <a href="/login.html"><p>Login</p></a>
        <a href="/signUp.html"><p>Sign Up</p></a>
        <a href="/cart.html">
            <div id="cart">
            <p id="num"></p>
            <i class="fas fa-shopping-cart"></i>
            </div>
        </a>
    </div>
</div>`
}

export default navbar