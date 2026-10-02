async function getjob()
{
    const response = await 
    fetch 
    ( 
        "http://localhost:8000/api/v1/job/get"
    );

    const data = await response.json();
    console.log(data);
}
getjob();