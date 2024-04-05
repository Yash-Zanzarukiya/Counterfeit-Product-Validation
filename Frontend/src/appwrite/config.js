export class Service {
  async addProduct({ product_name, brand_name, product_id }) {
    try {
      const slug = product_id;
      return await fetch("http://localhost:3000/api/v1/products/register-product", {
        method: "POST",
        body: JSON.stringify({
          product_name,
          brand_name,
          product_id,
          slug,
        }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log("BACKEND_SERVICE :: CREATE_POST :: ERROR -> ", error);
    }
  }

  async getProduct(slug) {
    try {
      console.log("Requesting the post...");
      return await fetch(`http://localhost:3000/api/v1/products/get-product/${slug}`);
    } catch (error) {
      console.log("BACKEND_SERVICE :: GET_POST :: ERROR -> ", error);
      return false;
    }
  }

  async getAllProducts() {
    try {
      return await fetch("http://localhost:3000/api/v1/products/all-product");
    } catch (error) {
      console.log("BACKEND_SERVICE :: GET_ALL_POST :: ERROR -> ", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
