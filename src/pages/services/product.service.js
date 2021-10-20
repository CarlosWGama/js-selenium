const products = [
    {id: 1, title: 'Kaiju no. 8', volume: 1, img: 'https://images-na.ssl-images-amazon.com/images/I/51P+t1IHQBS._SX331_BO1,204,203,200_.jpg', price: 20.00},
    {id: 2, title: 'Full Metal Alchemist', volume: 8, img: 'https://images-na.ssl-images-amazon.com/images/I/81sQghlEclL.jpg', price: 14.00},
    {id: 3, title: 'Berserk', volume: 45, img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1458228916l/29541230._SX318_.jpg', price: 29.00},
    {id: 4, title: 'D. Gray-man', volume: 47, img: 'https://img.assinaja.com/assets/tZ/004/img/257422_520x520.jpg', price: 19.00},
    {id: 5, title: 'One Piece', volume: 88, img: 'https://m.media-amazon.com/images/I/61G04RW53oL.jpg', price: 18.00},
    {id: 6, title: 'GTO', volume: 1, img: 'https://m.media-amazon.com/images/I/519SFwmuuoL.jpg', price: 9.00},
    {id: 7, title: 'Saint Seiya', volume: 2, img: 'https://m.media-amazon.com/images/I/61vCGkEnetL.jpg', price: 14.00},
    {id: 8, title: 'Hajime no Ippo', volume: 131, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwnrUhLlHh6pEKgcJIzw3VEgQoxP-wcKKhA&usqp=CAU', price: 25.00},
    {id: 9, title: 'Bleach', volume: 72, img: 'https://images-na.ssl-images-amazon.com/images/I/51hK79ffvFL._SX331_BO1,204,203,200_.jpg', price: 14.00},
]


export const ProductService = {
    // Retorna todos
    all: () => products,
    // Busca com base numaa palavra
    filter: (title) => products.filter((p) => p.title.toLowerCase().includes(title.toLowerCase()))
}