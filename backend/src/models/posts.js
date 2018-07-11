import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  picture: {
    type: Schema.Types.ObjectId,
    ref: "Picture",
    required: true
  },
  likers: [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }]
},{ timestamps: true });

export default mongoose.model('Post', postSchema);