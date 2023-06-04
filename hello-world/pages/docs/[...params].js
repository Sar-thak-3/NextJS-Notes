import { useRouter } from "next/router"

export default function Doc() {
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);
    if(params.length === 2){
        return(
            <h1>Docs fi featires</h1>
        )
    }
    else if(params.length === 1){
        return (
            <h1>dsbjdbvd</h1>
        )
    }
  return (
    <div>Doc</div>
  )
}
