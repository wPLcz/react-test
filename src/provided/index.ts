import { useCallback, useEffect, useRef, useState } from "react";
const [uCb, uE, uR, uS, t, f, u] = [
  useCallback,
  useEffect,
  useRef,
  useState,
  Boolean(1),
  Boolean(),
  ,
];
type AAF = (...args: any[]) => Promise<any>;
type TRt<Data = any> = (
  | { isLoading: true; data: undefined; isError: false }
  | { isLoading: false; data: Data; isError: false }
  | { isLoading: false; data: undefined; isError: true }
) & { reCall: () => any };
/**
 * @description  handle a promise states
 * @param p async function
 * @returns ```{ isLoading,  isError, data, reCall }```
 * @example
 * ```
 * const { isLoading,  isError, data, reCall } = usePromise(myPromise)
 * // or
 * const { isLoading,  isError, data, reCall } = usePromise(() => myPromise())
 * ```
 */
export function usePromise<
  TFunc extends AAF,
  TData = Awaited<ReturnType<TFunc>>
>(p: TFunc) {
  const rP = uR(p);
  rP.current = p;
  const [[isL, sL], [isE, sE], [d, sD]] = [
    uS(t),
    uS(f),
    uS<TData | undefined>(),
  ];
  const rFch = uCb(async () => {
    try {
      sE(f), sD(u), sL(t), sD(await rP.current());
    } catch (e) {
      sE(t);
    } finally {
      sL(f);
    }
  }, []);
  uE(() => void rFch(), [rFch]);
  return {
    isLoading: isL,
    isError: isE,
    data: d,
    reCall: rFch,
  } as unknown as TRt<TData>;
}
