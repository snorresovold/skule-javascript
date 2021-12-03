import React, {useState, useEffect} from 'react'

function RecipieList() {
    const [data, setData] = useState([])

    const fetchData = async () => {
    return await fetch("https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json")
        .then((response) => response.json())
        .then((x) => setData(x));}

    useEffect(() => {
        fetchData();
        }, []);

    return (
        <div>
            {data.map((x) =>
            <div>
                <p>{x.name}</p>
            </div>
            )}
        </div>
    )
}
export default RecipieList