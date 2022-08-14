import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import { getProduct, productSelector, deleteProduct } from '../features/productSlice'

const ShowProduct = () => {
  const products = useSelector(productSelector.selectAll)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch])

  return (
    <div className='w-full flex items-center flex-col p-5'>
      <div className='w-[80%]'>
        <Link to="add" className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Add Product</Link>
      </div>
      <div className="flex flex-col w-[80%]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 shadow-md">
          <div className="py-2 inline-block min-w-full sm:px-2 lg:px-4">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-blue-500 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-r border-l">
                      No
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-r">
                      Product
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center border-r">
                      Price
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-2 py-2 text-center border-r">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((product, index) => (
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100" key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-l text-center">{index + 1}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-center">
                          {product.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r text-center">
                          {product.price}
                        </td>
                        <td className="flex text-sm text-gray-900 font-light px-2 py-2 whitespace-nowrap border-r text-center justify-center">
                          <div className='mr-4'>
                            <Link className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' to={`edit/${product.id}`}>Edit</Link>
                          </div>
                          <div>
                            <button onClick={() => dispatch(deleteProduct(product.id))} className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' to="edit/:id">Remove</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct