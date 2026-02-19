import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * React Router SPA'larda sayfa geçişi tam bir sayfa yenilemesi değildir;
 * sadece URL + bileşen değişir, scroll pozisyonu korunur.
 * Bu bileşen her route değişiminde sayfayı en üste kaydırır.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Tarayıcının otomatik scroll restorasyonunu kapat
    window.history.scrollRestoration = 'manual';
    // Sayfayı anında en üste taşı
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
