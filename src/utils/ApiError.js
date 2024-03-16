class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        Error = [],
        stack=""
    )
    {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.Error = Error
        this.message = message
        this.success=false
        
        if (stack) {
            this.stack=stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}