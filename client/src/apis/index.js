const fetchProducts = async ()=>{
    try
    {
        const products = await fetch("https://fakestoreapi.com/products");
        const json = await products.json();
        // console.log(json)
        return json;
    }
    catch (error)
    {
        return error.message;
    }
};
export default fetchProducts;