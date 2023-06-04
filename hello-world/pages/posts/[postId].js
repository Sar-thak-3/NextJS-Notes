import { useRouter } from "next/router";

export default function Post({post}) {
  const router = useRouter();

  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>{post.id}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export async function getStaticPaths(){
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // // const data1 = data.slice(0,3)

  // const paths = data.map(post => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     }
  //   }
  // })
  // return {
  //   paths,
  //   fallback: true,
  // }
  return {
    paths: [
      {
        params: {postId: '1'},
      },
      {
        params: {postId: '2'}
      },
      {
        params: {postId: '3'},
      }
    ],
    fallback: true,
  }
}

export async function getStaticProps(context){
  const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
      return {
        notfound: true
      }
    }

    console.log(`getStaticProps is generating new page, ${params.postId}`);

    return {
        props: {
            post: data,
        }
    }
}