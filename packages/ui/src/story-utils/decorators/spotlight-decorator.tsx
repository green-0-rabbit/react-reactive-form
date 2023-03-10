/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import { SpotlightProvider } from '@mantine/spotlight';
import { IDecoratorParams } from './common';

export const MantineSpotlightDecorator = (
  Story: IDecoratorParams['Story'],
  props: IDecoratorParams['props']
) => {
  const {
    args: { actions, ...rest }
  } = props;
  // console.log({ props });

  return (
    <SpotlightProvider actions={actions}>
      <Story args={{ ...rest }} />
    </SpotlightProvider>
  );
};
