import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = mongoose.Schema({
    fullName:{type:String,required:[true,"name is required"]},
    email:{type:String,required:[true,"email is required"]},
    role:{type:String,required:true,enum:["client","admin"],default:"client"},
    password:{type:String,required:[true,"password is required"]}
},
{timestamps:true}
)


UserSchema.methods.passwordMatched = async function(passwordToBeVerified){
    console.log(passwordToBeVerified, )
    return await bcrypt.compare(passwordToBeVerified,this.password)
}


UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }

    const salt =  await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(this.password,salt)
    console.log("hashed",hashed)
     this.password = hashed
})



const User = mongoose.model("User",UserSchema)

export default User;