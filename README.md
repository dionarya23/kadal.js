# Kadal.JS
Suka dengan kadal ? atau kamu sering makan kadal ?, Kabar gembira bagi kamu yang suka dengan hal yang berbau kadal sekarang kadal ada Plugin Jquery nya yaitu KADAL.JS
<br>
### Apa Itu Kadal.js
Kadal.js merupakan sebuah plugin jquery yang bisa membuat website kamu menampilkan gambar - gambar kadal yang keren dan mebuat website kamu lebih keren dengan adanya gambar kadal.
<br>
<br>
Plugin ini di buat oleh Dion Arya Pamungkas, Alasan saya membuat plugin yang absurd ini karena saya bosan dan ingin mencoba hal yang baru wkwkkwkwwkwkk.

## Instalasi
Untuk bisa memakai plugin ini anda membutuhkan jquery terlebih dahulu bebas versi berapa aja, dan anda bisa meng-install kadal.js lewat NPM jika komputer anda sudah terpasang node.js dengan cara ketik di command line :<br>

````
npm install kadal.js
````

Atau anda juga bisa menggunakan seperti ini menggunakan tag script biasa, contoh:


```
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
<script src="kadal.js"></script>
```

Anda Bisa mendapatkan Kadal.JS di cdn berikut:<br>
<code>https://dionarya6661.github.io/kadal.js</code>

### Cara Menggunakan
Siapkan terlebih dahulu file-file yang sudah disebutkan diatas yaitu jquery.min.js dan kadal.js :<br>

````
<div id="idnya"></div>

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
<script src="kadal.js"></script>

<script>
$(document).ready(function(){
  $('#idnya').kadal();
});

</script>
```
maka akan akan telihat seperti Ini:

<img src="https://image.ibb.co/eJ4rMa/capture_20170808_153835.png" width="320" height="200">

Anda juga bisa menampilkan lebih dari satu gambar kadal misal anda ingin menampilkan 10 Gambar kadal,
* Perlu diketahui hanya ada 21 gambar kadal yang hanya bisa ditampilkan

Contoh menampilkan 10 gambar kadal:

```
<div id="idnya"></div>

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js"></script>
<script src="kadal.js"></script>

//anda hanya perlu menambahkan {JumlahKadal: 10}
<script>
$(document).ready(function(){
  $('#idnya').kadal({
    JumlahKadal: 10
    });
});

</script>
```

Dan untuk mempercantik gambar kadal anda bisa menambahkan framework css bootstrap pada web anda, seperti ini : <br>
```
  $('#idnya').kadal({
    JumlahKadal: 10,
    Bootstrap: true
    });

    //namu jika sebelumnya anda sudah menambahkan bootstrap anda boleh tidak memakai nya

    $('#idnya').kadal({
      JumlahKadal: 10,
      Bootstrap: false
      });

```
