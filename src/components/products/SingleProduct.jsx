import { GiRoundStar } from "react-icons/gi";
import { useProductsContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { BiShow  } from "react-icons/bi";

const SingleProduct = ({ product }) => {
  const { updateProductsUsingImage, applyFilters } = useProductsContext();
  const navigate = useNavigate();

  const handleShowSimilarClick = () => {
    applyFilters("searchText", "");
    updateProductsUsingImage(product.imageUrl);
    navigate("/");
  };
  return (
    <div className="relative bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="flex items-center justify-center bg-black/[0.075] xs:w-1/2 w-full sm:w-full">
        <img src={product.imageUrl} alt="" />
      </div>

      <div className="p-3 flex flex-col justify-between gap-2 h-1/2 xs:h-full sm:h-1/2 xs:w-2/3 w-full sm:w-full">
        <div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-medium">{product.productDisplayName}</span>
              <span className="flex items-center gap-1">
                <span>{4.6}</span>
                <GiRoundStar className="text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">Rating</span>
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-amber-600">₹{product.discountedPrice}</span>
              <span className="text-sm text-gray-600 line-through">
                {product.price}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{product.brandName}</p>
          <div className="absolute bottom-2 right-2">
            <BiShow title="Show similar products" alt="Show similar products" onClick={handleShowSimilarClick} className="text-xl hover:text-rose-600 hover:shadow-md transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
