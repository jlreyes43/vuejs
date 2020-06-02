export const mixins = {
    data(){
        return{
            text3: '',
            text4: ''
        }
    },
    computed:{
        reversed(){
            let valueArray = this.text3.split('');
            valueArray.reverse();
            return valueArray.join("");
        },
        counted(){
            //let valueArray = value.split('');
            //let arrayLength = valueArray.length();
            return `${this.text4} (${this.text4.length})`;
        }
    }
}