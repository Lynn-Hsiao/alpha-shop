import styles from './Cart.module.css'
import { ReactComponent as Plus } from '../../icons/plus.svg'
import { ReactComponent as Minus } from '../../icons/minus.svg'

const cartItem = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const totalPrice = cartItem.reduce((accumulator, item) => {
  const itemTotalPrice = item.price * item.quantity;
  return accumulator + itemTotalPrice;
}, 0)

function Product () {
  return (
    <>
    {cartItem.map(item => (
      <div className={styles.productContainer} data-count="0" data-price={item.price} key={item.id}>
      <img className={styles.imgContainer} src={item.img} alt={item.name}/>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <Minus className={styles.minus} />
            <span className={styles.productCount}>{item.quantity}</span>
            <Plus className={styles.plus} />
          </div>
        </div>
        <div className={styles.productPrice}>${item.price}</div>
      </div>
      </div>
      ))
    }
    </>
  )
}

function Cart () {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <section className={styles.productList} data-total-price={totalPrice}>
        <Product/>
      </section>

      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>運費</div>
        <div className={styles.productInfoPrice}>免費</div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.productInfoText}>小計</div>
        <div className={styles.productInfoPrice}>${totalPrice}</div>
      </section>
    </section>
  )
}

export default Cart;

// 原始CartItem資料
// <div className={styles.productContainer} data-count="0" data-price="3999">
//   <img className={styles.imgContainer} src="/images/product-1.jpg" alt="product-1"/>
//   <div className={styles.productInfo}>
//     <div className={styles.productName}>破壞補丁修身牛仔褲</div>
//     <div className={styles.productControlContainer}>
//       <div className={styles.productControl}>
//         <Minus className={styles.minus} />
//         <span className={styles.productCount}>1</span>
//         <Plus className={styles.plus} />
//       </div>
//     </div>
//     <div className={styles.productPrice}>$3,999</div>
//   </div>
// </div>
// <div className={styles.productContainer} data-count="0" data-price="1299">
//   <img className={styles.imgContainer} src="/images/product-2.jpg" alt="product-2" />
//   <div className={styles.productInfo}>
//     <div className={styles.productName}>刷色直筒牛仔褲</div>
//     <div className={styles.productControlContainer}>
//       <div className={styles.productControl}>
//         <Minus className={styles.minus} />
//         <span className={styles.productCount}>1</span>
//         <Plus className={styles.plus} />
//       </div>
//     </div>
//     <div className={styles.productPrice}>$1,299</div>
//   </div>
// </div>