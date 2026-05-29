import { useSearchParams } from 'react-router-dom'
import Products from '../components/ProductList';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword')
    console.log("SEARCH", keyword)
  return (
    <>
    <Products searchKey={keyword} />
    </>
  )
}

export default SearchPage