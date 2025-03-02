let order = []; 
function showCart() {
const cartItems = order.map(({ item, price }) => `${item} - R$ ${price}`).join('\n');
if (cartItems.length === 0) {
alert('Seu carrinho está vazio.');
} else {
alert(`Itens no seu carrinho:\n${cartItems}`);
}
}

function addToOrder(item, price) {
order.push({ item, price });
alert(`${item} adicionado ao pedido.`);
}


function showReview() {
   const orderSummary = document.getElementById('order-summary');
   orderSummary.innerHTML = '';

   if (order.length === 0) {
       orderSummary.innerHTML = '<p>Nenhum item adicionado ao pedido.</p>';
       document.getElementById('review').style.display = 'block';
       alert('Seu carrinho está vazio.');
       return;
   }

   let total = 0;
   let itemList = ''; 
   order.forEach(({ item, price }) => {
       total += parseFloat(price);
       const div = document.createElement('div');
       div.classList.add('review-item');
       div.textContent = `${item} - R$ ${price}`;
       orderSummary.appendChild(div);
       itemList += `${item} - R$ ${price}\n`; 
   });

   const totalDiv = document.createElement('div');
   totalDiv.classList.add('review-item');
   totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;
   orderSummary.appendChild(totalDiv);

   document.getElementById('review').style.display = 'block';
   alert(`Seu pedido:\n${itemList}\nTotal: R$ ${total.toFixed(2)}`);
}

function addToOrder(item, price) {
    const order = JSON.parse(localStorage.getItem('order')) || [];
    order.push({ item, price });
    localStorage.setItem('order', JSON.stringify(order));
    alert(`${item} adicionado ao pedido.`);
}
