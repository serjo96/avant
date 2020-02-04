import Vue from 'vue'
import {State} from "nuxt-class-component";
import { Mutation, Getter } from 'vuex-class';
import { Watch, Component } from 'vue-property-decorator'


@Component({

})
class SnackBar extends Vue {
    show = false;

    @Mutation clearSnackBar;
    @State(state => state.Global.snackBar) snackBar;
    @Getter loadingStatus;

    @Watch('show')
    onClearSnackBar(val){
       if(!val){
        this.clearSnackBar();
       }
    };

    @Watch('snackBar', {deep: true})
    showSnackBar(val){
        if(val.message){
            this.show = true;
        }
    }

}
export default SnackBar;
