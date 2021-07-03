/*EXCERCISE MAULANA
1. Buat conditional IF .. ELSE IF yang menggambarkan
divisi dan tugas divisi pada STARTUP. (CEO, CTO, HR, PROGRAMMER)
Contoh: Jika saya sebagai HR maka,
tugas saya adalah melakukan rekrutmen untuk calon pegawai baru
*/

let jabatan = 'CTO';

if (jabatan === 'CEO') {
    console.log('Jika saya sebagai CEO, tugas saya adalah pemimpin perusahaan')
}else if(jabatan === 'CTO') {
    console.log('Jika saya sebagai CTO, maka tugas saya adalah pengembangan teknologi')
}else if(jabatan === 'HR') {
    console.log('Jika saya sebagai HR, maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru')
}else if(jabatan === 'PROGRAMMER') {
    console.log('Jika saya adalah PROGRAMMER, maka tugas saya adalah menciptakan program')
}else {
    console.log('Caution, unknown!');
}


/*2. Buat conditional untuk membandingkan 2 buah nilai.
Tampilkan apakah salah satu nilai misal a lebih besar dari b, 
a lebih kecil dari b, dan a sama dengan b.
*/

let nilaiA = 100
let nilaiB = 99

if(nilaiA > nilaiB) {
    console.log("Nilai A lebih besar daripada nilai B")
}else if(nilaiA < nilaiB) {
    console.log("Nilai B lebih besar daripada nilai A")
}else if(nilaiA === nilaiB) {
    console.log("Nilai A sama dengan nilai B")
}


/*3. Gunakan switch case untuk mengetahui
nama hari berdasarkan angka. Hari minggu dimulai dari angka 1 dan seterusnya
*/

let angka = 5

switch (angka) {
    case 1: {console.log('ini hari Minggu'); break;}
    case 2: {console.log('ini hari Senin'); break;}
    case 3: {console.log('ini hari Selasa'); break;}
    case 4: {console.log('ini hari Rabu'); break;}
    case 5: {console.log('ini hari Kamis'); break;}
    case 6: {console.log('ini hari Jumat'); break;}
    case 7: {console.log('ini hari Sabtu'); break;}
    default: {console.log('Caution, unknown!')}
}


/*4. Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/

let arah = 'DOWN'

switch (arah) {
    case 'UP': {console.log('Karakter berjalan keatas'); break;}
    case 'DOWN': {console.log('Karakter berjalan kebawah'); break;}
    case 'RIGHT': {console.log('Karakter berjalan kekanan'); break;}
    case 'Left': {console.log('Karakter berjalan kekiri'); break;}
    default: {console.log('diem aja')}
}  

/*SELESAI*/