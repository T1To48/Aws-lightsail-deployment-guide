import { logger } from "../helpers/logger.js"

export const logRequests=(req,res,next)=>{
    const{content}=req.body
    const {method}=req.headers
    
    logger.info({
        method:method,
        content:content

    })
    
    next()
}