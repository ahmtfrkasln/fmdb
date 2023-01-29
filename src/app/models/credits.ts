export interface Cast{
    known_for_department: string; 
    name: string;
    character: string;
    order: number;
    profile_path: string;
}

export interface Crew{
    id: string;
    name: string;
    department: string;
    job: string;
}

export class Credits {
    constructor(public cast: Cast[], public crew: Crew[]) {
        this.cast = cast;
        this.crew = crew;
    }
}