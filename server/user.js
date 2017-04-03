const Router = require('koa-router')
const mongo = require('mongodb')
const router = new Router()

//获取用户信息
router.get('/:id',async ctx=>{
	ctx.body=await ctx.mongo.collection('user').findOne({_id:mongo.ObjectId(ctx.params.id)})
})

//注册
router.post('/register',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('user').insert(data)
	ctx.status=201
})

router.post('/login',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('user').insert(data)
	ctx.status=201
})


router.put('/:id',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('user').update({_id:mongo.ObjectId(ctx.params.id)},data)
	ctx.status=204
})

module.exports=router
