import InputBox from "./assets/components/Inputbox";
import useCurrencyInfo from "./assets/components/CurrencyInfo";
import { useState, useEffect } from "react";

function App() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState();
    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    useEffect(() => {
        if (amount && currencyInfo[to]) {
            convert();
        }
    }, [amount, from, to, currencyInfo]);

    return (
        <div
            className="w-full items-center h-screen flex flex-wrap justify-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/002/256/477/small/stock-and-graph-design-background-business-graph-banner-design-eps10-illustration-free-vector.jpg')`,
            }}
        >
            <div className="w-full " >
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-3xl p-5 backdrop-blur-sm bg-blue-300">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1 rounded-full">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5 mb-4">
                            <button
                                type="button"
                                className="rounded-3xl h-10 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white mt-2 bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="rounded-full w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className=" ml-28 justify-center items-center w-auto bg-blue-600 text-white px-4 py-3 rounded-full">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;

