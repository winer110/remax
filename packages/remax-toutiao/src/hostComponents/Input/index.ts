import * as React from 'react';

import { BaseProps } from '../../types/component';
import { createHostComponent } from '@remax/shared';

export interface InputProps extends BaseProps {
  focus?: boolean;
  maxlength?: number;
  value: string;
  password?: boolean;
  type: 'text' | 'number' | 'digit';
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (e: any) => void | string;
  onClick?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: () => void;
}

export const Input = createHostComponent<InputProps>('input');

Input.defaultProps = {
  type: 'text',
  maxlength: 140,
  selectionEnd: -1,
  selectionStart: -1,
  cursorSpacing: 0,
  cursor: -1,
};
