export const transactionStatus = {
    transactionCreated : 'Transaction Created',
    fundsPaid : 'Funds Paid',
    packageDelivered : 'Package Delivered',
    fundsReleased : "Funds Released"
}

const date = new Date(2023, 11, 21, 15, 30);
const date2 = new Date(2023, 11, 23, 2, 30);
const date3 = new Date(2023, 11, 24, 14, 23);

export const transactions = [
    {
        description: "Airpods Pro",
        price: 52000,
        deliveryPrice: 3500,
        totalPrice: 57500,
        status: transactionStatus.transactionCreated,
        dateCreated: date,
        id: 1,
        link: "ae39017021m"
    },
    {
        description: "Laptop bag",
        price: 5000,
        deliveryPrice: 500,
        totalPrice: 5500,
        status: transactionStatus.fundsPaid,
        dateCreated: date2,
        id: 2,
        link: "ae393490123p"
    },
    {
        description: "Laptop bag",
        price: 5000,
        deliveryPrice: 500,
        totalPrice: 5500,
        status: transactionStatus.transactionCreated,
        dateCreated: date3,
        id: 3,
        link: "ae393490123p"
    },
]



  