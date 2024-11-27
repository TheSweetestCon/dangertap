import Svg, {Rect, Path, G} from 'react-native-svg'
import React from 'react'
import {View} from 'react-native'
import theme from '../../global/theme';

export default class SvgExample extends React.Component {
    render() {
      return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'    
        }}>
          <Svg width="100" height="100" viewBox='0 0 35.4102 24.3262'>
            <G>
                <Rect height="24.3262" opacity="0" width="35.4102" x="0" y="0"/>
                <Path d="M0 12.1582C0 16.0938 1.29883 19.7266 3.48633 22.6562C3.82812 23.1055 4.38477 23.1543 4.81445 22.8125C5.20508 22.4805 5.25391 21.9629 4.95117 21.5332C2.98828 18.9258 1.82617 15.6641 1.82617 12.1582C1.82617 8.63281 2.98828 5.39062 4.95117 2.76367C5.25391 2.35352 5.21484 1.83594 4.81445 1.49414C4.39453 1.15234 3.81836 1.21094 3.48633 1.66016C1.29883 4.58008 0 8.21289 0 12.1582ZM35.0488 12.1582C35.0488 8.21289 33.75 4.58008 31.5527 1.66016C31.2207 1.21094 30.6543 1.15234 30.2246 1.49414C29.834 1.83594 29.7949 2.35352 30.0977 2.76367C32.0605 5.39062 33.2129 8.63281 33.2129 12.1582C33.2129 15.6641 32.0605 18.9258 30.0977 21.5332C29.7949 21.9629 29.834 22.4805 30.2246 22.8125C30.6543 23.1543 31.2207 23.1055 31.5527 22.6562C33.75 19.7266 35.0488 16.0938 35.0488 12.1582Z" fill={theme.colors.title} fill-opacity="0.85"/>
                <Path d="M17.5195 24.3066C24.1699 24.3066 29.6777 18.7988 29.6777 12.1582C29.6777 5.50781 24.1699 0 17.5098 0C10.8594 0 5.37109 5.49805 5.37109 12.1582C5.37109 18.7988 10.8691 24.3066 17.5195 24.3066ZM17.5195 22.4902C11.7969 22.4902 7.19727 17.8906 7.19727 12.1582C7.19727 6.42578 11.7871 1.81641 17.5098 1.81641C23.2324 1.81641 27.8516 6.42578 27.8613 12.1582C27.8711 17.8809 23.252 22.4902 17.5195 22.4902Z" fill={theme.colors.title} fill-opacity="0.85"/>
                <Path d="M17.5 14.4238C18.0273 14.4238 18.3398 14.1113 18.3496 13.5352L18.5059 6.82617C18.5156 6.25977 18.0762 5.83984 17.4902 5.83984C16.8945 5.83984 16.4844 6.25 16.4941 6.81641L16.6406 13.5352C16.6504 14.1016 16.9629 14.4238 17.5 14.4238ZM17.5 18.3984C18.1738 18.3984 18.7402 17.8613 18.7402 17.1973C18.7402 16.5234 18.1836 15.9961 17.5 15.9961C16.8262 15.9961 16.2695 16.5332 16.2695 17.1973C16.2695 17.8516 16.8359 18.3984 17.5 18.3984Z" fill={theme.colors.title} fill-opacity="0.85"/>
            </G>
          </Svg>
        </View>
      );
    }
  }


 