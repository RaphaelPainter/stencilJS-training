import { Config } from '@stencil/core';

import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'recipe-stencil',
  extras: {
    enableImportInjection: true,
  },
  outputTargets: [
    // By default, the generated proxy components will
    // leverage the output from the `dist` target, so we
    // need to explicitly define that output alongside the
    // Angular target
    {
      type: 'dist',
    },
    angularOutputTarget({
      componentCorePackage: 'recipe-stencil',
      outputType: 'component',
      directivesProxyFile: './angular-workspace/stencil-generated/components.ts',
      directivesArrayFile: './angular-workspace/stencil-generated/index.ts',
    }),
  ],
};
