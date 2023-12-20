import React from 'react';

export function useToggle(initialstate: null | number) {
    const [isOpen, SetOpen] = React.useState<null | number>(initialstate);
    const dropdownref = React.useRef<HTMLDivElement>(null);
    const toggle = (index: number) => {
        if (isOpen === index) {
            return SetOpen(null);
        }
        SetOpen(index);
    };

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (dropdownref.current && !dropdownref.current.contains(e.target as HTMLDivElement)) {
                SetOpen(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });

    return { isOpen, toggle, dropdownref };
}
