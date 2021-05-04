
    export interface Member {
        id: number;
        name: string;
        phone: string;
        president: boolean;
        registered: boolean;
        joined: Date;
    }

    export interface Content {
        id: number;
        type: string;
        description: string;
    }

    export interface Voter {
        id: number;
        name: string;
        phone: string;
        president: boolean;
        registered: boolean;
        joined: Date;
    }

    export interface Vote {
        id: number;
        voter: Voter;
        vote: VoteType  ;
        reason: string;
    }

    export type VoteType = "FOR" | "AGAINST" | "ABSTAIN";
    export type Status = "PASSED" | "UNDER_VOTE" | "FAILED" | "VETOED" | "CANCELED";

    export interface Law {
        id: number;
        legislator: Member;
        content: Content;
        votes: Vote[];
        status: Status;
        timestamp: Date;
        constitutional: boolean;
        anonymousLegislator: boolean;
        fakeName: string;
        contentString: string;
    }

