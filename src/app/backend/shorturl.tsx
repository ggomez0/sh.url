import mongoose, { Document, Schema } from 'mongoose';
import shortid from 'shortid';

interface ShortUrl {
    full: string;
    short: string;
}

const shortUrlSchema = new Schema<ShortUrl & Document>({
    full: {
        type: String,
        required: true,
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate,
    },
});

const ShortUrlModel = mongoose.model<ShortUrl & Document>('ShortUrl', shortUrlSchema);

export default ShortUrlModel;
