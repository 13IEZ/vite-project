import { getUrlParamsByFilter } from 'helpers';
import { expect, it, describe } from 'vitest';

describe('getUrlParamsByFilter', () => {
  it('return release_date', () => {
    const result = getUrlParamsByFilter(2);
    expect(result.sortBy).eq('release_date');
  });

  it('return title', () => {
    const result = getUrlParamsByFilter(5);
    expect(result.sortBy).eq('title');
  });

  it('return empty', () => {
    const result = getUrlParamsByFilter(1);
    expect(result).eq('');
  });
});
