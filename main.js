const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: "Socks",
            description: "Sock is a textile garment worn on the foot for comfort, protection, and style. Sock is made from various materials and come in different lengths and designs, making them essential for everyday wear and fashion.",

            image: './assets/images/socks_blue.jpg',

            inStock: true,

            url: 'https://socks.com.au',

            inventory: 17,

            onSale: false,

            details: ['50% cotton', '30% wool', '20% polyester'],

            sizes: ['S', 'M', 'L', 'XL',],

            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
        }
    },

    methods: {
        addToCart() {
            this.cart += 1;
        },
    
        removeFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        },

        updateImage(variantImage) {
            this.image = variantImage
        },
    },
})