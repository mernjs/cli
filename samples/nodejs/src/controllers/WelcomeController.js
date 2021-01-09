class WelcomeController {

    constructor () {
       console.log('Welcome Web Controller Constructor')
    }

    home(req, res){
        view(res, 'pages/welcome', 'Welcome')
    }

}

export default new WelcomeController();