import {
    Component,
    Input,
    EventEmitter
} from 'angular2/core';
import {Observable} from "rxjs/Observable";

let spinnerTemplate = require('./loading-spinner.html');

@Component({
    selector: 'loading-spinner',
    template:  spinnerTemplate
})

export class LoadingSpinner {
    isLoading: boolean = true;
    @Input() showAsync: Observable<boolean>;

    ngOnInit () {
        this.showAsync.subscribe(() => {
            this.isLoading = false;
            console.log('Show async success');
        });
    }
}
