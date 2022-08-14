import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { Link } from 'react-router-dom'
import { saveProduct } from '../features/productSlice';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProduct = async (e) => {
    e.preventDefault()
    await dispatch(saveProduct({ title, price }));
    navigate('/');
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='w-[60%] mb-5'>
        <Link to="/" className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Back</Link>
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-white w-[60%] max-w-[40%]">
        <form onSubmit={createProduct}>
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
            ease-in-out">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct