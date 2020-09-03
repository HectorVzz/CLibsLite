// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { SharedFormControlsModule } from '../../app/shared-form-controls/shared-form-controls.module';
import { TextInputComponent } from '../../app/shared-form-controls/text-input/text-input.component';
import 'node_modules/tailwindcss/dist/base.css';
import 'node_modules/tailwindcss/dist/components.css';
import 'node_modules/tailwindcss/dist/utilities.css';
import '../../styles.scss';

export default {
  title: 'FormControls/Text Input',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        SharedFormControlsModule
      ],
    }),
  ],
};

const PasswordInputTemplate = (args: TextInputComponent) => ({
  component: TextInputComponent,
  props: args,
});

export const Primary = PasswordInputTemplate.bind({});
Primary.args = {label: 'Test Label'}
