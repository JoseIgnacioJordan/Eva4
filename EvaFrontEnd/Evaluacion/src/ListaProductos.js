import audifonosSony from './assets/imagenes/audifonosSony.jfif';
import samsungGalaxy from './assets/imagenes/samsungGalaxy.jfif';
import dell from './assets/imagenes/dell.jfif';
import ipadPro from './assets/imagenes/ipadPro.jfif';
import appleWatch from './assets/imagenes/appleWatch.jfif';
import nintendoSwitch from './assets/imagenes/nintendoSwitch.jfif';

const productos = [
    {
        id: 1,
        nombre: "Audífonos Sony WH-1000XM4",
        description: "Audífonos Sony WH-1000XM4 con cancelación de ruido y Alexa integrada. Disfruta de la mejor calidad de sonido con estos audífonos de alta gama.",
        precio: "209.990",
        categoria: "Electrónica",
        src: audifonosSony,
    },
    {
        id: 2,
        nombre: "Smartphone Samsung Galaxy S21",
        description: "Smartphone Samsung Galaxy S21 con pantalla de 6.2 pulgadas, cámara de 64 MP y 128 GB de almacenamiento interno.",
        precio: "699.990",
        categoria: "Electrónica",
        src: samsungGalaxy,
    },
    {
        id: 3,
        nombre: "Laptop Dell XPS 13",
        description: "Laptop Dell XPS 13 con procesador Intel Core i7, 16 GB de RAM y 512 GB SSD. Ideal para trabajo y entretenimiento.",
        precio: "1.299.990",
        categoria: "Computadoras",
        src: dell,
    },
    {
        id: 4,
        nombre: "iPad Pro 2021",
        description: "iPad Pro 2021 con pantalla Liquid Retina XDR de 12.9 pulgadas, chip M1, 128 GB de almacenamiento y soporte para Apple Pencil.",
        precio: "1.199.990",
        categoria: "Tabletas",
        src: ipadPro,
    },
    {
        id: 5,
        nombre: "Apple Watch Series 6",
        description: "Apple Watch Series 6 con GPS, pantalla Retina siempre activa, monitoreo de oxígeno en sangre y aplicación de ECG.",
        precio: "399.990",
        categoria: "Wearables",
        src: appleWatch,
    },
    {
        id: 6,
        nombre: "Nintendo Switch",
        description: "Nintendo Switch con controles Joy-Con, pantalla táctil de 6.2 pulgadas y compatibilidad con juegos tanto en modo portátil como en modo consola de sobremesa.",
        precio: "349.990",
        categoria: "Consolas",
        src: nintendoSwitch,
    }
];

export default productos;
