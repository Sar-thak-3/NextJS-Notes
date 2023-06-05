import { comments } from "@/data/comments";

export default function handler(req,res){
    if(req.method==="GET"){
        const {commentId} = req.query
        const comment = comments.find((comment)=>comment.id===parseInt(commentId))
        res.status(200).json(comment);
    }
    else if(req.method==="DELETE"){
        const {commentId} = req.query;
        const deletedcomment = comments.find((comment)=>comment.id===parseInt(commentId))
        const index = comments.findIndex((comment)=>{
            comment.id === parseInt(commentId)
        })
        comments.slice(index,1);
        res.status(200).json(deletedcomment);
    }
}