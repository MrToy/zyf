const Router = require('koa-router')
const router = new Router()

router.get('/:id',async ctx=>{
	ctx.body=await ctx.mongo.collection('config').findOne({_id:ctx.params.id})||{}
})

router.put('/:name',async ctx=>{
	await ctx.mongo.collection('config').update({_id:ctx.params.id},ctx.request.body,{upsert:true})
	ctx.status=201
})

module.exports=router
