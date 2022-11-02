import { css } from '@emotion/react';
import { ComponentMeta } from '@storybook/react';
import { Input, Stack, TextInput } from '@won-ui/core/src';

export default {
  title: 'won-ui/core/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = () => {
  return (
    <Stack
      direction='column'
      css={css`
        width: 100px;
        > * {
          margin-bottom: 10px;
        }
      `}
    >
      <Input />
      <Input error />
    </Stack>
  );
};

export const BasicTextInput = () => {
  return (
    <TextInput
      id="test-id"
      label="won-input-box"
      css={css`
        width: 400px;
      `}
      helperText="input-box for test"
      errorText="input-box error"
      required
    />
  );
};

export const DisabledTextInput = () => {
  return <TextInput disabled />;
};
