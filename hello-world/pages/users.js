import User from '../components/user'

export default function userList({users}) {
  return (
    <>
    <h1>List of users</h1>
        {users.map((user)=>{
            return (
                <User key={user.id} user={user}></User>
            )
    })}
    </>
  )
}

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    return {
        props: {
            users: data,
        },
    };
}