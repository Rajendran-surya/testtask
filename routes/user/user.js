module.exports=(db,req_info,data,g_response_data){

 let url ='user'
    let v_InTD ={
        "title": "Finish interview",
        "priority": "high",
        "status":""
    }
 let v_response_data = await test_curl(db,url,v_InTD)

if((v_response_data && v_response_data.status === 'OK')){
     
   let g_response_data = array(
        status=>"success",
        data=>v_response_data.data
    );

}

function test_curl (db,url,payload){
   await axios.post(url,json.stringfy(payload)).then(response)=>return data.catch(error)=>console.log(error);

}

}