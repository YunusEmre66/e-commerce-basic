import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './../redux/slices/productSlice';
import { useEffect } from 'react';



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
