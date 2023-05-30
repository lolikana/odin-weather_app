import { atom } from 'jotai';

const initalState = true;
type Value = boolean;

export const isCelcisuMetric = atom<Value>(initalState);
