import { comments } from "@/data/comments"

export default function Comment({comment}){
    return (
        <div>
            {comment.id} {comment.text}
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {commentId: '1'}},
            {params: {commentId: '2'}},
            {params: {commentId: '3'}}
        ],
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context;
    const {commentId} = params;
    let comment = comments.find((coment)=>{
        coment.id===parseInt(commentId);
    }) 

    // const response = await fetch(`http://localhost:3000/api/comments/${commentId}`)
    // const data = await response.json();

    console.log(comment);

    if(!comment){
        return {
            props: {
                comment: {
                    id: 434,
                    text: "dsvjbdfj",
                }
            }
        }
    }

    return {
        props: {
            comment: comment,
        },
    }
}