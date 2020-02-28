class AuthController {
    constructor(service) {
    }

    test(req, res, next) {
        res.json({ "message": "All is fine" })
    }
}

export default AuthController;