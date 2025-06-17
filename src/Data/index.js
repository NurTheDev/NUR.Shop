const productsData = [
    {
        "id": crypto.randomUUID(),
        "name": "Graphic T-shirt",
        "price": "145",
        "image": "image 1.png",
        "stock": "212",
        "rating": "4",
        "isNew": true,
        "size": "M",
        "color": "Black",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Polo with Tipping Details",
        "price": "180",
        "image": "image 7-1.png",
        "stock": "320",
        "rating": "1",
        "isNew": false,
        "size": "L",
        "color": "White",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Skinny Fit Jeans",
        "price": "120",
        "image": "image 8-1.png",
        "stock": "145",
        "rating": "5",
        "isNew": false,
        "size": "32",
        "color": "Blue",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Black Striped T-shirt",
        "price": "250",
        "image": "image 8-2.png",
        "stock": "100",
        "rating": "3",
        "isNew": true,
        "size": "S",
        "color": "Black/White",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Checkered Shirt",
        "price": "190",
        "image": "image 9-1.png",
        "stock": "10",
        "rating": "4.5",
        "isNew": false,
        "size": "M",
        "color": "Red/Black",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Sleeve Striped T-shirt",
        "price": "145",
        "image": "image 9-2.png",
        "stock": "50",
        "rating": "2.5",
        "isNew": true,
        "size": "L",
        "color": "Blue/White",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Vertical Striped Shirt",
        "price": "200",
        "image": "image 7.png",
        "stock": "75",
        "rating": "4.8",
        "isNew": false,
        "size": "M",
        "color": "Green/White",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Courage Graphic T-shirt",
        "price": "300",
        "image": "image 8.png",
        "stock": "30",
        "rating": "5",
        "isNew": false,
        "size": "XL",
        "color": "Grey",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Loose Fit Bermuda Shorts",
        "price": "145",
        "image": "image 9.png",
        "stock": "50",
        "rating": "2.5",
        "isNew": true,
        "size": "L",
        "color": "Beige",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Gradient Graphic T-shirt",
        "price": "145",
        "image": "image 10.png",
        "stock": "50",
        "rating": "2.5",
        "isNew": true,
        "size": "M",
        "color": "Gradient",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Polo with Tipping Details",
        "price": "180",
        "image": "image 10-1.png",
        "stock": "320",
        "rating": "1",
        "isNew": false,
        "size": "L",
        "color": "Navy",
        "quantity" : "1"
    },
    {
        "id": crypto.randomUUID(),
        "name": "Black Striped T-shirt",
        "price": "120",
        "image": "image 10-2.png",
        "stock": "145",
        "rating": "5",
        "isNew": false,
        "size": "S",
        "color": "Black/White",
        "quantity" : "1"
    },
]
export const getProducts = () => {
    return productsData;
}
