const { model, Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = model("User", UserSchema);
