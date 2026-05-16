type Props = { title: string; introduction: string; conclusion: string };

export function Story({ title, introduction, conclusion }: Props) {
  return (
    <>
      <h2 style={{ fontSize: 'inherit', fontWeight: 'inherit', margin: '0 0 8px' }}>{title}</h2>
      <p style={{ lineHeight: 1.5, margin: '0 0 12px', whiteSpace: 'pre-wrap' }}>{introduction}</p>
      <p style={{ lineHeight: 1.5, margin: '0 0 16px' }}>
        If they make it out: {conclusion}
      </p>
    </>
  );
}
