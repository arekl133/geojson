var _ = require('underscore');
var fs = require('fs');
var minpowiaty = fs.readFileSync('powiaty-min.geojson');
var powiat = JSON.parse(minpowiaty);

const powiaty = Object.values(powiat.features);

for( let i = 0; i <= powiaty.length ; i++){
  
  var pow = powiat.features[i].properties
  
    function oblicz(id){
   
     var tab = powiat.features[id].geometry.coordinates;
     
         _.each(tab, function(item){
        
      var sum=0;
    
      for(var i=0,l=item.length-1;i<l;i++){
          sum+=(item[i][0]*item[i+1][1]-item[i+1][0]*item[i][1]);
          var wynik = (sum/2)
          
      }
      
      area = (wynik < 0 ? -wynik : wynik );
      var wynik2 = ('The Area of:'+ pow.id + " " + pow.nazwa + " is " + area )
      console.log(wynik2)
     
      
      });
    
    };
    oblicz(i);
  }

      



















// function oblicz(){
// //////działa chyba/////
//  var tab = powiat.features[id].geometry.coordinates;
 
//      _.each(tab, function(item){
//     console.log(item)
//   var sum=0;

//   for(var i=0,l=item.length-1;i<l;i++){
//       sum+=(item[i][0]*item[i+1][1]-item[i+1][0]*item[i][1]);
//       var wynik = (sum/2)
      
//   }
  
//   area = (wynik < 0 ? -wynik : wynik);
//   console.log('The Area of Ploygon is:' + area + ' ' + lista +' '+ 'id: ' + lista_id)
 
// });
// };
// oblicz();

  



 