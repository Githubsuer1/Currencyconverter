import { useState } from 'react'
import InputBox from './inputBox'
import useCurrencyConverter from './useCurrencyConverter'


function App() {
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [amount,setAmount] = useState()
  const [convertedAmount,setConvertedAmount]  = useState()

  // getting the selected currency information from custom hook
  const currencyInfo = useCurrencyConverter(from)
  const options = Object.keys(currencyInfo)

  // swap options to swap the position of currencies.
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // method to convert the given currency to desired currency.
  const convert = ()=>{
      if(amount){
        setConvertedAmount(amount * currencyInfo[to])
      }
  }

  // handleSubmit method to handle the submission of the form
  const handleSubmit = (e)=>{
    e.preventDefault()
    convert();
  }
  return (
      <div className='w-full h-screen bg-cover bg-center p-5' 
        style={{backgroundImage:'url(https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
          
        <h1 className='text-center font-bold text-white bg-gray-700 py-1.5 sm:py-2.5 rounded'>Currency Converter</h1>

        <form onSubmit={handleSubmit}>
          <div className='p-5 w-full max-w-md mx-auto bg-transparent border-2 rounded mt-5'>

            <div className='w-full p-2.5'>
              <InputBox 
                label="From"
                amount={amount}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency)=>setFrom(currency)}
                currencyOptions = {options}
                selectCurrency={from}
              />
            </div>
            

            <button 
              type="button" 
              className='bg-blue-500 px-2.5 py-1 rounded text-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2'
              onClick={swap}
              >Swap
            </button>


            <div className='w-full p-2.5'>
              <InputBox 
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(currency)=>setTo(currency)}
                currencyOptions = {options}
                selectCurrency={to}
                />
            </div>
            

            <div className='w-full p-2.5'>
              <button 
                type='submit' 
                className='bg-blue-500 px-2.5 py-1 rounded text-white mx-auto w-full'
                onClick={convert}>
                Convert
              </button>
            </div>
            

          </div>
        </form>
      </div>
  )
}

export default App
