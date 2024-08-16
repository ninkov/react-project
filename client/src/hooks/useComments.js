import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export  function useCreateComments() {
  const createHandler = (clientId, comment) =>
    commentsAPI.create(clientId, comment);

  return createHandler;
}

export function useGetAllComments(clientId){
const[comments,setComments]=useState([])

useEffect(()=>{

(async()=>{
    const result = await commentsAPI.getAll(clientId)
    setComments(result)
})()

},[clientId])
return [comments,setComments]
}