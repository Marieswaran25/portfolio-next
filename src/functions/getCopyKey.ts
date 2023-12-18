import { CopyKeys, CopyType, COPY } from '@Customtypes/base';

export function _get<T extends CopyKeys>(key: T): CopyType[T] {
    return COPY[key];
}
