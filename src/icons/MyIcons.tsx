import { HTMLIcon } from './HTMLIcon';
import { CSSIcon } from './CSSIcon';
import { JavaScriptIcon } from './JavaScriptIcon';
import { TypeScriptIcon } from './TypeScriptIcon';
import { ReactIcon } from './ReactIcon';
import { NextJSIcon } from './NextJSIcon';
import { TailwindCSSIcon } from './TailwindCSSIcon';
import { TooltipsIcon } from './TooltipsIcon';
import { MantineIcon } from './MantineIcon';
import { MicroCMSIcon } from './MicroCMSIcon';
import { DebugIcon } from './DebugIcon';

export default function MyIcons({ iconName }: { iconName: string }) {
  switch (iconName) {
    case 'HTML':
      return <HTMLIcon />;
    case 'CSS':
      return <CSSIcon />;
    case 'JavaScript':
      return <JavaScriptIcon />;
    case 'TypeScript':
      return <TypeScriptIcon />;
    case 'React':
      return <ReactIcon />;
    case 'Next.js':
      return <NextJSIcon />;
    case 'Tailwind CSS':
      return <TailwindCSSIcon />;
    case 'Tooltips':
      return <TooltipsIcon />;
    case 'Mantine':
      return <MantineIcon />;
    case 'microCMS':
      return <MicroCMSIcon />;
    case 'Debug':
      return <DebugIcon />;
  }
}
