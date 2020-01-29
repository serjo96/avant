import Vue from 'vue'
import { Mutation, Getter } from 'vuex-class';
import { Watch, Component } from 'vue-property-decorator'


@Component({

})
class SnackBar extends Vue {
    show = false;
    timeout = 4000;

    @Mutation clearSnackBar;
    @Getter snackBar;
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
