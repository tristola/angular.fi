export interface IMeetupVenue {
    "id": number;
    "name": string;
    "lat": number;
    "lon": number;
    "repinned": boolean;
    "address_1": string;
    "city": string;
    "country": string;
    "localized_country_name": string;
}

export interface IMeetupGroup {
    "created": Date;
    "name": string;
    "id": number;
    "join_mode": string;
    "lat": number;
    "lon": number;
    "urlname": string;
    "who": string;
}

export interface IMeetupEvent {
    "created": Date;
    "duration": number;
    "id": number;
    "name": string;
    "rsvp_limit": number;
    "status": string;
    "time": Date;
    "updated": Date;
    "utc_offset": number;
    "waitlist_count": number;
    "yes_rsvp_count": number;
    "venue": IMeetupVenue;
    "group": IMeetupGroup;
    "link": string;
    "description": string;
    "how_to_find_us": string;
    "visibility": string;
}
