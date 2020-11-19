import * as mongoose from 'mongoose';

export class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const versionOptions = Object.assign({
            deletedAt: {
                required: false,
                type: Date,
            },
            originalId: {
                required: true,
                type: String,
            },
            createdAt: {
                default: Date.now,
                type: Date,
            }
        }, options);
        super(versionOptions, collections);
    }
}