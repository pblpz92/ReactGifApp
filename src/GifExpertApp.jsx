import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Magic Johnson', 'Larry Bird']);

    const onAddCategory = (newCategory) => {     
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }
    }

    return (
        <>            
            <h1>GifExpertApp</h1>
          
            <AddCategory setCategories = { category => onAddCategory(category)}/>

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            category={category} 
                            key={category}
                        />
                    ))
                }                    
            </ol>
        </>
    )
}
