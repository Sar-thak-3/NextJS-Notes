import Link from "next/link";

function PostList({products}){
    return (
        <>
        <h1>List of PRODUCTS</h1>
        {
            products.map((product)=>{
                return(
                    <div key={product.id}>
                        <Link href={`products/${product.id}`}>
                        <h2>{product.id}</h2>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        </Link>
                    </div>
                )
            })
        }
        </>
    )
}

export default PostList;

export async function getStaticProps(){
    console.log("Generating or regeneratinf product list")

    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();


    return {
        props: {
            products: data,
        },
        revalidate: 10, // revalidate every 10s this product list page
    }
}