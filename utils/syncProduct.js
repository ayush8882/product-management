// const elasticClient = require("../config/elasticSearchConfig");

// const syncProductForSearch = async (product) => {
//   try {
//     await elasticClient.index({
//       index: "products",
//       id: product._id.toString(),
//       body: {
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         inventory: product.inventory,
//         images: product.images,
//       },
//     });
//   } catch (error) {
//     console.log("Error while syncing product", error);
//     return true;
//   }
// };

// module.exports = syncProductForSearch;
