//intalamos puppeter 
const puppeteer = require('puppeteer');
const fs = require ('fs');
const path = require('path');



(async () =>{

    const acum = 1;

    
    try {
        
    

    //con la funcion laun() abrimos el navegador par asi realizar cualquier accion
    const browser = await puppeteer.launch({

        //abrimos el navegador para interactuar
        headless : false,
        //haces que la pagina no se vea en pantalla completa
        defaultViewport: null,

    })

    //aca le indicamos que queremos abrir una nueva pestaña
    const page = await browser.newPage();
    //aca le damos a que url a que pagina queremos ingresar


    //le indicamos la url
    await page.goto("https://www.youtube.com/watch?v=rgTpS16VTg0");


    const carpeta = path.join(__dirname ,'imaganes-pag')

    
    try {
        fs.accessSync(carpeta, fs.constants.F_OK);
      } catch (err) {
        fs.mkdirSync(carpeta, { recursive: true }); // Crear directorios intermedios si es necesario
        console.log('Carpeta creada:', carpeta);
      }
  

    const arr = [];


            //esta funcion de pone los archivos capturados con otro nombre ramdom
             const timestamp = Date.now();

            const img = path.join(carpeta , `img-${timestamp}.png`)

            

            await page.screenshot({

                path: img,
                type: 'png'


            })

            arr.push(img);

            console.log('captura tomada en:'+ carpeta);
            console.log(arr);

            

            await timeout(10000) 

            await browser.close();
        
            


    } catch (error) {
        
        console.log("error" , error);

    }




})();



const timeout = (milisegundos) => {

    return new Promise(resolve => {


        setTimeout(resolve, milisegundos);


    })


}
