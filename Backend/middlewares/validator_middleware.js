const validator = (schema) => async (req,res,next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 400;
        const errors = {}

        err.errors.forEach((e) => {
            errors[e.path[0]] = e.message;
        });
        
        const error = {
            status,
            message:"Validation failed!",
            errors,
        }
        console.log("validation error:", error);
        res.status(status).json(error);
    }
    
}
export {validator}