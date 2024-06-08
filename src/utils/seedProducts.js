import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        name: "PlayStation 4",
        price: 500000,
        id: "1",
        descripcion: "Lanzada por Sony en 2013, la PS4 ha sido una de las consolas más vendidas de su generación, con una amplia biblioteca de juegos exclusivos y de terceros.",
        stock: 20,
        category: "consolas",
        image: "/src/assets/play4.png"
    },
    {
        name: "Xbox One",
        price: 420000,
        id: "2",
        descripcion: "Desarrollada por Microsoft, compite directamente con la PS4. Ofrece una amplia gama de servicios y juegos exclusivos, junto con una integración más profunda con Windows.",
        stock: 15,
        category: "consolas",
        image: "/src/assets/xboxone.png"
    },
    {
        name: "Nintendo Switch",
        price: 650000,
        id: "3",
        descripcion: "Esta consola híbrida de Nintendo, lanzada en 2017, permite a los jugadores jugar tanto en casa como en modo portátil. Ofrece una amplia variedad de juegos exclusivos de Nintendo y es muy popular entre jugadores de todas las edades.",
        stock: 8,
        category: "consolas",
        image: "/src/assets/nintendoswitch.png"
    },
    {
        name: "PlayStation 5",
        price: 1150000,
        id: "4",
        descripcion: "La sucesora de la PS4, lanzada por Sony en 2020. Ofrece mejoras significativas en el rendimiento y gráficos, junto con una nueva gama de características y juegos exclusivos.",
        stock: 36,
        category: "consolas",
        image: "/src/assets/play5.png"
    },
    {
        name: "Xbox Series X/S",
        price: 710000,
        id: "5",
        descripcion: "Lanzada en 2020, la serie X/S de Xbox es la sucesora de la Xbox One. Ofrece potencia de próxima generación, tiempos de carga más rápidos y capacidades de juego en 4K.",
        stock: 18,
        category: "consolas",
        image: "/src/assets/xboxx.png"
    },
    {
        name: "Joy-Con Nintendo Switch",
        price: 107000,
        id: "6",
        descripcion: "El Joy-Con es el controlador versátil de la consola Nintendo Switch, ofreciendo funciones únicas como detección de movimiento y vibración HD.",
        stock: 22,
        category: "accesorios",
        image: "/src/assets/joycon.png"
    },
    {
        name: "Joystick Inalámbrico Ps5",
        price: 127000,
        id: "7",
        descripcion: "Experimenta una experiencia de juego inmersiva con el control inalámbrico DualSense para PS5, que ofrece respuesta háptica, gatillos adaptativos dinámicos y un micrófono integrado en un diseño icónico.",
        stock: 15,
        category: "accesorios",
        image: "/src/assets/controlps5.png"
    },
    {
        name: "Joystick Microsoft Xbox",
        price: 115000,
        id: "8",
        descripcion: "Experimenta el diseño modernizado del control inalámbrico de Xbox en color Robot Blanco, con superficies esculpidas y geometría mejorada para confort durante el juego.",
        stock: 19,
        category: "accesorios",
        image: "/src/assets/xboxcontrol.png"
    },
    {
        name: "Gaming Headset Xbox Series X",
        price: 310000,
        id: "9",
        descripcion: "Disfruta de auriculares grandes y ultra suaves que brindan una experiencia más cómoda durante las sesiones de juego prolongadas. Puedes ajustar el volumen o silenciar rápidamente el ruido entrante con prácticos controles en la oreja. El micrófono ajustable se guarda cuando no se utiliza.",
        stock: 8,
        category: "accesorios",
        image: "/src/assets/headset.png"
    },
    {
        name: "Xbox Series X/S Media Remote",
        price: 94000,
        id: "10",
        descripcion: "Ya no tendrás que buscar el botón derecho del controlador para pausar tu película. Obtenga acceso rápido y sencillo a todas sus películas, programas de TV, música, videos y aplicaciones favoritos con PDP Gaming Media Remote para Xbox Series X|S y Xbox One.",
        stock: 20,
        category: "accesorios",
        image: "/src/assets/xboxremote.png"
    },
    {
        name: "The Legend of Zelda: Breath of the Wild",
        price: 67000,
        id: "11",
        descripcion: "Adéntrate en un mundo de descubrimiento, exploración y aventuras en The Legend of Zelda: Breath of the Wild, un nuevo juego que rompe fronteras en la aclamada serie. Viaja a través de vastos campos, bosques y picos de montañas mientras descubres qué ha sido del reino de Hyrule en esta impresionante aventura al aire libre.",
        stock: 64,
        category: "juegos",
        image: "/src/assets/zelda.png"
    },
    {
        name: "Call of Duty: Modern Warfare II",
        price: 112000,
        id: "12",
        descripcion: "Modern Warfare: II se lanzará con una campaña para un jugador que recorre el mundo, un combate multijugador inmersivo y una experiencia de Operaciones Especiales cooperativa impulsada por la narrativa.",
        stock: 33,
        category: "juegos",
        image: "/src/assets/callofduty.png"
    },
    {
        name: "Horizon Zero Dawn: COMPLETE EDITION",
        price: 45000,
        id: "13",
        descripcion: "Conviértete en un hábil cazador y explora el exuberante mundo habitado por misteriosas criaturas mecanizadas en un emocionante juego de acción/RPG de mundo abierto exclusivo para la consola PlayStation® 4.",
        stock: 40,
        category: "juegos",
        image: "/src/assets/horizonzero.png"
    },
    {
        name: "Far Cry 6",
        price: 42000,
        id: "14",
        descripcion: "Experimenta la brillante jugabilidad de mundo abierto y explora nuevos e impresionantes terrenos en este apasionante juego de disparos en primera persona. Únete a la revolución y lucha contra el régimen opresivo del dictador Antón Castillo y su hijo adolescente Diego, a quienes las estrellas de Hollywood Giancarlo Esposito y Anthony González dieron vida.",
        stock: 54,
        category: "juegos",
        image: "/src/assets/farcry6.png"
    },
    {
        name: "EA SPORTS FC 24",
        price: 70000,
        id: "15",
        descripcion: "EA SPORTS FC™ 24 es una nueva era para The World's Game: más de 19 000 jugadores con licencia completa, más de 700 equipos y más de 30 ligas jugando juntos en la experiencia de fútbol más auténtica jamás creada para PC. EA SPORTS FC™ 24 es el siguiente capítulo de un futuro más innovador del fútbol. ",
        stock: 2,
        category: "juegos",
        image: "/src/assets/fifa.png"
    },
]

const seedProducts = () => {
    products.map(({ id, ...rest }) =>{
    addDoc(collection(db, "products"), rest)
});
}

seedProducts();