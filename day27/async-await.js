

async function getdata(){
    let boldata = await fetch('https://restcountries.com/v3.1/all')
    let actualdata = await boldata.json()
    console.log(actualdata);
    
}
getdata()