import React, { useState } from 'react'

function Search({ foodItems, setFoodItems }) {


    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {

        const foodsCopy = [...foodItems]   
        const searchQuery = e.target.value
        setSearchTerm(searchQuery)
        console.log(searchTerm)

        const filteredFood = foodsCopy.filter(() => {
            return foodItems.name.includes(searchTerm)
        })

        console.log(filteredFood)

      }; 

  return (
    <div>
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search