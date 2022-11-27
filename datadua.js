import bcrypt from 'bcryptjs'


const data = {

  user:[
    
    {
      name:'Ucup',
      email:'ucupuser@gmail.com',
      password:bcrypt.hashSync('abcdef'),
      isAdmin:false

    },
    // {
    //   name:'Bang Admin',
    //   email:'admin@gmail.com',
    //   password:bcrypt.hashSync('abcdef'),
    //   isAdmin:true

    // }

  ],
  product: [
    {
      name: "Xiaomi buds 3 pro",
      description:
        "TWS dengan kemampuan Peredam kebisingan pintar sampai 35dB* | Konektivitas perangkat ganda | Pengisian daya nirkabel | Daya tahan baterai lama hingga 28 jam",
      price: 1593,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/xiaomitws.jpg?alt=media&token=7eb8428c-2488-474c-ab52-23ff152e4c10",
      rating: 4.5,
      numReview: 576,
      countInStock: 500,
      category: "TWS",
      brand: "Xiaomi",
    },
    {
      name: "Vyatta Airboom Prime",
      description:
        "TWS bluetooth kaya akan frekuensi Bass, sementara untuk mid dan treble masih agak rendah. Kapasitas baterainya 50 mAh untuk masing-masing earphone, dan dibekali charging case dengan baterai berkapasitas 450 mAh.",
      price: 1582,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/vyatatws.jpg?alt=media&token=0c48830c-724f-4f4e-b640-237ecf48eb2c",
      rating: 4,
      numReview: 120,
      countInStock: 300,
      category: "TWS",
      brand: "Vyatta",
    },
    {
      name: "Xiaomi Mi True Wireless Earbuds Basic S",
      description:
        "Xiaomi Mi True Wireless Earbuds Basic S dilengkapi driver suara yang makin optimal dan Bluetooth 5.0 demi koneksi yang lebih stabil.TWS murah terbaik ini amat cocok bagi para gamers karena Xiaomi menambahkan passive noise cancelling untuk mengencangkan suara dan membuat suara dari lingkungan sekitar kita meredup.Xiaomi Mi True Wireless Earbuds Basic S diklaim dapat digunakan hingga 12 jam secara non-stop membuat salah satu earphone TWS terbaik 2021 ini cocok untuk para gamers.",
      price: 1592,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/xiaomitwsbasic.jpg?alt=media&token=91e6c967-50ce-4a37-b878-0f1cb8856f97",
      rating: 5,
      numReview: 10,
      countInStock: 20,
      category: "TWS",
      brand: "Xiaomi",
    },
    {
      name: "SOUNDPEATS Air3 Pro Wireless Earbuds",
      description:
        "SOUNDPEATS Air3 Pro Wireless Earbuds Hybrid ANC 35dB & aptX Adaptive Bluetooth 5.2 , 12mm Dynamic Driver & Renders Super Great Sound ,Clear Call Guaranteed by CVC 8.0 Noise Reduction Tech,6 Hrs Single Listening Time / 24Hrs & USB-C Charge",
      price: 4652,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/sondpeast.jpg?alt=media&token=d03c485a-1fbb-4667-98b7-ccf314c86e70",
      rating: 5,
      numReview: 4,
      countInStock: 100,
      category: "TWS",
      brand: "SOUNDPEATS",
    },
    {
      name: "JBL Tune 230NC TWS",
      description: "JBL TWS Kualitas premium",
      price: 5000,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/JBLTune230NCTWS.jpg?alt=media&token=e54cea70-a18f-40c9-bc3c-391f0e97eea4",
      rating: 5,
      numReview: 5,
      countInStock: 3,
      category: "TWS",
      brand: "JBL",
    },
    {
      name: "Xiaomi Mi Watch Lite Smartwatch",
      description:
        "Xiaomi Mi Watch Lite bukan hanya jam tangan pintar, jam ini memiliki ciri khas tersendiri. Ada tiga pilihan warna untuk jam, lima pilihan warna untuk strap, lebih dari 120 tampilan tema jam dan kustomisasi fungsi tampilan jam* untuk memuaskan gaya Anda yang selalu berubah. Xiaomi Mi Watch Lite mendukung semua aktivitas olahraga dalam ruangan maupun luar ruangan. Memiliki 11 mode olahraga, tahan air hingga 5 ATM (50m) Mi Watch Lite juga mencatat pergerakan Anda secara real time dan mendukung pengaturan tujuan olahraga tertentu untuk membantu meningkatkan hasil latihan Anda.",
      price: 3500,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/MiWatch.jpg?alt=media&token=d5c80516-470c-4296-ab87-5b8729184b88",
      rating: 4.5,
      numReview: 99,
      countInStock: 58,
      category: "Jam Tangan",
      brand: "Xiaomi",
    },
    {
      name: "Smartwatch Xiaomi amazfit",
      description:
        "Sport watch Amazfit adalah jam tangan pintar dari Xiaomi yang dapat memonitor detak jantung, real time GPS untuk merekam jalur lari, kecepatan, jarak tempuh, altimeter dan data lainnya. Selain itu juga memiliki bluetooth untuk memutar musik ke earphone Anda dan dapat memberi notifikasi ke smartphone Anda. Jam tangan olah raga Xiaomi Amazfit memiliki sensor PPG dan dikombinasikan dengan algoritma yang pintar sehingga dapat menghitung data aktfitias Anda dengan sangat akurat.Xiaomi Amazfit dapat menerima sinyal dari satelit GPS. Sinyal GPS ini membuat sport watch ini mampu merekam jalur lari, jarak lari, altimeter, kecepatan lari dan data-data lainnya yang berguna untuk membantu meningkatkan aktifitas olah raga Anda.",
      price: 4600,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/xiaomiAmazit.jpg?alt=media&token=d46d3665-4df3-4594-b454-1e12f1b3c393",
      rating: 4,
      numReview: 25,
      countInStock: 11,
      category: "Jam Tangan",
      brand: "Xiaomi",
    },
    {
      name: "JBL Quantum 400",
      description: "Product TWS Mantap dari JBL",
      price: 63,
      image_url: "https://firebasestorage.googleapis.com/v0/b/gambar-5e2e1.appspot.com/o/JBLQuantum400.jpg?alt=media&token=47ddfb76-302e-48ce-a9bc-e7feb9004b2e",
      rating: 4,
      numReview: 3,
      countInStock: 200,
      category: "Headset",
      brand: "JBL",
    },
  ],
};

export default data;
