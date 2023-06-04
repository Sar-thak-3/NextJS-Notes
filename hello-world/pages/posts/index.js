import Link from "next/link";

function PostList({posts}){
    return (
        <>
        <h1>List of posts</h1>
        {
            posts.map((post)=>{
                return(
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`}>
                        <h2>{post.id}</h2>
                        <p>{post.title}</p>
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
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data,
        }
    }
}