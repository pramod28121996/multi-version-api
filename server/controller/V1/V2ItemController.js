
class V1ItemsController {
    async getAllItems(ctx) {
        try {
            const response = await workflowService.updateWorkflow(ctx, dbConfig)
            ctx.body = response
        } catch (error) {
            console.log(`error while upserting workflow = `, error)
            ctx.body = error
        }
    }
}

module.exports = new V1ItemsController()