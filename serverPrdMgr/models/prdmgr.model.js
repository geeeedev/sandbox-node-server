const mongoose = require('mongoose');
const errMsgRequired = `{PATH} is required.`;
const errMsgMinLen = `{PATH} must be at least {MINLENGTH} characters.`;

const PrdMgrSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true, errMsgRequired],
            minlength: [3, errMsgMinLen],
        },
        price:{
            type: Number,
            required: [true, errMsgRequired],
            min: [1, "{PATH} mst be at least {MIN} dollars."],
        },
        description:{
            type: String,
            required: [true, errMsgRequired],
            minlength: [10, errMsgMinLen],
        },
    },
    {timestamp: true}
);

const PrdMgr = mongoose.model('ProgMgr', PrdMgrSchema);
module.exports = PrdMgr;