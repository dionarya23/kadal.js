+function($){
  var params = {};
  var i;
  var gambarKadal = new Array(
    "https://image.ibb.co/gKSpra/the_lizard_847001_960_720.jpg",
    "https://image.ibb.co/fdN0xF/maxresdefault.jpg",
    "https://image.ibb.co/k70aWa/mauboya_multifasciata_kadal_reptilia.jpg",
    "https://image.ibb.co/enNpra/lizard_316238_960_720.jpg",
    "https://image.ibb.co/maXYHF/lizard_288221_960_720.jpg",
    "https://image.ibb.co/cUfaWa/lizard.jpg",
    "https://image.ibb.co/iOqaWa/Kadal_Spiderman.jpg",
    "https://image.ibb.co/fjTjPv/kadal_obama_121230134443_577.jpg",
    "https://image.ibb.co/fiqW4v/kadal_berpose_seperti_model.jpg",
    "https://image.ibb.co/efLW4v/kadal.jpg",
    "https://image.ibb.co/grkaWa/kadal_dalkijo.jpg",
    "https://image.ibb.co/cpEr4v/k.jpg",
    "https://image.ibb.co/cS2NBa/iguana_84633_960_720.jpg",
    "https://image.ibb.co/iicYHF/frilled_lizard.jpg",
    "https://image.ibb.co/mYL9ra/251015124446_kadal_ini_unik_bisa_berganti_kelamin_saat_musim.jpg",
    "https://image.ibb.co/cXRScF/070765300_1461697211_kadal3.jpg",
    "https://image.ibb.co/c1jfxF/20160628_buaya_20160628_161126.jpg",
    "https://image.ibb.co/enCYHF/018775900_1461697000_kadal5.jpg",
    "https://image.ibb.co/dOHNBa/1200px_Varanus_komodoensis1.jpg",
    "https://image.ibb.co/fYv9ra/173614_620.jpg",
    "https://image.ibb.co/kNeDHF/Maby_multif_F_050222_061_kng.jpg"
  );
          $.fn.kadal = function(params){

        if (params == undefined || params.JumlahKadal == 1 || params.JumlahKadal == undefined){

            this.append('<div class="col-md-4"><div class="thumbnail"><img src="'+gambarKadal[Math.floor(Math.random() * 20) + 1]+'" alt="Kadal" class="img-responsive img-thumbnail" height="210" width="350"></div></div>');

        }else if(params.JumlahKadal > 1){

            for(i = 0; i < parseInt(params.JumlahKadal); i++){
              console.log(params.JumlahKadal);
            this.append('<div class="col-md-4"><div class="thumbnail"><img src="'+gambarKadal[i]+'" alt="Kadal '+i+'" class="img-responsive img-thumbnail" height="210" width="350"></div></div>');
          }

      }else if (params.JumlahKadal > gambarKadal.length ){
        this.append("Maaf Tidak Dapat menampilkan Gambar Kadal Sebanyak "+ params.JumlahKadal);
      }

          };

}(jQuery);
