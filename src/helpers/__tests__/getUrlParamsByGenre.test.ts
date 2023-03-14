import { getUrlParamsFromTabs } from 'helpers';
import { expect, it, describe } from 'vitest';

describe('getUrlParamsFromTabs', () => {
  it('return romance', () => {
    const result = getUrlParamsFromTabs(6);
    expect(result.filter).eq('romance');
  });

  it('return crime', () => {
    const result = getUrlParamsFromTabs(4);
    expect(result.filter).eq('crime');
  });

  it('return empty', () => {
    const result = getUrlParamsFromTabs(1);
    expect(result).eq('');
  });

  it('return drama', () => {
    const result = getUrlParamsFromTabs(5);
    expect(result.filter).eq('drama');
  });

  it('return adventure', () => {
    const result = getUrlParamsFromTabs(3);
    expect(result.filter).eq('adventure');
  });
});
