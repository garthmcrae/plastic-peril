import { Sheet } from './components/Sheet';
import { maps, mapSlugs } from './maps';

function Index() {
  return (
    <div style={{ padding: '0 0 24px' }}>
      <h1 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: '0 0 16px' }}>Plastic Peril — Maps</h1>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.8 }}>
        {mapSlugs.map(slug => (
          <li key={slug}>
            <a href={`/${slug}`} style={{ color: 'inherit' }}>{maps[slug].title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div style={{ padding: '8mm', background: '#fee', border: '0.3mm solid #c00', color: '#800', whiteSpace: 'pre-wrap' }}>
      {message}
    </div>
  );
}

export default function App() {
  const slug = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!slug) return <Index />;
  const config = maps[slug];
  if (!config) return <ErrorBanner message={`Unknown map: "${slug}". Known: ${mapSlugs.join(', ')}`} />;
  try {
    return <Sheet config={config} />;
  } catch (e) {
    return <ErrorBanner message={(e as Error).message} />;
  }
}
