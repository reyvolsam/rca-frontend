import { RcaModule } from './rca.module';

describe('RcaModule', () => {
  let rcaModule: RcaModule;

  beforeEach(() => {
    rcaModule = new RcaModule();
  });

  it('should create an instance', () => {
    expect(rcaModule).toBeTruthy();
  });
});
