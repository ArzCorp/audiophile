import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import ProductCard from 'components/product-card'

export default function ProductList() {
  const [product, setProduct] = useState([])
  const Router = useRouter()

  const getData = async () => {
    const product = Router.asPath
    const url =
      window.location.origin === 'http://localhost:3000'
        ? 'http://localhost:3000/api'
        : 'https://planets-fact.vercel.app/api/'
    const request = await fetch(url + product)
    const response = await request.json()
    setProduct(response)
  }

  const renderProduct = () =>
    product.map((product) => <ProductCard key={product.id} product={product} />)

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="py-64">
      <div>{renderProduct()}</div>
    </section>
  )
}