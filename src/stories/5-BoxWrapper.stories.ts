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
  title: 'Wrappers',
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
  <div>
    <app-box-wrapper [width]=width [padding]=padding>
      <app-text-input
        label="Test label"
      >
      </app-text-input>
    </app-box-wrapper>
  </div>
  `,
  props: args,
});

export const DefaultBoxWrapper = BoxWrapperTemplate.bind({});
DefaultBoxWrapper.args = {
  width: 100,
  padding: '1%'
}

const CenteredBoxTemplate = (args: BoxWrapperComponent) => ({
  component: SharedModule,
  template: `
  <div class="m-auto w-6/12">
    <app-box-wrapper [width]=width [padding]=padding>
      <app-text-input
        label="Test label"
      >
      </app-text-input>
    </app-box-wrapper>
  </div>
  `,
  props: args,
})

export const CenteredBoxWrapper = CenteredBoxTemplate.bind({});
CenteredBoxWrapper.args = {
  width: 100,
  padding: '1%'
}
