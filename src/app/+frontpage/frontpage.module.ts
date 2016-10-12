import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { FrontpageComponent } from "./frontpage.component";
import { FrontpageRoutes } from "./frontpage.routing";

import { EventsListComponent, TweetsListComponent } from "./components";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(FrontpageRoutes)
    ],
    declarations: [
        FrontpageComponent,
        EventsListComponent,
        TweetsListComponent
    ]
})

export class FrontpageModule {}