import React, { useEffect, useState } from "react";

const TecajnaLista = () => {

    const [currencyRates, setCurrencyRates] = useState({});
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("EUR");

    useEffect(() => {
        fetch('https://api.frankfurter.dev/v1/latest?base=' + currency)
            .then(response => {
                return response.json();
            })
            .then(data => setCurrencyRates(data))
    }, [currency]);

    if (!currencyRates.rates) return <p>Učitavanje...</p>;

    return (
        <div className="container blog">
            <h1>Exchange rates</h1>
            <div>
            <select
          name="currency"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>

          {Object.keys(currencyRates.rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            {Object.keys(currencyRates.rates).map( currency => (
                <p key={currency}>
                    <strong>{currency} :</strong> {currencyRates.rates[currency] * amount}
                </p>
            ))}
            </div>
        </div>
    );
};

export default TecajnaLista;