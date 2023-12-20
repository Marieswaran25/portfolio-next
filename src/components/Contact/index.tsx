import './contact.scss';
import colors from '@theme/colors.module.scss';

import * as React from 'react';
import { Social } from '@components/Social';
import { _get } from '@function/getCopyKey';
import Typography from '@library/Typography';
import { View } from '@library/View';
import Link from 'next/link';

export const Contact: React.FunctionComponent = () => {
    return (
      <>
        <View className="contact" element={'footer'} id='contact'>
            <Typography type={'h2'} weight={'semibold'} text={_get('footer.text')} color={colors.Black16} />
        </View>
         <div className="contact-me">
         <div className="email">
             <Typography type={'p2'} weight={'light'} text={_get('footer.email')} color={colors.Black16} as="p" />
             <Link href={'mailto:marieswaranbmw@gmail.com'}>
                 <Typography type={'p3'} weight={'semibold'} text={'marieswaranbmw@gmail.com'} color={colors.Black16} as="p" />
             </Link>
         </div>

         <div className="phone">
             <Typography type={'p2'} weight={'light'} text={_get('footer.phone')} color={colors.Black16} as="p" />
             <Link href={'tel:+916383961454'}>
                 <Typography type={'p3'} weight={'semibold'} text={'+916383961454'} color={colors.Black16} as="p" />
             </Link>
         </div>

         <div className="social">
             <Typography type={'h3'} weight={'semibold'} text={_get('footer.follow')} color={colors.Black16} />
             <Social />
         </div>
     </div>
      </>
    );
};
