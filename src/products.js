var products = [{"id":101,"name":"Basket Ball","image":"basketball.png","price":150},{"id":102,"name":"Football","image":"football.png","price":120},{"id":103,"name":"Soccer","image":"soccer.png","price":110},{"id":104,"name":"Table Tennis","image":"table-tennis.png","price":130},{"id":105,"name":"Tennis","image":"tennis.png","price":100}];
var cartArray = [];
var quantity=1;
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
        
   $('.add-to-cart').click(function(){
    // for(var i=0;i<cartArray.length+1;i++){
       
       
        var id=$(this).data('id');
        
        if (cartArray.find((x) => x.id == id)) {
            
            var index=cartArray.findIndex((x) => x.id == id);
            cartArray[index].quantity++;
            
          console.log(index,'=',cartArray[index].id,cartArray[index].quantity)
          displayCart();
        }
        else{
            var obj={};
            // var quantity=0;
            var id=$(this).data('id');
            console.log(id);
            var product=getProduct(id);
            var index=products.findIndex((x) => x.id == id);
            console.log(index)
            obj.id=products[index].id;
            obj.name=products[index].name;
            obj.price=products[index].price;
            obj.quantity=1
            
            console.log(obj)
            cartArray.push(obj);
            console.log(cartArray)
            displayCart();
        }

        function getProduct(id){
            for(var i=0;i<products.length;i++){
                
                if(products[i].id==id)
                return products[i];
            }
        }


   });
        
     function displayCart(){
        var element = '';
          element += '<table><tr><th>Product ID</th><th>Product Name</th><th>Product Price</th><th>Quantity</th><th><a href="#" id="emptyCart">Empty Cart</a></th></tr>'
          for(var i=0;i<cartArray.length;i++)
          {
                element+='<tr>\
                <td>'+cartArray[i].id+'</td>\
                <td>'+cartArray[i].name+'</td>\
                <td>'+cartArray[i].price+'</td>\
                <td>'+cartArray[i].quantity+'</td>\
                <td><a href="#" class="dlt" data-id="'+cartArray[i].id+'"><i class="fa fa-trash"></a></i></td>\
                </tr>';
          }
          element+= '</table>';
          $("#cart").html(element);

    $("#cart").on('click','.dlt',function(){
        var id=$(this).data('id');
        for(var i=0;i<cartArray.length;i++){
            if(cartArray[i].id==id){
                console.log('inside if and id='+id)
                if(confirm("Are you sure you want to delete")){
                    cartArray.splice(i,1);
                    console.log("Deleted");
                    }else 
                    console.log("Not Deleted");
                }
            }
        displayCart(cartArray);
        })
    }
    $("#cart").on('click','#emptyCart',function(){
        console.log('inside empty cart')
        
        if(confirm("This action will empty your cart!!\nDo you still want to continue?"))
            $('#cart').remove();
            else
            return;

    });
   
});//document.ready