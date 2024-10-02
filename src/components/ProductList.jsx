import React from 'react'
import { useDispatch, useSelector } from 'react-redux'



const ProductList = () => {

    const dispatch = useDispatch()

    const { products } = useSelector((store) => store.product)
    console.log(products)

    useEffect(() => {

        dispatch(getAllProducts())

    }, [])


    return (
        <div>

        </div>
    )
}

export default ProductList
