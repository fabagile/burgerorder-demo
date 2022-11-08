import { TwoDecimalsPipe } from './two-decimals.pipe';

describe('TwoDecimalsPipe', () => {
  it('create an instance', () => {
    const pipe = new TwoDecimalsPipe();
    expect(pipe).toBeTruthy();
  });
});
