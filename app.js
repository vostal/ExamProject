const pizzeria = new Pizzeria();
const app = {

    orderPizza(pizzaIndex) {
        const userName = document.getElementById('user-name').value;
        if (!userName) {
            alert('Пожалуйста, введите ваше имя.');
            return;
        }

        const user = new User(userName);
        
        const pizza = pizzeria.getPizzas()[pizzaIndex];
        
        pizzeria.addOrder(user, pizza);
        
        UI.updateOrders(pizzeria.getOrders());
    },

    pickUpOrder(orderId) {
        const order = pizzeria.getOrders().find(o => o.id === orderId);
        
        if (order) {
            order.status = 'закрыт';
            UI.updateOrders(pizzeria.getOrders());
            
            // Удаляем уведомление после забирания заказа
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => notification.remove());
            
            alert(`Заказ #${order.id} закрыт. Спасибо за заказ!`);
        }
    }
};

// Инициализация меню при загрузке страницы
UI.displayMenu(pizzeria);
