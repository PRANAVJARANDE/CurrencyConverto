import { useCallback, useEffect, useState } from 'react'
function App() {
  const [ans, setAns] = useState(0);
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [data,setdata]=useState({});

  let changedata=useCallback(function(){
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${from}.json`)
    .then(function(response){
        let data=response.json();
        return data;
    })
    .then(function(data){
      setdata(data[from]);
      return data;
    })
  },[from,setdata]);

  useEffect(function(){
    changedata();
  },[from,changedata]);

  useEffect(function(){
      setAns(data[to]*amount);
  },[from,to,amount]);

  return (
    <>
      <div id="box">
        <div id="l1">

          <div>
            From<br/>
            <input id="tarea" type="text" value={amount || ""} onChange={function(e){
              setAmount(e.target.value);
            }}/>
          </div>

          <div id="ct">
            Currency Type<br/><select value={from.toUpperCase()} onChange={function(e){
              setFrom(e.target.value.toLowerCase());
            }}>
            <option>AUD</option>
            <option>BRL</option>
            <option>CAD</option>
            <option>CHF</option>
            <option>CNY</option>
            <option>CZK</option>
            <option>DKK</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>HKD</option>
            <option>HUF</option>
            <option>IDR</option>
            <option>ILS</option>
            <option>INR</option>
            <option>JPY</option>
            <option>KRW</option>
            <option>MXN</option>
            <option>MYR</option>
            <option>NOK</option>
            <option>NZD</option>
            <option>PHP</option>
            <option>PLN</option>
            <option>RUB</option>
            <option>SEK</option>
            <option>SGD</option>
            <option>THB</option>
            <option>TRY</option>
            <option>TWD</option>
            <option>USD</option>
            <option>ZAR</option>
            </select>
          </div>
        </div>
        <button id="swap" onClick={function(){
          setAmount(ans);
        }}>Swap</button>
        <div id="l2">

            <div>
              To<br/>
              <input id="tarea" type="text" value={ans || ""} onChange={function(e){
                  setAns(e.target.value);
              }}/>
            </div>

            <div id="ct">
            Currency Type<br/>
            <select value={to.toUpperCase()} onChange={function(e){
                setTo(e.target.value.toLowerCase());
              }}>
                <option>AUD</option>
                <option>BRL</option>
                <option>CAD</option>
                <option>CHF</option>
                <option>CNY</option>
                <option>CZK</option>
                <option>DKK</option>
                <option>EUR</option>
                <option>GBP</option>
                <option>HKD</option>
                <option>HUF</option>
                <option>IDR</option>
                <option>ILS</option>
                <option>INR</option>
                <option>JPY</option>
                <option>KRW</option>
                <option>MXN</option>
                <option>MYR</option>
                <option>NOK</option>
                <option>NZD</option>
                <option>PHP</option>
                <option>PLN</option>
                <option>RUB</option>
                <option>SEK</option>
                <option>SGD</option>
                <option>THB</option>
                <option>TRY</option>
                <option>TWD</option>
                <option>USD</option>
                <option>ZAR</option>
              </select>
            </div>
        </div>

        <div id="l3">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
        </div>       
      </div>
    </>
  )
}

export default App
