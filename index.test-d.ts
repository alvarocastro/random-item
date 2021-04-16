import {expectType} from 'tsd';
import randomItem from './index.js';

expectType<string>(randomItem(['🐴', '🦄', '🌈']));
expectType<string | number>(randomItem(['🐴', '🦄', '🌈', 1]));

expectType<string[]>(randomItem.multiple(['🐴', '🦄', '🌈'], 2));
expectType<Array<string | number>>(randomItem.multiple(['🐴', '🦄', '🌈', 1], 2));
