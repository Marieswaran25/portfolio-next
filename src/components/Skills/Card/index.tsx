import './card.scss';
import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { CopyKeys } from '@Customtypes/base';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';

interface SkillProps {
    logo: JSX.Element;
    name: CopyKeys;
}

export const SkillCard: React.FunctionComponent<SkillProps> = ({ logo, name }) => {
    return (
        <div className="skill-card">
            {logo}
            {name && <Typography type={'p3'} weight={'light'} text={_get(name)} color={colors.Black16} as="p" />}
        </div>
    );
};
