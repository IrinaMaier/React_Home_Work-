import React from 'react'

const RandomPharse = () => {
    const phrases = [ "Учись, пока другие спят!",
         "React — это весело!", 
         "Код — это поэзия.",
         "Ошибки — это ступеньки к успеху.",
          "Дорогу осилит идущий.", 
        ];
        const randomIndex= Math.floor(Math.random()*phrases.length)
        const randomPharse =phrases[randomIndex]
        console.log(randomPharse)
  
  
        return (
           
  )
}

export default RandomPharse