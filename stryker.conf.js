/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  jest: {
    projectType: 'custom',
    configFile: 'jest.config.ts',
  },
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  tsconfigFile: 'tsconfig.json',
  thresholds: { high: 95, low: 80, break: 90 },
};
