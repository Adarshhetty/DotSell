import React, { useEffect,useReducer} from 'react'
import { Dna } from  'react-loader-spinner'

import Card from './Card'
import axios from 'axios';
const reducer=(state,action)=>{
  switch(action.type){
    case "FETCH_REQUEST":
      return {...state,loading:true}
    case "FETCH_SUCCESS":
      return{...state, products:action.payload,loading:false}
    case "FETCH_FAIL":
      return {...state, error:action.payload,loading:false}
    default: return state
  }
}
const Home = () => {
  const [{loading,products,error},dispatch]=useReducer(reducer,{
    loading:true,
    products:[],
    error:""
  });
  console.log((products));
  useEffect(() => {
    const fetchData=async ()=>{
      dispatch({type:"FETCH_REQUEST"})
      try {
        const result = await axios('/api/products');
       dispatch({type:"FETCH_SUCCESS",payload:result.data});
      } catch (error) {
        dispatch({type:"FETCH_ERROR",payload:error.message});
       
      }
    }
   fetchData();
  }, []);
  


  return (
    <div>
      <h1 className='text-3xl text-center m-4 font-bold'>Featured products</h1>

      <div className='flex flex-wrap justify-center items-center m-4'>
        {
          loading? <div className='flex-col  items-center'>
            <h1>Everything you need in your cart !!!</h1>
            <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        /></div>:
          error? <div>Error</div>:
          products.map(product => (
            <div key={product.slug}>
              <Card name={product.name} img={product.image[0]} price={product.price} title={product.title} slug={product.slug} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
