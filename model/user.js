/**
 * Created by Eloit on 2017/1/17.
 */
var mongoose = require("mongoose");	//	顶会议用户组件

var Schema = mongoose.Schema;	//	创建模型

var userSchema = new Schema({
    username: String,
    password: String
});	//	定义了一个新的模型，但是此模式还未和数据库有关联

exports.chart = mongoose.model('chartuser', userSchema); //	与数据库关联