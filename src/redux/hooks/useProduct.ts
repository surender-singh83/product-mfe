import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store'
import { fetchProductData } from '../features/product/productSlice'

const useProduct = () => {
    const product = useSelector((state: RootState) => state.product.products.product)
    const total = useSelector((state: RootState) => state.product.products.total)
    console.log('PRODUCTTTTT', product)
    const dispatch = useDispatch<AppDispatch>()
  return {
    total,
    product,
    getProduct: (searchKey:string | null | undefined, count:number) => {
      
        dispatch(fetchProductData({ searchKey, count }))
    }
  }
    
}

export default useProduct;