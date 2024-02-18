import React from 'react'

const Procard = (props) => {
  return (


    <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 w-auto ">
        <div className="relative flex-none w-24 md:w-48">
            <img src={props.img} alt="shopping image" className="absolute inset-0 object-cover w-full h-full rounded-lg"/>
        </div>
        <form className="flex-auto p-6">
            <div className="flex flex-wrap">
                <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                    {props.title}
                </h1>
                <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                   Rs. {props.price}
                </div>
                <div className="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                    {props.categories}
                </div>
            </div>
           
                                <div className="flex mb-4 text-sm font-medium">
                                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Add Cart
                                    </button>
                                </div>
    
                                
                                
                            </form>
                        </div>
                        


  )
}

export default Procard






