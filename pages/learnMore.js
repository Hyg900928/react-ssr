import React, { useEffect, useState } from "react";
import Head from "next/head";
import { inject, observer } from "mobx-react";




class Login {
  constructor(userName, password) {
    const PASSWORD = Symbol('password')
    this.userName = userName;
    this[PASSWORD] = password;
    this[PASSWORD] = userName;
  }
  
}

const login = new Login('admin', '123456')
console.log(Object.getOwnPropertySymbols(login)[0])
const key = Object.getOwnPropertySymbols(login)[0]
login[key] = '890'
console.log(login)
console.log(login[key])

const LearnMore = props => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("222");
    document.title = `you clicked ${count} tiems`;
  });
  // 1. Use the name state variable
  const [name, setName] = useState("Mary");

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem("formData", name);
  });

  // 3. Use the surname state variable
  const [surname, setSurname] = useState("Poppins");

  // 4. Use an effect for updating the title
  useEffect(function updateTitle() {
    document.title = name + " " + surname;
  });

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Num++</button>
      <p>num: {num}</p>
      <button onClick={() => setCount(count + 1)}>count++</button>
      <p>cont: {count}</p>
    </div>
  );
};

export default LearnMore;
