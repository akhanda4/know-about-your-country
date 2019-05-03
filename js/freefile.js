let x = document.getElementById('body-background');
let y=document.getElementById('wait-notice');
function reloadFunc(){
    setTimeout(function(){
        fetch(`https://api.nasa.gov/planetary/apod?api_key=77s2XbAUufzb2oqa388jyvHPBQ02FiTzkTy11ndc`)
            .then(res => res.json())
            .then(posts => x.setAttribute("background",posts.hdurl));
        y.remove();
    },3500);
    y.innerHTML="Please wait while Image loads";
}

function runScript(event) {

    let value = document.getElementById('scriptBox').value;
    let data1;
    if(event.keyCode === 13){
        setTimeout(function(){
            var result0,result1,result2,result3,result4;

            const x1 = fetch(`https://images-api.nasa.gov/search?q=` + value, {method: 'get'})
                .then(response => response.json())
                .then(function (data) {
                    let counter = 5;
                    for (let i = 0; i < 100 && counter > 0; i++) {
                        let str = data.collection.items[i].href;
                        if (str.includes("https://images-assets.nasa.gov/image/P")) {
                            counter--;
                            data1 += str;}
                    }

                    return data1;
                })
                .then(function(x1){
                    result0 = x1.substring(9, 70);
                    result1 = x1.substring(70,131);
                    result2 = x1.substring(131,192);
                    result3 = x1.substring(192,253);
                    result4 = x1.substring(253,314);
                    return fetch(result0)
                })
                .then(response => response.json())
                .catch(function (error) {
                    console.log('Request Failed' + error);
                })
                .then(function (data){
                    for(let i=0;i<4;i++){
                        let str1 = data[i];
                        if(str1.includes(".jpg")){
                            data1 = data[i];
                            break;
                        }
                    }
                    document.getElementById('img0').setAttribute('src',data1);
                    document.getElementById('img0').style.display = "";
                    return fetch(result1)
                })

                .then(response=>response.json())
                .catch(function (error) {
                    console.log('Request Failed' + error);
                })
                .then(function (data){
                    for(let i=0;i<4;i++){
                        let str1 = data[i];
                        if(str1.includes(".jpg")){
                            data1 = data[i];
                            break;
                        }
                    }

                    document.getElementById('img1').setAttribute('src',data1);
                    document.getElementById('img1').style.display = "";
                    return fetch(result2)
                })
                .then(response=>response.json())
                .catch(function (error) {
                    console.log('Request Failed' + error);
                })
                .then(function (data){
                    for(let i=0;i<4;i++){
                        let str1 = data[i];
                        if(str1.includes(".jpg")){
                            data1 = data[i];
                            break;
                        }
                    }

                    document.getElementById('img2').setAttribute('src',data1);
                    document.getElementById('img2').style.display = "";
                    return fetch(result3)
                })

                .then(response=>response.json())
                .catch(function (error) {
                    console.log('Request Failed' + error);
                })
                .then(function (data){
                    for(let i=0;i<4;i++){
                        let str1 = data[i];
                        if(str1.includes(".jpg")){
                            data1 = data[i];
                            break;
                        }
                    }

                    document.getElementById('img3').setAttribute('src',data1);
                    document.getElementById('img3').style.display = "";
                    return fetch(result4)
                })


                .then(response=>response.json())
                .catch(function (error) {
                     console.log('Request Failed' + error);
                })
                .then(function (data){
                    for(let i=0;i<4;i++){
                        let str1 = data[i];
                        if(str1.includes(".jpg")){
                            data1 = data[i];
                            break;
                        }
                    }

                    document.getElementById('img4').setAttribute('src',data1);
                    document.getElementById('img4').style.display = "";

                })
        },3000)
    }
}

