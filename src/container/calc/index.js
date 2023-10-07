class Calc {
    static #value = '';
        static #isDot = false;
    static add(newValue) {
        if (isNaN(this.#value[this.#value.length -1])) {
        if (
            Number(this.#value[this.#value.length-1]) === 0 && this.#isDot === false ) {
                return null;
            }
        }

        this.#value = this.#value.concat(newValue);
        this.#output();
}
   static #output = () => {
    this.#save();
    window.output.innerHTML = this.#value;

   }
    static dot() {
        if (this.#isDot) {
            return null;
        }
        if (isNaN(this.#value[this.#value.length - 1])) {
            return null;
        }
        this.#value = this.#value.concat('.');
        this.#output();
        this.#isDot = true;
    }
   static op(opValue) {
    if(isNaN(this.#value[this.#value.length - 1])) {
        return null;
    }
         this.#value = this.#value.concat(opValue);
         this.#output();
         this.#isDot = false;
   }
   static clear() {
         this.#value = '';
         this.#output();
            this.#isDot = false;
    }
    static result = () => {
    
        this.#value = String(eval(this.#value));
        this.#output();
    }
    static #save = () => {
        window.localStorage.setItem('calc', this.#value);
    }

    static #load = () => {
        this.#value = window.localStorage.getItem('calc') || '';        
    }

    static init = () => {
        this.#load
        console.log('calc is init');
        this.#output();
    }

}


window.calc = Calc;