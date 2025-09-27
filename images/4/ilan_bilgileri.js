
// İlan Bilgileri - 27.09.2025 14:52:23
const partnersData = {
    adSoyad: "baba pro",
    yaş: "343",
    boy: "180",
    cinsiyet: "erkek",
    sehir: "ankara",
    phoneNumber: "5347793580",
    aciklama: "5347793580",
    tarih: "2025-09-27T11:52:23.767Z"
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
