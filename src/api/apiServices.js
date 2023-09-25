import axios from "axios";
import {
  CART_URL,
  PRODUCTS_URL,
  LOGIN_URL,
  SIGNUP_URL,
  WISHLIST_URL,
  CATEGORIES_URL,
} from "./apiUrls";
import FormData from 'form-data';

export const loginService = (email, password) =>
  axios.post(LOGIN_URL, { email, password });

export const signupService = (username, email, password) =>
  axios.post(SIGNUP_URL, { username, email, password });

export const getAllProductsService = (text) => axios.get(`http://ec2-34-255-193-31.eu-west-1.compute.amazonaws.com:8080/text/search?text=${encodeURIComponent(text)}&topk=20`);

export const getProductsUsingImageSearch = async (imagePathOrUrl) => {
  const topk = "25"; // Modify this to set the topk value
  // Create a FormData object and append the Blob as a file
  const formData = new FormData();
  const fs = window.require('fs');
  const imageStream = fs.createReadStream('/Users/vittalpai/Downloads/0P0A4888.JPG');
  formData.append('image', imageStream);
  formData.append('topk', topk);
  // const response = await axios.get(imagePathOrUrl, { responseType: "blob" });
  // // formData.append("image", response.data, {
  // //   filename: 'image.jpg',
  // //   contentType: 'image/jpeg',
  // // });
  formData.append("topk", topk);

  return axios.get("http://ec2-34-255-193-31.eu-west-1.compute.amazonaws.com:8080/img/search", formData), {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
};

// Helper function to read a file as an ArrayBuffer
const readFile = (fileUrl, contentType) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const blob = new Blob([event.target.result], { type: contentType });
      resolve(blob);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    // Read the file as a Blob
    fetch(fileUrl)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => reader.readAsArrayBuffer(arrayBuffer));
  });
};

export const getProductByIdService = (productId) =>
  axios.get(`${PRODUCTS_URL}/${productId}`);

export const getCartItemsService = (token) =>
  axios.get(CART_URL, {
    headers: {
      authorization: token,
    },
  });

export const postAddProductToCartService = (product, token) =>
  axios.post(
    CART_URL,
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const postUpdateProductQtyCartService = (productId, type, token) =>
  axios.post(
    `${CART_URL}/${productId}`,
    {
      action: {
        type,
      },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromCartService = (productId, token) =>
  axios.delete(`${CART_URL}/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getWishlistItemsService = (token) =>
  axios.get(WISHLIST_URL, {
    headers: {
      authorization: token,
    },
  });

export const postAddProductToWishlistService = (product, token) =>
  axios.post(
    WISHLIST_URL,
    { product },
    {
      headers: {
        authorization: token,
      },
    }
  );

export const deleteProductFromWishlistService = (productId, token) =>
  axios.delete(`${WISHLIST_URL}/${productId}`, {
    headers: {
      authorization: token,
    },
  });

export const getAllCategoriesService = () => axios.get(CATEGORIES_URL);
