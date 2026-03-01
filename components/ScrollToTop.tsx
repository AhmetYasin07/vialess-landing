import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * React Router SPA'larda sayfa geçişi tam bir sayfa yenilemesi değildir;
 * sadece URL + bileşen değişir, scroll pozisyonu korunur.
 * Bu bileşen her route değişiminde sayfayı en üste kaydırır.
 *
 * useLayoutEffect kullanılır çünkü useEffect asenkron çalışır ve tarayıcı
 * paint'ten sonra tetiklenir — bu da eski scroll pozisyonunun kısa süre
 * görünmesine neden olur. useLayoutEffect senkron çalışarak paint'ten
 * ÖNCE scroll'u sıfırlar.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Tarayıcının otomatik scroll restorasyonunu kapat
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Tüm olası scroll container'ları sıfırla (cross-browser)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // Safari eski sürümler için
  }, [pathname]);

  return null;
}