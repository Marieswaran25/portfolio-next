'use client';
import './accordion.scss';

import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import ChevronRight from '@assets/images/down.svg';
import { ProjectFieldDataType } from '@utils/project';
import colors from '@theme/colors.module.scss';
import * as React from 'react';
import Image from 'next/image';

export const Accordion: React.FunctionComponent<{ data: ProjectFieldDataType[] }> = ({ data }) => {
    const [isOpen, SetOpen] = React.useState<null | number>(null);
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

    return (
        <div className="accordion" ref={dropdownref}>
            {Array.isArray(data) &&
                data.map((item, index) => {
                    const isProjectHeaderOpens = item.projectLogo && isOpen === index ? true : false;
                    return (
                        <div className={`item ${isOpen === index ? 'hide' : ''}`} key={index}>
                            <div className="title" onClick={() => toggle(index)}>
                                {item.projectLogo && (
                                    <a className="project-logo" href={item.projectLink} target="_blank">
                                        {<Image src={item.projectLogo} alt="project-logo" />}
                                    </a>
                                )}
                                <div className="project-info">
                                    <Typography
                                        type={'h4'}
                                        weight="semibold"
                                        text={_get(item.header)}
                                        color={isOpen === index ? colors.LightCeruleanBlue : ''}
                                        as={'h4'}
                                        className={`header ${item.projectLogo ? 'main' : ''}`}
                                    />
                                    {item.employer && <Typography type={'h4'} weight="semibold" text={_get(item.employer)} color={colors.GreenishGray} as={'h4'} />}
                                </div>
                                <ChevronRight className={`arrow ${isOpen === index ? 'open' : ''}`} style={{ display: isProjectHeaderOpens ? 'hidden' : 'visible' }} />
                            </div>
                            <div className={`content ${isOpen === index ? 'show' : ''}`}>
                                {typeof item.description === 'string' ? (
                                    <Typography type="p3" weight="light" text={_get(item.description)} color={colors.Black16} style={{ marginTop: '10px' }} />
                                ) : (
                                    Array.isArray(item.description) && <Accordion data={item.description} key={100 + index} />
                                )}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
