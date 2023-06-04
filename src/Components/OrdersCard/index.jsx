

import { ChevronRightIcon } from '@heroicons/react/24/solid'


const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props

return (
  <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4">
    <div className='flex justify-between w-full'>
      <p className="flex flex-col">
        <span className='font-light'>01.02.23</span>
        <span className='font-light'>{totalProducts} articles</span>

      </p>
      <p className='flex gap-2 items-center'>
        <span className='font-medium text-2xl'>${totalPrice}</span>
        <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
      </p>
    </div>
  </div>
)
}

export default OrdersCard