import { Story } from './Story';
import { Status } from './Status';

type Props = { title: string; narrative: string };

export function Sidebar({ title, narrative }: Props) {
  return (
    <div style={{ flex: 1, padding: '8mm 10mm 8mm 5mm', display: 'flex', flexDirection: 'column' }}>
      <Story title={title} narrative={narrative} />
      <Status />
    </div>
  );
}
