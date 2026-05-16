# ⚡ Yapılacaklar Listesi

Modern, gerçek zamanlı yapılacaklar listesi uygulaması. React Native ve Convex ile geliştirilmiştir.

## 📱 Ekran Görüntüleri

| Yapılacaklar | Ayarlar | Hakkımızda |
|---|---|---|
| ![Yapılacaklar](./screenshots/yapilacaklar.png) | ![Ayarlar](./screenshots/ayarlar.png) | ![Hakkımızda](./screenshots/hakkimizda.png) |

## ✨ Özellikler

- ➕ Yapılacak ekleme, düzenleme ve silme
- ✅ Tamamlanma durumu takibi
- 📊 Gerçek zamanlı ilerleme istatistikleri
- 🌙 Karanlık / Aydınlık mod desteği
- ☁️ Convex ile anlık veri senkronizasyonu
- 💾 Mod tercihi kalıcı olarak saklanır

## 🛠️ Teknolojiler

| Teknoloji | Açıklama |
|---|---|
| [React Native](https://reactnative.dev/) | Mobil uygulama framework'ü |
| [Expo](https://expo.dev/) | React Native geliştirme platformu |
| [Expo Router](https://expo.github.io/router) | Dosya tabanlı navigasyon |
| [Convex](https://convex.dev/) | Gerçek zamanlı backend |
| [TypeScript](https://www.typescriptlang.org/) | Tip güvenli JavaScript |
| [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) | Yerel veri saklama |

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- Expo Go (telefonda test için)
- Convex hesabı

### Adımlar

**1. Repoyu klonla:**
```bash
git clone https://github.com/KULLANICI_ADIN/REPO_ADIN.git
cd REPO_ADIN
```

**2. Bağımlılıkları yükle:**
```bash
npm install
```

**3. Convex kurulumu:**
```bash
npx convex dev
```

**4. `.env.local` dosyası oluştur:**
```env
EXPO_PUBLIC_CONVEX_URL=https://senin-convex-urlin.convex.cloud
```

**5. Uygulamayı başlat:**
```bash
npx expo start
```

**6. Expo Go ile tara:**
Terminalde çıkan QR kodu Expo Go uygulamasıyla tara.

## 📁 Proje Yapısı
├── app/
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Yönlendirme
│   └── (tabs)/
│       ├── _layout.tsx      # Tab navigasyon
│       ├── index.tsx        # Yapılacaklar sayfası
│       ├── ayarlar.tsx      # Ayarlar sayfası
│       └── hakkimizda.tsx   # Hakkımızda sayfası
├── components/
│   ├── Header.tsx           # Başlık ve ilerleme çubuğu
│   ├── EmptyState.tsx       # Boş liste gösterimi
│   ├── LoadingScreen.tsx    # Yükleme ekranı
│   ├── YapilacakItem.tsx    # Liste öğesi
│   ├── YapilcakGiris.tsx    # Yeni yapılacak girişi
│   ├── ProgressStats.tsx    # İstatistikler
│   ├── Tercihler.tsx        # Tercihler bölümü
│   └── Tehlike.tsx          # Tehlike bölümü
├── convex/
│   └── yapilacaklar.ts      # Backend fonksiyonları
└── hooks/
└── useTheme.ts          # Tema yönetimi
