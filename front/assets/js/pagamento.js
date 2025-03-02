function clearOrder() {
    localStorage.removeItem('order');
    orderSummaryDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    alert('O resumo do pedido foi limpo com sucesso.');
}

const order = JSON.parse(localStorage.getItem('order')) || [];
    const orderSummaryDiv = document.getElementById('order-summary');

    if (order.length === 0) {
        orderSummaryDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        let total = 0;
        orderSummaryDiv.innerHTML = order.map(({ item, price }) => {
            total += parseFloat(price);
            return `<p>${item} - R$ ${price.toFixed(2)}</p>`;
        }).join('');
        orderSummaryDiv.innerHTML += `<p class="total">Total: R$ ${total.toFixed(2)}</p>`;
    }


    function selectPaymentMethod(method) {
        document.querySelectorAll('.payment-form').forEach(form => form.classList.remove('active'));
        document.getElementById(`${method}-form`).classList.add('active');
    }


    function processPayment() {
        alert("Pagamento processado com sucesso! Obrigado por comprar conosco.");
        localStorage.clear(); 
        window.location.href = "index.html";
    }