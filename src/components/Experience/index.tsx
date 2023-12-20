import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { Stepper } from '@components/Stepper';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { ExperienceProps } from '@utils/experience';

export const Experience: React.FunctionComponent<ExperienceProps> = ({ data, title }) => {
    return (
        <View className="experience" id="experience">
            <Typography type={'h2'} weight={'semibold'} text={_get(title)} color={colors.Black16} id="experience-header" />
            <div className="experience-list" style={{ marginTop: '32px' }}>
                {data.map((exp, index) => {
                    return (
                        <Stepper
                            organizationLogo={exp.organizationLogo}
                            role={exp.role}
                            duration={exp.duration}
                            organizationName={exp.organizationName}
                            organizationLink={exp.organizationLink}
                            key={index}
                        />
                    );
                })}
            </div>
        </View>
    );
};
