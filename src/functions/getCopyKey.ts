import { COPY,CopyKeys, CopyType } from '@Customtypes/base';

export function _get<T extends CopyKeys>(key: T): CopyType[T] {
    return COPY[key];
}
