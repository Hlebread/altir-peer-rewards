module.exports = {
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  '**/*.(ts|tsx|js)': filenames => [
    `yarn lint:fix ${filenames.join(' ')}`,
    `yarn format ${filenames.join(' ')}`,
  ],

  '**/*.(md|json)': filenames => `yarn format ${filenames.join(' ')}`,
};
