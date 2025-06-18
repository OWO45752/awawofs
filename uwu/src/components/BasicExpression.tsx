import React from 'react'

const BasicExpression = () => {
    const [name, day, month] = ["Anon", 21, 1]

  return (
    <div>
        <h1>My Name is {name}</h1>
        <p>day + month {day + month}</p>
    </div>
  )
}

export default BasicExpression
