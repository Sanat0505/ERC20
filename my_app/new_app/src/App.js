import './App.css';
import React, { useState, useEffect } from 'react';
import { ERC20_ABI, ADDRESS } from './config';
import FetchTransactions from './FetchTransactions';
import GetTransactions from './GetTransactions';
// import Button from '@material-ui/core/Button';
const { ethers } = require("ethers");

export default function App() {
  const [account, setAccount] = useState("");
  const [hashes, setHash] = useState([]);
  const [from, setFrom] = useState([]); 
  const [to, setTo] = useState([]);
  const [val, setValue] = useState([]);
  const [method, setEvent] = useState([]);
  const [contract, setContract] = useState("");

  const _hashes = new Set();
  const _from = new Set();
  const _to = new Set();
  const _values = new Set();
  const _events = new Set();

  async function loadBlockchainData() {

    await window.ethereum.enable();
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const account = await signer.getAddress();
    setAccount(account)

    const erc20 = new ethers.Contract(contract, ERC20_ABI, provider);
    const logs = await erc20.queryFilter("Transfer")

    for (let i = logs.length - 1 ; i >= 0 ; i--) {
      const log = logs[i];
      const tx = (await log.getTransaction());
      // console.log(tx)
      const _hash = tx.hash
      const _fromTx = tx.from
      const _toTx = tx.to
      // const _value = ((tx.gasPrice._hex) * (tx.gasLimit._hex))/ 10 ** 18
      const _value = tx.gasPrice.mul(tx.gasLimit).toString() //multiplication of BigNumber
   
      const _event = log.event;
      _events.add(_event);

      _hashes.add(_hash);
      _from.add(_fromTx);
      _to.add(_toTx);
      _values.add(ethers.utils.formatEther(_value));

    }
    setHash(Array.from(_hashes));
    setFrom(Array.from(_from));
    setTo(Array.from(_to));
    setValue(Array.from(_values));
    // console.log(_values)
    setEvent(Array.from(_events));
  }

  //setting up contract address
  const setcontract = (address)=>{
    setContract(address);
  }

  useEffect(() => {
    loadBlockchainData();
  }, [contract])

  return (
    <div style={{ margin: 0, display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "black", background: "lightgrey",border: 10, margin:3,padding:0}}>
        <h3>ERC-20 EVENTS</h3><br/>
        <h4>Your account is : {account}</h4>
      </div>
      <FetchTransactions hashe={hashes} events={method} from={from} to={to} value={val} />
      <GetTransactions contract={setcontract}/>
    </div>
  );
}
