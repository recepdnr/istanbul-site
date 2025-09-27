
// İlan Bilgileri - 27.09.2025 17:15:38
const partnersData = {
    adSoyad: "ad soyad",
    yaş: "34",
    boy: "454",
    cinsiyet: "kadın",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "5347793580",
    tarih: "2025-09-27T14:15:38.444Z"
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
