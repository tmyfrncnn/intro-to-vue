app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            require: true
        }
    },
    template:
    /*html*/
    `
<div class="product-display">
    <div class="product-container">
        <div class="product-image" :class=" { 'out-of-stock-img': !inStock }">
            <img :src="image">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <p> {{ sale }}</p>

            <p v-if="inventory > 15">In Stock</p>
            <p class="inventory" v-else-if="inventory <= 15 && inventory > 0">Almost out of Stock!</p>
            <p v-else>Out of Stock</p>

            <p>Shipping: {{ shipping }}</p>

            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                class="color-circle" :style="{ backgroundColor: variant.color }">
            </div>

            <ul>
                <li v-for="(size, sizeIndex) in sizes" :key="sizeIndex">{{ size }}</li>
            </ul>

            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">
                Add to Cart
            </button>

            <button class="button" @click="cart = cart > 0 ? cart - 1 : 0">Remove Item</button>

            <a :href="url">Socks.com
            </a>
        </div>
    </div>
</div>`,
    data() {
        return {
            product: "Socks",
            brand: 'Vue Mastery',
            description: "Sock is a textile garment worn on the foot for comfort, protection, and style. Sock is made from various materials and come in different lengths and designs, making them essential for everyday wear and fashion.",

            selectedVariant: 0,

            url: 'https://socks.com.au',

            inventory: 17,

            onSale: true,

            details: ['50% cotton', '30% wool', '20% polyester'],

            sizes: ['S', 'M', 'L', 'XL', ],

            variants: [{
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 25
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0
                },
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

        updateVariant(index) {
            this.selectedVariant = index
        },
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },

        shipping () {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        },
        
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }
            return ''
        }
    }
})