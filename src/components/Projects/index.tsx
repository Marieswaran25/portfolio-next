import './projects.scss';

import { View } from '@library/View';
import { ProjectFieldDataType, projectFieldData } from '@utils/project';
import * as React from 'react';
import { Accordion } from '@components/Accordion';
import colors from '@theme/colors.module.scss';
import Typography from '@library/Typography';
import { _get } from '@function/getCopyKey';

export const Projects: React.FunctionComponent<{ data: ProjectFieldDataType[] }> = ({ data }) => {
    return (
        <View className="projects">
            <Typography type={'h2'} weight={'semibold'} text={_get('project.header.text')} color={colors.Black16} as={'h2'} />
            <div>
                <Accordion data={data} />
            </div>
        </View>
    );
};
