import { useNavigate } from "react-router-dom";

const FakeProduct = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat overflow-y-scroll h-[80vh] bg-fake-product-bg ">
      <div className="w-[45%] mx-auto mt-10 mb-10 p-10 bg-white rounded shadow-md">
        <h1 className="text-center text-4xl text-red-600 font-bold font-monttserrat mb-5 mt-5">
          Product Authentication Failed
        </h1>
        <p className="text-center text-2xl font-monttserrat mb-5 mt-5">
          We're sorry to inform you that the Product you scanned is not authentic. It appears to be
          a Counterfeit.
        </p>
        <p className="text-center text-xl font-monttserrat mb-5 mt-5">
          We take counterfeiting very seriously, and we are working to prevent it from happening. We
          advise you not to use this product, as it may not meet the safety and quality standards of
          the genuine product. If you have any concerns or questions, please contact the
          manufacturer of the genuine product for further assistance.
        </p>
        <p className="text-center text-xl font-monttserrat mb-5 mt-5">
          Thank you for using our anti-counterfeit system. We hope it has helped you make informed
          purchasing decisions and protected you from counterfeit products.
        </p>
        <div className="flex justify-center">
          <button className="btn btn-primary mt-5 text-blue-600 text-xl" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default FakeProduct;
