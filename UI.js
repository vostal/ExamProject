class UI {
    static displayMenu(pizzeria) {
        const menuDiv = document.getElementById('menu');
        pizzeria.getPizzas().forEach((pizza, index) => {
            const pizzaItem = document.createElement('div');
            pizzaItem.className = 'pizza-item';
            pizzaItem.innerHTML = `${pizza.name} (${pizza.size}) - ${pizza.price} руб. 
                <button onclick="app.orderPizza(${index})">Заказать</button>`;
            menuDiv.appendChild(pizzaItem);
        });
    }

    static updateOrders(orders) {
        const ordersDiv = document.getElementById('orders');
        ordersDiv.innerHTML = '<h2>Заказы</h2>';
        
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.innerHTML = `Заказ #${order.id}: ${order.pizza.name} (${order.status})`;
            ordersDiv.appendChild(orderItem);
        });
    }

    static showReadyNotification(order) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        
        notification.innerHTML = `
            Ваш заказ готов! ${order.user.name}, заберите свою пиццу.
            <button onclick="app.pickUpOrder(${order.id})">Забрать</button>
        `;
        
        document.body.appendChild(notification);
    }
}
