import './projects.scss';
import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { Accordion } from '@components/Accordion';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { projectFieldData,ProjectFieldDataType } from '@utils/project';

export const Projects: React.FunctionComponent<{ data: ProjectFieldDataType[] }> = ({ data }) => {
    return (
        <View className="projects" id='projects'>
            <Typography type={'h2'} weight={'semibold'} text={_get('project.header.text')} color={colors.Black16} as={'h2'} />
            <div>
                <Accordion data={data} />
            </div>
        </View>
    );
};
