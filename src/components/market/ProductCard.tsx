interface CardProps {
  image: string;
  price: number;
  name: string;
}

function ProductCard({ image, price, name }: CardProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>${price}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-teal-800 text-accent hover:text-gray-900">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
