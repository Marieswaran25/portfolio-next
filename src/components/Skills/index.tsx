import './skills.scss';
import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { Technology } from '@utils/skills';

import { SkillCard } from './Card';

export const Skills: React.FunctionComponent<{ skillset: Technology[] }> = ({ skillset }) => {
    return (
        <View className="skill-set" id="skills">
            <Typography type={'h2'} weight={'semibold'} text={_get('Skills.header.text')} color={colors.Black16} as={'h2'} />
            <div className="skills" style={{ marginTop: '32px' }}>
                {skillset.map((tech, index) => {
                    return (
                        <div className="tech-field" key={index}>
                            <Typography type={'h3'} weight={'semibold'} text={_get(tech.field)} color={colors.Black16} as={'h3'} />
                            <div className="skillset">
                                {tech.skill.map((skill, skillindex) => {
                                    return <SkillCard {...skill} key={skillindex} />;
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </View>
    );
};
