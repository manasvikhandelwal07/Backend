// using promises
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}


// asyncHandler is a higher order function
// these are the functions which can accept the functions as an parameter
// and can return also
// tret function as an variable



// is se same function ko ek or functio m pass krna chaha raha hu

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// rapper fucntion which will make our life easy
// 2 ways usinng try catch and promises

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }