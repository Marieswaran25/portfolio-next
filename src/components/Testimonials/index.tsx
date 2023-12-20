import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import { TestimonialProps } from '@utils/testimonials';

import { TestimonialCard } from './TestimonialCard';

export const Testimonials: React.FunctionComponent<{ data: TestimonialProps }> = ({ data }) => {
    return (
        <View className="testimonials" id="testimonials">
            <Typography type={'h2'} weight={'semibold'} text={_get('testimonials.header')} color={colors.Black16} as={'h2'} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: '32px' }}>
                {Object.values(data).map((testimonial, index) => {
                    return <TestimonialCard {...testimonial} key={index} />;
                })}
            </div>
        </View>
    );
};
