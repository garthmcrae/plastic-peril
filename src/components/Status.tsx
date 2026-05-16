export function Status() {
  const box: React.CSSProperties = {
    width: '6mm',
    height: '6mm',
    border: '0.3mm solid black',
    boxSizing: 'border-box',
  };
  return (
    <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '4mm' }}>
      <div>
        <div style={{ marginBottom: '2mm' }}>Life</div>
        <div style={{ display: 'flex', gap: '2mm' }}>
          <div style={box} />
          <div style={box} />
          <div style={box} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: '2mm' }}>Encounter (d6)</div>
        <div style={{ lineHeight: 1.6 }}>
          <div>1 — …</div>
          <div>2 — …</div>
          <div>3 — …</div>
          <div>4 — …</div>
          <div>5 — …</div>
          <div>6 — …</div>
        </div>
      </div>
    </div>
  );
}
