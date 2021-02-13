// Import the mount() method from the test utils
// and the component you want to test
// import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/counter';
import Vue from 'vue';

// wrapper.vmを介して実際のVueインスタンスにアクセスできます。
// const { vm } = wrapper;
// console.log(wrapper);

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = shallowMount(Counter);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true);
  });

  it('button should increment the count', () => {
    expect(wrapper.vm.count).toBe(0);
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.count).toBe(1);
  });

  //   // エラーは捕捉されません
  //   it('will time out', (done) => {
  //     Vue.nextTick(() => {
  //       expect(true).toBe(false);
  //       done();
  //     });
  //   });

  //   // 以下の3つのテストは期待通りに動作します。
  //   it('will catch the error using done', (done) => {
  //     Vue.config.errorHandler = done;
  //     Vue.nextTick(() => {
  //       expect(true).toBe(false);
  //       done();
  //     });
  //   });

  //   it('will catch the error using a promise', () => {
  //     return Vue.nextTick().then(function () {
  //       expect(true).toBe(false);
  //     });
  //   });

  //   it('will catch the error using async/await', async () => {
  //     await Vue.nextTick();
  //     expect(true).toBe(false);
  //   });
});
