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
	await ctx.mongo.collection('articles').insert()
})

router.delete('/',async ctx=>{
	
})

router.post('/:id',async ctx=>{
	
})

module.exports=router