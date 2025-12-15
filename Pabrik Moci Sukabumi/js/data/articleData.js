const articleData = {
    id: 1,
    title: "Pabrik Mochi Arjuna Wijaya Sukabumi",
    excerpt: "Pengalaman jalan-jalan di pabrik mochi untuk mempelajari bagaimana cara membuat mochi dan sejarah mochi di Sukabumi.",
    category: "Makanan",
    date: "28 Mei 2025",
    author: {
        name: "Sammy",
        avatar: "./../../Penulis/Sammy.jpg",
        bio: "Perjalanan di Pabrik Mochi Arjuna Wijaya Sukabumi."
    },
    heroImage: "./images/Foto (5).jpg",
    tags: ["Makanan", "Jalan-jalan", "Sejarah"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Mochi?",
            content:
             `
                <img src="./images/Foto (4).jpg" alt="mochi" class="content-image">
                <p>Mochi adalah kue tradisonal Jepang yang terbuat dari <b>mochigome</b>(beras ketan pendek Jepang) yang ditumbuk hingga menjadi adonan yang lengket dan elastis.</p>

                <h4>Karakteristik Utama Mochi : </h4>
                <ul>
                    <li>Tekstur yang sangat kenyal, lengket dan lembut</li>
                    <li>Bahan dasar dari ketan</li>
                    <li>Biasanya diisi dengan isian manis (seperti kacang merah/anko)</li>
                </ul>
            `
        },
        {
            type: "section", 
            id: "sejarah masuknya moci ke indonesia",
            title: "Bagaimana mochi masuk ke Indonesia?",
            content: `
                <p>Sejarah mochi ini menurut pemandu pabrik adalah mochi ada sejak sebelum masehi. Di Jepang pada jaman Etdon mochi menjadi makanan pokok. Pada tahun 350 Masehi mochi sudah ada di Jepang. Budaya Jepang berupa mochi ini masuk ke Indonesia pada saat masa penjajahan. Tentara Jepang yang berada di Sukabumi mengajarkan cara membuat mochi kepada pribumi.</p>
                
            `
        },
        {
            type: "section",
            id: "bahan-bahan",
            title: "Bagaimana cara membuat mochi?", 
            content: `
                <p>Bahan-bahan yang digunakan saat membuat mochi Sukabumi berbeda dengan mochi Jepang. Bahan-bahan yang digunakan adalah bahan lokal dari Sukabumi. Bahan-bahannya sebagai berikut : </p>

                <ul>
                    <li>Tepung ketan</li>
                    <li>Tepung gula</li>
                    <li>Tepung sagu</li>
                    <li>Kacang tanah</li>
                </ul>

                <h4>Cara membuatnya :</h4>

                <ul>
                    <li>Kacang tanah disangrai, digiling, diberi gula.</li>
                    <li>Tepung ketan dan tepung gula dicampur menjadi kulit mochi.</li>
                    <li>Kulit mochi diisi dengan kacang tanah.</li>
                    <li>Lapisi dengan tepung sagu supaya tidak lengket.</li>
                </ul>

                <p><b>Perlu diperhatikan jika ada bahan yang berlebihan bisa membuat rasa aneh. Tantangan terbesar dalam membuat moci adalah saat adonan terlalu lengket</b></p>
            `
        },
        {
            type : 'section',
            id : 'lokasi',
            title : 'Dimana lokasi Pabrik Mochi Arjuna Wijaya?',
            content : `
                <p>Pabrik Moci Arjuna Wijaya berada di Jl.Kadudampit, Desa. Sukasara, Kec. Cisaat, Kab. Sukabumi.</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Museum Palagan Bojong Kokosan Sukabumi",
        date: "28 Mei 2025", 
        image: "./images/Foto 1.jpg"
    }
];