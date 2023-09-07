const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Sock is a textile garment worn on the foot for comfort, protection, and style. Sock is made from various materials and come in different lengths and designs, making them essential for everyday wear and fashion.',

            image: './assets/images/socks_green.jpg',

            url: 'https://socks.com.au',

            inventory: 14,

            onSale: true,
        }
    }
})