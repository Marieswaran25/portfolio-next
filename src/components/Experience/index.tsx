import { View } from '@library/View';
import { Stepper } from '@components/Stepper';
import Typography from '@library/Typography';
import { ExperienceProps } from '@utils/experience';
import { _get } from '@function/getCopyKey';

import colors from '@theme/colors.module.scss';
import * as React from 'react';

export const Experience: React.FunctionComponent<ExperienceProps> = ({ data, title }) => {
    return (
        <View className="experience">
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
