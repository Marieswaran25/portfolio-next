import * as content from '@utils/copykey.json';

export type CopyType = typeof content;
export type CopyKeys = keyof typeof content;
export const COPY = Object.freeze({ ...content });
