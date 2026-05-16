type Props = { src: string };

export function Tile({ src }: Props) {
  return <img src={src} style={{ width: '20mm', height: '20mm', display: 'block' }} alt="" />;
}
