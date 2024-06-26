import axios from 'axios'


const site_url=`https://aboba-back.onrender.com/aboba`

export async function createFileReq(sp,string){
    try{
        const res=await axios.post(`${site_url}/file/`,{
            data:string,
            specialId:sp
        })
    }catch(e){
        console.log(e)
    }
}

export async function getFileReq(id,setFunc,setIsLoading){
    try{
        setIsLoading(true)
        const strId=id.toString()
        const res=await axios.get(`${site_url}/file/${strId}`)
        setFunc(res.data)
        setIsLoading(false)
    }catch(e){
        console.log(e)
    }
}

export async function deleteFileReq(id){
    try{
        const res=await axios.delete(`${site_url}/file/${id}`)
    }catch(e){
        console.log(e)
    }
}

//https://aboba-back.onrender.com/aboba