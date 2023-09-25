import { useProductsContext } from "../contexts/index";
import {
  filterByCheckbox,
  filterByGender,
  filterByPriceRange,
  filterByRating,
  filterBySearch,
  sortByPrice,
} from "../utils/filterUtils";

const useFilter = () => {
  const { allProducts, filters } = useProductsContext();
  const { gender, categories, priceRange, rating, sortBy, searchText } =
    filters;

  // let filteredData = filterBySearch(searchText, allProducts);
  // filteredData = filterByGender(gender, filteredData);
  let  filteredData = filterByPriceRange(priceRange, allProducts);
  filteredData = sortByPrice(sortBy, filteredData);
  // filteredData = filterByCheckbox(categories, filteredData);
  // filteredData = filterByRating(rating, filteredData);
  // 

  return filteredData;
};

export { useFilter };
