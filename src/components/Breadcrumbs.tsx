import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useLanguage();

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-[#6c63ff] transition-colors">
        {t.breadcrumb_home}
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-[#6c63ff] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}