enum TransactionStatus {
    PENDING = 'Pending',
    COMPLETED = 'Completed',
    PAID = 'Paid'
}

const date = new Date(2023, 11, 21, 15, 30);
const date2 = new Date(2023, 11, 23, 2, 30);

export const transactions = [
    {
        description: "Airpods Pro",
        price: 52000,
        deliveryPrice: 3500,
        totalPrice: 57500,
        status: TransactionStatus.PENDING,
        dateCreated: date,
        id: 1,
        link: "ae39017021m"
    },
    {
        description: "Laptop bag",
        price: 5000,
        deliveryPrice: 500,
        totalPrice: 5500,
        status: TransactionStatus.PENDING,
        dateCreated: date2,
        id: 2,
        link: "ae393490123p"
    },
]



  