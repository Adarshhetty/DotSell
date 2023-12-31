import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect,useReducer } from 'react'
import { Dna } from  'react-loader-spinner'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getError } from '../utils'
import { Store } from '../Store'
const reducer=(state,action)=>{
  switch(action.type){
    case "FETCH_REQUEST":
      return {...state,loading:true}
    case "FETCH_SUCCESS":
      return{...state,loading:false, product:action.payload}
    case "FETCH_FAIL":
      return {...state,loading:false, error:action.payload}
    default: return state
  }
}
const Product = () => {
   const navigate=useNavigate()
    const params=useParams()
    const {slug}=params
    const [{loading,product,error},dispatch]=useReducer(reducer,{
      loading:true,
      product:[],
      error:""
    });
    useEffect(() => {
      const fetchData=async ()=>{
        dispatch({type:"FETCH_REQUEST"})
        try {
          const result = await axios(`/api/products/slug/${slug}`);
         dispatch({type:"FETCH_SUCCESS",payload:result.data});
        } catch (error) {
          dispatch({type:"FETCH_FAIL",payload:getError(error)});
         
        }
      }
     fetchData();
    }, [slug]);
    const {state,dispatch:ctxDispatch}=useContext(Store);
    const {cart}=state;
   const [count,setCount]=useState(1);
    const addToCartHandler=async()=>{
      const existItem=cart.cartItems.find((item)=>item._id===product._id)
      const quantity=existItem?existItem.quantity:1
      
      const {data}=await axios.get(`/api/products/${product._id}`)
     
      if(data.countInStock<quantity){
        window.alert("Product is out of stock")
        return;
    }
    
    ctxDispatch({type:'CART_ADD_ITEM',payload:{...product,quantity:count}})
    navigate('/cart')
  }
  return loading ? (
    <div className='flex-col  items-center'>
    <h1>Everything you need in your cart !!!</h1>
    <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/></div>
  ) : error ? (<div className="py-10">
  <div className="text-center">
    <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
      {error}
    </h1>
    <p className="mt-4 text-base leading-7 text-gray-600">
      Sorry, we couldn&apos;t find the product you&apos;re looking for.
    </p>
    <div className="mt-4 flex items-center justify-center gap-x-3">
      <Link to="/">
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <ArrowLeft size={16} className="mr-2" />
        Go back
      </button>
      </Link>
    </div>
  </div>
</div>):(
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.image[i]}
                alt="Nike Air Max 95 By You--0"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-7">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
              {product.name}
              <p className='text-heading mb-3.5 text-lg font-semibold md:text-xl lg:text-2xl 2xl:text-3xl'>
                {product.title}
              </p>
            </h2>
            <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
              {product.description}
            </p>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
              ₹{product.price}
              </div>
              <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
              ₹{product.crossPrice}
              </span>
            </div>
          </div>
          <div className="border-b border-gray-300 pb-3  ">
            <div className="mb-4">
              <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                size
              </h3>
              <ul className="colors -mr-3 flex flex-wrap">
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <li
                    key={size}
                    className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-100 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm "
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
              <button
                className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
               onClick={()=>setCount(count+1)} disabled={count===product.countInStock}
              >
                +
              </button>
              <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                {count}
              </span>
              <button className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
               onClick={()=>setCount(count-1)} disabled={count===1}>
                -
              </button>
            </div>
            {product.countInStock >0 ?(<button
              type="button"
              className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={addToCartHandler}>
              Add to cart
            </button>):(<button
              type="button"
              className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-red-500 shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
              disabled
            >
              Out of Stock
            </button>)}
          </div>
          <div className="py-6 ">
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">SKU:</span>
                N/A
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                <Link className="hover:text-heading transition hover:underline" to="/">
                  {product.category}
                </Link>
              </li>
              <li className="productTags">
                <span className="text-heading inline-block pr-2 font-semibold">Stock:</span>
                <p
                  className="hover:text-heading inline-block pr-1.5 transition last:pr-0 hover:underline"
                 
                >
                {product.countInStock>0 ? (
                  <p>In Stock</p>
                ):(<p>Unavailable</p>)}
                </p>
              </li>
            </ul>
          </div>
          <div className="shadow-sm ">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Product Details
              </h2>
              <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                <div className="bg-heading h-0.5 w-full rounded-sm" />
                <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out" />
              </div>
            </header>
            <div>
              <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                Our Customer Experience Team is available 7 days a week and we offer 2 ways to get
                in contact.Email and Chat . We try to reply quickly, so you need not to wait too
                long for a response!.
              </div>
            </div>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Additional Information
              </h2>
            </header>
          </div>
          <div className="">
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                Customer Reviews
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;
