import { NgModule, ModuleWithProviders } from "@angular/core";

import { UserService } from "./user.service";

const SERVICES = [
        UserService
]

@NgModule({
    providers: [
        ...SERVICES
    ]
})
export class ServicesModule {}
