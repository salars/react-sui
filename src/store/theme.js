import {autorun,observable, computed } from 'mobx';
import * as defaultTheme from '../themes/default';
import * as customTheme from '../themes/custom';

const themeStore = observable({
    current:"default",
    themes:{
      default:defaultTheme,
        custom:customTheme
    },
    get theme(){
        return this.themes[this.current];
    }
});

export default themeStore;



