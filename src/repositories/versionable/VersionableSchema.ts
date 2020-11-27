import * as mongoose from 'mongoose';

export class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collection: any) {
        const versionable = Object.assign({
          createdAt: {
            default: Date.now,
            required: true,
            type: Date,
          },
          deletedAt: {
            required: false,
            default: null,
            type: Date,
          },
          originalId: {
            required: false,
            type: String,
          },
          updatedAt: {
            required: false,
            default: null,
            type: String,
          },
          updatedBy: {
            required: false,
            default: null,
            type: String,
          },
          deletedBy: {
            required: false,
            default: null,
            type: String,
          },
          createdBy: {
            required: false,
            default: null,
            type: String,
          },
        }, options);
        super(versionable, collection);
      }
    }