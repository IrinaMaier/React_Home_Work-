import React from 'react'

const OrderStatus = ({orderId, status}) => {
  return (
    <div className="order-status">
        Заказ #{orderId}: {status}
    </div>
  )
}

export default OrderStatus