type Props = { title: string; narrative: string; ending: string };

export function Story({ title, narrative, ending }: Props) {
  return (
    <>
      <h2 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: '0 0 8px' }}>{title}</h2>
      <p style={{ lineHeight: 1.5, margin: '0 0 12px', whiteSpace: 'pre-wrap' }}>{narrative}</p>
      <p style={{ lineHeight: 1.5, margin: '0 0 16px' }}>
        If they make it out: {ending}
      </p>
    </>
  );
}
