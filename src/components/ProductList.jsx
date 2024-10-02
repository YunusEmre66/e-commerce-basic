import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';

function ProductList() { //! tüm ürünleri getirme işlemi 

    const dispatch = useDispatch(); //! fonksiyonları kullanabilmek için
    const { products } = useSelector((store) => store.product); //! initialstate deki productları getiriyoruz, data bunun içinde, statelerı yakalamak için useselecktor kullanılıyor
    console.log(products)

    useEffect(() => { //! sayfa yüklendiğinde tüm ürünleri getir
        dispatch(getAllProducts())  
    }, [])
    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '25px' }}>
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList