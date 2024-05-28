import { useId } from "react";


function InputBox({label,amount,onAmountChange,onCurrencyChange,currencyOptions =[],selectCurrency = "usd" }){
    const amountInputId = useId()
    return(
        <div className= "bg-white p-3 rounded-full text-sm flex" >
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 ml-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 ml-2"
                    type="number"
                    placeholder="Amount"
                   
                    value={amount}
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(event) => onCurrencyChange && onCurrencyChange(event.target.value)}
                    
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    )
}

export default InputBox