import React, { useState } from 'react'
import random from 'random-string-generator'




function Input() {

  const [rvalue, setRvalue] = useState(8)
  const [nvalue, setNvalue] = useState(false)
  const [svalue, setSvalue] = useState(false)

  function calculator(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+=_-"
    let result = ""
    let sum = 0
    for(let i=0; i<Number(rvalue); i++){
        sum += (Math.floor(Math.random()*characters.length))
        result += characters[sum]
        sum=0
    }
    return result 
}

function scalculator(){
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()+=_-"
  let result = ""
  let sum = 0
  for(let i=0; i<Number(rvalue); i++){
      sum += (Math.floor(Math.random()*characters.length))
      result += characters[sum]
      sum=0
  }
  return result
}

  function state(e) {
    const input = document.getElementById("inputField")
    const v = e.target.value //slider
    setRvalue(v)
    const b = Number(v)
      if(nvalue==false && svalue!=false){
        input.value = scalculator()
      }
      else if(nvalue!=false && svalue!=false)
      {
        input.value = calculator()
      }
      else if(nvalue!=false && svalue==false)
      {
        input.value = random(Number(rvalue), "alphanumeric")
      }

      else{
        input.value = random(b, "lower")
      }
  } 

  function spl(){
     
    setSvalue(!svalue)
    const input = document.getElementById("inputField")
     if(svalue ==false)
     {
      input.value = random(Number(rvalue), "lower")
     }
     else if(svalue ==true){
      input.value = scalculator()
     
     }
     else{
      input.value = random(Number(rvalue), "alphanumeric")
     }
  }


  function num(){
     
      setNvalue(!nvalue)
      const input = document.getElementById("inputField")
      const b = Number(rvalue)
      if(nvalue ==false)
        {
         input.value = random(b, "lower")
        }
        else if(nvalue ==true){
         input.value = random(b, "alphanumeric")
        }
        else{
         input.value = calculator()
        }
  }
  

  function i() {
    const input = document.getElementById("inputField")
    const b = Number(rvalue)
    if(nvalue  && !svalue)
    {
      input.value = random(b, "alphanumeric")
    }
    else if(!nvalue && svalue){
      input.value = calculator()
    }
    else if(nvalue==true && svalue==true)
    {
      input.value = scalculator()
    }
    else{
      input.value = random(b, "lower")
    }

  }

  return (
    <div className='flex flex-col gap-20'>
    <p className='text-4xl font-bold text-purple-900'>RANDOM PASSWORD GENERATOR</p>
    <div className='h-40 w-96 flex flex-col gap-4'>
      
      <div>
        <label htmlFor="inputField" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Password</label>
        <input type="text" id="inputField" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 cursor-pointer" onClick={i} />
      </div>
      <div className='flex justify-center gap-4'>
        <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={spl}/>
          <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Special Characters</label>
        </div>
        <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"  onChange={num}/>
          <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numbers</label>
        </div>
        <div>
          <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" ></label>
          <input id="default-range" type="range" min="8" max="20" defaultValue="8"  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={state} />
          <p>{rvalue}</p>
        </div>
      </div>


    </div>
    </div>
  )
}

export default Input