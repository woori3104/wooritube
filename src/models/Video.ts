import * as mongoose from "mongoose";

export interface IVideo extends Document {
    title: string, 
    description: string, 
    createdAt: Date,
    hashtags: [{type: string}],
    meta: {
        views: number, 
        rating: number,
    },
}
// 모델 정의 - 실제 사용할 데이터의 형태를 정의
const videoSchema = new mongoose.Schema ({
    title: String, 
    description: String,
    createdAt: Date,
    hashtags: [String],
    meta: {
        views: Number, 
        rating: Number,
    },
});

const Video = mongoose.model<IVideo>('Videos', videoSchema);

export default Video;
