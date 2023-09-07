const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Sock is a textile garment worn on the foot for comfort, protection, and style. Sock is made from various materials and come in different lengths and designs, making them essential for everyday wear and fashion.',

            image: './assets/images/socks_green.jpg',

            url: 'https://socks.com.au',

            inventory: 14,

            onSale: true,

            details: ['50% cotton', '30% wool', '20% polyester'],

            sizes: ['Small', 'Medium', 'Large', 'Extra Large', 'Extra Extra Large', 'Yeti'],

            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color:' blue' },
            ],
        }
    }
})