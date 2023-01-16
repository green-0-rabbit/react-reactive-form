import { JSONData } from '@/types';
import { ICustomProps } from './field-custom-props';
import { InputType } from './reactive-field-base';

type CustomProps<TInputType extends InputType, TFormValues extends JSONData> = {
  customProps: ICustomProps<TFormValues>[TInputType];
};

export type ConditionalProp<
  TInputType extends InputType,
  IsPartialProps extends boolean = false,
  TFormValues extends JSONData = JSONData
> = IsPartialProps extends true
  ? Partial<CustomProps<TInputType, TFormValues>>
  : CustomProps<TInputType, TFormValues>;

export interface IConditionalProp<TFormValues extends JSONData> {
  text: ConditionalProp<'text', true, TFormValues>;
  checkbox: ConditionalProp<'checkbox', true, TFormValues>;
  switch: ConditionalProp<'switch', true, TFormValues>;
  // range: ConditionalProp<'range'>;
  // switch: ConditionalProp<'switch', true>;
  // select: ConditionalProp<'select'>;
  // 'multi-select': ConditionalProp<'multi-select'>;
  // radio: ConditionalProp<'radio'>;
  // checkbox: ConditionalProp<'checkbox', true>;
  // // list: ConditionalProp<'list'>;
  // datepicker: ConditionalProp<'datepicker', true>;
  // autocomplete: ConditionalProp<'autocomplete'>;
}