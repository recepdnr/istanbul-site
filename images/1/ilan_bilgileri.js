
// İlan Bilgileri - 27.09.2025 16:51:25
const partnersData = {
    adSoyad: "krall adam",
    yaş: "24",
    boy: "242",
    cinsiyet: "erkek",
    sehir: "istanbul",
    phoneNumber: "5347793580",
    aciklama: "5347793580v",
    tarih: "2025-09-27T13:51:25.833Z"
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
