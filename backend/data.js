import bcrypt from 'bcryptjs'
const data = {
    users: [
        {
            username: "Adarsh",
            email: "admin@example.com",
            password: bcrypt.hashSync("123456"),
            isAdmin: true
        },
        {
            username: "John",
            email: "john@gmail.com",
            password: bcrypt.hashSync('123456'),
            isAdmin: false
        }

    ],
    products: [
        {  // _id:"1",
            name: 'ACG reversible jacket',
            slug: 'ACG reversible jacket',
            image: ['https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44346228_1000.jpg',
                'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44342824_1000.jpg',
                'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44342782_1000.jpg',
                'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44347170_1000.jpg'],
            category: 'Shirt',
            countInStock: 10,
            price: 120,
            crossPrice: 250,
            brand: 'Nike',
            discount: 5,
            title: 'Exclusive Nike Jacket for Men',
            description: 'ACG reversible jacket from Nike featuring black/multicolour, panelled design, reversible, logo print to the rear, logo print at the sleeve, front zip fastening, long sleeves and straight hem.'
        },
        {//_id:"2",
            name: 'Beckenbauer',
            slug: 'Beckenbauer',
            image: ['https://cdn-images.farfetch-contents.com/20/90/96/76/20909676_51049698_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/90/96/76/20909676_51049696_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/90/96/76/20909676_51049700_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/90/96/76/20909676_51049697_1000.jpg'],
            category: 'Shirt',
            countInStock: 10,
            price: 800,
            crossPrice: 970,
            brand: 'Adidas',
            discount: 5,
            title: 'Exclusive Adicolor Jacket for Men',
            description: 'Beckenbauer Adicolor Classic zip-up featuring black/multicolour, panelled design, reversible, logo print to the rear, logo print at the sleeve, front zip fastening, long sleeves and straight hem.'
        },
        {   // _id:"3",
            name: 'Logo-print cotton hoodie',
            slug: 'Logo-print cotton hoodie',
            image: ['https://cdn-images.farfetch-contents.com/20/57/74/97/20577497_50596999_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/57/74/97/20577497_50597000_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/57/74/97/20577497_50596990_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/57/74/97/20577497_50596992_1000.jpg'],
            category: 'Shirt',
            countInStock: 10,
            price: 580,
            crossPrice: 750,
            brand: 'Puma',
            discount: 5,
            title: 'Logo-print cotton hoodie',
            description: 'Logo-print cotton hoodie featuring black/multicolour, panelled design, reversible, logo print to the rear, logo print at the sleeve, front zip fastening, long sleeves and straight hem.'
        },
        {  //  _id:"4",
            name: 'Mac80 low-top sneakers',
            slug: 'Mac80 low-top sneakers',
            image: ['https://cdn-images.farfetch-contents.com/20/08/03/59/20080359_45116266_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/08/03/59/20080359_45117447_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/08/03/59/20080359_45118048_1000.jpg',
                'https://cdn-images.farfetch-contents.com/20/08/03/59/20080359_45118047_1000.jpg'],
            category: 'Shoes',
            countInStock: 10,
            price: 850,
            crossPrice: 1050,
            brand: 'Gucci',
            discount: 5,
            title: 'Mac80 low-top sneakers',
            description: 'Gucci signature Interlocking G takes the focus of these black and white sneakers. Theyre crafted to a retro-inspired low-top silhouette with logo embroidery at the tongue and a flat rubber sole.'
        },


    ]
}
export default data;