import { NgModule, ModuleWithProviders } from "@angular/core";

import { MeetupService } from "./meetup.service";
import { UserService } from "./user.service";

const SERVICES = [
	MeetupService,
    UserService
]

@NgModule({
    providers: [
        ...SERVICES
    ]
})
export class ServicesModule {}
