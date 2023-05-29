import { atom } from 'jotai';

const initalState = 'Iizuka';
type Value = string;

export const searchedLocation = atom<Value>(initalState);
