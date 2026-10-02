async function getjobs() 
{
 try{
     const response = await fetch(
      "http://localhost:8000/api/v1/job/get"
    );

    const data = await response.json();

    console.log(data);
 }
 catch (error)
 {
   
     console.log("Failed to get jobs");
    console.log(error);
 }

}
getjobs();