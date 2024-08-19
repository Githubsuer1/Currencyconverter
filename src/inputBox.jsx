import React, { useState } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency,

}) => {

  return (
    <div className='w-full max-w-md p-5 bg-white/40 rounded flex flex-col justify-between sm:flex-row'>

        <h1 className='text-center font-bold text-white bg-gray-700 '>Currency Converter</h1>

        <div className='flex flex-col gap-2'>
            <label htmlFor="">{label}</label>
            <input 
                type="number" 
                value={amount} 
                className='rounded p-1.5 outline-none'
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="option">Type</label>
            <select 
                id="option" 
                className='p-1.5 rounded outline-none' 
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                value={selectCurrency}
            >   
            {
                currencyOptions.map((currency)=>(
                    <option className='hover:bg-blue-500' value={currency} key={currency}>{currency}</option>
                ))
            }
                
            </select>
        </div>
    </div>
  )
}

export default InputBox