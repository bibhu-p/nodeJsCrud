

$("#add_user").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_user").submit(function(event){
    event.preventDefault();
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<",event);

    

    // var unIndexed_array = $(this).serializeArray();
    // var data = {}

    // $.map(unIndexed_array, function(n, i){
    //     data[n['name']] = n['value']
    // })


    // var request = {
    //     "url" : `http://localhost:3000/api/users/${data.id}`,
    //     "method" : "PUT",
    //     "data" : data
    // }

    // $.ajax(request).done(function(response){
    //     alert("Data Updated Successfully!");
    // })

})

// if(window.location.pathname == "/"){
//     $onDelete = $(".table tbody td a.delete");
//     $onDelete.click(function(){
//         var id = $(this).attr("data-id")

//         var request = {
//             "url" : `http://localhost:3000/api/users/${id}`,
//             "method" : "DELETE"
//         }

//         if(confirm("Do you want to delete this record?..")){
//             $.ajax(request).done(function(response){
//                 alert("Data Deleted Successfully!");
//                 location.reload();
//             })
//         }

//     })
// }

const showData=()=>{
    console.log("<----------------------");
}

