import React, { useState } from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import { createOrder } from '../../Firebase/fireBaseConfig'
import './formStyles.css'
import { CartResumeForm } from './CartResumeForm'
import {useNavigate} from 'react-router-dom'
import { successfullyCheckout, validateFields } from '../../Functions/popupFunctions'
import Swal from 'sweetalert2'

export const Form = () => {
    const [user, setUser] = useState({});

    const [validEmail, setValidEmail]=useState(false)
    const [validName, setValidName]=useState(false)
    const [validTel, setValidTel]=useState(false)

    const { cart, clearCart} = useCartContext();
    const navigate= useNavigate();

    function successfullyCheckout(order){
        Swal.fire({
            title: "Orden creada con éxito",
            text: `Su numero de seguimiento es: ${order}`,
            icon: "success",
            confirmButtonText: `OK`
          }).then((result)=>{
            if(result.isConfirmed){
                navigate('/');
                clearCart();
            }
            else{
                navigate('/');
                clearCart();
            }
          })
    }


    const handleInput = ({ target }) => {
        setUser(currentValue => {
            currentValue[target.name] = target.value
            return currentValue
        })
    }

    const total= cart.reduce((acc, current) => acc + current.qty * current.price, 0)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!validEmail || !validName || !validTel){
            validateFields()
        }
        else{
            const buy = { cart, user }
            const order = await createOrder(buy)
            successfullyCheckout(order);
        }
    }


    return (
        <div className='form-container'>
            <form onSubmit={(event) => handleSubmit(event)} className='form'>
                <div className='group-container'>
                    <p>Email</p>
                    <input
                        type="email"
                        name='email'
                        placeholder="example@hotmail.com"
                        onChange={(e)=>{
                            handleInput(e)
                            setValidEmail(true)
                        }}
                        value={user.email}
                    />
                </div>

                <div className='group-container'>
                    <p>Nombre y apellido</p>
                    <input
                        type="text"
                        name='username'
                        placeholder="Some Example"
                        onChange={(e)=>{
                            handleInput(e)
                            setValidName(true)
                        }}
                        value={user.username}
                    />
                </div>

                <div className='group-container'>
                    <p>Numero de telefono</p>
                    <input
                        type="text"
                        name='tel'
                        placeholder="11-4455-5544"
                        onChange={(e)=>{
                            handleInput(e)
                            setValidTel(true)
                        }}
                        value={user.tel}
                    />
                </div>

                <div className='group-container'>
                    <button type="submit">
                        Confirmar la compra
                    </button>
                </div>

                <div className='cart-resume'>
                    {
                        cart.map((prod) => {
                            return (
                                <>
                                    <CartResumeForm key={prod.id + Math.random(36)} product={prod} />
                                </>
                            )
                        })
                    }
                    <div>
                        <span>PRECIO FINAL: ${total}</span>
                    </div>
                </div>
            </form>
        </div>

    )
}
