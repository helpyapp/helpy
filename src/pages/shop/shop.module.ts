import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ShopPage} from './shop';

@NgModule({
    declarations: [
        ShopPage,
    ],
    imports     : [
        IonicPageModule.forChild(ShopPage),
    ],
    exports     : [
        ShopPage
    ]
})
export class ShopPageModule {
}
