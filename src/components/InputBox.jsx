import React from 'react'

function InputBox( {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "",
    amountDisble = false,
    CurruncyDisble = false,
    className = "",
    
}){

    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>
                <input className='outline-none w-full bg-transparent py-1.5' type="number"
                 placeholder='amount'
                 disabled={amountDisble}
                 value={amount} onChange={(e) => onAmountChange && onAmountChange( Number(e.target.value))} />
            </div>
            
        </div>
    )
}
export default InputBox