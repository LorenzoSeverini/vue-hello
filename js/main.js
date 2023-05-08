// Vue-JS
// ************

const { createApp } = Vue

createApp({
    data() {
        return {
            
            title: 'Coffe House',

            nameUser: '',
            
            ask: 'Do you want a coffee?',

            menuList: [
                {
                    name: 'Cappuccino',
                    price: 1.50,
                    img: 'img/coffee1.jpeg'
                },
                {
                    name: 'Espresso',
                    price: 1.00,
                    img: 'img/coffee2.jpeg',
                },
                {
                    name: 'Americano',
                    price: 2.00,
                    img: 'img/coffee3.jpeg',
                },
                {
                    name: 'Latte',
                    price: 2.50,
                    img: 'img/coffee4.jpeg',
                },
            ],

        }
    },

    methods: {

        menu () {
            // show the menu
            this.menuList.forEach((element) => {
                console.log(element.name, element.price);
                document.getElementById('menu').innerHTML += `
                    <div class=coffee>
                        <a>${element.name} ${element.price}€</a>
                        <a><img src="${element.img}" alt="${element.name}"></a>
                    </div>
                `;
            });
            document.getElementById('yes').disabled = true;
        },

        reloadPage () {
            // reload the page
            location.reload();
        },


    },
}).mount('#app')

