import {autorun,observable, computed } from 'mobx';
import * as defaultTheme from '../themes/default';
import * as customTheme from '../themes/custom';

const themeStore = observable({
    current:"default",
    themes:{
      default:defaultTheme,
        custom:customTheme,
        personalize:{}
    },
    get theme(){
        return this.themes[this.current];
    },
    applyTheme(theme){
        const PERSONAL = 'personalize';
        this.themes[PERSONAL] = theme;
        this.current = PERSONAL;
    }
});

export default themeStore;



