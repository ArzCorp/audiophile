import { useRouter } from 'next/dist/client/router'
import { URL_IMAGE } from '../services/path'

import Button from '@components/Button'
import InputAmount from '@components/InputAmount'

export default function ProductCard({
  isNew = false,
  reverse = false,
  addToCard = false,
  product = {},
}) {
  const { push } = useRouter()
  const NEW = isNew ? 'inline-block' : 'hidden'
  const DIRECTION = reverse ? 'flex-row-reverse' : ''
  const PADDING_IMAGE = reverse ? 'pr-32' : 'pl-32'

  const changeRoute = () => {
    push(`/product/${product.slug}`)
  }

  return (
    <article className={`${DIRECTION} flex items-center mb-40`}>
      <div className="w-7/12">
        <span className={`${NEW} text-orange-own text-sm tracking-2.5 mb-4`}>
          NEW PRODUCT
        </span>
        <h2 className="w-5/12 uppercase text-4xl font-bold mb-8">
          {product.name}
        </h2>
        <p className="w-7/12 text-sm text-black opacity-50 mb-10">
          {product.description}
        </p>
        <div className={addToCard ? 'hidden' : 'block'}>
          <Button solid={true} name="See Product" onClick={changeRoute} />
        </div>
        <div className={addToCard ? 'flex gap-8' : 'hidden'}>
          <InputAmount />
          <Button solid={true} name="ADD TO CART" onClick={changeRoute} />
        </div>
      </div>
      <div className="w-6/12">
        <img
          className={`${PADDING_IMAGE}`}
          src={URL_IMAGE + product.image?.desktop}
          alt={product.name}
        />
      </div>
    </article>
  )
}
