function test()
{
const httprequest = new XMLHttpRequest();

httprequest.open('GET','https://gitlab-cts.stackroute.in/api/v4/projects');

httprequest.setRequestHeader('Private-Token','9MqWigXM6srwS3mAFsoA');

httprequest.onreadystatechange=function()
{
    console.log("Status Code   "+httprequest.readyState);

    if(httprequest.readyState === XMLHttpRequest.DONE)
    {
        //console.log("Response   "+httprequest.response);
        const mydata = JSON.parse(httprequest.response);

        mydata.forEach(element => {
            console.log("Path   :"+element.path_with_namespace);  
            console.log("Issues Open   :"+element.open_issues_count);    
        });
    }
}

httprequest.send();
}

test();