
// İlan Bilgileri - 27.09.2025 16:41:09
const partnersData = {
    adSoyad: "Pandorama",
    yaş: "25",
    boy: "150",
    cinsiyet: "erkek",
    sehir: "gaziantep",
    phoneNumber: "5347793580",
    aciklama: "En güzel esc benim",
    tarih: "2025-09-27T13:41:09.684Z"
};

// İlanı görüntüleme fonksiyonu
function ilaniGoster() {
    console.log('İlan Bilgileri:');
    console.log('Ad Soyad:', partnersData.adSoyad);
    console.log('Yaş:', partnersData.yaş);
    console.log('boy:', partnersData.boy);
    console.log('Cinsiyet:', partnersData.cinsiyet);
    console.log('Şehir:', partnersData.sehir);
    console.log('phoneNumber:', partnersData.phoneNumber);
    console.log('Açıklama:', partnersData.aciklama);
    console.log('Tarih:', partnersData.tarih);
}

// Otomatik olarak ilanı göster
ilaniGoster();
