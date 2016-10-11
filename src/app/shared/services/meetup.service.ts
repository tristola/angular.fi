import { Injectable } from "@angular/core";
import { Jsonp, URLSearchParams, Response } from "@angular/http";
import { Observable } from "rxjs";

import { IMeetupEvent } from "../../../models";

declare var process;

@Injectable()
export class MeetupService {
    private url: string = "https://api.meetup.com/";
    private group: string = process.env.MEETUP_GROUP || "angular-finland";
    private apiKey: string = process.env.MEETUP_API_KEY;

    constructor(private jsonp: Jsonp) {}

    events(): Observable<IMeetupEvent[]> {
        var params = new URLSearchParams();
        params.set("key", this.apiKey);
        params.set("format", "json");
        params.set("callback", "JSONP_CALLBACK");
        return this.jsonp.get(this.url + this.group + "/events", { search: params })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(response: Response): IMeetupEvent[] {
        let body = response.json();
        return body.data || [];
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.of([]);
    }
}
