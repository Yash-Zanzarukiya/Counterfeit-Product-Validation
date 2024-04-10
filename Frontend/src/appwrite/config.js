export class Service {
  async addProduct({ ...formData }) {
    try {
      let data = new FormData();

      for (const key in formData) {
        data.append(key, formData[key]);
      }

      data.append("slug", formData.product_id);
      data.append("productImage", formData.productImage[0]);

      return await fetch("/api/v1/products/register-product", {
        method: "POST",
        body: data,
      });

    } catch (error) {
      console.log("BACKEND_SERVICE :: CREATE_POST :: ERROR -> ", error);
    }
  }

  async getProduct(slug) {
    try {
      console.log("Requesting the post...");
      return await fetch(`/api/v1/products/get-product/${slug}`);
    } catch (error) {
      console.log("BACKEND_SERVICE :: GET_POST :: ERROR -> ", error);
      return false;
    }
  }

  async getAllProducts() {
    try {
      return await fetch("/api/v1/products/all-product");
    } catch (error) {
      console.log("BACKEND_SERVICE :: GET_ALL_POST :: ERROR -> ", error);
      return false;
    }
  }
}

const service = new Service();

export default service;
