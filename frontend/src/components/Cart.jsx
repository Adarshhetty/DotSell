import { ArrowLeft, Trash } from 'lucide-react'
import React, { useContext } from 'react'
import { Store } from '../Store';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';
export function Cart() {
    const navigate = useNavigate()
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;
    const updateCartHandler = async (item, quantity) => {
        const { data } = await axios.get(`/api/products/${item._id}`)
        if (data.countInStock < quantity) {
            window.alert("Product is out of stock")
            return;
        }
        ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
    }
    const removeItemHandler = (item) => {
        ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
    }
    const checkoutHandler = () => {
        navigate("/signin?redirect=/shipping")
    }
    return (
        <div className="mx-auto max-w-7xl px-2 lg:px-14">
            <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Shopping Cart
                </h1>
                {cartItems.length === 0 ? (<div className=' '>
                    <h1 className=" flex justify-center items-center text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">Your product cart is empty !! </h1>
                    <Link to="/">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-black px-3 py-2 mx-4 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Go back
                        </button>
                    </Link>
                </div>) :
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>
                            <ul className="divide-y divide-gray-200">
                                {cartItems.map((item) => (
                                    <div key={item._id} className="">
                                        <li className="flex py-6 sm:py-6 ">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={item.image[0]}
                                                    alt={item.name}
                                                    className="sm:h-40 sm:w-40 h-24 w-24 rounded-md object-contain object-center"
                                                />
                                            </div>

                                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                    <div>
                                                        <div className="flex justify-between">
                                                            <h3 className="text-sm">
                                                                <Link to={`/product/${item.slug}`} className="font-semibold text-black">
                                                                    {item.name}
                                                                </Link>
                                                            </h3>
                                                        </div>

                                                        <div className="mt-1 flex items-end">
                                                            <p className="text-xs font-medium text-gray-500 line-through">
                                                            ₹{item.crossPrice}
                                                            </p>
                                                            <p className="text-sm font-medium text-gray-900">
                                                                &nbsp;&nbsp;₹{item.price}
                                                            </p>
                                                            &nbsp;&nbsp;
                                                            <p className="text-sm font-medium text-green-500">{item.discount}%</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <div className="mb-2 flex">
                                            <div className="min-w-24 flex">
                                                <button type="button" className="h-7 w-7" disabled={item.quantity === 1}
                                                    onClick={() => updateCartHandler(item, item.quantity - 1)}>
                                                    -
                                                </button>
                                                <input
                                                    type="text"
                                                    className="mx-1 h-7 w-9 rounded-md border text-center"
                                                    value={item.quantity}
                                                />
                                                <button type="button" className="flex h-7 w-7 items-center justify-center" disabled={item.quantity === item.countInStock}
                                                    onClick={() => updateCartHandler(item, item.quantity + 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <div className="ml-6 flex text-sm">
                                                <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0" onClick={() => removeItemHandler(item)}>
                                                    <Trash size={12} className="text-red-500" />
                                                    <span className="text-xs font-medium text-red-500">Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                        </section>
                        {/* Order summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
                        >
                            <h2
                                id="summary-heading"
                                className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
                            >
                                Price Details
                            </h2>
                            <div>
                                <dl className=" space-y-1 px-2 py-4">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm text-gray-800">Price ({cartItems.reduce((a, c) => a + c.quantity, 0)} item)</dt>
                                        <dd className="text-sm font-medium text-gray-900">₹ {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</dd>
                                    </div>

                                    <div className="flex items-center justify-between py-4">
                                        <dt className="flex text-sm text-gray-800">
                                            <span>Delivery Charges</span>
                                        </dt>
                                        <dd className="text-sm font-medium text-green-700">Free</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                        <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                        <dd className="text-base font-medium text-gray-900">₹ {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</dd>
                                    </div>
                                </dl>

                            </div>
                            <button
                                type="button"
                                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                disabled={cartItems.length === 0} onClick={checkoutHandler}>
                                Checkout
                            </button>
                            <Link
                                to="/"
                                className="inline-block py-4 text-lg text-gray-600 transition hover:text-gray-700 hover:underline hover:underline-offset-4"
                            >
                                Continue shopping &rarr;
                            </Link>
                        </section>

                    </form>

                }
            </div>
        </div>
    )
}
export default Cart
