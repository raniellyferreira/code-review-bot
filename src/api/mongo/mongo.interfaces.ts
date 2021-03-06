// eslint-disable-next-line no-unused-vars
import { Document } from 'mongoose';

export interface IMergeRequestModel extends Document {
    rawMergeRequest: string;
    rawSlackMessage: string;
    url: string;
    repository: string;
    id: string;
    iid: string;
    created: IMergeRequestModelActionLog;
    added: IMergeRequestModelActionLog;
    merged?: IMergeRequestModelActionLog;
    closed?: IMergeRequestModelActionLog;
    slack: IMergeRequestModelSlack;
    done?: boolean;
    analytics?: IMergeRequestModelAnalytics;
}

export interface IChannelMergeRequests {
    _id: string;
    mrs?: IMergeRequestModel[];
}

export interface IMergeRequestModelActionLog {
    at: Date;
    by: string;
}

interface IMergeRequestModelAnalytics {
    upvoters: string[];
    reviewers: string[];
}

interface IMergeRequestModelSlack {
    messageId: string;
    reactions?: string[];
    channel: IMergeRequestModelSlackChannel;
}

interface IMergeRequestModelSlackChannel {
    id: string;
    name: string;
}
