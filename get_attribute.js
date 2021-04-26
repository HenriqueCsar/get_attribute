var request = require('request');
var fs = require('fs')

///Pegando Atributos

function get_attribute(url, find, placeh) {

    request(url, (error, response, body) =>{
    if (response.statusCode == 200) {
        
        const https = body

      
        var result_class = ['']
        result_class = https.split(` ${find}`)
        for (var t in result_class){
            result_final = result_class[t].split(' ')
            result_final = result_final[0].replace('=', '')
            
        
            result_final = result_final.split('><')
            
            result_final = result_final[0]

            for(var i in result_final){
                if(result_final[i] == '>' || result_final[i] == '<'){
                    var cont = i
                    break
                }
            }
            //console.log(result_final.slice(0, cont))
            resultado = result_final.slice(0, cont)
            fs.writeFile(placeh, resultado+'\n',{enconding:'utf-8',flag: 'a'}, function (err) {
                if (err) throw err;
            });
                



    }

        
    }

    });
}


//Exportar id para o chamador
module.exports.get_attribute = get_attribute
