const Router = require('koa-router')
const mongo = require('mongodb')
const router = new Router()

router.get('/',async ctx=>{
	ctx.body=await ctx.mongo.collection('articles').find().toArray()
})

router.get('/:id',async ctx=>{
	ctx.body=await ctx.mongo.collection('articles').findOne({_id:mongo.ObjectId(ctx.params.id)})
})

router.post('/',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('articles').insert(data)
	ctx.status=201
})

router.delete('/:id',async ctx=>{
	await ctx.mongo.collection('articles').remove({_id:mongo.ObjectId(ctx.params.id)})
	ctx.status=204
})

router.put('/:id',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('articles').update({_id:mongo.ObjectId(ctx.params.id)},data)
	ctx.status=204
})

module.exports=router
