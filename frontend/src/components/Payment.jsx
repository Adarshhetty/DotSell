
import React from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const Payment = () => {

    const navigate = useNavigate()
    const cancelHandler = () => {
        navigate('/cart')
    }
    const paymentHandler = () => {
       
        toast.success("Payment Successful")
        navigate('/')
    }
    return (
        <div>

            <main className=" antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden">
                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
                    <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                        <div className="md:flex items-center">
                            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                                <i className="bx bx-error text-3xl"></i>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <p className="font-bold">Payment Confirmation.</p>
                                <p className="text-sm text-gray-700 mt-1">Please confirm your payment.<br />
                                    <span className='text-red-700'> Note:</span>You won&apos;t be able withdraw the payment once confirmed. </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                            <button onClick={paymentHandler} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-500 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                                Proceed to Pay</button>

                            <button onClick={cancelHandler} className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1">Cancel</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Payment
