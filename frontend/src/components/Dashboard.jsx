import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router';

// name: 'ACG reversible jacket',
// slug: 'ACG reversible jacket',
// image: ['https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44346228_1000.jpg',
//     'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44342824_1000.jpg',
//     'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44342782_1000.jpg',
//     'https://cdn-images.farfetch-contents.com/19/75/97/90/19759790_44347170_1000.jpg'],
// category: 'Shirt',
// countInStock: 10,
// price: 120,
// crossPrice: 250,
// brand: 'Nike',
// discount: 5,
// title: 'Exclusive Nike Jacket for Men',
// description: 'ACG reversible jacket from Nike featuring bl
const Dashboard = () => {
   const navigate=useNavigate()
    
    const [productData, setProductData] = useState({
        name: '',
        slug: '',
        image: [],
        category: '',
        countInStock: 0,
        price: 0,
        crossPrice: 0,
        brand: '',
        discount: 0,
        title: '',
        description: '',
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };
    const handleImageInputChange = (e) => {
        const { name, value } = e.target;

       
      

        const updatedProductData = { ...productData };

  // Update the image URL at the specified index
  updatedProductData.image[name] = value;

  // Update the state with the modified product data
  setProductData(updatedProductData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your Express server with the product data
            const response = await axios.post('/api/products', productData);
        
            if (response.status === 201) {
           
              setProductData({
                name: '',
                slug: '',
                image: [],
                category: '',
                countInStock: 0,
                price: 0,
                crossPrice: 0,
                brand: '',
                discount: 0,
                title: '',
                description: '',
              });
            } else {
              // Handle errors if necessary
              console.error('Failed to create product');
            }
          } catch (error) {
            console.error('Error:', error);
          }
          navigate('/')
    };
    
    console.log(productData);
    return (
        <div className=''>
            <section className="bg-gray-100  dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                    <form onSubmit={handleSubmit} action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""
                                    value={productData.name} onChange={handleInputChange} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="slug" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                                <input type="text" name="slug" id="slug" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type slug" required=""
                                    value={productData.slug} onChange={handleInputChange} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image 1</label>
                                <input type="text" name="0" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Link of image 1" required=""
                                value={productData.image[0]||''} onChange={handleImageInputChange} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image 2</label>
                                <input type="text" name="1" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Link of image 2" required="" 
                                value={productData.image[1]||''} onChange={handleImageInputChange}/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image 3</label>
                                <input type="text" name="2" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Link of image 3" required="" 
                                value={productData.image[2]||''} onChange={handleImageInputChange}/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image 4</label>
                                <input type="text" name="3" id="image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Link of image 4" required=""
                                value={productData.image[3]||''} onChange={handleImageInputChange} />
                            </div>
                            <div className="w-full">
                                <label htmlFor="countInStock" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                                <input type="number" name="countInStock" id="countInStock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="10" required=""
                                 value={productData.countInStock} onChange={handleInputChange} /> 
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""
                                 value={productData.brand} onChange={handleInputChange} /> 
                            </div>
                            <div className="w-full">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required=""
                                  value={productData.price} onChange={handleInputChange} />
                            </div>

                            <div className="w-full">
                                <label htmlFor="crossPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Actual Price</label>
                                <input type="number" name="crossPrice" id="crossPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" 
                                  value={productData.crossPrice} onChange={handleInputChange}/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <input type="text" name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product category" required=""
                                 value={productData.category} onChange={handleInputChange} /> 
                            </div>
                            <div>
                                <label htmlFor="discount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount</label>
                                <input type="number" name="discount" id="discount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="5" required=""
                                 value={productData.discount} onChange={handleInputChange} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Title" required="" value={productData.title} onChange={handleInputChange} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea  id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name='description' placeholder="Your description here"  value={productData.description} onChange={handleInputChange}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add product
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Dashboard
