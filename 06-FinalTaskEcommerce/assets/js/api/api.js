export const getData = async() => {
    // const res = await axios("https://fakestoreapi.com/products");
    const res = await axios("http://localhost:3001/products");
    const data = await res.data;

    return data;
};

// getData().then((data) => {
//     console.log(data);
// });
    