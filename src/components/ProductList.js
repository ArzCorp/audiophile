import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { URL_API } from '../services/path'

import ProductCard from '@components/ProductCard'

export default function ProductList() {
  const [product, setProduct] = useState([])
  const { query } = useRouter()

  const getData = async () => {
    const product = query.id
    const request = await fetch(URL_API + product)
    const response = await request.json()

    setProduct(response)
  }

  const renderProduct = () =>
    product.map((product, key) => {
      const reverse = (key + 1) % 2 === 0

      return (
        <ProductCard
          key={product.id}
          product={product}
          reverse={reverse}
          isNew={reverse}
        />
      )
    })

  useEffect(() => {
    getData()
  }, [query])

  return (
    <section className="pt-40">
      <div className="w-10/12 2xl:w-8/12 mx-auto">{renderProduct()}</div>
    </section>
  )
}
