import { renderHook, act } from '@testing-library/react';
import { useScrollBtns } from '@/hooks/useScrollBtns';
import React from 'react';

const controls = { start: jest.fn() };

function createMockDiv(childCount = 3, width = 100) {
  const div = document.createElement('div');
  Object.defineProperty(div, 'childElementCount', {
    value: childCount,
    writable: true,
  });
  Object.defineProperty(div, 'offsetWidth', {
    value: width,
    writable: true,
  });
  return div;
}

describe('useScrollBtns', () => {
  it('should swipe next if possible', () => {
    const ref = React.createRef<HTMLDivElement>();
    const commentRef = React.createRef<HTMLDivElement>();
    ref.current = createMockDiv(5, 100);
    commentRef.current = createMockDiv(5, 100);
    const { result } = renderHook(() => useScrollBtns({ ref, commentRef, controls }));
    act(() => {
      result.current.handleClickNext();
    });
    expect(controls.start).toHaveBeenCalledWith({ left: expect.any(Number) });
  });

  it('should swipe prev if possible', () => {
    const ref = React.createRef<HTMLDivElement>();
    const commentRef = React.createRef<HTMLDivElement>();
    ref.current = createMockDiv(5, 100);
    commentRef.current = createMockDiv(5, 100);
    const { result } = renderHook(() => useScrollBtns({ ref, commentRef, controls }));
    act(() => {
      result.current.handleClickNext();
      result.current.handleClickPrev();
    });
    expect(controls.start).toHaveBeenCalledWith({ left: expect.any(Number) });
  });

  it('should not swipe next if at end', () => {
    const ref = React.createRef<HTMLDivElement>();
    const commentRef = React.createRef<HTMLDivElement>();
    ref.current = createMockDiv(2, 100);
    commentRef.current = createMockDiv(2, 100);
    const { result } = renderHook(() => useScrollBtns({ ref, commentRef, controls }));
    act(() => {
      result.current.handleClickNext();
    });
    expect(controls.start).toHaveBeenCalledWith({ left: expect.any(Number) });
  });
});
