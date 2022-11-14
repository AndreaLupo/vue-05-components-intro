const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123 3532 123',
                    email: 'manuel@localhost.com'
                },
                { 
                    id: 'julie',
                    name: 'Julie Jonez',
                    phone: '0123 3532 124',
                    email: 'julie@localhost.com'
                }
            ],
            detailsAreVisible: false
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');