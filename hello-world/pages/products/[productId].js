import { useRouter } from "next/router";

export default function Post({product}) {
  const router = useRouter();

  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{product.id}</h2>
      <p>{product.description}</p>
    </div>
  )
}

export async function getStaticPaths(){
  return {
    paths: [
      {
        params: {productId: '1'},
      },
    ],
    fallback: true,
  }
}

export async function getStaticProps(context){
  const {params} = context;
    const response = await fetch(`http://localhost:4000/products/${params.productId}`);
    const data = await response.json();

    if(!data.id){
      return {
        notfound: true
      }
    }

    console.log(`getStaticProps is generating new page, ${params.productId}`);

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}