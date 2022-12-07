const ordersResolvers = require("./orders.resolvers");

const orders = [
  {
    date: "2022-11-28",
    total: 100,
    items: [
      {
        product: {
          id: "redhat",
          description: "Red Hat",
          price: 50,
        },
        quantity: 2,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
