// src/app/components/task-list.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../app/shared/shared.module';
import { SharedFormControlsModule } from '../app/shared-form-controls/shared-form-controls.module';
import { BoxWrapperComponent } from '../app/shared/box-wrapper/box-wrapper.component';
import { RouterTestingModule } from '@angular/router/testing';
import 'node_modules/tailwindcss/dist/base.css';
import 'node_modules/tailwindcss/dist/components.css';
import 'node_modules/tailwindcss/dist/utilities.css';
import '../styles.scss';

export default {
  title: 'Sidenav',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      imports: [
        SharedModule,
        SharedFormControlsModule,
        RouterTestingModule
      ],
    }),
  ],
};

const BoxWrapperTemplate = (args: BoxWrapperComponent) => ({
  component: BoxWrapperComponent,
  template: `
  <div class="h-screen flex w-full">
    <app-box-wrapper
      width="100"
      height="100"
      paddingRight="20px"
      class="min-h-full flex-1 w-4/12"
    >
      <app-sidenav class="h-full">
      </app-sidenav>
    </app-box-wrapper>
    <app-box-wrapper
      width="100"
      height="100"
      class="min-h-screen flex-grow flex bg-primary w-8/12">
      <app-box-wrapper
        width="100"
        padding="1%"
      >
        <div>
          TopBar
        </div>
      </app-box-wrapper>
      <app-box-wrapper
        width="100"
        marginTop="20px"
        marginBottom="20px"
        padding="1%"
      >
        <div>
        testiiiiing
        </div>
      </app-box-wrapper>
    </app-box-wrapper>
  </div>
  `,
  props: args,
});

export const DefaultBoxWrapper = BoxWrapperTemplate.bind({});
DefaultBoxWrapper.args = {width: 100}
