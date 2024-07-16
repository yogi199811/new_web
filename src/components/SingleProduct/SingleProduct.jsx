import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addSingleProduct } from "../features/productSlice";
import axios from "axios";
import SingleData from "../../utils/SingleData";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await axios.get(
          `https://api.pujakaitem.com/api/products?id=${id}`
        );
        const singleProduct = await res.data;
        dispatch(addSingleProduct(singleProduct));
      } catch (error) {
        console.log(error);
      }
    };

    getSingleProduct();
  }, [dispatch, id]);




  return (
    <div>
      <SingleData/>
      
    </div>
  );
};

export default SingleProduct;
