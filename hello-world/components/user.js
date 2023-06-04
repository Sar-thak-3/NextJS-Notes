export default function User({user}) {
  return (
    <>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </>
  )
}