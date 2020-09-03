// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { SharedFormControlsModule } from '../../app/shared-form-controls/shared-form-controls.module';
import { SubmitButtonComponent } from '../../app/shared-form-controls/submit-button/submit-button.component';
import 'node_modules/tailwindcss/dist/base.css';
import 'node_modules/tailwindcss/dist/components.css';
import 'node_modules/tailwindcss/dist/utilities.css';
import '../../styles.scss';

export default {
  title: 'FormControls/Submit Button',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        SharedFormControlsModule
      ],
    }),
  ],
  argTypes: {
    position : {
      control : {
        type: 'select',
        options: ['left', 'center' , 'right'],
      }
    },
    width : {
      control : {
        type: 'select',
        options: ['','sm', 'md' , 'lg'],
      }
    }
  },
};

const PasswordInputTemplate = (args: SubmitButtonComponent) => ({
  component: SubmitButtonComponent,
  props: args,
});

export const Primary = PasswordInputTemplate.bind({});
Primary.args = {
  label: 'test Label',
  position: 'left',
  width: ''
}
