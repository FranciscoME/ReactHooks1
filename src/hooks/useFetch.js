import React,{useState,useEffect,useRef} from 'react'

export const useFetch = (url) => {    

    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data:null,
        loading:true,
        error:null
    });

    useEffect(()=>{
        return ()=>{
            isMounted.current=false;
        }
    },[])

    useEffect(() => {

        //Para que al cargar una nueva quote se muestre 'loading..'
        setState({data:null,loading:true,error:null})

       fetch(url)
       .then(resp=>{
           return resp.json();
       })
       .then(data=>{

            setTimeout(() => {//Este setTimeOut es solo para ilustrar el error de montado y desmontado de componentes

                if(isMounted.current){
                    setState({
                        loading:false,
                        error:null,
                        data:data
         
                    })
                }
                else{
                    console.log('setState no se llamo')
                }               
                
            }, 2000);

           


       });
    }, [url])

    return state;

}
