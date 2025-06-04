
import { createSystem, defaultConfig, defineConfig, } from '@chakra-ui/react';
import { breakpoints } from './config';
// import { Poppins } from 'next/font/google';

export { breakpoints }


// const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['italic', 'normal'] });

const config = defineConfig({
    theme: {
        breakpoints,
        tokens: {
            colors: {
                app: {
                    black: { value: '#000' },
                    white: { value: '#fff' },
                    brown: { value: '#cfb3a6' },
                    green: { value: '#23392C' },
                },

            },
            fonts: {
                // poppins: { value: poppins.style.fontFamily },

            }

        },
        recipes: {

        }
        // utilities: {},
    }
})

export default createSystem(defaultConfig, config)

