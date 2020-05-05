import Mutations from '../../../../examples/todomvc/store/mutations.js';

describe('Mutations', () => {
  it('get state', () => {
    const mutations = new Mutations({
      state: {
        value: true,
      },
    });
    expect(mutations.state).toEqual({ value: true });
  });
});
