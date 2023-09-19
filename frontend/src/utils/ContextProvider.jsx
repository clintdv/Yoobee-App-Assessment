import  { createContext, useState, useContext } from 'react'
import {PropTypes} from 'prop-types'
const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [state, setState] = useState(true)
  const [renderSection, setRenderSection] = useState('true')
  const [myCart, setMyCart] = useState([])
  const [total, setTotal] = useState(0)

  const addToCart = (product) => {
    // setMyCart([...myCart, product])
    const index = myCart.findIndex((item) => item._id === product._id)
    if (index >= 0) {
      let newCart = [...myCart]
      newCart[index].quantity += 1
      setMyCart(newCart)
    } else {
      setMyCart([...myCart, { ...product, quantity: 1 }])
    }

  }
  const removeFromCart = (product) => {
    setMyCart(myCart.filter((item) => item._id !== product._id))
  }
  const removeSingleItem = (product) => {
    //check item quantity
    if (product.quantity > 1) {
      let newCart = [...myCart]
      const index = myCart.findIndex((item) => item._id === product._id)
      newCart[index].quantity -= 1
      setMyCart(newCart)
      return
    }
    const index = myCart.findIndex((item) => item._id === product._id)
    let newCart = [...myCart]
    if (index >= 0) {
      newCart.splice(index, 1)
    } else {
      console.warn(
        `Can't remove product (id: ${product._id}) as its not in the cart!`
      )
    }
    setMyCart(newCart)
  }

  const clearCart = () => {
    setMyCart([])
  }
  const toggleCart = () => {
    setState(!state)
  }
  const getTotal = () => {
    let total = myCart.reduce((acc, curr) => {
      return acc + curr.sellingPrice * curr.quantity
    }, 0)
    total = parseFloat(total.toFixed(2))
    setTotal(total)
    return total
  }



  return (
    <Context.Provider
      value={{
        state,
        setState,
        renderSection,
        setRenderSection,
        myCart,
        setMyCart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        setTotal,
        getTotal,
        toggleCart,
        removeSingleItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useGlobalContext = () => useContext(Context)
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
