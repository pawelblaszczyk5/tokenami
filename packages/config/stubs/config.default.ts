import { createConfig } from '~/config';

const defaultConfig = createConfig({
  include: [],
  grid: '0.25rem',
  responsive: {},
  theme: {
    alpha: {},
    anim: {},
    border: {},
    color: {},
    ease: {},
    'font-size': {},
    leading: {},
    'line-style': {},
    radii: {},
    size: {},
    shadow: {},
    surface: {},
    tracking: {},
    transition: {},
    weight: {},
    z: {},
  },
  aliases: {},
  selectors: {
    active: '&:active',
    'any-link': '&:any-link',
    checked: '&:checked',
    current: '&:current',
    default: '&:default',
    defined: '&:defined',
    disabled: '&:disabled',
    empty: '&:empty',
    enabled: '&:enabled',
    first: '&:first',
    'first-child': '&:first-child',
    'first-of-type': '&:first-of-type',
    focus: '&:focus',
    'focus-visible': '&:focus-visible',
    'focus-within': '&:focus-within',
    fullscreen: '&:fullscreen',
    hover: '&:hover',
    'in-range': '&:in-range',
    indeterminate: '&:indeterminate',
    invalid: '&:invalid',
    'last-child': '&:last-child',
    'last-of-type': '&:last-of-type',
    left: '&:left',
    link: '&:link',
    'local-link': '&:local-link',
    'nth-col': '&:nth-col',
    'nth-last-col': '&:nth-last-col',
    'only-child': '&:only-child',
    'only-of-type': '&:only-of-type',
    optional: '&:optional',
    'out-of-range': '&:out-of-range',
    paused: '&:paused',
    'picture-in-picture': '&:picture-in-picture',
    'placeholder-shown': '&:placeholder-shown',
    playing: '&:playing',
    'read-only': '&:read-only',
    'read-write': '&:read-write',
    required: '&:required',
    right: '&:right',
    root: '&:root',
    scope: '&:scope',
    target: '&:target',
    'user-invalid': '&:user-invalid',
    'user-valid': '&:user-valid',
    valid: '&:valid',
    visited: '&:visited',
    after: '&::after',
    backdrop: '&::backdrop',
    before: '&::before',
    cue: '&::cue',
    'cue-region': '&::cue-region',
    'file-selector-button': '&::file-selector-button',
    'first-letter': '&::first-letter',
    'first-line': '&::first-line',
    marker: '&::marker',
    placeholder: '&::placeholder',
    selection: '&::selection',
  },
  properties: {
    'accent-color': ['color'],
    animation: ['anim'],
    'animation-timing-function': ['ease'],
    background: ['color', 'surface'],
    'background-color': ['color'],
    'background-image': ['surface'],
    'background-position': ['grid'],
    'background-position-x': ['grid'],
    'background-position-y': ['grid'],
    'block-size': ['grid', 'size'],
    border: ['border'],
    'border-block': ['border'],
    'border-block-color': ['color'],
    'border-block-end': ['border'],
    'border-block-end-color': ['color'],
    'border-block-end-style': ['line-style'],
    'border-block-end-width': ['grid'],
    'border-block-start': ['border'],
    'border-block-start-color': ['color'],
    'border-block-start-style': ['line-style'],
    'border-block-start-width': ['grid'],
    'border-block-style': ['line-style'],
    'border-block-width': ['grid'],
    'border-bottom': ['border'],
    'border-bottom-color': ['color'],
    'border-bottom-left-radius': ['radii'],
    'border-bottom-right-radius': ['radii'],
    'border-bottom-style': ['line-style'],
    'border-bottom-width': ['grid'],
    'border-color': ['color'],
    'border-end-end-radius': ['radii'],
    'border-end-start-radius': ['radii'],
    'border-inline': ['border'],
    'border-inline-color': ['color'],
    'border-inline-end': ['border'],
    'border-inline-end-color': ['color'],
    'border-inline-end-style': ['line-style'],
    'border-inline-end-width': ['grid'],
    'border-inline-start': ['border'],
    'border-inline-start-color': ['color'],
    'border-inline-start-style': ['line-style'],
    'border-inline-start-width': ['grid'],
    'border-inline-style': ['line-style'],
    'border-inline-width': ['grid'],
    'border-left': ['border'],
    'border-left-color': ['color'],
    'border-left-style': ['line-style'],
    'border-left-width': ['grid'],
    'border-radius': ['radii'],
    'border-right': ['border'],
    'border-right-color': ['color'],
    'border-right-style': ['line-style'],
    'border-right-width': ['grid'],
    'border-start-end-radius': ['radii'],
    'border-start-start-radius': ['radii'],
    'border-style': ['line-style'],
    'border-top': ['border'],
    'border-top-color': ['color'],
    'border-top-left-radius': ['radii'],
    'border-top-right-radius': ['radii'],
    'border-top-style': ['line-style'],
    'border-top-width': ['grid'],
    'border-width': ['grid'],
    bottom: ['grid'],
    'box-shadow': ['shadow'],
    'caret-color': ['color'],
    color: ['color'],
    'column-gap': ['grid'],
    'column-rule-color': ['color'],
    'column-rule-width': ['grid'],
    'column-width': ['grid', 'size'],
    'flex-basis': ['grid', 'size'],
    'font-family': ['font'],
    'font-size': ['font-size'],
    'font-weight': ['weight'],
    gap: ['grid'],
    height: ['grid', 'size'],
    'inline-size': ['grid', 'size'],
    inset: ['grid'],
    'inset-block': ['grid'],
    'inset-block-end': ['grid'],
    'inset-block-start': ['grid'],
    'inset-inline': ['grid'],
    'inset-inline-end': ['grid'],
    'inset-inline-start': ['grid'],
    left: ['grid'],
    'letter-spacing': ['tracking'],
    'line-height': ['leading'],
    margin: ['grid'],
    'margin-block': ['grid'],
    'margin-block-end': ['grid'],
    'margin-block-start': ['grid'],
    'margin-bottom': ['grid'],
    'margin-inline': ['grid'],
    'margin-inline-end': ['grid'],
    'margin-inline-start': ['grid'],
    'margin-left': ['grid'],
    'margin-right': ['grid'],
    'margin-top': ['grid'],
    'max-block-size': ['grid', 'size'],
    'max-height': ['grid', 'size'],
    'max-inline-size': ['grid', 'size'],
    'max-width': ['grid', 'size'],
    'min-block-size': ['grid', 'size'],
    'min-height': ['grid', 'size'],
    'min-inline-size': ['grid', 'size'],
    'min-width': ['grid', 'size'],
    opacity: ['alpha'],
    'outline-color': ['color'],
    padding: ['grid'],
    'padding-block': ['grid'],
    'padding-block-end': ['grid'],
    'padding-block-start': ['grid'],
    'padding-bottom': ['grid'],
    'padding-inline': ['grid'],
    'padding-inline-end': ['grid'],
    'padding-inline-start': ['grid'],
    'padding-left': ['grid'],
    'padding-right': ['grid'],
    'padding-top': ['grid'],
    right: ['grid'],
    'row-gap': ['grid'],
    'scroll-margin': ['grid'],
    'scroll-margin-bottom': ['grid'],
    'scroll-margin-left': ['grid'],
    'scroll-margin-right': ['grid'],
    'scroll-margin-top': ['grid'],
    'scroll-padding': ['grid'],
    'scroll-padding-bottom': ['grid'],
    'scroll-padding-left': ['grid'],
    'scroll-padding-right': ['grid'],
    'scroll-padding-top': ['grid'],
    'text-decoration-color': ['color'],
    'text-shadow': ['shadow'],
    top: ['grid'],
    transition: ['transition'],
    'transition-timing-function': ['ease'],
    width: ['grid', 'size'],
    'z-index': ['z'],
  },
});

export type DefaultConfig = typeof defaultConfig;
export default defaultConfig;