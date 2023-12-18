import './view.scss';

import React, { CSSProperties, ElementType, ReactElement, ReactNode } from 'react';

interface ViewProps {
    children: ReactNode;
    className?: string;
    id?: string;
    style?: CSSProperties;
    element?: ElementType;
}

export const View: React.FC<ViewProps> = ({ children, className, id, style, element: Section = 'div' }) => {
    return (
        <Section id={id} className={`view-wrapper ${className ?? ''}`} style={style}>
            {children}
        </Section>
    );
};
