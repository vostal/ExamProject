class Pizzeria {
    constructor() {
        this.pizzas = [
            new Pizza('Маргарита', 'Большая', 500),
            new Pizza('Пепперони', 'Средняя', 600),
            new Pizza('Овощная', 'Средняя', 500),
            new Pizza('Пепперони Экстра', 'Средняя', 800),
            new Pizza('Гавайская', 'Средняя', 400)
        ];
        this.orders = [];
    }

    addOrder(user, pizza) {
        const orderId = this.orders.length + 1;
        const order = {
            id: orderId,
            user: user,
            pizza: pizza,
            status: 'ожидание',
            time: new Date().toLocaleTimeString(),
        };
        
        this.orders.push(order);
        
        // Симуляция готовности заказа через 5 секунд
        setTimeout(() => {
            order.status = 'готово';
            UI.showReadyNotification(order);
        }, 5000);
        
        return order;
    }

    getOrders() {
        return this.orders;
    }

    getPizzas() {
        return this.pizzas;
    }
}
