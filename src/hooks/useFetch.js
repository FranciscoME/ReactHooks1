import React,{useState,useEffect} from 'react'

export const useFetch = (url) => {    
    
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(() => {

        //Para que al cargar una nueva quote se muestre 'loading..'
        setState({data:null,loading:true,error:null})

       fetch(url)
       .then(resp=>{
           return resp.json();
       })
       .then(data=>{
           setState({
               loading:false,
               error:null,
               data:data

           })
       });
    }, [url])

    return state;

}
