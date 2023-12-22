import DashboardLayout from "../components/layouts/DashboardLayout";
import { useState } from "react";

function CreateTransaction() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function updateTotal(price: number, delivery: number): number {
    return price + delivery;
  }

  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (
    <DashboardLayout>
      <div className="flex justify-center">
        <div className="w-2/4">
          <p className="text-2xl font-semibold mb-5">Create transaction</p>
          <form 
            className="bg-[#0000000D] rounded-2xl px-10 py-6 text-xl"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col w-full mb-5">
              <label htmlFor="" className="mb-1">
                Description
              </label>
              <input
                type="text"
                placeholder="E.g used iPhone 11 Pro Max"
                required
                className="input input-bordered w-full rounded-xl"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col w-full mb-5">
              <label htmlFor="" className="mb-1">
                Price
              </label>
              <input
                type="number"
                placeholder=""
                required
                className="input input-bordered w-full rounded-xl"
                min={0}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  setTotal(Number(e.target.value) + deliveryFee);
                }}
              />
            </div>

            <div className="flex flex-col w-full mb-5">
              <label htmlFor="" className="mb-1">
                Delivery fee (Optional)
              </label>
              <input
                type="number"
                placeholder=""
                className="input input-bordered w-full rounded-xl"
                min={0}
                onChange={(e) => {
                  setDeliveryFee(Number(e.target.value));
                  setTotal(Number(e.target.value) + price);
                }}
              />
            </div>

            <div className="mb-5">
              <p className="text-2xl font-normal text-gray-800">
                Total: &#8358;
                <span className="font-medium">{total.toLocaleString()}</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-teal-800 text-accent rounded-2xl shadow-md"
            >
              Start transaction
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CreateTransaction;
