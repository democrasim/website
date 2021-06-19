export interface Member {
  id: string;
  name: string;
  phone: string;
  president: boolean;
  registered: boolean;
  joined: Date;
}

export interface Content {
  id: string;
  type: string;
  description?: string;
  reason?: string;
  member?: Member;
  date?: Date;
  location?: {
    x: number;
    y: number;
  };
}

export interface Vote {
  id: string;
  voter: Member;
  vote: VoteType;
  reason: string;
}

export type VoteType = "FOR" | "AGAINST" | "ABSTAIN";
export type Status = "PASSED" | "UNDER_VOTE" | "FAILED" | "VETOED" | "CANCELED";

export interface Law {
  id: string;
  number: Number;
  title: string;
  legislator: Member;
  content: Content[];
  votes: Vote[];
  status: Status;
  timestamp: Date;
  resolveTime: Date;
  constitutional: boolean;
  anonymousLegislator: boolean;
  fakeName: string;
  contentString: string;
  userVote?: Vote;
}

export interface LawPropostion {
  legislator: string;
  title: string;
  anonymous: boolean;
  fakeName: string;
  content: Content[];
}
