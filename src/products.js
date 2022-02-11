var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cartArray = [];
$(document).ready(function(){
    
        
        displayProducts();
        //productsbutton





function displayProducts(){
        // for(var i=0;i<products.length;i++){
           
            var table=`<div id="product-101" class="product">
            <img src="images/football.png">
            <h3 class="title"><a href="#">Product 101</a></h3>
            <span>Price: $150.00</span>
            <a class="add-to-cart" href="#" data-id="101">Add To Cart</a>
        </div>
        <div id="product-101" class="product">
            <img src="images/tennis.png">
            <h3 class="title"><a href="#">Product 102</a></h3>
            <span>Price: $120.00</span>
            <a class="add-to-cart" href="#" data-id="102">Add To Cart</a>
        </div>
        <div id="product-101" class="product">
            <img src="images/basketball.png">
            <h3 class="title"><a href="#">Product 103</a></h3>
            <span>Price: $90.00</span>
            <a class="add-to-cart" href="#" data-id="103">Add To Cart</a>
        </div>
        <div id="product-101" class="product">
            <img src="images/table-tennis.png">
            <h3 class="title"><a href="#">Product 104</a></h3>
            <span>Price: $110.00</span>
            <a class="add-to-cart" href="#" data-id="104">Add To Cart</a>
        </div>
        <div id="product-101" class="product">
            <img src="images/soccer.png">
            <h3 class="title"><a href="#">Product 105</a></h3>
            <span>Price: $80.00</span>
            <a class="add-to-cart" href="#" data-id="105">Add To Cart</a>
        </div>`
            $('#products').append(table)
        }
        
   $('.add-to-cart').click(function(id){
        var obj={};
        var id=$(this).data('id');
        console.log(id);
        var product=getProduct(id);
        var index=products.findIndex((x) => x.id == id);
        console.log(index)
        obj.id=products[index].id;
        obj.name=products[index].name;
        obj.price=products[index].price;
        obj.quantity=products[index].quantity;
        console.log(obj.id)
        
            cartArray.push(obj);
            console.log(cartArray)
            displayCart();
        
        // obj.id=

        function getProduct(id){
            for(var i=0;i<products.length;i++){
                
                if(products[i].id==id)
                return products[i];
            }
        }


   });
        
     function displayCart(){
        var element = '';
          element += '<table><tr><th>Product ID</th><th>Product Name</th><th>Product Price</th><th>Quantity</th><th>Action</th></tr>'
          for(var i=0;i<cartArray.length;i++)
          {
                element+='<tr>\
                <td>'+cartArray[i].id+'</td>\
                <td>'+cartArray[i].name+'</td>\
                <td>'+cartArray[i].price+'</td>\
                <td>'+cartArray[i].quant+'</td>\
                <td><a href="#" class="edit" data-sku="'+cartArray.id+'">EDIT</a>\
                <a href="#" class="dlt" data-sku="'+cartArray.id+'">DELETE</a>\
                </td>\
                </tr>';
          }
          element+= '</table>';
          $("#cart").html(element);
          
    } 
            // $("#cart").html(element);
});//document.ready