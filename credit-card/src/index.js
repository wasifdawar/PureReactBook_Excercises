import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function CreditCard({data}) {
  return (
    <div className="main-body">
      <div className="credit-card">
      <BankName className="bank-name" bankname={data.bankname} />
      <CardNumber className="cardnumber" cardnumber={data.cardnumber} />
      <CardPin className="cardpin" cardpin={data.cardpin} />
       <div className="validThru">VALID<br/>THRU
      <ValidUpTo validupto={data.validupto} /></div>
      <CardHolder className="cardholder" cardholder={data.cardholder}/>
      </div>
      </div>

  );
}

const bankdata = {
  bankname: "Big Bank, Inc.",
  cardnumber: "1234 5678 8765 4321",
  cardpin: "1234",
  validupto: "08/19",
  cardholder: "CARDHOLDER NAME"
}

function BankName({bankname}) {
  return (
    <div className="bank-name"><h1>{bankname}</h1></div>
  );
}
function CardNumber({cardnumber}) {
  return (
    <div><h2>{cardnumber}</h2></div>
  );
}

function CardPin({cardpin}) {
  return (
    <div>{cardpin}</div>
  );
}

function ValidUpTo({validupto}) {
  return (
    <div><h3>{validupto}</h3></div>
  );
}

function CardHolder({cardholder}) {
  return (
    <div><h2>{cardholder}</h2></div>
  );
}


ReactDOM.render(
  <CreditCard data={bankdata}/>,
  document.getElementById('root')
);
