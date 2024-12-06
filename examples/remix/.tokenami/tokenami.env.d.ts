import { type TokenProperties } from '@tokenami/dev';
import config from './tokenami.config.js';

export type Config = typeof config;

declare module '@tokenami/dev' {
  interface TokenamiConfig extends Config {}
  interface TokenamiProperties extends TokenProperties<'color-space'>, TokenProperties<'fluid-height-min'>, TokenProperties<'fluid-height-max'>, TokenProperties<'fluid-border-spacing-min'>, TokenProperties<'fluid-border-spacing-max'>, TokenProperties<'fluid-column-gap-min'>, TokenProperties<'fluid-column-gap-max'>, TokenProperties<'fluid-column-width-min'>, TokenProperties<'fluid-column-width-max'>, TokenProperties<'fluid-flex-basis-min'>, TokenProperties<'fluid-flex-basis-max'>, TokenProperties<'fluid-text-size-min'>, TokenProperties<'fluid-text-size-max'>, TokenProperties<'fluid-gap-min'>, TokenProperties<'fluid-gap-max'>, TokenProperties<'fluid-width-min'>, TokenProperties<'fluid-width-max'>, TokenProperties<'fluid-inset-min'>, TokenProperties<'fluid-inset-max'>, TokenProperties<'fluid-inset-y-min'>, TokenProperties<'fluid-inset-y-max'>, TokenProperties<'fluid-bottom-min'>, TokenProperties<'fluid-bottom-max'>, TokenProperties<'fluid-top-min'>, TokenProperties<'fluid-top-max'>, TokenProperties<'fluid-inset-x-min'>, TokenProperties<'fluid-inset-x-max'>, TokenProperties<'fluid-right-min'>, TokenProperties<'fluid-right-max'>, TokenProperties<'fluid-left-min'>, TokenProperties<'fluid-left-max'>, TokenProperties<'fluid-m-min'>, TokenProperties<'fluid-m-max'>, TokenProperties<'fluid-my-min'>, TokenProperties<'fluid-my-max'>, TokenProperties<'fluid-mb-min'>, TokenProperties<'fluid-mb-max'>, TokenProperties<'fluid-mt-min'>, TokenProperties<'fluid-mt-max'>, TokenProperties<'fluid-mx-min'>, TokenProperties<'fluid-mx-max'>, TokenProperties<'fluid-mr-min'>, TokenProperties<'fluid-mr-max'>, TokenProperties<'fluid-ml-min'>, TokenProperties<'fluid-ml-max'>, TokenProperties<'fluid-max-height-min'>, TokenProperties<'fluid-max-height-max'>, TokenProperties<'fluid-max-width-min'>, TokenProperties<'fluid-max-width-max'>, TokenProperties<'fluid-min-height-min'>, TokenProperties<'fluid-min-height-max'>, TokenProperties<'fluid-min-width-min'>, TokenProperties<'fluid-min-width-max'>, TokenProperties<'fluid-p-min'>, TokenProperties<'fluid-p-max'>, TokenProperties<'fluid-py-min'>, TokenProperties<'fluid-py-max'>, TokenProperties<'fluid-pb-min'>, TokenProperties<'fluid-pb-max'>, TokenProperties<'fluid-pt-min'>, TokenProperties<'fluid-pt-max'>, TokenProperties<'fluid-px-min'>, TokenProperties<'fluid-px-max'>, TokenProperties<'fluid-pr-min'>, TokenProperties<'fluid-pr-max'>, TokenProperties<'fluid-pl-min'>, TokenProperties<'fluid-pl-max'>, TokenProperties<'fluid-row-gap-min'>, TokenProperties<'fluid-row-gap-max'>, TokenProperties<'fluid-scroll-m-min'>, TokenProperties<'fluid-scroll-m-max'>, TokenProperties<'fluid-scroll-my-min'>, TokenProperties<'fluid-scroll-my-max'>, TokenProperties<'fluid-scroll-mb-min'>, TokenProperties<'fluid-scroll-mb-max'>, TokenProperties<'fluid-scroll-mt-min'>, TokenProperties<'fluid-scroll-mt-max'>, TokenProperties<'fluid-scroll-mx-min'>, TokenProperties<'fluid-scroll-mx-max'>, TokenProperties<'fluid-scroll-mr-min'>, TokenProperties<'fluid-scroll-mr-max'>, TokenProperties<'fluid-scroll-ml-min'>, TokenProperties<'fluid-scroll-ml-max'>, TokenProperties<'fluid-scroll-p-min'>, TokenProperties<'fluid-scroll-p-max'>, TokenProperties<'fluid-scroll-py-min'>, TokenProperties<'fluid-scroll-py-max'>, TokenProperties<'fluid-scroll-pb-min'>, TokenProperties<'fluid-scroll-pb-max'>, TokenProperties<'fluid-scroll-pt-min'>, TokenProperties<'fluid-scroll-pt-max'>, TokenProperties<'fluid-scroll-px-min'>, TokenProperties<'fluid-scroll-px-max'>, TokenProperties<'fluid-scroll-pr-min'>, TokenProperties<'fluid-scroll-pr-max'>, TokenProperties<'fluid-scroll-pl-min'>, TokenProperties<'fluid-scroll-pl-max'>, TokenProperties<'fluid-stroke-width-min'>, TokenProperties<'fluid-stroke-width-max'>, TokenProperties<'fluid-text-indent-min'>, TokenProperties<'fluid-text-indent-max'>, TokenProperties<'gradient-from'>, TokenProperties<'gradient-from-stop'>, TokenProperties<'gradient-to'>, TokenProperties<'gradient-to-stop'>, TokenProperties<'gradient-via'>, TokenProperties<'gradient-via-stop'>, TokenProperties<'shadow-color'> {}
}
