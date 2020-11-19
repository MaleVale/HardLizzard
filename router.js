const index = require ('./src/index')

module.exports = function(req,res) {
    switch(req.url){
        case '/':
            index.homePage(req,res)
            break;
        case "/ en-cartelera" :
        index.enCartelera(req,res)
        break;
        case "/contacto":
            index.contacto(req,res)
        break;
        case "/mas-Votadas":
        index.masVotadas(req,res)
        break;
        case "/preguntas-Frecuentes":
            index.preguntasFrecuentes(req,res);
            break;
            case "/sucursales":
                index.sucursales(req,res)
                break;
                default:
                    res.write("Pagina No Disponible")
                    break;


    }

}