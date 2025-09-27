
// İlan Bilgileri - 27.09.2025 17:25:23
const partnersData = {
    adSoyad: "esc kartı",
    yaş: "31",
    boy: "150",
    cinsiyet: "kadın",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "5347793580",
    tarih: "2025-09-27T14:25:23.590Z"
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
