class WelcomeController {

    constructor () {
        console.log('Welcome API Controller Constructor')
    }

    users(req, res){
        try {
            apiResponse(res, 200, 'User Listing Successfully', [])
        } catch (error) {
            apiResponse(res, 500, error)
        }
    }

}

export default new WelcomeController();