
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",event);


    var unIndexed_array = $(this).serializeArray();
    var data = {}

    $.map(unIndexed_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:4000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})



const getData= async (id)=>{
    
    // console.log("id---->>>>>",id)
    const url= `/api/users/${id}`

    await fetch(url)
    .then((res)=>{
        return res.json()
    }).then((res)=>{
        // console.log("get user data---->>>", res)
        const userData=res;
    
    }).catch((err)=>{
        console.log("user get error---->>>", err)
    })
   
}

const deleteData=(id)=>{
    if(window.location.pathname == "/"){
    
        var request = {
            "url" : `http://localhost:4000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you want to delete this record?..")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    }
}