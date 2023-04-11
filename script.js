let orderPC = {
    name: "PC",
    price: 60000,
    count: 1
}

let orderPhone = {
    name: "Iphone",
    price: 40000,
    count: 4
}

let user = {
    name: "John",
    age: 36,
    mail: "john@example.com",
    orders: [ 
        { 
            name: "TV", 
            price: 40000,
            count: 1
        },

    ],
    sum: 40000
}

user = {
    ...user,
    orders: [
            ...user.orders,

      {
        ...orderPC
      },

      {
        ...orderPhone
      }  
    ],
    sum: user.sum + (orderPC.price * orderPC.count) + (orderPhone.price * orderPhone.count)
}

console.log(user)