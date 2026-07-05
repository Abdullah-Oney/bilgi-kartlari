const cards = [
"Osmanlı Öncesi Türk Devletleri Tarihi: Siyasal, Sosyal, Ekonomik ve Kültürel Gelişmeler",
"Orta Asya ve İlk Türk Toplulukları",
"İlk Türk Toplulukları, Orta Asya'nın Coğrafi Özellikleri, Bozkır Kültürü ve Konar-Göçer Yaşam",
"Türklerin tarih sahnesine çıktığı Orta Asya; batıda Hazar Denizi, kuzeyde Sibirya, doğuda Moğolistan ve güneyde Tibet Platosu ile çevrili geniş bir alandır.",
"Sert karasal iklimin hüküm sürdüğü bu coğrafyada tarım imkânlarının kısıtlı olması, Türkleri temel geçim kaynağı olarak hayvancılığa ve buna bağlı olarak 'konar-göçer' (yarı göçebe) bir yaşam tarzına yöneltmiştir.",
"Bu yaşam tarzı, Türklerin mücadeleci, dayanıklı ve teşkilatçı bir karakter kazanmasını sağlamıştır.",
"Bozkır kültürü, özel mülkiyetin (toprak ağalığının) gelişmesini engelleyerek sınıfsız ve eşitlikçi bir toplum yapısı oluşturmuştur.",
"Önemli Bilgiler",
"Türklerin ana yurdu Orta Asya'dır.",
"Bozkır kültürü, taşınabilir sanat (halı, kilim, maden işçiliği) anlayışını doğurmuştur.",
"Sert iklim ve sürekli hareketlilik, hapis cezalarının kısa süreli (10 güne kadar) olmasına yol açmıştır.",
"Atın evcilleştirilmesi ve tekerleğin kullanımı, Türklerin geniş alanlara yayılmasını kolaylaştırmıştır.",
"Sınavda Sorulabilecek Noktalar",
"Coğrafyanın yaşam tarzı, hukuk (töre) ve askerlik (ordu-millet) üzerindeki etkisi AGS müfredatının temel analiz konusudur.",
"Toprak mülkiyetinin devlete ait olması nedeniyle Avrupa'daki gibi feodalite veya kast sistemi görülmemiştir.",
"Karıştırılan Bilgiler",
"Göçebe ile konar-göçer farkı: Türkler rastgele değil, yazlak ve kışlak arasında planlı hareket ederler.",
"Kurganlar mimari örnektir; kalıcı sivil mimari Uygurlara kadar görülmez.",
"Dikkat Edilecek Ayrıntılar",
"Türk kültürünün kökenleri Anav, Afanesyevo, Andronovo, Karasuk ve Tagar kültürlerine dayanır.",
"Hafızada Kalması Gereken Anahtar Bilgiler",
"Sert İklim ➔ Hayvancılık ➔ Konar-Göçer Yaşam ➔ Ordu-Millet Yapısı ➔ Sınıf Ayrımının Olmaması.",
"Türk Adı ve İlk Türk Devletlerinin Ortak Özellikleri",
"Türk adı Çin kaynaklarında 'miğfer', Kaşgarlı Mahmut'ta 'olgunluk çağı', Ziya Gökalp'te 'kanun sahibi' anlamına gelir.",
"Türk adı siyasi olarak ilk kez Göktürk Devleti tarafından kullanılmıştır.",
"İlk Türk devletleri boylar federasyonu şeklinde örgütlenmiştir.",
"Kut inancına dayalı bir yönetim anlayışı vardır.",
"İkili teşkilat sistemi uygulanmıştır.",
"Önemli Bilgiler",
"Türk adını resmi devlet ismi olarak kullanan ilk devlet I. Göktürk Devleti'dir.",
"Ziya Gökalp: Kanun ve Nizam sahibi; Kaşgarlı Mahmut: Olgunluk Çağı.",
"Bizans kaynakları VI. yüzyılda Orta Asya için, XII. yüzyıldan itibaren Anadolu için 'Türkiye' tabirini kullanmıştır.",
"Sınavda Sorulabilecek Noktalar",
"Türk adının geçtiği ilk kaynaklar Çin yıllıklarıdır.",
"Karıştırılan Bilgiler",
"Türk adının geçtiği ilk metinler ile ilk kullanan devlet ayrımı önemlidir.",
"Hafızada Kalması Gereken Anahtar Bilgiler",
"Kaşgarlı = Olgunluk; Gökalp = Kanun/Nizam; Göktürk = İlk resmi kullanım.",
"Asya Hun Devleti",
"Tarihte bilinen ilk teşkilatlı Türk devletidir.",
"Kurucusu Teoman (Tuman)'dır.",
"Merkezi Ötüken'dir.",
"Mete Han en parlak hükümdardır.",
"Onlu sistem kurulmuştur.",
"Çin Seddi'nin yapılmasına neden olunmuştur.",
"Kavimler Göçü (375)",
"Asya Hunlarının dağılmasından sonra batıya göç eden Hunların Germen kavimlerini yerinden oynatmasıyla başlayan büyük göç hareketidir.",
"Roma İmparatorluğu ikiye ayrılmıştır (395).",
"Batı Roma yıkılmıştır (476).",
"Feodalite ve skolastik düşünce ortaya çıkmıştır.",
"Orta Çağ başlamıştır.",
"Avrupa Hun Devleti",
"Kurucusu Balamir'dir.",
"Merkezi Macaristan'dır.",
"Attila en önemli hükümdardır.",
"Bizans vergiye bağlanmıştır.",
"Avrupa'da kurulan ilk Türk devletidir.",
"I. ve II. Göktürk Devleti",
"Bumin Kağan tarafından kurulmuştur.",
"Kutluk Kağan tarafından ikinci dönem kurulmuştur.",
"Türk adını kullanan ilk devlettir.",
"Orhun Abideleri dikilmiştir.",
"Tonyukuk önemli devlet adamıdır.",
"Uygur Devleti",
"İlk yerleşik Türk devletidir.",
"Maniheizm ve Budizm kabul edilmiştir.",
"Matbaa ve kâğıt kullanılmıştır.",
"Kırgızlar tarafından yıkılmıştır.",
"Diğer Türk Devletleri",
"Avarlar İstanbul'u kuşatan ilk Türk devletidir.",
"Hazarlar Museviliği kabul eden tek Türk devletidir.",
"Karluklar İslamiyet'i kabul eden ilk Türk boyudur.",
"İtil Bulgarları İslamiyet'i kabul eden ilk Türk devletidir.",
"Devlet Teşkilatı",
"Türklerde devlet 'İl' olarak adlandırılır.",
"Kut anlayışı hakimdir.",
"Kurultay devlet meclisidir.",
"Toplumda sınıf ayrımı yoktur.",
"Din, Bilim ve Kültür",
"Gök Tanrı inancı vardır.",
"Kurgan mezar tipidir.",
"Balbal mezar heykelidir.",
"Orhun Yazıtları ilk yazılı Türk belgeleridir.",
"Talas Savaşı (751)",
"Çinliler ile Abbasiler arasında yapılmıştır.",
"Karluk Türkleri Abbasileri desteklemiştir.",
"Türklerin İslamiyet'e geçişini hızlandırmıştır.",
"Kağıt ve matbaa Çin dışına çıkmıştır.",
"1. Bilinen ilk Türk devleti Asya Hun Devleti'dir.",
"2. Bilinen ilk Türk hükümdarı Teoman'dır.",
"3. Onlu ordu sistemini Mete Han kurmuştur.",
"4. Türk boylarını ilk kez tek bayrak altında Mete Han toplamıştır.",
"5. Türk adını kullanan ilk devlet Göktürklerdir.",
"6. Yerleşik hayata geçen ilk devlet Uygurlardır.",
"7. İstanbul'u kuşatan ilk Türk devleti Avarlardır.",
"8. İslamiyet'i kabul eden ilk boy Karluklardır.",
"9. İslamiyet'i kabul eden ilk devlet İtil Bulgarlarıdır (Orta Asya'da Karahanlılar).",
"10. Museviliği kabul eden tek Türk devleti Hazarlardır.",
"11. Kendi adına para bastıran ilk Türk hükümdarı Baga Tarkan'dır.",
"12. Orhun Abideleri II. Göktürk (Kutluk) dönemine aittir.",
"13. Orhun Abideleri Türk tarihinin ilk yazılı belgeleridir.",
"14. Türklerde hükümdarlık yetkisine Kut denir.",
"15. Devlet meselelerinin görüşüldüğü meclise Kurultay (Toy) denir.",
"16. Sosyal yapının en küçük birimi Oguş'tur (Aile).",
"17. Türklerin kullandığı ilk milli alfabe Göktürk alfabesidir.",
"18. Maniheizm dinini kabul eden Türk devleti Uygurlardır.",
"19. Mezarların başına dikilen heykellere Balbal denir.",
"20. Oda şeklindeki mezarlara Kurgan denir.",
"21. Cenaze törenlerine Yuğ denir.",
"22. Ölenin ardından yakılan ağıta Sagu denir.",
"23. Yazısız hukuk kurallarına Töre denir.",
"24. Türklerin ilk atasözlerine Sav denir.",
"25. İlk Türk-Arap savaşları Hazarlar döneminde (Hz. Osman) yapılmıştır.",
"26. Türgişler Emevilerle savaşarak İslam'ın yayılmasını durdurmuştur.",
"27. Kavimler Göçü ile İlk Çağ kapanmış, Orta Çağ başlamıştır.",
"28. Avrupa'da kurulan ilk Türk devleti Avrupa Hun Devleti'dir.",
"29. Attila'ya 'Tanrının Kırbacı' denilmiştir.",
"30. İstemi Yabgu Bizans'a ilk elçiyi gönderen yöneticidir.",
"31. Vezir Tonyukuk ilk Türk tarihçisidir.",
"32. Uygurlar matbaayı ve kağıdı kullanan ilk Türk devletidir.",
"33. Türklerin en eski dini Gök Tanrı inancıdır.",
"34. Cennete Uçmağ, cehenneme Tamu denir.",
"35. Atalar Kültü: Ölen ataların ruhlarının ailesini koruduğuna inanılmasıdır.",
"36. Şaman, Kam, Baksı: Din adamlarına verilen isimlerdir.",
"37. Hayvan Üslubu: Hunların sanat eserlerinde kullandığı üsluptur.",
"38. Pazırık Halısı: Dünyanın en eski halısıdır (Hunlara ait)."
"39. Altın Elbiseli Adam Zırhı: Hunlara (veya İskitlere) ait önemli bir buluntudur.",
"40. İkili Teşkilat: Devletin doğu ve batı olarak yönetilmesidir.",
"41. Yabgu: Batı kanadını yöneten hükümdar kardeşinin unvanıdır.",
"42. Tigin: Hükümdar oğullarına verilen isimdir.",
"43. İnanç (Ataman): Tiginleri eğiten hocalardır.",
"44. Ayukı: Türklerde hükümete verilen isimdir.",
"45. Aygucı: Türklerde başbakana verilen isimdir.",
"46. Şanyü, Tanhu: Hun hükümdarlarının kullandığı unvanlardır.",
"47. Kur: Türklerin giydiği kemerdir.",
"48. Kotuz (Sorguç): Hükümdarlık sembolüdür.",
"49. Hutbe okutmak İslamiyet öncesinde hükümdarlık sembolü değildir.",
"50. Türklerde toprak 'devletin malı' sayılır.",
"51. Bu yüzden kölelik ve toprak ağalığı oluşmamıştır.",
"52. İlk Türklerde hapis cezaları kısa sürelidir.",
"53. Tötö Kanalı Göktürkler tarafından yapılmış bir sulama kanalıdır.",
"54. Türklerde ordu-millet anlayışı hakimdir.",
"55. Turan Taktiği (Hilal): Sahte ricat ve pusudur.",
"56. Üzengiyi Avrupa'ya Avarlar tanıtmıştır.",
"57. Codex Cumanicus: Kıpçaklara ait sözlüktür.",
"58. Manas Destanı: Kırgızlara ait dünyanın en uzun destanıdır.",
"59. Ergenekon ve Bozkurt destanları Göktürklere aittir.",
"60. Türeyiş ve Göç destanları Uygurlara aittir.",
"61. Oğuz Kağan Destanı Asya Hunlarına (Mete Han) aittir.",
"62. Alp Er Tunga ve Şu destanları İskitlere aittir.",
"63. İskitler (Sakalar) tarihte bilinen ilk Türk topluluğudur.",
"64. Tomris Hatun ilk kadın hükümdardır (İskitler).",
"65. İskitlere 'Bozkırın Kuyumcuları' denir.",
"66. Göktürk alfabesi 38 harflidir.",
"67. Uygur alfabesi 18 harflidir.",
"68. Türkler sırasıyla Göktürk, Uygur, Arap, Kiril ve Latin alfabelerini kullanmıştır.",
"69. Talas Savaşı'nın diğer adı Atlık Savaşı'dır.",
"70. Kağıt ilk kez Semerkant'ta üretilmiştir.",
"71. Türklerin İslamiyet'e geçişi Talas Savaşı ile hızlanmıştır.",
"72. Gök Tanrı inancındaki 'Cihan Hakimiyeti' İslam'daki 'Cihat'a benzer.",
"73. Türklerde kurban kesme geleneği her iki inançta da ortaktır.",
"74. Hazar Barış Çağı dini hoşgörünün olduğu dönemdir.",
"75. Peçenekler devlet kuramamış, boy halinde yaşamıştır.",
"76. Macarlar Türk kökenli olup Hristiyanlığı kabul ederek asimile olmuştur.",
"77. Kırgızlar Cengiz Han'a itaat eden ilk Türk devletidir.",
"78. Sibirler (Sabirler) Sibirya'ya adını veren Türk topluluğudur.",
"79. Orhun Abideleri Danimarkalı W. Thomsen tarafından okunmuştur.",
"80. Orhun Abideleri Bilge Kağan, Kül Tigin ve Tonyukuk adına dikilmiştir.",
"81. Uygur tapınaklarına Stupa denir.",
"82. Uygur duvar resimlerine Fresko denir.",
"83. Uygur kitap sanatına Minyatür denir.",
"84. Orta oyunu (tiyatro) Uygurlarla başlamıştır.",
"85. 'İl gider, töre kalır' sözü törenin önemini vurgular.",
"86. Könilik, Uzluk, Tüzlük, Kişilik törenin temel ilkeleridir.",
"87. Kürk Yolu kuzeyden geçer ve hayvan postu ticareti yapılır.",
"88. İpek Yolu Çin'den Avrupa'ya uzanan en önemli ticaret yoludur.",
"89. Türk-Çin savaşlarının temel nedeni İpek Yolu'dur.",
"90. On İki Hayvanlı Türk Takvimi güneş yılı esaslıdır.",
"91. Türklerde para yerine mühürlü kumaşlar kullanılmıştır (Kamdu/Böz).",
"92. Hatun devlet yönetiminde söz sahibidir.",
"93. İlk Türklerde ordu süvarilerden oluşur.",
"94. Ceket, pantolon ve çizme Türklerin dünya giyim katkısıdır.",
"95. Göktürk-Bizans ittifakı Sasanileri zayıflatmıştır.",
"96. Bu durum Müslümanların İran'ı fethetmesini kolaylaştırmıştır.",
"97. Karluklar Karahanlı Devleti'nin kurucu unsurudur.",
"98. Uygur alfabesi Soğd alfabesi kökenlidir.",
"99. Türklerde dini bir sınıf (ruhbanlık) yoktur.",
"100. AGS'de bu konu genellikle yaşam tarzı-sonuç ilişkisi üzerinden sorulur.",
];

let index = 0;

const textEl = document.getElementById("text");
const counterEl = document.getElementById("counter");

function update() {
  textEl.textContent = cards[index];
  counterEl.textContent = `${index + 1} / ${cards.length}`;
  localStorage.setItem("lastIndex", index);
}

function next() {
  index = (index + 1) % cards.length;
  update();
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  update();
}

function randomCard() {
  index = Math.floor(Math.random() * cards.length);
  update();
}

// swipe
let startX = 0;

document.getElementById("card").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.getElementById("card").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) next();
  if (endX - startX > 50) prev();
});

// load saved position
index = Number(localStorage.getItem("lastIndex")) || 0;
update();
