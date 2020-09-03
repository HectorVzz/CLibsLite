// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { SharedFormControlsModule } from '../../app/shared-form-controls/shared-form-controls.module';
import { SelectInputComponent } from '../../app/shared-form-controls/select-input/select-input.component';
import 'node_modules/tailwindcss/dist/base.css';
import 'node_modules/tailwindcss/dist/components.css';
import 'node_modules/tailwindcss/dist/utilities.css';
import '../../styles.scss';

export default {
  title: 'FormControls/Select Input',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        SharedFormControlsModule
      ],
    }),
  ],
};

const PasswordInputTemplate = (args: SelectInputComponent) => ({
  component: SelectInputComponent,
  props: args,
});

export const Primary = PasswordInputTemplate.bind({});
Primary.args = {
  data: ['first','second','third'],
  value: ['first']
}
