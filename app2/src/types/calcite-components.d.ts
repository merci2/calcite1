// src/types/calcite-components.d.ts

import { JSX as LocalJSX } from '@esri/calcite-components';
import { HTMLAttributes } from 'react';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
};

declare global {
  export namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
}