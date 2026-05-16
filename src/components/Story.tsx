type Props = { title: string; narrative: string };

export function Story({ title, narrative }: Props) {
  return (
    <>
      <h2 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: '0 0 8px' }}>{title}</h2>
      <p style={{ lineHeight: 1.6, margin: '0 0 16px', whiteSpace: 'pre-wrap' }}>{narrative}</p>
    </>
  );
}
