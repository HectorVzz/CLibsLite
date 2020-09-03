// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { TestFormsModule } from './test-forms-module';
import 'node_modules/tailwindcss/dist/base.css';
import 'node_modules/tailwindcss/dist/components.css';
import 'node_modules/tailwindcss/dist/utilities.css';
import '../../styles.scss';

export default {
  title: 'TestForm',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        TestFormsModule
      ],
    }),
  ],
  parameters: {
    actions: {
      handles: ['submit', 'click .btn']
  }}
};
// default TaskList state
export const Login = () => ({
  component: TestFormsModule,
  template: `
  <div class="h-screen w-full">
    <div class="flex h-full">
      <app-login-form class="m-auto lg:w-2/5"></app-login-form>
    </div>
  </div>
  `
});


export const Register = () => ({
  component: TestFormsModule,
  template: `
  <div class="h-screen w-full">
    <div class="flex h-full">
      <app-register-form class="m-auto lg:w-2/5"></app-register-form>
    </div>
  </div>
  `
});
