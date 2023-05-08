// Vue-JS
// ************

const { createApp } = Vue

createApp({
    data() {
        return {
            // <!-- Descrizione:
            // Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. -->
            // <!-- Bonus:
            // Aggiungere alla pagina un’immagine, presa anch’essa da un data. -->

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
                    img: 'img/espresso.jpeg',
                },
                {
                    name: 'Americano',
                    price: 2.00,
                    
                },
                {
                    name: 'Latte',
                    price: 2.50,
                    
                },
            ]


        }
    },

    methods: {

        menu () {
            // show the menu
            this.menuList.forEach((element) => {
                console.log(element.name, element.price);
                document.getElementById('menu').innerHTML += `
                    <ul>
                        <li>
                            <a>${element.name} ${element.price}€</a>
                            <img src="img/${element.img}.jpg" alt="${element.name}">
                        </li>
                    </ul>
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

