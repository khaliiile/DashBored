    // script.js

    document.addEventListener('DOMContentLoaded', () => {
        // Example data
        const orders = [
            { name: 'MacBook Pro', price: '$1200', payment: 'Paid', status: 'Delivered' },
            { name: 'iPhone 12', price: '$999', payment: 'Paid', status: 'Shipped' },
            { name: 'Samsung Galaxy S21', price: '$899', payment: 'Pending', status: 'Processing' },
            { name: 'Sony Headphones', price: '$199', payment: 'Paid', status: 'Delivered' },
        ];

        const customers = [
            'Khalil',
            'Ahemd',
            'Anwar',
            'Sarah',
        ];

        const ordersTableBody = document.querySelector('.recent-orders tbody');
        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.name}</td>
                <td>${order.price}</td>
                <td>${order.payment}</td>
                <td>${order.status}</td>
            `;
            ordersTableBody.appendChild(row);
        });

        const customersList = document.querySelector('.recent-customers ul');
        customers.forEach(customer => {
            const listItem = document.createElement('li');
            listItem.textContent = customer;
            customersList.appendChild(listItem);
        });
    });
