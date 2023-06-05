import Image from "next/image"

export default function Tuts(){
    return (
        <>
            <div>
                <Image src={`/revalidation.png`} blurDataURL="https://github.com" alt="" width='240' height='240' />
            </div>
        </>
    )
}