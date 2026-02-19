import { useLanguage } from '../context/LanguageContext';
import { FaqSection } from './FaqSection';

export function HomeFaq() {
  const { t } = useLanguage();

  const categories = [
    {
      title: t.faq_cat_general || 'Genel',
      items: [
        { question: t.faq_q1, answer: t.faq_a1 },
        { question: t.faq_q2, answer: t.faq_a2 },
        { question: t.faq_q5, answer: t.faq_a5 },
      ]
    },
    {
      title: t.faq_cat_product || 'Ürün & Kullanım',
      items: [
        { question: t.faq_q3, answer: t.faq_a3 },
        { question: t.faq_q4, answer: t.faq_a4 },
      ]
    }
  ];

  return (
    <FaqSection
      title={t.faq_title}
      subtitle={t.faq_desc}
      categories={categories}
    />
  );
}