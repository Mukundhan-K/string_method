
let subbtn = document.getElementById('subbtn');

subbtn.onclick = () => {

    let sringg = document.getElementById('sringg').value;
    let inputt = document.getElementById('inputt');
    let startval = document.getElementById('startval').value;
    let endval = document.getElementById('endval').value;
    let str2 = document.getElementById('str2').value;
    let rs_span = document.getElementById('rs_span');
    let result = document.getElementById('result');


    console.log('hi');
    console.log(sringg);

    // option
    let optionn = inputt.options[inputt.selectedIndex].value;

    console.log(optionn);

    //  switch case
    let resstr = 0;

    switch (optionn) {

        case 'LENGTH':
            resstr = sringg.length;
            break;

        case 'SLCICE':
            resstr = sringg.slice(Number(startval), Number(endval));;
            break;

        case 'SUBSTRING':
            resstr = sringg.substring(Number(startval), Number(endval));;
            break;

        case 'SUBSTR':
            resstr = sringg.substr(Number(startval), Number(endval));;
            break;

        case 'SUBSTRING':
            resstr = sringg.substring(Number(startval), Number(endval));;
            break;

        case 'REPALCE':
            resstr = sringg.replace(startval, endval);
            break;

        case 'REPLACEALL':
            resstr = sringg.replaceAll(startval, endval);
            break;

        case 'TOUPPER':
            resstr = sringg.toUpperCase();
            break;

        case 'TOLOWER':
            resstr = sringg.toLowerCase();
            break;

        case 'CONCAT':
            resstr = sringg.concat(str2);
            break;

        case 'TRIM':
            resstr = sringg.trim();;
            break;

        case 'TRIMSTART':
            resstr = sringg.trimStart();
            break;

        case 'TRIMEND':
            resstr = sringg.trimEnd();
            break;

        case 'PADSTART':
            resstr = sringg.padStart(4, "0");
            break;

        case 'PADEND':
            resstr = sringg.padEnd(Number(startval), endval);
            break;

        case 'cahrAT':
            resstr = sringg.charAt(Number(str2));
            break;

        case 'SPLIT':
            resstr = sringg.split(str2);
            break;



        default:
            break;
    }


    console.log(resstr);

    rs_span.textContent = inputt.options[inputt.selectedIndex].text;
    result.textContent = resstr;
    result.classList.add('border', 'border-2', 'border-warning');

};


function changee(){
    let enstr = document.getElementById('enstr');
    enstr.textContent =sringg.value;
}

let optta= document.querySelectorAll('option');
console.log(optta);

function artt(){

        let spadis= document.getElementById('spadis');
        let spadis2= document.getElementById('spadis2');  
        let inputt = document.getElementById('inputt');      
        let optionn = inputt.options[inputt.selectedIndex].value;  

        console.log(`in artt ${optionn} `);

        if(optionn == 'SLCICE'||optionn == 'SUBSTRING'||optionn == "SUBSTR"||optionn =="REPALCE"||optionn =='REPLACEALL'||optionn =="PADSTART"||optionn =="PADEND"){
            
            spadis.style.display="flex";

            spadis2.style.display="none";

        }

        else if(optionn == 'cahrAT'||optionn == 'SPLIT'||optionn == "CONCAT") {
    
            spadis2.style.display="flex";
            spadis.style.display="none";

        }

        else{
            spadis.style.display="none";
            spadis2.style.display="none";

        };

        let startval = document.getElementById('startval');
        let endval = document.getElementById('endval');
        let str2 = document.getElementById('str2');
    
        startval.value="";
        endval.value="";
        str2.value="";
    };




