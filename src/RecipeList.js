import React from 'react'
import Recipe from './Recipe'

const RecipeList = ({ recipes }) => {
  return (
    <div>
   <div> 
        {recipes.map(recipe => {
           return (
            <Recipe 
                key={recipe.id}
                {...recipe} 
            />
           )
        })}
    </div>
    <button>Add Recipe</button>
    </div>
  )
}

export default RecipeList