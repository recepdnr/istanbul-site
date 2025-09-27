
// İlan Bilgileri - 27.09.2025 14:41:49
const partnersData = {
    adSoyad: "kucu ucuc",
    yaş: "23",
    boy: "232",
    cinsiyet: "erkek",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "kral aadam",
    tarih: "2025-09-27T11:41:49.787Z"
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
