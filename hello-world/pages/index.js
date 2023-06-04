import Link from "next/link";
import { useRouter } from "next/router";

function Index(){
    const router = useRouter();

    const handleClick = ()=>{
        console.log("pLACING ORDER")
        // router.push('/product')
        router.replace('/product')
    }

    return( 
    <>
        <h1>Home Page</h1>
        <Link href="/blog">Blog</Link>
        <Link href='/users'>USERS</Link>
        <Link href="/product">Products</Link>
        <Link href="/posts">Posts</Link>
        <button onClick={handleClick}>Place Holder</button>
    </>
    )
}

export default Index;