var cartValue=document.getElementById("cart-value");
var cartButton=document.getElementById("cart");
var book1Add=document.getElementById("book1");
var book2Add=document.getElementById("book2");
var book3Add=document.getElementById("book3");
var book4Add=document.getElementById("book4");
var book5Add=document.getElementById("book5");
var book6Add=document.getElementById("book6");
var game1Add=document.getElementById("game1");
var game2Add=document.getElementById("game2");
var game3Add=document.getElementById("game3");
var game4Add=document.getElementById("game4");
var craft1Add=document.getElementById("craft1");
var craft2Add=document.getElementById("craft2");
var craft3Add=document.getElementById("craft3");
var craft4Add=document.getElementById("craft4");

var book1={
    bname:"This was our Pack",
    quantity: 0,
    dollars: 7,
    cents:49,
};
//console.log(book1.bname);
var book2={
    bname:"The Famous Five",
    quantity: 0,
    dollars: 4,
    cents:59,
};
var book3={
    bname:"Matlida",
    quantity: 0,
    dollars: 6,
    cents:80,
};
var book4={
    bname:"Harry Potter",
    quantity: 0,
    dollars: 10,
    cents:0,
};
var book5={
    bname:"For Young Readers",
    quantity: 0,
    dollars: 7,
    cents:29,
};
var book6={
    bname:"Wimpy Kid- DIY",
    quantity: 0,
    dollars: 4,
    cents:99,
};

var game1={
    bname:"FDart Board",
    quantity: 0,
    dollars: 17,
    cents:49,
};
var game2={
    bname:"Connrct 4",
    quantity: 0,
    dollars: 19,
    cents:99,
};
var game3={
    bname:"Jenga",
    quantity: 0,
    dollars: 20,
    cents:99,
};
var game4={
    bname:"Monopoly",
    quantity: 0,
    dollars: 19,
    cents:49,
};

var craft1={
    bname:"Bookmarks",
    quantity: 0,
    dollars: 12,
    cents:49,
};
var craft2={
    bname:"Birthday card",
    quantity: 0,
    dollars: 19,
    cents:99,
};
var craft3={
    bname:"Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents:99,
};
var craft4={
    bname:"Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents:49,
};
function updateCart(){
    cart=
    book1.quantity+book2.quantity+
    book3.quantity+book4.quantity+
    book5.quantity+book6.quantity+
    game1.quantity+game2.quantity+
    game3.quantity+game4.quantity+
    craft1.quantity+craft2.quantity+
    craft3.quantity+craft4.quantity;
    cartValue.innerHTML=cart;
}
book1Add.onclick=(e)=>{
    book1.quantity++;
    updateCart();
};
book2Add.onclick=(e)=>{
    book2.quantity++;
    updateCart();
};
book3Add.onclick=(e)=>{
    book3.quantity++;
    updateCart();
};
book4Add.onclick=(e)=>{
    book4.quantity++;
    updateCart();
};
book5Add.onclick=(e)=>{
    book5.quantity++;
    updateCart();
};
book6Add.onclick=(e)=>{
    book6.quantity++;
    updateCart();
};

game1Add.onclick=(e)=>{
    game1.quantity++;
    updateCart();
};
game2Add.onclick=(e)=>{
    game2.quantity++;
    updateCart();
};
game3Add.onclick=(e)=>{
    game3.quantity++;
    updateCart();
};
game4Add.onclick=(e)=>{
    game4.quantity++;
    updateCart();
};

craft1Add.onclick=(e)=>{
    craft1.quantity++;
    updateCart();
};
craft2Add.onclick=(e)=>{
    craft2.quantity++;
    updateCart();
};
craft3Add.onclick=(e)=>{
    craft3.quantity++;
    updateCart();
};
craft4Add.onclick=(e)=>{
    craft4.quantity++;
    updateCart();
};

