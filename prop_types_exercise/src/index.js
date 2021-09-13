import React,{props} from 'react';
import ReactDOM from 'react-dom';
import Stamp from './images/stamp.png';
import './index.css';


function AddressLabel({data}) {
  return (
    <div className="address-label">
      <FullName text={data.name} />
      <Address address={data.address} />
      <City city={data.city}/><Postal postal={data.postal}/>
      
    </div>
  );
}

//......*******........

var toPerson ={
    name: "Alex Dave",
    address: "123 Fake St.",
    city: "Bostan,",
    postal: "MA 02118"
}
  
var fromPerson ={
  name: "Alexia Daves",
  address: "321 ekaf Ts.",
  city: "Norwich,",
  postal: "MA 02778"
}

function FullName({text}){
  return <div className="fullName">{text}</div>
}

function Address({address}) {
  return <div className="address">{address}</div>
}
function City({city}) {
  return <div className="city">{city}</div>
}
function Postal({postal}) {
  return <div className="postal">{postal}</div>
}

function Envelop({data}) {
  return (
    <div className="envelop">
      <div className="to-person"><AddressLabel data={toPerson}/></div>
      <div className="from-person"><AddressLabel data={fromPerson} /></div>
      <Image className="stamp-image"/>
    </div>
  );  
  
}
function Image() {
  return (
    <div><img src={Stamp} /></div>
  )
}



ReactDOM.render(
  <Envelop data={toPerson,fromPerson}/>,
  document.getElementById('root')
);

