import {
    Component,
    Input,
    EventEmitter
} from '@angular/core';
import {Observable} from "rxjs/Observable";

let spinnerTemplate = require('./loadingSpinner.html');

@Component({
    selector: 'loadingSpinner',
    template: spinnerTemplate
})

export class LoadingSpinnerDirective {
    isLoading: boolean = true;
    @Input() showAsync: Observable<any>;

    ngOnInit () {
        this.showAsync.subscribe(() => {
            this.isLoading = false;
            console.log('Show async success');
        });
    }
}