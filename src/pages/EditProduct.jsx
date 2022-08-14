import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, productSelector, updateProduct } from '../features/productSlice';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const product = useSelector((state) => productSelector.selectById(state, id));

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct({ id, title, price }));
    navigate('/');
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <form onSubmit={handleUpdate}>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
            placeholder="Masukan product" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group mb-6">
          <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
            placeholder="Masukan harga" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button className="
          w-full
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Update Product</button>
      </form>
    </div>
  )
}

export default EditProduct